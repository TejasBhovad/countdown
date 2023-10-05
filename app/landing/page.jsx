import Navbar from "@/components/Navbar";
import BigClock from "@/components/logos/BigClock";
// TODO: ADD MAX AND MIN HEIGHT
const page = () => {
  return (
    <div className="w-full h-full flex-col">
      <Navbar />
      <div className="w-full h-full pt-12 flex justify-center items-center">
        <div className="w-5/6 h-5/6 flex landing">
          <div className="landing-c w-1/2 h-full flex justify-center items-center">
            <div className="bg-secondary w-3/4 aspect-square rounded-lg flex justify-center items-center">
              <BigClock />
            </div>
          </div>
          <div className="landing-c w-1/2 h-full flex justify-center items-center">
            <div className="w-3/4 aspect-square flex-col rounded-lg flex justify-start py-2 items-center gap-4">
              <span className="text-4xl text-primary font-semibold">
                Elevate events with Easy to create event Countdowns
              </span>
              <span className="text-xl text-primary font-regular">
                Craft unforgettable events with anticipation-driven engagement
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // URL: http://localhost:3000/landing
};

export default page;
