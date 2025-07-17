import type { FooterSectionInt } from "~/interfaces/data";
import { footerSitemap, socialMedia } from "~/data/sitemap";
import { getSMI } from "~/utils/getIcon";
import {
  motion,
  type ValueAnimationTransition,
  type Variants,
} from "framer-motion";
import { Link } from "react-router";
import GetInvolved from "~/routes/home/GetInvolved";
import Contact from "~/routes/home/Contact";
import LinkBtn from "./LinkBtn";

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

const childVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};

export default function Footer() {
  return (
    <>
      <Contact />
      <GetInvolved />
      <motion.footer
        variants={parentVariant}
        initial={"hidden"}
        whileInView={"show"}
        className="bg-green-900 pt-16 text-sm"
      >
        <div className="container mx-auto grid gap-10 md:grid-cols-2 p-2 sm:px-4">
          <motion.div variants={childVariant} className="space-y-2 max-w-md">
            <img
              src="/logo.png"
              alt="Brand logo"
              className="size-8 items-center"
            />
            <h2 className="text-xl font-bold text-white font-playfair">
              IAC Patrons Foundation
            </h2>
            <p className="text-misty-white-80">
              Growing a greener tomorrow — one tree at a time. We empower
              individuals, schools, and organizations to take climate-positive
              action through tree plantation.
            </p>

            <ul className="flex items-center text-xl gap-2 mt-4">
              {socialMedia.map((item) => (
                <li key={item.id}>
                  <LinkBtn
                    to={item.href}
                    target={item.external ? "_blank" : "_self"}
                    className="inline-block !p-2"
                  >
                    {getSMI(item.title)}
                  </LinkBtn>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10">
            {footerSitemap.map((sitemapCols: FooterSectionInt, i) => (
              <motion.div variants={childVariant} key={sitemapCols.id}>
                <h3 className="font-semibold mb-3 text-white">
                  {sitemapCols.title}
                </h3>
                <ul className="text-misty-white space-y-2">
                  {sitemapCols.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        to={link.href}
                        title={link.title}
                        aria-label={link.title}
                        className="hover:underline"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-xs text-misty-white-60 mt-10 border-t border-misty-white-20 p-4">
          © 2025 IAC Patrons Foundation. All rights reserved.
        </div>
      </motion.footer>
    </>
  );
}
