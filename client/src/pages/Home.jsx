import bg from "../assets/bg.jpg"
import CategoryCard from "../components/CategoryCard"
import Heading from "../components/Heading"
import ServiceCapsule from "../components/ServiceCapsule";
import products from "../data/products"
import services from "../data/services"
import NavButton from "../components/NavButton";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "motion/react"
import StatCircle from "../components/StateCircle";
import ReviewCapsule from "../components/ReviewCapsule";
import { fadeRight, fadeUP, fadeZoomUP, stagger } from "../utils/motions"

export default function Home() {
  const elementRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(elementRef.current, {
      strings: ["Step To Success"],
      typeSpeed: 75
    })
    return () => typed.destroy()
  }, [])

  return (
    <div className='space-y-15 md:space-y-24'>
      <section className="hero-section h-full relative" >
        <div className="image h-96 md:h-screen ">
          <img className="w-full h-full object-cover " src={bg} alt="consulting image " />
        </div>
        <motion.div className="text absolute top-0 left-0 bg-black/50 h-full w-full flex justify-center  items-center flex-col gap-2 md:gap-8 ">
          <motion.div
            className="w-70 md:w-lg text-primary font-semibold text-4xl md:text-6xl "
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 2
              }
            }}>
            <div className="text-xl md:text-3xl text-white">We Are  A ______________ </div>
            <span ref={elementRef}>Step to Success</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-3 md:gap-8"
          >
            <StatCircle value={98} max={100} suffix="%" label="Client Retention" />
            <StatCircle value={500} max={700} suffix="+" label="Projects Delivered" />
            <StatCircle value={2} max={5} suffix="B+" label="Value Created" />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-3  md:bottom-10 right-6 md:right-16 z-20">
          <ReviewCapsule />
        </div>

      </section >

      <motion.section className="services container mx-auto"
        variants={fadeUP}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1 }}
      >
        <Heading subhead={"BRIGHT CITRINE GLOBAL"} head={"SERVICES"} type={"OUR"} />
        <motion.div variants={stagger} className="categories py-7 flex flex-wrap justify-center gap-5">
          {services.map((service, index) => {
            return <motion.div
              key={index}
              variants={fadeZoomUP}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.8 }}
            >
              <ServiceCapsule  {...service} />
            </motion.div>
          })}
        </motion.div>
        <div className="button flex justify-center mt-5">
          <NavButton link={'/services'} text={"Explore Service"} />
        </div>
      </motion.section>

      <motion.section className="product container mx-auto"
        variants={fadeUP}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1 }}
      >
        <Heading subhead={"PRODUCT RANGE"} head={"OFFERINGS"} type={"OUR"} />
        <motion.div variants={stagger} className="categories py-7 flex flex-wrap justify-center gap-5">
          {products.map((product, index) => {
            return <motion.div key={index}
              variants={fadeUP}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.8 }}
            >
              <CategoryCard  {...product} />
            </motion.div>
          })}
        </motion.div>
        <div className="button flex justify-center mt-5">
          <NavButton link={'/products'} text={"Explore Products"} />
        </div>
      </motion.section>

      <section className="contact py-10  md:py-20 bg-orange-100">
        <motion.div
          className="text text-3xl text-center "
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8 }}
        >
          Come & Talk To Us
        </motion.div>
        <div className="button flex justify-center mt-5">
          <NavButton link={'/contact'} text={"Contact Us"} />
        </div>
      </section>
    </div >
  )
}
