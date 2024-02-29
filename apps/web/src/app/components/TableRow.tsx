import Image from "next/image";
import carImage from "../../assets/images/unsplash__VCRYZKq8XU.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

type Status = "AVAILABLE" | "UNAVAILABLE";

type RowProps = {
  carName: String;
  nextReservation: Date;
  status: Status;
  rating: 1 | 2 | 3 | 4 | 5;
};

export function Row({ carName, nextReservation, status, rating }: RowProps) {
  return (
    <tr className="border-b p-2 h-14">
      <td className="carName">
        <div className="flex items-center gap-4 px-1">
          <Image alt="CarImage" src={carImage.src} width={48} height={48} />
          <span>{carName}</span>
        </div>
      </td>

      <td className="nextReserv">
        <span>
          {new Intl.DateTimeFormat("default", { dateStyle: "short" }).format(
            nextReservation
          )}
        </span>
      </td>

      <td className="status">
        <span>{status}</span>
      </td>

      <td>
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </td>

      <td>
        <BsThreeDotsVertical className="w-full self-center" size={24} />
      </td>
    </tr>
  );
}
