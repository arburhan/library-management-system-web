import Banner from "@/components/home/banner";
import Departments from "@/components/home/department/departments";
import OpeningHour from "@/components/home/openingHour";


export default function Home() {
  return (
    <main className="max-w-[1800px]">
      <Banner />
      <OpeningHour />
      <Departments />
    </main>
  );
}
