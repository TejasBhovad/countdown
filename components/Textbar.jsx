import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Checkbox } from "@/components/ui/checkbox"

const Textbar = () => {
  return (
    <div className='p-16 rounded-lg'>
    <div className='flex-col bg-util rounded-lg w-full pr-10 pb-20 justify-start '>
    <div className='title font-extrabold text-xl text-secondary w-80  justify-center grid-cols-1 p-5 '>Text Options</div>
  
   
        
        
    <div className='flex  p-5'>
    <div className="w-36 h-8 flex items-center">
    <div className='font-semibold pr-4'> Font </div>
        <Select className="w-48" defaultValue="calibri">
          <SelectTrigger>
            <SelectValue placeholder="calibri"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="calibri">Calibri</SelectItem>
            <SelectItem value="ariel">Ariel</SelectItem>
            <SelectItem value="bold">Bold</SelectItem>
          </SelectContent>
        </Select>
      </div>
        </div>
         
        
         <div className='flex'>
        <div className='flex  p-5'>
        <div className='font-semibold pr-2'> Stroke </div>
       <div > <Checkbox /></div>
        </div>
        

        <div className='flex  p-5'>
        <div className='font-semibold pr-2'> Width </div>
       <div > <input type='number' className='w-5 h-5 rounded-md bg-white' /></div>
        </div>

        </div>
        
        <div className='flex  p-5'>
        <div className='font-semibold pr-2'> StrokeColor  </div>
       <div > <input type='color' className='w-5 h-5 rounded-md bg-white ' /></div>
        </div>
    
    </div>
    </div>

    
  )
}

export default Textbar