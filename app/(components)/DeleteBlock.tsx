import React from "react";
import { HiXCircle } from "react-icons/hi2";

type Props = {};

const DeleteBlock = (props: Props) => {
  return (
    <HiXCircle className="text-red-700 hover:cursor-pointer hover:text-red-400" />
  );
};

export default DeleteBlock;
