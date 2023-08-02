import { modelProps } from "./Model";

const modelData: modelProps = {
  closeBtn: true,
  isBackground: true,
  classes: "p-3",
  children: "Hello World",
  setIsClose: (value: React.SetStateAction<boolean>) => console.log(value),
};

export default modelData;
