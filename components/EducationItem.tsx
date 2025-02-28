import React from "react";

interface Props {
  title: string;
  year: string;
}

const EducationItem = ({ title, year }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]">
        {year}
      </span>
      <h1 className="mt-[2rem] capitalize font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-semibold w-[80%] text-[18px] opacity-80 ">
        Bachelor of Sciences in Computer Science <br />
        GPA: 3.698/4.0
      </p>
    </div>
  );
};

export default EducationItem;
