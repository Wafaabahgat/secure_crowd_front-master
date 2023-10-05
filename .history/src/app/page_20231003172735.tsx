import Clients from "@/components/home/Clients";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <main className="flex gap-5 blur__effect flex-col h-full">
      <Welcome />
      <Clients />
    </main>
  );
}
