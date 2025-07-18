import type { SMINames } from "~/interfaces/data";
import type { JSX } from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";

export const SMI: Record<SMINames, JSX.Element> = {
  twitter: <FaXTwitter />,
  linkedin: <FaLinkedin />,
  instagram: <IoLogoInstagram />,
  facebook: <FaFacebookSquare />,
};
