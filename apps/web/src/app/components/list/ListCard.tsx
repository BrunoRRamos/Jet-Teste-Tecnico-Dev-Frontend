import Image from "next/image";
import carImage from "../../../assets/images/unsplash__VCRYZKq8XU.png";
import { FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { StatusIcon } from "./StatusIcon";

type CardProps = {
  carName: String;
  nextReservation: Date;
  status: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
};

export function Card({ carName, nextReservation, status, rating }: CardProps) {
  return (
    <li>
      <div className="flex w-full p-1 justify-between h-24">
        <div className="relative">
          <StatusIcon available={status} />
          <Image
            className="w-full h-full"
            alt="CarImage"
            src={carImage.src}
            width={48}
            height={48}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold">{carName}</span>
          <span className="font-extralight text-xs">
            Next reservation:{" "}
            {new Intl.DateTimeFormat("en-US", {
              month: "2-digit",
              day: "2-digit",
            }).format(nextReservation)}
          </span>

          <div className="flex gap-1 p-1 ps-0">
            {Array.from({ length: rating }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>

        <BsThreeDotsVertical className="" size={24} />
      </div>
      <hr />
    </li>
  );
}
