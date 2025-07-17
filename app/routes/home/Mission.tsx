import { motion, useScroll, useTransform } from "motion/react";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { HeaderMotion } from "~/components/Header";
import { useRef } from "react";
import VideoPlayer from "~/components/VideoPlayer";
import Container from "~/components/Container";

export default function Mission() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="w-full bg-fresh-leaf-20">
      <Container className="space-y-10">
        <HeaderMotion
          id="#mission"
          icon={<GiEarthAsiaOceania />}
          title={"Our Mission"}
          description={`We are committed to creating a healthier planet through large-scale
            tree plantation drives, environmental education, and community-led
            green initiatives. Every tree planted is a promise for a better
            tomorrow.`}
          align="c"
        />

        <motion.div ref={ref} style={{ opacity: opacityProgress }}>
          <VideoPlayer
            data={{
              title: "IAC Patrons Foundation - Intro Video",
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            }}
            className="!rounded-full"
          />
        </motion.div>
      </Container>
    </div>
  );
}
