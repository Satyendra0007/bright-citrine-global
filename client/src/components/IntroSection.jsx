import { motion } from "motion/react"
import absbg from "../assets/absbg.jpg"

export default function IntroSection({ text }) {
  return (
    <div className=" h-60 md:h-72 relative">
      <div className="image h-full ">
        <img className="w-full h-full object-cover" src={absbg} alt="background image " />
      </div>
      <div className="text absolute top-0 left-0 bg-black/30 backdrop-blur-sm h-full w-full flex justify-center items-center">
        <motion.div
          className="md:w-md  text-center font-semibold text-3xl md:text-4xl"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1.2
            }
          }}>
          <div className="text-white">{text} ___ </div>
        </motion.div>
      </div>
    </div>
  )
}
