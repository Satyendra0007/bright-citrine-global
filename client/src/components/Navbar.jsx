import { useEffect } from "react";
import navLinks from "../data/navLink"
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png"
import { motion } from "motion/react"


export default function Navbar() {

  useEffect(() => {

    const showMenu = (e) => {
      e.stopPropagation();
      document.getElementById("menu").style.left = "0px";
      document.body.classList.add("stop-scrolling");
    }

    const hideMenu = (e) => {
      document.getElementById("menu").style.left = "-288px";
      document.body.classList.remove("stop-scrolling");
    }

    if (typeof window !== "undefined") {
      document.getElementById("hamburger").addEventListener("click", showMenu);
      document.addEventListener("click", hideMenu)
    };


    return () => {
      document.getElementById("hamburger").removeEventListener("click", showMenu)
      document.removeEventListener("click", hideMenu)
    }
  }, [])


  return (
    <>
      <header className="fixed top-2 bg-transparent z-50 w-full  "  >
        <div className=" mx-auto flex justify-between items-center px-5 py-3 bg-white/30 shadow-xl rounded-full backdrop-blur-sm md:py-3 w-[90%] md:max-w-6xl">
          <div id="hamburger" className="md:hidden cursor-pointer">
            <div className="line w-7 h-0.75  bg-primary m-1.5"></div>
            <div className="line w-5 h-0.75 bg-primary m-1.5"></div>
            <div className="line w-6 h-0.75 bg-primary m-1.5"></div>
          </div>
          <NavLink to="/" >
            <div className="logo flex justify-center items-center gap-2 ">
              <div className="w-32 h-11">
                <img className="w-full h-full rounded-full" src={logo} alt="" />
              </div>
            </div>
          </NavLink>
          {/* --------------------Nav link for md and lg devices-------------------- */}
          <div className="navLink hidden my-auto md:block ">
            <nav>
              <ul className="flex gap-7 justify-center items-center text-sm">
                {navLinks.map(({ name, link }) =>
                  <motion.li
                    key={name}
                    whileHover={{
                      y: -3,
                      transition: {
                        duration: 0.5
                      }
                    }}
                  >
                    <NavLink
                      to={link}
                      className={({ isActive }) => `${isActive ? "bg-primary text-white font-normal" : "text-black font-semibold"} cursor-pointer  underline-offset-4 py-1.5 px-3 rounded-md `}
                    >
                      {name}
                    </NavLink>
                  </motion.li>
                )}
              </ul>
            </nav>
          </div>

        </div >
        {/* --------------------Nav link for sm devices-------------------- */}
        <div
          id="menu"
          className="absolute -top-2 -left-72  bg-white  w-60 h-screen border border-gray-400 shadow-xl transition-all duration-700 ease-in-out md:hidden z-50"
        >
          <div className="logo flex justify-center border-b border-b-red-600 py-4 ">
            <div className=" w-44">
              <img className="w-full rounded-full" src={logo} alt="" />
            </div>
          </div>
          <nav>
            <ul className="">
              {navLinks.map(({ name, link, Icon }) =>
                <li key={name}>
                  <NavLink
                    to={link}
                    className={({ isActive }) => `${isActive ? "bg-red-200  font-normal" : "font-semibold "} text-xs py-4 px-2 cursor-pointer text-primary  border-b border-red-200 flex gap-3 items-center`}
                  >
                    <Icon size={18} />
                    {name}
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header >
    </>
  );
}
