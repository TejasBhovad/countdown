import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Relevance = () => {
  return (
    <div className='w-20 h-40'>
      <Select>
        <SelectTrigger>
          <SelectValue>Sort By</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem>-Default-</SelectItem>
          <SelectItem>Popular</SelectItem>
          <SelectItem>Less Time Remaining</SelectItem>
          <SelectItem>More Time Remaining</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Relevance