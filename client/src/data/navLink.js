import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { FcServices } from "react-icons/fc";
import { GrCertificate } from "react-icons/gr";
import { FcHome } from "react-icons/fc";
import { FaProductHunt } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";

const navLinks = [
  {
    name: "Home",
    link: "/",
    Icon: FcHome
  },
  {
    name: "About",
    link: "/about",
    Icon: FcAbout
  },
  {
    name: "Services",
    link: "/services",
    Icon: FcServices
  },
  {
    name: "Products",
    link: "/products",
    Icon: FaProductHunt
  },
  {
    name: "Contact",
    link: "/contact",
    Icon: FcContacts
  }
]

export default navLinks;