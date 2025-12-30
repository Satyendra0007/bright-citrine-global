
export default function ProductCard({ url, name, longDesc, handleToogleForm }) {
  return (
    <div className=" py-5 md:flex lg:max-w-5xl md:gap-5 mx-auto md:items-center border border-gray-300 shadow-lg px-2">
      <div className="image md:w-114 shrink-0">
        <img className="w-full " src={url} alt={name} />
      </div>
      <div className="desc space-y-4 p-6 md:p-3">
        <h3 className="text-xl font-bold text-primary">{name}</h3>
        <p className="text-gray-900 font-serif text-justify">
          {longDesc}
        </p>
        <button className="px-8 py-3 md:py-2 bg-primary text-white rounded-full shodow-lg cursor-pointer " onClick={handleToogleForm}>Request a Quate______</button>
      </div>
    </div>
  )
}
