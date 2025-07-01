import { MainBody } from "./components/Body";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main className="p-8">
      <Navbar />
      <MainBody />
    </main>
  );
}
