import IntroSection from '../components/IntroSection'
import Heading from '../components/Heading'
import ServiceCard from '../components/ServiceCard'
import services from '../data/services'
import { motion } from "motion/react"
import { fadeUP, fadeRight,stagger } from "../utils/motions"
import { MdOutlineMail } from "react-icons/md";
import logo1 from "../assets/flags/logo-1.jpeg"
import logo2 from "../assets/flags/logo-2.jpg"
import logo3 from "../assets/flags/logo-3.jpeg"
import logo4 from "../assets/flags/logo-4.jpeg"
import logo5 from "../assets/flags/logo-5.jpeg"


export default function Services() {

  const images = [logo1, logo2, logo3, logo4, logo5]

  return (
    <div className=''>
      <section className="hero-section" >
        <IntroSection text={"What We Do"} />
      </section >

      <motion.section className="services container mx-auto pt-10"
        variants={fadeUP}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1 }}
      >
        <Heading head={"OFFER"} subhead={"CREATIVE HUB"} type={"WHAT WE "} />
        <motion.div variants={stagger} className="boxes flex justify-center items-center flex-wrap gap-7 mt-8">
          {services.map((service, index) => {
            return <motion.div
              key={index}
              variants={fadeUP}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.8 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          })}
        </motion.div>
      </motion.section>

      <section className="contact py-10 mt-10 md:py-20 bg-orange-100">
        <motion.div
          className="text text-2xl md:text-3xl text-center "
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8 }}
        >
          Want to Know More ?
        </motion.div>
        <div className="email flex justify-center items-center gap-1 text-lg md:text-xl mt-1">
          <MdOutlineMail />
          <a className='font-semibold ' href="mailto:connect@brightcg.com">
            connect@brightcg.com
          </a>
        </div>
      </section>

      <motion.section className="flags container mx-auto mt-10 py-10"
        variants={fadeUP}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1 }}
      >
        <motion.div variants={fadeUP} className="boxes flex justify-evenly items-center  ">
          {images.map((image, index) => {
            return <motion.img
              className='w-10 md:w-24 first:w-13 first:md:w-32 last:w-20 last:md:w-52'
              src={image}
              key={index}
              variants={fadeUP}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.8 }}
            />
          })}
          {/* <motion.img
            className='w-14 md:w-52 '
            src={logo5}
            variants={fadeUP}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.8 }}
          /> */}
        </motion.div>
      </motion.section>

    </div>
  )
}
