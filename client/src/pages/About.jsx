import { motion } from "motion/react"
import Heading from "../components/Heading"
import about from "../assets/about.jpg"
import IntroSection from "../components/IntroSection"
import { fadeUP } from "../utils/motions"

export default function About() {

  return (
    <div className=''>
      <section className="hero-section" >
        <IntroSection text={"Who We Are"} />
      </section >

      <section className="about pt-10 container mx-auto ">
        <Heading subhead={"UNDERSTANDING TRADE"} head={"BRIGHT CITRINE GLOBAL"} />
        <motion.div
          className=" py-5 md:flex lg:max-w-5xl md:gap-5 mx-auto md:items-center"
          variants={fadeUP}
          initial="hidden"
          whileInView="show"
          transition={{
            duration: 0.8
          }}
        >
          <motion.div
            className="image p-3 bg-white m-2 border border-gray-200 shadow-2xl md:w-114 shrink-0"
            whileHover={{
              scale: 1.02,
              y: -10,
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            }}

          >
            <img className="w-full " src={about} alt="people image" />
          </motion.div>
          <div className="desc mt-5 md:mt-0 space-y-4 p-6 md:p-3">
            <h3 className="text-lg font-semibold "><span className="text-primary font-serif font-semibold text-2xl">Bright Citrine Global</span> focuses on trading in niche products.</h3>
            <p className="text-gray-900 font-serif text-justify">
              CG specializes in international trade partnering with over 38 countries.<br />

              We establish strong relationships with our clients and partners not only to provide immediate and reliable services but to continually exceed expectations and goals.We create commercial flows, import and export products, arranging and managing international projects with our partners. Our expertise in understanding the market allow us to respond to the sustained and ever evolving needs of industries for existing and newer markets.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
