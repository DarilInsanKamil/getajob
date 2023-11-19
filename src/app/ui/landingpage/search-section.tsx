import { CategoryJobData } from "@/app/lib/definitions";
import { CategoryJob } from "@/app/lib/placeholder";
import SearchBar from "../searchbar";
export default function SearchSection() {
  return (
    <section className="px-5 py-10 flex flex-col items-center">
      <div className="text-center">
        <h3 className="text-2xl font-firacode">Find your dream job</h3>
        <p className="md:w-[500px] break-words">
          Daftar lowongan kerja terlengkap dan terbaru dari berbagai perusahaan
          di Indonesia
        </p>
      </div>
      <div className="mt-5 md:w-[920px] w-full">
        <SearchBar />
      </div>
      <ListCategory />
    </section>
  );
}

const ListCategory = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-2 mt-5">
      {CategoryJob.map((data: CategoryJobData, idx: number | string) => {
        return (
          <div
            className="px-4 py-2 border border-gray-600 text-center rounded-md hover:bg-gray-100 transition-all cursor-pointer"
            key={data.id}
          >
            <p className="align-middle">{data.type}</p>
          </div>
        );
      })}
    </div>
  );
};
