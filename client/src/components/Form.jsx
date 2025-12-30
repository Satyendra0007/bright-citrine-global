import React, { useState } from 'react'
import Input from './Input'
import { FaUser, FaEnvelope, FaPhoneAlt, FaPen } from "react-icons/fa";

export default function Form({ text, handleOnSubmit, handleToogleForm }) {

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleOnchange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleOnClick = (e) => {
    e.preventDefault()
    if (!data.name || !data.email.includes("@") || data.phone.toString().length !== 10 || !data.subject) {
      alert("fill data properly")
      return
    }
    handleOnSubmit(data)
    setData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    })
  }

  return (
    <form className="bg-white rounded-3xl shadow-xl border border-gray-300 p-10 max-w-3xl mx-auto space-y-8">

      <h2 className=" text-2xl md:text-3xl font-semibold text-center tracking-tight">
        {text}______
      </h2>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input icon={<FaUser />} type={"text"} name="name" value={data.name} handleonchange={handleOnchange} placeholder="Your Name" />
        <Input icon={<FaEnvelope />} type={"email"} name="email" value={data.email} handleonchange={handleOnchange} placeholder="Email Address" />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input icon={<FaPhoneAlt />} type={"number"} name="phone" value={data.phone} handleonchange={handleOnchange} placeholder="Phone Number" />
        <Input icon={<FaPen />} type={"text"} name="subject" value={data.subject} handleonchange={handleOnchange} placeholder="Subject" />
      </div>

      {/* Message */}
      <div className="bg-gray-100 rounded-2xl p-4 ">
        <textarea
          rows="5"
          name="message" value={data.message} onChange={handleOnchange}
          placeholder="Your Message"
          className=" w-full bg-transparent outline-none resize-none text-sm placeholder-gray-500 "
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        onClick={handleOnClick}
        className=" w-full md:w-auto px-12 py-3 rounded-full bg-primary text-white font-semibold shadow-md hover:shadow-lg tansition"
      >
        Submit
      </button>

      {handleToogleForm && <button
        type="submit"
        onClick={handleToogleForm}
        className=" w-full md:w-auto px-12 py-3 rounded-full bg-gray-200 font-semibold shadow-md hover:shadow-lg tansition md:ml-3 cursor-pointer"
      >
        Close
      </button>}

    </form>

  )
}
