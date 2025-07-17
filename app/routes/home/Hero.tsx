import { motion, type ValueAnimationTransition } from "motion/react";
import { impactStats } from "~/data/stats";
import { Link } from "react-router";
import ImpactStatusCard from "~/components/cards/ImpactStatusCard";
import Container from "~/components/Container";

const imgSrc = [
  "/images/volunteer_01.jpg",
  "/images/volunteer_02.jpg",
  "/images/volunteer_03.jpg",
];

const parentVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const transition: ValueAnimationTransition = {
  duration: 0.3,
  ease: "linear",
};

export function Hero() {
  return (
    <div className="w-full relative bg-green-900 h-dvh md:h-fit flex flex-col justify-between -mt-16">
      <img
        src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero background forest image"
        className="absolute size-full object-cover opacity-40"
      />

      <div className="h-20" />
      <Container className="relative z-10 text-white py-32 xl:pb-40">
        <motion.header
          variants={parentVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-6 items-center"
        >
          <div className="p-1 bg-fresh-leaf-40 w-fit rounded-full flex items-center">
            <div className="flex items-center">
              {imgSrc.map((item, i) => (
                <motion.img
                  key={"volunteer-" + i}
                  src={item}
                  alt="Volunteer profile photo"
                  variants={{
                    hidden: {
                      marginLeft: i > 0 ? "-2rem" : "0",
                    },
                    show: {
                      marginLeft: i > 0 ? "-0.5rem" : "0",
                      transition,
                    },
                  }}
                  className={`size-8 object-cover rounded-full ${
                    i > 0 ? "-ml-2" : ""
                  }`}
                />
              ))}
            </div>
            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                },
                show: {
                  opacity: 1,
                  transition,
                },
              }}
              className="text-xs px-4"
            >
              1.5k people has joined us
            </motion.span>
          </div>
          <motion.h1
            variants={{
              hidden: {
                y: 20,
                opacity: 0,
              },
              show: {
                y: 0,
                opacity: 1,
                transition,
              },
            }}
            className="text-[7vw] lg:text-[5rem] leading-[7vw] lg:leading-[5rem] font-playfair font-bold origin-top text-center"
          >
            Let’s Grow a Greener <br /> Tomorrow, Together
          </motion.h1>
          <motion.p
            variants={{
              hidden: {
                y: 40,
                opacity: 0,
              },
              show: {
                y: 0,
                opacity: 1,
                transition,
              },
            }}
            className="sm:text-lg max-w-screen-sm text-center text-misty-white"
          >
            Join IAC Patrons Foundation in planting trees, restoring
            biodiversity, and building a sustainable, greener future.
          </motion.p>

          <motion.div
            variants={{
              hidden: {
                y: 40,
                opacity: 0,
              },
              show: {
                y: 0,
                opacity: 1,
                transition,
              },
            }}
            className="flex gap-4"
          >
            <Link
              to={"/contact"}
              className="px-6 py-2 bg-fresh-leaf-40 border-2 border-fresh-leaf text-white rounded-full shadow-lg shadow-fresh-leaf/40 hover:shadow-fresh-leaf-60 hover:bg-fresh-leaf"
            >
              Plant a tree
            </Link>
            <Link
              to={"/volunteer"}
              className="px-6 py-2 bg-green-900/20 border-2 border-fresh-leaf text-white rounded-full duration-300 transition-all shadow-lg shadow-fresh-leaf/40 hover:shadow-fresh-leaf-60 hover:bg-fresh-leaf"
            >
              Volunteer
            </Link>
          </motion.div>
        </motion.header>
      </Container>
      <div className="bg-fresh-leaf relative">
        <div className="container mx-auto p-2 sm:p-4 grid grid-cols-2 md:grid-cols-4 text-sm md:divide-x divide-green-900/20">
          {impactStats.map((item) => (
            <ImpactStatusCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
