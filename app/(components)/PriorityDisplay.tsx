import React from "react";
import { HiFire } from "react-icons/hi2";

type Props = {
  priority: number;
};

const PriorityDisplay = ({ priority }: Props) => {
  return (
    <div className="flex flex-row text-xl">
      <HiFire
        className={`pr-1 ${
          priority > 0 ? "text-orange-400" : "text-slate-500"
        } `}
      />
      <HiFire
        className={`pr-1 ${
          priority > 1 ? "text-orange-400" : "text-slate-500"
        } `}
      />
      <HiFire
        className={`pr-1 ${
          priority > 2 ? "text-orange-400" : "text-slate-500"
        } `}
      />
      <HiFire
        className={`pr-1 ${
          priority > 3 ? "text-orange-400" : "text-slate-500"
        } `}
      />
      <HiFire
        className={`pr-1 ${
          priority > 4 ? "text-orange-400" : "text-slate-500"
        } `}
      />
    </div>
  );
};

export default PriorityDisplay;
