import { TestimoniData } from "@/app/lib/definitions";
import { Testimoni } from "@/app/lib/placeholder";

export default function TestimoniSection() {
  return (
    <section>
      <CardTestimoni />
    </section>
  );
}

const CardTestimoni = () => {
  return (
    <div>
      {Testimoni.map((data: TestimoniData, idx: number | string) => {
        return (
          <div key={idx}>
            <p>{data.name}</p>
            <p>{data.comment}</p>
          </div>
        );
      })}
    </div>
  );
};
