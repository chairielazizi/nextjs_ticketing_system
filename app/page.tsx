import React from "react";
import TicketCard from "./(components)/TicketCard";
import { API_URL } from "@/libs/config";

type Props = {};

export interface Ticket {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  createdAt: string;
}

const getAllTickets = async () => {
  const response = await fetch(`${API_URL}/api/tickets`, {
    cache: "no-store",
  });
  const data = await response.json();
  // console.log(data);

  if (!response.ok) {
    console.error("Failed to get tickets");
    return { tickets: [] };
  }

  return data;
};

const Dashboard = async () => {
  const { tickets }: { tickets: Ticket[] } = await getAllTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  console.log(uniqueCategories);

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
