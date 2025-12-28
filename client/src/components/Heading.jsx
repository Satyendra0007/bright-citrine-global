export default function Heading({ subhead, head, type }) {
  return (
    <div className="flex items-center gap-2 px-2 my-2">
      <div className="line w-1 h-12 bg-primary"></div>
      <div className="heading">
        <h3 className="font-semibold text-xs md:text-sm text-gray-600">{subhead} </h3>
        <h1 className="text-xl md:text-2xl font-bold -mt-0.5"><span className="text-gray-600 font-semibold"> {type} </span>{head}</h1>
      </div>
    </div>
  )
}
