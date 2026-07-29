import Right from "./Right"
import Left from "./Left"

function Center({user}) {
    return (
        <div className=' bg-gray-300  flex items-center gap-10 h-[90vh]  '>
          <Left /> 
          <Right user={user}/> 
        </div>
    )
}

export default Center
