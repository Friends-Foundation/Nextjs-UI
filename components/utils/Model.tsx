import React from "react";
import { GrClose } from "react-icons/gr";

type modelProps = {
  children: React.ReactNode;
  closeBtn: boolean;
  setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
  classes: string;
};

const Model = ({ children, closeBtn, setIsClose, classes }: modelProps) => {
  return (
    <>
      <div
        className={`z-[9] absolute w-full h-full top-0 left-0 `}
        onClick={() => setIsClose((prev) => !prev)}
      ></div>
      <div className={`relative z-10 bg-slate-50 shadow-sm w-fit ${classes}`}>
        {/* cross Button */}
        {closeBtn && <CloseBtn setIsClose={setIsClose} />}
        {/* ...Rest Of Childrens */}
        {children}
      </div>
    </>
  );
};

const CloseBtn = ({ setIsClose }: Partial<modelProps>) => {
  if (!setIsClose) {
    return <></>;
  }
  return (
    <span
      className={`bg-red-500 rounded-full w-[25px] h-[25px] absolute -top-3 right-0 flex items-center justify-center `}
      onClick={() => setIsClose((prev) => !prev)}
    >
      <GrClose className="text-gray-50" />
    </span>
  );
};
export default Model;
