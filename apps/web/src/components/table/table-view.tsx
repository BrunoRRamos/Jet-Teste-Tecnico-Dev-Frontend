import { Row } from "./table-row";

interface TableProps {
  data: {
    carName: string;
    nextReservation: Date;
    status: boolean;
    rating: 1 | 2 | 3 | 4 | 5;
  }[];
};

export function Table({ data }: TableProps) {
  return (
    <table className="w-full shadow-md rounded-l-lg ">
      <thead className="bg-gray-50 ">
        <tr className="[&>th]:text-start [&>th]:p-4 border-b-2 border-slate-400 text-gray-500">
          <th className="rounded-lg">Car</th>
          <th>Next Reservation</th>
          <th>Status</th>
          <th>Rating</th>
          <th className="w-[5%] rounded-r-lg">Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((data, index) => {
          return (
            <Row
              carName={data.carName}
              nextReservation={data.nextReservation}
              status={data.status}
              rating={data.rating}
              key={index}
            />
          );
        })}
      </tbody>
    </table>
  );
}
