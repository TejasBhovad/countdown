import Navbar from "@/components/Navbar";
import BasicInfo from "@/components/BasicInfo";
const page = () => {
  return (
    <div className="w-full h-full flex-col">
      <Navbar />
      <div className="w-full h-full pt-12 ">
        <BasicInfo />
      </div>
    </div>
  );
  // URL: http://localhost:3000/landing
};

export default page;
