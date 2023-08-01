
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useState } from "react";

export type ToggleProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: {};
  background: string;
};

const Toggle = ({ background }: ToggleProps): JSX.Element => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={`contentBlock bg-[${background}]`}>
      <label htmlFor="toggle" className="cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="peer absolute opacity-0 cursor-pointer"
            id="toggle"
            onChange={() => {
              setChecked(!checked);
            }}
          />
          <div
            className={`bg-white border-2 border-gray-400 flex relative justify-between items-center p-2 transition-all delay-300 peer-checked:bg-gray-600 w-16 h-8 rounded-full`}
          >
            <div
              className={`${
                checked ? "translate-x-full mx-1" : "border-2 border-orange-400"
              } transition-all delay-300 flex justify-center items-center bg-white  absolute left-1  w-6 h-6 rounded-full`}
            ></div>
            <BsMoonStarsFill
              className={`${
                !checked ? "invisible" : "block"
              } transition-all delay-300 `}
            />
            <BsSunFill
              className={` ${
                checked ? "invisible" : ""
              }  transition-all delay-300 text-orange-400`}
            />
          </div>
        </div>
      </label>
    </div>
  );
};

export default Toggle; 
