import { footerSitemap, headerMenu, socialMedia } from "~/data/sitemap";
import { Link, useLocation } from "react-router";
import { RiMenu3Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { getSMI } from "~/utils/getIcon";
import { motion } from "framer-motion";
import LinkBtn from "./LinkBtn";

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
          <div className="flex items-center gap-4">
            <span className="size-5 rounded-full border-4 border-fresh-leaf inline-block"></span>
            <Link to="/" title="IAC Patron" className="font-playfair">
              IAC Patron
            </Link>
          </div>
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
      <div
        className={`w-full h-dvh bg-green-900 fixed top-0 z-20 pt-16 p-4 duration-300 transition-all overflow-auto ${
          isMenu ? "left-0 " : "-left-full"
        }`}
      >
        <div className="container mx-auto flex flex-col gap-4">
          <ul>
            <li
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
            </li>
            {headerMenu.slice(1).map((item, i) => (
              <li
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
              </li>
            ))}
          </ul>
          <hr className="opacity-10" />
          <ul>
            {footerSitemap[1].links.map((item) => (
              <li
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
              </li>
            ))}
          </ul>

          <div className="h-full" />

          <div className="flex gap-2 items-center">
            {socialMedia.map((item) => (
              <LinkBtn
                key={item.id}
                to={item.href}
                target={"_blank"}
                className="inline-block !p-2"
              >
                {getSMI(item.title)}
              </LinkBtn>
            ))}
            <span className="w-full border-t border-black/10 block" />
          </div>
        </div>
      </div>
    </>
  );
}
