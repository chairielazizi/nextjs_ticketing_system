import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
