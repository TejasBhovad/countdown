import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Relevance = ({ setSort }) => {
  return (
    <div className="w-full h-full flex gap-2 text-md">
      <span className="flex items-center font-medium text-secondary">
        Sort By
      </span>

      <div className="w-36 h-8 flex items-center">
        <Select
          className="w-40"
          defaultValue="recent"
          onValueChange={(value) => setSort(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Date Posted"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="recent">Date Posted</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Relevance;
