import { Toggle } from "@/components/ui/toggle";
import Tick from "@/components/logos/Tick";
const CategoryList = ({ setCategory, category }) => {
  const handleToggle = (toggleText) => {
    setCategory(toggleText);
  };
  return (
    <div className="flex gap-4">
      <Toggle
        className="h-8 bg-secondary text-white data-[state=on]:bg-primary data-[state=on]:text-white"
        onClick={() => handleToggle("science")}
        aria-pressed={category === "science"}
        data-state={category === "science" ? "on" : "off"}
      >
        <div className="flex gap-2 w-full h-full items-center">
          Science
          {category === "science" ? <Tick /> : ""}
        </div>
      </Toggle>

      <Toggle
        className="h-8 bg-secondary text-white data-[state=on]:bg-primary data-[state=on]:text-white"
        onClick={() => handleToggle("social")}
        aria-pressed={category === "social"}
        data-state={category === "social" ? "on" : "off"}
      >
        <div className="flex gap-2 w-full h-full items-center">
          Social
          {category === "social" ? <Tick /> : ""}
        </div>
      </Toggle>

      <Toggle
        className="h-8 bg-secondary text-white data-[state=on]:bg-primary data-[state=on]:text-white"
        onClick={() => handleToggle("code")}
        aria-pressed={category === "code"}
        data-state={category === "code" ? "on" : "off"}
      >
        <div className="flex gap-2 w-full h-full items-center">
          Code
          {category === "code" ? <Tick /> : ""}
        </div>
      </Toggle>

      <Toggle
        className="h-8 bg-secondary text-white data-[state=on]:bg-primary data-[state=on]:text-white"
        onClick={() => handleToggle("other")}
        aria-pressed={category === "other"}
        data-state={category === "other" ? "on" : "off"}
      >
        <div className="flex gap-2 w-full h-full items-center">
          Other
          {category === "other" ? <Tick /> : ""}
        </div>
      </Toggle>
    </div>
  );
};

export default CategoryList;
