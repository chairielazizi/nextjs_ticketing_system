import db from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";
import Ticket from "../../models/Ticket";

const LoadDb = async () => {
  await db();
};
LoadDb();

export async function POST(request: NextRequest) {
  try {
    const { title, description, category, priority, progress, status, active } =
      await request.json();
    const ticket = await Ticket.create({
      title,
      description,
      category,
      priority,
      progress,
      status,
      active,
    });
    return NextResponse.json(ticket, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to create ticket", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
    if (tickets) {
      return NextResponse.json(tickets, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "No tickets found from backend" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
