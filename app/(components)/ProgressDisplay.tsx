import React from "react";

type Props = {
  progress: number;
};

const ProgressDisplay = ({ progress }: Props) => {
  return (
    <div className="bg-gray-400 w-full rounded-full h-3">
      <div
        className="bg-sky-500 rounded-full h-3"
        style={{ width: `${progress}%` }} //to set the percentage of the progress
      ></div>
    </div>
  );
};

export default ProgressDisplay;
