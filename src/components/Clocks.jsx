import React, { useEffect, useState } from "react";

export const Digit = ({ digitToShow }) => {
  const angles = {
    " ": { hour: 135, minute: 135 },
    "┘": { hour: 180, minute: 270 },
    "└": { hour: 0, minute: 270 },
    "┐": { hour: 90, minute: 180 },
    "┌": { hour: 0, minute: 90 },
    "-": { hour: 0, minute: 180 },
    "|": { hour: 90, minute: 270 },
  };

  const digits = {
    0: [
      "┌",
      "-",
      "-",
      "┐",
      "|",
      "┌",
      "┐",
      "|",
      "|",
      "|",
      "|",
      "|",
      "|",
      "|",
      "|",
      "|",
      "|",
      "└",
      "┘",
      "|",
      "└",
      "-",
      "-",
      "┘",
    ],

    1: [
      "┌",
      "-",
      "┐",
      " ",
      "└",
      "┐",
      "|",
      " ",
      " ",
      "|",
      "|",
      " ",
      " ",
      "|",
      "|",
      " ",
      "┌",
      "┘",
      "└",
      "┐",
      "└",
      "-",
      "-",
      "┘",
    ],

    2: [
      "┌",
      "-",
      "-",
      "┐",
      "└",
      "-",
      "┐",
      "|",
      "┌",
      "-",
      "┘",
      "|",
      "|",
      "┌",
      "-",
      "┘",
      "|",
      "└",
      "-",
      "┐",
      "└",
      "-",
      "-",
      "┘",
    ],

    3: [
      "┌",
      "-",
      "-",
      "┐",
      "└",
      "-",
      "┐",
      "|",
      " ",
      "┌",
      "┘",
      "|",
      " ",
      "└",
      "┐",
      "|",
      "┌",
      "-",
      "┘",
      "|",
      "└",
      "-",
      "-",
      "┘",
    ],

    4: [
      "┌",
      "┐",
      "┌",
      "┐",
      "|",
      "|",
      "|",
      "|",
      "|",
      "└",
      "┘",
      "|",
      "└",
      "-",
      "┐",
      "|",
      " ",
      " ",
      "|",
      "|",
      " ",
      " ",
      "└",
      "┘",
    ],

    5: [
      "┌",
      "-",
      "-",
      "┐",
      "|",
      "┌",
      "-",
      "┘",
      "|",
      "└",
      "-",
      "┐",
      "└",
      "-",
      "┐",
      "|",
      "┌",
      "-",
      "┘",
      "|",
      "└",
      "-",
      "-",
      "┘",
    ],

    6: [
      "┌",
      "-",
      "-",
      "┐",
      "|",
      "┌",
      "-",
      "┘",
      "|",
      "└",
      "-",
      "┐",
      "|",
      "┌",
      "┐",
      "|",
      "|",
      "└",
      "┘",
      "|",
      "└",
      "-",
      "-",
      "┘",
    ],

    7: [
      "┌",
      "-",
      "-",
      "┐",
      "└",
      "-",
      "┐",
      "|",
      " ",
      " ",
      "|",
      "|",
      " ",
      " ",
      "|",
      "|",
      " ",
      " ",
      "|",
      "|",
      " ",
      " ",
      "└",
      "┘",
    ],

    8: [
      "┌",
      "-",
      "-",
      "┐",
      "|",
      "┌",
      "┐",
      "|",
      "|",
      "└",
      "┘",
      "|",
      "|",
      "┌",
      "┐",
      "|",
      "|",
      "└",
      "┘",
      "|",
      "└",
      "-",
      "-",
      "┘",
    ],

    9: [
      "┌",
      "-",
      "-",
      "┐",
      "|",
      "┌",
      "┐",
      "|",
      "|",
      "└",
      "┘",
      "|",
      "└",
      "-",
      "┐",
      "|",
      "┌",
      "-",
      "┘",
      "|",
      "└",
      "-",
      "-",
      "┘",
    ],
  };

  const pattern = digits[digitToShow];


  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-0.5">
      {pattern.map((symbol, i) => {
        const { hour, minute } = angles[symbol] || angles[" "];
        return (
          <div
            key={i}
            className="w-6 lg:w-10 aspect-square bg-black border-2 border-lime-300/40 relative rounded-full"
          >
            <div
              style={{ rotate: `${hour}deg` }}
              className="h-0.5 w-1/2 bg-lime-300 absolute top-1/2 left-1/2 -translate-y-1/2 origin-left transform duration-300"
            ></div>
            <div
              style={{ rotate: `${minute}deg` }}
              className="h-0.5 w-1/2 bg-lime-300 absolute top-1/2 left-1/2 -translate-y-1/2 origin-left transform duration-300"
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export const Clock = ({ number }) => {
  const firstDigit = Math.floor(number / 10);
  const secondDigit = number % 10;

  return (
    <div className="flex items-center gap-2">
      <Digit digitToShow={firstDigit} />
      <Digit digitToShow={secondDigit} />
    </div>
  );
};

const Clocks = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours % 12;
  if (hours === 0) hours = 12;

  return (
    <div className=" py-10  flex items-center justify-center gap-3 lg:gap-7">
      <Clock number={hours} />
      <div className="flex flex-col gap-3">
        <div className="w-3 aspect-square rounded-full bg-lime-300"></div>
        <div className="w-3 aspect-square rounded-full bg-lime-300"></div>
      </div>
      <Clock number={minutes} />
      <div className="flex flex-col gap-3">
        <div className="w-3 aspect-square rounded-full bg-lime-300"></div>
        <div className="w-3 aspect-square rounded-full bg-lime-300"></div>
      </div>
      <Clock number={seconds} />
    </div>
  );
};

export default Clocks;
