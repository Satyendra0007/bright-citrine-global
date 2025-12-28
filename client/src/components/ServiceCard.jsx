import { motion } from "motion/react"
export default function ServiceCard({ Icon, name, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="w-80 h-96 md:h-86 border border-orange-200 rounded-2xl  overflow-hidden shadow-xl bg-gray-50"
    >
      <div className="head flex p-4 flex-col gap-4 justify-center items-center ">
        <div className="icon p-6 text-4xl border-2 rounded-full bg-primary text-white ">
          <Icon />
        </div>
        <h1 className="font-semibold text-xl text-primar ">{name}</h1>
      </div>
      <div className="desc p-5">
        <p className="text-justify text-gray-800 font-serif md:text-sm ">{desc}</p>
      </div>
    </motion.div>
  )
}
