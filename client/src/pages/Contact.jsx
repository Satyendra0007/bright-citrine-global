import IntroSection from "../components/IntroSection";
import ContactCard from "../components/ContactCard";
import { FaUser, FaEnvelope, FaPhoneAlt, FaPen, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Input from "../components/Input";


export default function Contact() {
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
        <form className="bg-white rounded-3xl shadow-xl border border-gray-300 p-10 max-w-3xl mx-auto space-y-8">

          <h2 className="text-3xl font-semibold text-center tracking-tight">
            Let’s Talk
          </h2>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input icon={<FaUser />} placeholder="Your Name" />
            <Input icon={<FaEnvelope />} placeholder="Email Address" />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input icon={<FaPhoneAlt />} placeholder="Phone Number" />
            <Input icon={<FaPen />} placeholder="Subject" />
          </div>

          {/* Message */}
          <div className="bg-gray-100 rounded-2xl p-4">
            <textarea
              rows="5"
              placeholder="Your Message"
              className=" w-full bg-transparent outline-none resize-none text-sm placeholder-gray-500 "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className=" w-full md:w-auto px-12 py-3 rounded-full bg-primary text-white font-semibold shadow-md hover:shadow-lg tansition"
          >
            Send Message
          </button>

        </form>
      </section>
    </div>
  )
}
