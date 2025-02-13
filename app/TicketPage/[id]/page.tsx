import React from "react";

type Props = {};

const TicketPage = ({ params }: { params: { id: string } }) => {
  return <div>TicketPage {params.id}</div>;
};

export default TicketPage;
