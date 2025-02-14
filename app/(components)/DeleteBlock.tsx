"use client";

import { API_URL } from "@/libs/config";
import { useRouter } from "next/navigation";
import React from "react";
import {
  HiXCircle,
  HiArchiveBoxXMark,
  HiXMark,
  HiOutlineXCircle,
} from "react-icons/hi2";

type Props = {
  id: string;
};

const DeleteBlock = ({ id }: Props) => {
  const router = useRouter();
  const handleDelete = async () => {
    const response = await fetch(`${API_URL}/api/tickets/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("Ticket deleted");
      router.refresh();
    }
  };
  return (
    // <HiXCircle className="text-red-600 hover:cursor-pointer hover:text-red-500 text-xl" />
    // <HiArchiveBoxXMark className="text-red-600 hover:cursor-pointer hover:text-red-400" />
    <HiXMark
      onClick={handleDelete}
      className="text-red-600 hover:cursor-pointer hover:text-red-500 text-xl"
    />
  );
};

export default DeleteBlock;
