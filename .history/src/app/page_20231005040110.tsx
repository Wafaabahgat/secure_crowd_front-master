import Clients from "@/components/home/Clients";
import Welcome from "@/components/home/Welcome";
import Testing from "@/components/home/Testing";

export default function Home() {
  return (
    <main className="flex gap-5 blur__effect flex-col h-full">
      <Welcome />
      <Clients />
      <Testing />
      <Testing />
    </main>
  );
}
