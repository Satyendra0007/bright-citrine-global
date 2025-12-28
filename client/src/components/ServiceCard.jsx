
export default function ServiceCard({ Icon, name, desc }) {
  return (
    <div className="w-80 h-96 md:h-86 border border-orange-400 rounded-2xl  overflow-hidden shadow-xl bg-gray-50">
      <div className="head flex p-4 flex-col gap-4 justify-center items-center ">
        <div className="icon p-6 text-4xl border-2 border-orange-600 rounded-full text-primary ">
          <Icon />
        </div>
        <h1 className="font-semibold text-xl text-primar ">{name}</h1>
      </div>
      <div className="desc p-5">
        <p className="text-justify text-gray-800 font-serif md:text-sm ">{desc}</p>
      </div>
    </div>
  )
}
