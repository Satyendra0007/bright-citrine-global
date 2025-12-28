import { motion } from "framer-motion";

export default function ContactCard({ icon, title, value, href }) {
  const Card = (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        bg-white border border-gray-300
        shadow-lg
        rounded-xl
        px-6
        flex flex-col items-center justify-center
        text-center
        gap-3
        cursor-pointer
        h-40
      "
    >
      <div className="text-3xl">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{value}</p>
    </motion.div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {Card}
    </a>
  ) : (
    Card
  );
}
