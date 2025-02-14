import Link from "next/link";
import React from "react";
import { HiHome, HiTicket } from "react-icons/hi2";

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav className="flex items-center justify-between bg-nav py-2 px-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <HiHome className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <HiTicket className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-emerald-400">Airiel's Ticketing System</p>
      </div>
    </nav>
  );
};

export default Nav;
