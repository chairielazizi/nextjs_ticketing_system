import TicketForm from "@/app/(components)/TicketForm";
import { Ticket } from "@/app/page";
import { API_URL } from "@/libs/config";
import React from "react";

type Props = {};

const getTicketById = async (id: string): Promise<{ ticketFound: Ticket }> => {
  const res = await fetch(`${API_URL}/api/tickets/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch ticket");
  }
  return res.json();
};

const TicketPage = async ({ params }: { params: { id: string } }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData: { ticketFound: Ticket } | { _id: string } | null = null;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    console.log(updateTicketData);
    updateTicketData = updateTicketData.ticketFound;
    console.log(updateTicketData);
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return (
    <div>
      TicketPage {params.id}
      <TicketForm ticket={updateTicketData} />
    </div>
  );
};

export default TicketPage;
