import { algorithms } from "./algorithms";
import { GenForgeCard } from "@/components/gen-forge-card/gen-forge-card";

export default function GenForge() {
  return (
    <section className="w-full">
      <title>GenForge | Nirav Chavda</title>
      <h1 className="head-text text-center">
        <span className="blue-gradient_text font-semibold drop-shadow">
          GenForge
        </span>
      </h1>
      <div className="flex flew-row gap-4 flex-wrap justify-center mt-4">
        {algorithms.map((algorithm) => (
          <GenForgeCard key={algorithm.type} algorithm={algorithm} />
        ))}
      </div>
    </section>
  );
}
