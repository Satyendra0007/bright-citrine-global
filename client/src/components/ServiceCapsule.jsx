
export default function ServiceCapsule({ name, Icon }) {
  return (
    <div className="w-80 p-3 flex items-center gap-3 border border-orange-300 shadow-lg rounded-full">
      <div className="icon p-4 rounded-full bg-primary text-2xl text-white">
        < Icon />
      </div>
      <div className="text font-semibold">
        <p>{name}</p>
      </div>
    </div>
  )
}
