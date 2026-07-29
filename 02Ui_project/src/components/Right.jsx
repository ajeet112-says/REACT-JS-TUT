import Card from "./Card";

function Right({user}) {
  return (
    <div className="w-[64%] h-[90%] p-4 overflow-x-auto">
      
      <div className=" p-5 flex gap-4">
        <Card user={user}/>
        
        
      </div>

    </div>
  );
}

export default Right;