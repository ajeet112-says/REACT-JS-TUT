 import HeroText from "./HeroText"
 import { MoveUpRight } from 'lucide-react';
 

function Left() {
  return (
    <div className=" h-[90%] w-1/3 flex  justify-between flex-col">
        <div><HeroText /></div>
        <div className="p-5 pb-5">
            <MoveUpRight 
            size={60} 
            className="text-black " />
        </div>
        
        
    </div>
  )
}

export default Left
