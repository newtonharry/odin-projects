import { IoIosArrowForward } from "react-icons/io";
import "./RotatingArrow.css";

type Props = {
  isOpen: boolean;
};

const RotatingArrow = ({ isOpen }: Props) => {
  return (
    <div className={isOpen ? "open" : "close"}>
      <IoIosArrowForward />
    </div>
  );
};

export default RotatingArrow;
