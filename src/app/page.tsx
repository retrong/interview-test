import { ChartData } from "./component/Chart";
import { DataTable } from "./component/Table";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col gap-y-10 justify-center items-center md:px-10 px-4 py-10 w-full">
      <div className="w-full max-w-4xl">
        <DataTable/>
        <ChartData/>
      </div>
      
    </div>
  );
}
