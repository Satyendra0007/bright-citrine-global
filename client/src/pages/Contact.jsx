import IntroSection from "../components/IntroSection";
import ContactCard from "../components/ContactCard";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Form from "../components/Form";
import axios from "axios"
import toast from "react-hot-toast";

export default function Contact() {

  const handleOnSubmit = async (userInput) => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/contact`, userInput)
      toast.success(data.message)
      return { success: true }
    } catch (error) {
      console.log(error?.message)
      toast.error(error?.response?.data?.message)
      return { success: false }
    }
  }

  return (
    <div className=''>
      <section className="hero-section" >
        <IntroSection text={"Lets Talk"} />
      </section >

      <section className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ContactCard
            icon={<FaEnvelope className="text-blue-600" />}
            title="Email"
            value="connect@brightcg.com"
            href="mailto:connect@brightcg.com"
          />


          <ContactCard
            icon={<FaWhatsapp className="text-green-500" />}
            title="WhatsApp"
            value="+91 7777 012161"
            href="https://wa.me/917777012161"
          />


          <ContactCard
            icon={<FaMapMarkerAlt className="text-red-500" />}
            title="Our Presence"
            value="India, Bangladesh, Belgium and Romania"
          />
        </div>
      </section>

      <section className="form">
        <Form text={"Contact Us"} handleOnSubmit={handleOnSubmit} />
      </section>
    </div>
  )
}
