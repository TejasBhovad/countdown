import Link from "next/link";
const Sortby = ({ logo, link, cName }) => {
  return (
    <div className=" w-20 h-20 rounded-md bg-primary text-white py-2">
      <Link href={"category/" + link}>
        <div className="h-2/3 flex items-end justify-center">{logo}</div>
        <div className="text-center font-semibold text-lg h-1/3 items-start">
          {cName}
        </div>
      </Link>
    </div>
  );
};

export default Sortby;
