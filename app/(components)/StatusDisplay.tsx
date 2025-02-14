import React from "react";

type Props = {
  status: string;
};

const getColour = (status: string) => {
  let colour = "bg-slate-700";
  switch (status.toLowerCase()) {
    case "done":
      colour = "bg-green-400";
      return colour;
    case "in progress":
      colour = "bg-yellow-400";
      return colour;
    case "not started":
      colour = "bg-red-300";
      return colour;
  }
};

const StatusDisplay = ({ status }: Props) => {
  return (
    <span
      className={`rounded-full text-sm px-2 py-1 font-semibold text-gray-800 ${getColour(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
