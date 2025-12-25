import Logo from "../assets/Logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 px-5 md:px-10">
      <div className="top flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="left">
          <img className="w-72" src={Logo} alt="logo" />
        </div>
        <div className="right text-gray-900 md:text-right">
          <div className="mobile font-bold text-lg tracking-tighter">+91 7777 012161 </div>
          <div className="email font-serif">E. connect@brightcg.com</div>
          <div className="address font-serif">A. India, Bangladesh, Belgium and Romania</div>
        </div>
      </div>
      <div className="bottom flex justify-between items-center pt-4">
        <div className="left font-semibold text-gray-800">@ 2021 All Rights Reserved.</div>
        <div className="right flex items-center gap-4  ">
          <a href="/" className="p-2 rounded-full bg-gray-100 text-lg text-gray-800 hover:bg-gray-200">
            <FaFacebook />
          </a>
          <a href="/" className="p-2 rounded-full bg-gray-100 text-lg text-gray-800 hover:bg-gray-200" >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}
