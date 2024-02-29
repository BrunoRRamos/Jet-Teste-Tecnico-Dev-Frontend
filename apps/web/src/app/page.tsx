import { List } from "./components/list/List";
import { Table } from "./components/table/TableView";

type Data = {
  carName: String;
  nextReservation: Date;
  status: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
};

const mockData: Data = {
  carName: "Mini Cooper 2020",
  nextReservation: new Date("2024-11-08"),
  status: true,
  rating: 5,
};

const mockDataArray: Data[] = Array(5).fill(mockData);

export default function Page() {
  return (
    <>
      <div className="w-full p-4 md:flex hidden">
        {" "}
        <Table data={mockDataArray} />
      </div>
      <div>
        <div className="w-full p-1 md:hidden flex">
          <List data={mockDataArray} />
        </div>
      </div>
    </>
  );
}
