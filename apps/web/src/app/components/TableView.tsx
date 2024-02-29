import { Row } from "./TableRow";

type Data = {
  carName: String;
  nextReservation: Date;
  status: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
};

type TableProps = { data: Data[] };

export function Table({ data }: TableProps) {
  return (
    <table className="w-full">
      <thead className="bg-slate-200">
        <tr className="[&>th]:text-start [&>th]:p-4 border-b-2 border-slate-400 text-gray-500">
          <th>Car</th>
          <th>Next Reservation</th>
          <th>Status</th>
          <th>Rating</th>
          <th className="w-[5%]">Actions</th>
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
