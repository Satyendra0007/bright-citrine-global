
export default function Input({ icon, placeholder }) {
  return (
    <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-3 focus-within:bg-white focus-within:shadow-md transition-all duration-300 ease-in-out">
      <span className="text-gray-400 text-sm">{icon}</span>
      <input
        type="text"
        placeholder={placeholder}
        className=" w-full  bg-transparent outline-none text-sm placeholder-gray-500 " />
    </div>
  )
}
