import Model from "@/components/utils/Model";
import classNames from "classnames";
import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

export type dropdownProps = ComponentProps & {
  rendering: { componentName: string };
  background: string;
  numberOfOptions: number;
  CloseBtn: boolean;
  isBackground: boolean;
};

const Dropdown = ({
  isBackground,
  numberOfOptions,
  CloseBtn,
}: dropdownProps) => {
  const [isClose, setIsClose] = React.useState(false);
  const [optionValue, setOptionValue] = React.useState("All Locations");

  const handleClose = (value: string) => {
    setOptionValue(value);
    setIsClose(false);
  };

  return (
    <div>
      <button
        className={classNames(
          "border rounded-[30px] px-3 py-2 flex items-center transition-colors duration-200",
          "hover:bg-slate-200 hover:text-slate-950",
          isClose && "bg-slate-950 text-white"
        )}
        onClick={() => setIsClose((prev) => !prev)}
      >
        <span>{optionValue}</span>
        <AiOutlineCaretDown
          className={classNames("ml-1", isClose && "rotate-180")}
        />
      </button>

      {isClose && (
        <Model
          isBackground={isBackground}
          setIsClose={setIsClose}
          closeBtn={CloseBtn}
          classes=""
        >
          <ul className="mt-1 cursor-pointer py-2">
            <li
              onClick={() => handleClose("All Locations")}
              className={classNames(
                "px-4 py-2",
                "hover:bg-slate-200 hover:text-slate-950"
              )}
            >
              All Locations
            </li>
            {Array(numberOfOptions)
              .fill(0)
              .map((v, idx) => (
                <li
                  onClick={() => handleClose("My Home " + (idx + 1))}
                  className={classNames(
                    "px-4 py-2",
                    "hover:bg-slate-200 hover:text-slate-950"
                  )}
                >
                  My Home {idx + 1}
                </li>
              ))}
          </ul>
        </Model>
      )}
    </div>
  );
};

export default Dropdown;
