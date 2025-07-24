import { ChartData } from "./component/Chart";
import { DataTable } from "./component/Table";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col gap-y-10 justify-center items-center px-10">
      <DataTable/>
      <ChartData/>
      
    </div>
  );
}
