export default function Test() {
  return (
    <div className="fixed h-full w-full flex justify-center items-center">
      <div className="w-[50%] h-[75%] bg-slate-600 flex flex-col gap-1">
        <div className="w-full h-full bg-red-500"></div>
        <div className="w-full h-full bg-red-500"></div>
        <div className="w-full h-full bg-red-500"></div>
        <div className="w-full h-full bg-red-500"></div>
        <div className="w-full h-full bg-red-500"></div>
        <div className="w-full h-full bg-red-500"></div>
        <div className="w-full h-full bg-red-500 flex gap-1">
          <div className="w-full h-full bg-yellow-300"></div>
          <div className="h-full bg-yellow-300" style={{aspectRatio: 1 / 1.5}}></div>
        </div>
      </div>
    </div>
  )
}