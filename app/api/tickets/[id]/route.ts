import Ticket from "@/app/models/Ticket";
import db from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

const LoadDb = async () => {
  await db();
};
LoadDb();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const ticketFound = await Ticket.findById(id);
    return NextResponse.json({ ticketFound }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();
  const data = body.ticketData;
  try {
    // const ticket = await Ticket.findByIdAndUpdate(id, request.body, {
    //   new: true,
    // });
    const ticket = await Ticket.findByIdAndUpdate(id, { ...data });
    return NextResponse.json(ticket, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Ticket deleted successfully" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
