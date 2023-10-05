import React from "react";
import { IconType } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";

type Props = {
  title: string;
  icon: IconType;
};
const MainTitle = ({ title, icon }: Props) => {
  return (
    <div
      className={`flex flex-row gap-2 items-center w-fit border-scheme px-4 py-2 rounded-full font-medium uppercase text-sm`}
    >
      <AiOutlineHome className="font-medium" />
      <h5>{title}</h5>
    </div>
  );
};

export default MainTitle;
