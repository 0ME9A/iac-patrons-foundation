import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import LinkBtn from "~/components/LinkBtn";

export default function GetInvolved() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-green-900">
      <motion.section
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="!max-w-screen-lg mx-auto py-16 sm:py-24 px-2 sm:px-4"
      >
        <div className="bg-fresh-leaf rounded-3xl space-y-6 p-8 sm:p-10">
          <header className={`flex flex-col gap-4 md:gap-6`}>
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-green-900 dark:text-white">
                Get Involved
              </h2>
            </div>

            <p className="text-base sm:text-lg text-charcoal dark:text-misty-white-80 leading-relaxed max-w-prose">
              You can volunteer, adopt a tree, or help organize a plantation
              drive in your area. Whether you're an individual, school, or
              business — every contribution counts.
            </p>
          </header>

          <div className="flex flex-wrap gap-2 sm:gap-4">
            <LinkBtn
              to="/volunteer"
              className="bg-fresh-leaf hover:bg-fresh-leaf-80"
            >
              Become a volunteer
            </LinkBtn>
            <LinkBtn to="/adopt" className="bg-green-900 hover:bg-fresh-leaf">
              Adopt a tree
            </LinkBtn>
            <LinkBtn
              to="/partners"
              title="Partner With Us"
              className="bg-accent hover:bg-accent-80"
            >
              Partner with us
            </LinkBtn>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
