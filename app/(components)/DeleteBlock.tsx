import React from "react";
import {
  HiXCircle,
  HiArchiveBoxXMark,
  HiXMark,
  HiOutlineXCircle,
} from "react-icons/hi2";

type Props = {};

const DeleteBlock = (props: Props) => {
  return (
    <HiXCircle className="text-red-600 hover:cursor-pointer hover:text-red-500 text-xl" />
    // <HiArchiveBoxXMark className="text-red-600 hover:cursor-pointer hover:text-red-400" />
    // <HiXMark className="text-red-600 hover:cursor-pointer hover:text-red-500" />
  );
};

export default DeleteBlock;
