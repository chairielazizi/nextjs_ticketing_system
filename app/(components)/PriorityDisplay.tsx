import React from "react";
import { HiFire } from "react-icons/hi2";

type Props = {};

const PriorityDisplay = (props: Props) => {
  return (
    <div className="flex flex-row text-orange-400">
      <HiFire />
      <HiFire />
      <HiFire />
      <HiFire />
      <HiFire />
    </div>
  );
};

export default PriorityDisplay;
