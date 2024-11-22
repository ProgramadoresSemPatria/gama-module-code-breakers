import { Flow } from "./components/Flow";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className='h-full w-full'>
      <Header />

      <div className="h-[calc(100vh-48px)] w-full flex">
        <Flow />
        <Sidebar />
      </div>
    </div>
  );
}
