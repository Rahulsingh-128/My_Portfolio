import Image from "next/image";
import Hero1 from "@/components/Hero1";
import Dashboard from "@/components/Dashboard";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center item-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full container mx-auto">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero1 />
        <Grid />
      </div>
    </main>
  );
}
