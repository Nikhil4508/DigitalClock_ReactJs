import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-[#4E65FF] to-[#92EFFD] p-6">
      <div
        className="container w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] h-[200px] relative
        before:w-[100px] sm:before:w-[120px] md:before:w-[150px]
        before:h-[100px] sm:before:h-[120px] md:before:h-[150px]
        before:bg-[#FE9090] before:absolute before:top-[-30px] sm:before:top-[-40px] md:before:top-[-50px]
        before:left-[-30px] sm:before:left-[-40px] md:before:left-[-60px] before:rounded-full
        after:w-[100px] sm:after:w-[120px] md:after:w-[150px]
        after:h-[100px] sm:after:h-[120px] md:after:h-[150px]
        after:rounded-md after:bg-[#FF61D2] after:absolute after:bottom-[-30px] sm:after:bottom-[-40px] md:after:bottom-[-60px]
        after:right-[-30px] sm:after:right-[-40px] md:after:right-[-60px]"
      >
        <div
          className="clock relative w-full h-full bg-white/10 backdrop-blur-sm z-10 rounded-lg border
          flex items-center justify-center"
        >
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center p-4 ">
            {formatTime()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
