import { StatusBadge } from "./components/StatusBadge";
import { Table } from "./components/TableView";

type Data = {
  carName: String;
  nextReservation: Date;
  status: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
};

const mockData: Data = {
  carName: "Mini Cooper 2020",
  nextReservation: new Date("2024-07-11"),
  status: true,
  rating: 5,
};

const mockDataArray: Data[] = Array(5).fill(mockData);

export default function Page() {
  return (
    <div className="p-4">
      <Table data={mockDataArray} />
    </div>
  );
}
