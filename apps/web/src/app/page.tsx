import { Table } from "./components/TableView";

type Status = "AVAILABLE" | "UNAVAILABLE";

type Data = {
  carName: String;
  nextReservation: Date;
  status: Status;
  rating: 1 | 2 | 3 | 4 | 5;
};

const mockData: Data = {
  carName: 'Mini Cooper 2020',
  nextReservation: new Date('2024-07-11'),
  status: "AVAILABLE",
  rating: 5
};

const mockDataArray: Data[] = Array(6).fill(mockData);

export default function Page() {
    return <div className="p-4"><Table data={ mockDataArray }/></div>
};