import Banner from "@/components/home/banner";
import Departments from "@/components/home/department/departments";
import OpeningHour from "@/components/home/openingHour";
import Recentbooks from "@/components/home/recentbooks/recentbooks";



export default function Home() {
  return (
    <main>

      <Banner />
      <OpeningHour />
      <Departments />
      <Recentbooks />
    </main>
  );
}
