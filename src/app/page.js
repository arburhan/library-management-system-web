import Banner from "@/components/home/banner";
import Departments from "@/components/home/department/departments";
import OpeningHour from "@/components/home/openingHour";
import Recentbooks from "@/components/home/recentbooks/recentbooks";
import { NavbarComponent } from "@/components/shared/navbar";


export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <Banner />
      <OpeningHour />
      <Departments />
      <Recentbooks />
    </main>
  );
}
