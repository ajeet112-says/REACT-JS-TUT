import Navbar from "./Navbar"
import Center from "./Center"


function Section1({user}) {
  
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
     <Center user={user}/>

    </div>
    
    </>
  )
}

export default Section1
