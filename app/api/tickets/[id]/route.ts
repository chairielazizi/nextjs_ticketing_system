import Ticket from "@/app/models/Ticket";
import db from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

const LoadDb = async () => {
  await db();
};
LoadDb();

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
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
