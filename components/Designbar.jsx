import React from 'react'

const Designbar = () => {
  return (
   
    <div className='flex-col bg-blue-700 rounded-lg w-56'>
    <div className='title text-bold text-xl r bg-primary w-56 justify-center grid-cols-1 text-white p-5 '>Countdown Name</div>
    <div className='flex p-5'>
        <div className='font-black pr-4 '>EventDate  </div>
       <div  > <input type='datetime-local'  className='w-20 rounded-md bg-white' /></div>
        </div>
        
        
    <div className='flex  p-5'>
        <div className='font-black pr-5'>StartDate  </div>
       <div > <input type='time'  className='w-20 rounded-md bg-white ' /></div>
        </div>
         
        <div className='flex  p-5'>
        <div className='font-black pr-7'>EndDate  </div>
       <div > <input type='time'  className='w-20 rounded-md bg-white ' /></div>
        </div>
         
        <div className='flex  p-5'>
        <div className='font-black pr-5'> PrimarycolorColor </div>
       <div > <input type='color' className='w-5 h-5 rounded-md bg-white' /></div>
        </div>
        

        <div className='flex  p-5'>
        <div className='font-black pr-8'> SecondaryColor </div>
       <div > <input type='color' className='w-5 h-5 rounded-md bg-white' /></div>
        </div>
        
        <div className='flex  p-5'>
        <div className='font-black pr-20'> TextColor  </div>
       <div > <input type='color' className='w-5 h-5 rounded-md bg-white' /></div>
        </div>
    </div>
    
  )
}

export default Designbar