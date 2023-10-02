import React from 'react'

const BasicInfo = () => {
  return (
    <div className='flex-col p-5 bg-util w-full h-full'>
         <div className='title font-bold text-5xl p-3'>Basic Info</div>

        <div className='flex p-2'>
        <div className='font-semibold pr-5 text-xl '>Count Name</div>
        <div className=' '><input placeholder='Count_name '  className='bg-secondary rounded-md  text-white'></input></div>
        </div>

        <div className='flex p-2 '>
        <div className='font-semibold pr-14 text-xl '>Count ID</div>
        <div className='pr-4'><input placeholder='Count_id' className='bg-secondary rounded-md'></input></div>
        <div className='text-secondary text-semibold bg-white rounded-lg w-48 text-center  h-7'>can't be changed later</div>
        </div>

        <div className='flex p-2'>
        <div className='font-semibold pr-7 text-xl'>Description</div>
        <div className=' '><input placeholder='count description should be sufficently long' className='bg-secondary rounded-md  h-56 w-96 '></input></div>
        </div>

        
        
    </div>
  )
}

export default BasicInfo