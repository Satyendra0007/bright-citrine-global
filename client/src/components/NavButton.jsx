import { NavLink } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { motion } from "motion/react"

export default function NavButton({ link, text }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
      <NavLink to={link} className="px-8 py-3 md:py-2 bg-primary text-white font-semibol rounded-full shodow-lg cursor-pointer flex gap-2  items-center ">
        <p>{text} </p>
        <IoIosArrowDroprightCircle size={20} />
      </NavLink>
    </motion.div>
  )
}
