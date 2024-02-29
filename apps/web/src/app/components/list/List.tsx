import { Card } from "./ListCard";

type Data = {
  carName: String;
  nextReservation: Date;
  status: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
};

type ListProps = { data: Data[] };

export function List({ data }: ListProps) {
  return (
    <ul className="w-full">
      {data.map((data, index) => {
        return (
          <Card
            carName={data.carName}
            nextReservation={data.nextReservation}
            rating={data.rating}
            status={data.status}
            key={index}
          />
        );
      })}
    </ul>
  );
}
