import React from "react";

type Props = {};

const ProgressDisplay = (props: Props) => {
  return (
    <div className="bg-gray-400 w-full rounded-full h-3">
      <div
        className="bg-sky-500 rounded-full h-3"
        style={{ width: "50%" }} //to set the percentage of the progress
      ></div>
    </div>
  );
};

export default ProgressDisplay;
