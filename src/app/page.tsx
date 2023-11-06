import Clients from "@/components/home/Clients";
import Welcome from "@/components/home/Welcome";
import Testing from "@/components/home/Testing";
import Overview from "@/components/home/Overview";
import Hall from "@/components/home/Hall";
import Certified from "@/components/home/Certified";
import Why from "@/components/home/Why";
import What from "@/components/home/What";

export default function Home() {
  return (
    <main className="flex gap-5 blur__effect flex-col h-full">
      <Welcome />
      <Clients />
      <Testing />
      <Overview />
      <Hall />
      <Certified />
      <Why />
      <What />
    </main>
  );
}
