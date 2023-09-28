import React from 'react'
import Menu from "@/components/logos/Menu";

const Landing = () => {
  return (
    <div className='px-8 w-full h-12 rounded-sm bg-secondary flex items-center justify-center text-white '>
        <div className='title w-1/2 font-semibold'>DownCount</div>
        <div className='w-1/2 '><Menu /></div>
        
     </div>
  );
};

export default Landing;