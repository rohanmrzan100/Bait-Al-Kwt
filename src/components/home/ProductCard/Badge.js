import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-[#dcab4f] w-[92px] h-[35px] text-gray-700 flex justify-center items-center text-base font-semibold  cursor-pointer">
      {text}
    </div>
  );
};

export default Badge;
