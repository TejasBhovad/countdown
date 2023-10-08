const Countdown = ({
  primaryColor,
  secondaryColor,
  textColor,
  timeRemaining,
}) => {
  return (
    <div
      className="flex w-6/12 bg-primary rounded-md count sm:px-2 px-1"
      style={{ backgroundColor: primaryColor }}
    >
      {/* Countdown Tiles */}
      <div className="contain-tile w-1/4 h-full flex flex-col justify-center items-center pt-3 pb-1">
        <div
          className="bg-secondary aspect-square w-11/12 rounded-md flex justify-center items-center"
          style={{ backgroundColor: secondaryColor }}
        >
          <span
            className="transition count-text text-7xl font-bold text-white flex justify-center items-center"
            style={{ color: textColor }}
            suppressHydrationWarning={true}
          >
            {timeRemaining.days}
          </span>
        </div>
        <span
          className="transition count-other text-2xl font-semibold text-white flex justify-center items-center"
          style={{ color: textColor }}
        >
          Days
        </span>
      </div>

      <div className="contain-tile w-1/4 h-full flex flex-col justify-center items-center pt-3 pb-1">
        <div
          className="bg-secondary aspect-square w-11/12 rounded-md flex justify-center items-center"
          style={{ backgroundColor: secondaryColor }}
        >
          <span
            className="transition count-text text-7xl font-bold text-white flex justify-center items-center"
            style={{ color: textColor }}
            suppressHydrationWarning={true}
          >
            {timeRemaining.hours}
          </span>
        </div>
        <span
          className="transition count-other text-2xl font-semibold text-white flex justify-center items-center"
          style={{ color: textColor }}
        >
          Hours
        </span>
      </div>

      <div className="contain-tile w-1/4 h-full flex flex-col justify-center items-center pt-3 pb-1">
        <div
          className="bg-secondary aspect-square w-11/12 rounded-md flex justify-center items-center"
          style={{ backgroundColor: secondaryColor }}
        >
          <span
            className="transition count-text text-7xl font-bold text-white flex justify-center items-center"
            style={{ color: textColor }}
            suppressHydrationWarning={true}
          >
            {timeRemaining.minutes}
          </span>
        </div>
        <span
          className="transition count-other text-2xl font-semibold text-white flex justify-center items-center"
          style={{ color: textColor }}
        >
          Minutes
        </span>
      </div>

      <div className="contain-tile w-1/4 h-full flex flex-col justify-center items-center pt-3 pb-1">
        <div
          className="bg-secondary aspect-square w-11/12 rounded-md flex justify-center items-center"
          style={{ backgroundColor: secondaryColor }}
        >
          <span
            className="transition count-text text-7xl font-bold text-white flex justify-center items-center"
            style={{ color: textColor }}
            suppressHydrationWarning={true}
          >
            {timeRemaining.seconds}
          </span>
        </div>
        <span
          className="transition count-other text-2xl font-semibold text-white flex justify-center items-center"
          style={{ color: textColor }}
        >
          Seconds
        </span>
      </div>
    </div>
  );
};

export default Countdown;
