import React from 'react'

const Countdown = () => {
  return (
  <div className="flex" >
    <div className="w-20 h-30 rounded-md rounded-r-none bg-primary text-white p-1.5 ">
       <div className='w-15 h-15 rounded-md bg-secondary text-white box-border '>
        <div className='h-2/3 flex items-center justify-center text-3xl'>08</div>
        </div>
       <div className="text-center font-semibold h-1/3 ">Days</div>
      </div>

      <div className="w-20 h-30 bg-primary text-white p-1.5 ">
       <div className='w-15 h-15 rounded-md bg-secondary text-white box-border '>
        <div className='h-2/3 flex items-center justify-center text-3xl'>12</div>
        </div>
       <div className="text-center font-semibold h-1/3 ">hours</div>
       </div>

       <div className="w-20 h-30  bg-primary text-white p-1.5 ">
       <div className='w-15 h-15 rounded-md bg-secondary text-white box-border '>
        <div className='h-2/3 flex items-center justify-center text-3xl'>36</div>
        </div>
       <div className="text-center font-semibold h-1/3 ">min</div>
       </div>

       <div className="w-20 h-30 rounded-md rounded-l-none bg-primary text-white p-1.5 ">
       <div className='w-15 h-15 rounded-md bg-secondary text-white box-border '>
        <div className='h-2/3 flex items-center justify-center text-3xl'>48</div>
        </div>
       <div className="text-center font-semibold h-1/3 ">sec</div>
       </div>


  </div>
    
  )
}

export default Countdown
