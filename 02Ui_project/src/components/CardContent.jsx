
function CardContent() {
  return (
    <div className="absolute left-0 top-0 h-full w-full p-8 flex flex-col justify-between">
      <h1 className="h-14 w-14 rounded-full bg-amber-50 flex justify-center items-center"> </h1>
       
       <div>
        <p className="text-shadow-2xs text-xl leading-relaxed text-gray-300 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatibus iusto mollitia necessitatibus, illo dolore!</p>
        <div className="flex justify-between mt-4+">
            <button className="bg-blue-400 rounded-4xl text-2xl px-8 py-3 mt-4">Underserved</button>
            
        </div>
       </div>
      
      </div>
  )
}

export default CardContent
