import React from 'react'
import { ImSad2 } from "react-icons/im";

function NotFound() {
  return (
    <>
       <section className="w-full overflow-y-auto mt-44 no-scrollbar">
       <div className="flex flex-col items-center justify-center w-full h-[500px] text-center">
       <ImSad2 className='m-6 text-4xl text-blue-300 lg:text-7xl'/>
<span className='text-2xl text-red-500 lg:text-5xl'>Sorry Requested Food is Not Avaiable !!!</span>
       </div>
        </section>
    </>
  )
}

export default NotFound
