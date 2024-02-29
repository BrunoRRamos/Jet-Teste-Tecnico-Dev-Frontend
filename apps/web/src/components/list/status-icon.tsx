import { HiOutlineCheckCircle } from "react-icons/hi";
import { HiOutlineXCircle } from "react-icons/hi";

interface StatusIconProps {
  available: boolean;
};

const setStatusIcon = (status: boolean) => {
  return status ? (
    <HiOutlineCheckCircle color=" rgb(22 163 74)" size={24} />
  ) : (
    <HiOutlineXCircle color="rgb(220 38 38)" size={24} />
  );
};

export function StatusIcon({ available }: StatusIconProps) {
  return (
    <span className="absolute top-0 left-0 w-1/2 h-1/2 opacity-75">
      {setStatusIcon(available)}
    </span>
  );
}
