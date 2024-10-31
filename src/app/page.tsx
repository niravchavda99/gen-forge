import GenForge from "@/components/gen-forge/gen-forge";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <GenForge />
      </main>
    </div>
  );
}
