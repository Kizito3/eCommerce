import React, { useEffect, useState } from "react";

type CountDownProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  onEnd?: () => void;
};
type TimeLeftProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
export default function CountDown({
  days,
  hours,
  minutes,
  seconds,
}: CountDownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeftProps>({
    days,
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      updateCountDown();
    }, 1000);
    return () => clearInterval(timer);
  });

  const updateCountDown = () => {
    let { days, hours, minutes, seconds } = timeLeft;

    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else if (hours > 0) {
      hours--;
      minutes = 59;
      seconds = 59;
    } else if (days > 0) {
      days--;
      hours = 23;
      minutes = 59;
      seconds = 59;
    } else {
      // Trigger callback when countdown ends
      clearInterval(1000);
      return;
    }
    setTimeLeft({ days, hours, minutes, seconds });
  };
  return (
    <div>
      <div className="countdown-container flex justify-center gap-4">
        <TimeDisplay label="Days" value={timeLeft.days} showColon={true} />
        <TimeDisplay label="Hours" value={timeLeft.hours} showColon={true} />
        <TimeDisplay
          label="Minutes"
          value={timeLeft.minutes}
          showColon={true}
        />
        <TimeDisplay
          label="Seconds"
          value={timeLeft.seconds}
          showColon={false}
        />
      </div>
    </div>
  );
}

interface TimeDisplayProps {
  label: string;
  value: number;
  showColon: boolean; // Whether to show the colon
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  label,
  value,
  showColon,
}) => {
  return (
    <div className=" font-poppins">
      <div className=" text-xs">{label}</div>
      <div className="font-semibold md:text-4xl text-2xl">
        {value.toString().padStart(2, "0")}
        {showColon && <span className="text-[#DB4444]"> :</span>}
      </div>
    </div>
  );
};
