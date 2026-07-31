import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  useEffect(() => {
    getData()
  }, [index])

  const getData = async () => {

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    setUserData(response.data);
  }
  let printUserdata = <h1 className='text-2xl text-white'>User data loading.....</h1>

  if (userData.length > 0) {
    printUserdata = userData.map((elem, idx) => {

      return <div key={idx}>

        <a href={elem.url} target='_blank'>
          <div className='w-full h-60 overflow-hidden rounded-xl'>
            <img
              className='h-full w-full object-cover'
              src={elem.download_url}
              alt="" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a >
      </div>

    })
  }


  return (
    <div className='bg-black min-h-screen text-amber-50 p-6'>
      
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {printUserdata}
      </div>

      <div className='flex justify-center gap-10 items-center mt-8'>

        <button 
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
          >

          prev
        </button> 
        <h4>Page {index}</h4>
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold
        '
         onClick={()=>{
        setUserData([])
            setIndex(index+1)
          }}
        >
          next
        </button>
      </div>

    </div>
  )
}

export default App
