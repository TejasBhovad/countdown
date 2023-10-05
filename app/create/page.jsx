import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="w-full h-full flex-col">
      <Navbar />
      <div className="w-full h-full pt-12 bg-red-100">Create Count</div>
    </div>
  );
  // URL: http://localhost:3000/landing
};

export default page;
