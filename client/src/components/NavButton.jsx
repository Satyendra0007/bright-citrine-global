import { NavLink } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function NavButton({ link, text }) {
  return (
    <NavLink  to={link} className="px-8 py-3 md:py-2 bg-primary text-white font-semibol rounded-full shodow-lg cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out flex gap-2  items-center ">
      <p>{text} </p>
      <IoIosArrowDroprightCircle size={20} />
    </NavLink>
  )
}
