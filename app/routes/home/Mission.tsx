import { GiEarthAsiaOceania } from "react-icons/gi";
import VideoPlayer from "~/components/VideoPlayer";
import Container from "~/components/Container";
import Header from "~/components/Header";

export default function Mission() {
  return (
    <div className="w-full bg-fresh-leaf-20">
      <Container className="space-y-10">
        <Header
          id="#mission"
          icon={<GiEarthAsiaOceania />}
          title={"Our Mission"}
          description={`We are committed to creating a healthier planet through large-scale
            tree plantation drives, environmental education, and community-led
            green initiatives. Every tree planted is a promise for a better
            tomorrow.`}
          align="c"
        />

        <VideoPlayer
          data={{
            title: "IAC Patrons Foundation - Intro Video",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          }}
          className="!rounded-full"
        />
      </Container>
    </div>
  );
}
