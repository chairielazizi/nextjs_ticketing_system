"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

const TicketForm = (props: Props) => {
  const router = useRouter();
  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement
    >
  ) => {
    const value = e.target.value;
    const name = e.target.name;

    setTicketData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ticketData.title || !ticketData.description) {
      alert("Please fill in all fields");
    }
    const response = await fetch(`/api/tickets`, {
      method: "POST",
      body: JSON.stringify(ticketData),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware",
  };
  const [ticketData, setTicketData] = React.useState(startingTicketData);
  return (
    <div>
      <form className="flex flex-col gap-3 w-1/2" onSubmit={handleSubmit}>
        <h3>Create Your Ticket</h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={ticketData.title}
          //   onChange={(e) =>
          //     setTicketData({ ...ticketData, title: e.target.value })
          //   }
          onChange={handleChange}
          required={true}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={ticketData.description}
          onChange={handleChange}
          required={true}
          rows={5}
        ></textarea>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={ticketData.category}
          onChange={handleChange}
        >
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="priority">Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            value={1}
            checked={ticketData.priority == 1}
            onChange={handleChange}
          />
          <label htmlFor="priority-1">1</label>
          <input
            type="radio"
            id="priority-2"
            name="priority"
            value={2}
            checked={ticketData.priority == 2}
            onChange={handleChange}
          />
          <label htmlFor="priority-2">2</label>
          <input
            type="radio"
            id="priority-3"
            name="priority"
            value={3}
            checked={ticketData.priority == 3}
            onChange={handleChange}
          />
          <label htmlFor="priority-3">3</label>
          <input
            type="radio"
            id="priority-4"
            name="priority"
            value={4}
            checked={ticketData.priority == 4}
            onChange={handleChange}
          />
          <label htmlFor="priority-4">4</label>
          <input
            type="radio"
            id="priority-5"
            name="priority"
            value={5}
            checked={ticketData.priority == 5}
            onChange={handleChange}
          />
          <label htmlFor="priority-5">5</label>
        </div>
        <label htmlFor="progress">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={ticketData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          onChange={handleChange}
          value={ticketData.status}
        >
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button className="btn text-default-text">Submit Ticket</button>
      </form>
    </div>
  );
};

export default TicketForm;
