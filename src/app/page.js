import { MainBody } from "./components/Body";
import { FolderStructure } from "./components/FolderStructure";
import { Navbar } from "./components/Navbar";
import { UploadCode } from "./components/UploadCode";

export default function Home() {
  return (
    <main className="p-8">
      <Navbar />
      <UploadCode />
      <div className="flex gap-8">
        <FolderStructure />
        <MainBody />
      </div>
    </main>
  );
}
