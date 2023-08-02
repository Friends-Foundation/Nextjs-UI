import classNames from "classnames";
import React from "react";
import { GrClose } from "react-icons/gr";

export type modelProps = {
  children: React.ReactNode;
  closeBtn: boolean;
  setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
  classes?: string;
  isBackground: boolean;
};

const Model = ({
  children,
  closeBtn,
  setIsClose,
  classes,
  isBackground,
}: modelProps) => {
  return (
    <>
      {/* Close Background: by Clicking outside model this will help to close */}
      <div
        className={classNames(
          `z-[9] opacity-5 absolute w-full h-full top-0 left-0`,
          isBackground && "bg-slate-950 "
        )}
        onClick={() => setIsClose((prev) => !prev)}
      ></div>
      <div
        className={classNames(
          `relative z-10 bg-white shadow-md w-fit rounded-md `,
          classes
        )}
      >
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
      className={` bg-white shadow-md rounded-full w-[25px] h-[25px] absolute -top-3 right-0 flex items-center justify-center cursor-pointer`}
      onClick={() => setIsClose((prev) => !prev)}
    >
      <GrClose />
    </span>
  );
};
export default Model;
