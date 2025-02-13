import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

type Props = {};

const TicketCard = (props: Props) => {
  return (
    <div>
      <DeleteBlock />
      <PriorityDisplay />
      <ProgressDisplay />
      <StatusDisplay />
    </div>
  );
};

export default TicketCard;
