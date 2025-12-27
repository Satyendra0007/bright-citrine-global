export default function CategoryCard({ name, url }) {
  return (
    <div className="w-72 h-60 border border-orange-300 shadow-2xl rounded-lg overflow-hidden">
      <div className="img w-full h-48 border-b border-gray-300">
        <img className="w-full h-full" src={url} alt={name} />
      </div>
      <div className="text flex items-center justify-center h-12">
        <p className=" font-semibold  ">{name}</p>
      </div>
    </div>
  )
}
