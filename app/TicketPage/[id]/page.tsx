import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

type Props = {};

const TicketPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      TicketPage {params.id}
      <TicketForm />
    </div>
  );
};

export default TicketPage;
