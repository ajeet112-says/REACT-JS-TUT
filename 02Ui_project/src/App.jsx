import Section1 from "./components/Section1"
 
 const user = {
    name: "Ajeet",
    age: 21,
    role: "Frontend Developer"
  };

function App() {
  return (
    <div>
      <Section1  user={user}/>
    </div>
  )
}

export default App
