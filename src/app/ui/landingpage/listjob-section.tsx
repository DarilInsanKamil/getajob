import { DataJob } from "@/app/lib/definitions";
import CardJob from "../job/card";

export default function ListJobSection({ dataJob }: any) {
  return (
    <>
      {dataJob?.data.map((data: DataJob, key: number | string) => {
        return <CardJob key={key} title={data.title} />;
      })}
    </>
  );
}
