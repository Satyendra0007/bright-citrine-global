import { motion } from "framer-motion";

export default function ReviewCapsule() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="backdrop-blur-md bg-white/80 shadow-lg rounded-full px-3 py-1.5 md:px-5 md:py-3 flex items-center gap-2 ">
        {/* Avatar */}
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="https://i.pravatar.cc/100"
            alt="client"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="leading-tight">
          <div className="text-sm font-semibold text-green-800">
            4.9 ★★★★★
          </div>
          <p className="text-xs text-gray-600">
            Trusted by 500+ clients
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
