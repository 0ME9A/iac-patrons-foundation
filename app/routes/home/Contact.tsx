import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaRegFileAlt,
} from "react-icons/fa";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Container from "~/components/Container";
import Form from "./Form";

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 1"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div ref={ref} className=" relative">
      <Container className="relative z-[1]">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-center rounded-3xl bg-green-900 text-white shadow-xl shadow-fresh-leaf-20">
          <div className="space-y-6 p-8 sm:p-10">
            <header className="space-y-3">
              <motion.h2
                style={{ x, opacity }}
                className="text-4xl font-playfair font-bold text-white"
              >
                Contact Us
              </motion.h2>
              <motion.p
                style={{ x, opacity }}
                className="text-base sm:text-lg text-misty-white-80 leading-relaxed"
              >
                Have a question or want to launch a green initiative with us?
                We’d love to hear from you.
              </motion.p>
            </header>

            <ul className="space-y-4 text-sm text-misty-white">
              <motion.li
                style={{ x, opacity }}
                className="flex items-start gap-3"
              >
                <FaMapMarkerAlt className="mt-1 text-fresh-leaf" />
                <span>
                  <strong>Address</strong>
                  <br />
                  3rd Floor, Woodburn Central, <br />
                  5A Woodburn Park Road, Kolkata – 700020
                </span>
              </motion.li>
              <motion.li style={{ x, opacity }} className="flex gap-3">
                <FaEnvelope className="mt-1 text-fresh-leaf" />
                <span>
                  <strong>Email</strong>
                  <br /> contact@iacpatronsfoundation.org
                  <br />
                </span>
              </motion.li>
              <motion.li style={{ x, opacity }} className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-fresh-leaf" />
                <span>
                  <strong>Phone</strong>
                  <br /> +91 98765 43210
                </span>
              </motion.li>
              <motion.li style={{ x, opacity }} className="flex gap-3">
                <FaRegFileAlt className="mt-1 text-fresh-leaf" />
                <span>
                  <strong>FCRA Number</strong>
                  <br /> 147121144
                </span>
              </motion.li>
            </ul>
          </div>
          <motion.div style={{ scale, opacity }}>
            <Form />
          </motion.div>
        </div>
      </Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute -bottom-1 scale-y-[5] sm:scale-y-[1.5] origin-bottom"
      >
        <path
          fillOpacity="1"
          className="fill-green-900"
          d="M0,256L60,229.3C120,203,240,149,360,117.3C480,85,600,75,720,80C840,85,960,107,1080,101.3C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </motion.div>
  );
}
