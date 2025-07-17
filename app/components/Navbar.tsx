import { footerSitemap, headerMenu, socialMedia } from "~/data/sitemap";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Link, useLocation } from "react-router";
import { RiMenu3Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { getSMI } from "~/utils/getIcon";
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

export default function Navbar() {
  const path = useLocation();
  const [isMenu, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, [path]);

  return (
    <>
      <div className="w-full bg-green-900 sticky top-0 z-50">
        <nav className="container mx-auto py-2 lg:py-0 px-2 sm:px-4 flex justify-between items-center text-white">
          <Link
            to="/"
            title="IAC Patron"
            className="font-playfair font-semibold flex items-center gap-4"
          >
            <img src="/logo.png" alt="Brand logo" className="size-8" />
            IAC Patron
          </Link>
          <ul className="hidden lg:flex text-xs h-full">
            <li
              className={`h-full text-misty-white-80 hover:text-misty-white border-b-2 border-transparent hover:border-white duration-300 transition-all ${
                path.pathname === "/"
                  ? "!border-misty-white !text-misty-white"
                  : ""
              }`}
            >
              <Link to={"/"} title={"Home"} className="py-6 px-6 block">
                Home
              </Link>
            </li>
            {headerMenu.slice(1).map((item) => (
              <li
                key={item.id}
                className={`h-full text-misty-white-80 hover:text-misty-white border-b-2 border-transparent hover:border-white duration-300 transition-all ${
                  path.pathname.startsWith(item.href)
                    ? "!border-misty-white !text-misty-white"
                    : ""
                }`}
              >
                <Link
                  to={item.href}
                  title={item.title}
                  className="py-6 px-6 block"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 items-center">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            >
              <Link
                to="/donate"
                title="Donate"
                className="bg-white text-black text-sm px-4 py-2 rounded-full"
              >
                Donate
              </Link>
            </motion.div>

            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              onClick={() => setMenu(!isMenu)}
              className="p-2 text-lg bg-white rounded-full text-black lg:hidden"
            >
              {isMenu ? <MdClose className="text-red-500" /> : <RiMenu3Line />}
            </motion.button>
          </div>
        </nav>
      </div>

      {/* NavbarMenu start */}
      <AnimatePresence>
        {isMenu && (
          <motion.div
            key="modal"
            exit={{ x: "-100%" }}
            variants={parentVariant}
            initial={"hidden"}
            whileInView={"show"}
            className={`w-full h-dvh bg-green-900 fixed top-0 z-20 pt-16 p-4 duration-300 transition-all overflow-auto lg:-left-full`}
          >
            <div className="container mx-auto flex flex-col gap-4 h-full">
              <ul>
                <motion.li
                  variants={childVariant}
                  className={`text-misty-white-80 hover:text-misty-white duration-300 transition-all ${
                    path.pathname === "/"
                      ? "!bg-fresh-leaf-20 shadow-lg shadow-fresh-leaf-20 rounded-full !text-misty-white"
                      : ""
                  }`}
                >
                  <Link
                    to={"/"}
                    title={"Home"}
                    className="py-2 px-4 flex justify-between items-center"
                  >
                    Home
                    {path.pathname === "/" && (
                      <span className="p-1 rounded-full bg-fresh-leaf" />
                    )}
                  </Link>
                </motion.li>
                {headerMenu.slice(1).map((item, i) => (
                  <motion.li
                    variants={childVariant}
                    key={item.id + i}
                    className={`text-misty-white-80 hover:text-misty-white duration-300 transition-all ${
                      path.pathname.startsWith(item.href)
                        ? "!bg-fresh-leaf-20 rounded-full shadow-lg shadow-fresh-leaf-20 !text-misty-white"
                        : ""
                    }`}
                  >
                    <Link
                      to={item.href}
                      title={item.title}
                      className="py-2 px-4 flex justify-between items-center"
                    >
                      {item.title}
                      {path.pathname.startsWith(item.href) && (
                        <span className="p-1 rounded-full bg-fresh-leaf" />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <hr className="opacity-10" />
              <ul>
                {footerSitemap[1].links.map((item) => (
                  <motion.li
                    variants={childVariant}
                    key={item.id}
                    className={`text-misty-white-80 hover:text-misty-white duration-300 transition-all ${
                      path.pathname.startsWith(item.href)
                        ? "!bg-fresh-leaf-20 rounded-full shadow-lg shadow-fresh-leaf-20 !text-misty-white"
                        : ""
                    }`}
                  >
                    <Link
                      to={item.href}
                      title={item.title}
                      className="py-2 px-4 flex justify-between items-center"
                    >
                      {item.title}
                      {path.pathname.startsWith(item.href) && (
                        <span className="p-1 rounded-full bg-fresh-leaf" />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="h-full" />

              <ul className="flex gap-2 items-center rounded-full p-1">
                {socialMedia.map((item) => (
                  <motion.li
                    variants={childVariant}
                    key={item.id}
                    className="flex items-center justify-center"
                  >
                    <LinkBtn
                      to={item.href}
                      target={"_blank"}
                      className="inline-block !p-2 !m-0"
                    >
                      {getSMI(item.title)}
                    </LinkBtn>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
