import CardContent from "./CardContent";

function Card({user}) {
  console.log(user.name)
  return (
    <div className="className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl">
      <img
        src="https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-full object-cover"
        alt="Nature"
      /> 
      <CardContent />
    </div>
  );
}

export default Card;