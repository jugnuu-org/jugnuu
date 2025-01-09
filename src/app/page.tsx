import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Header/>
      <div className="relative h-screen" style={{ backgroundImage: 'url(/banner.jpg)' }}>
        <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-50">
          <div className="absolute bottom-0 w-full h-4/5">
            <div className="grid grid-cols-1 gap-4 p-4 text-white">
              <div className="flex justify-center pb-[5rem]"><Image src="/logo.svg" alt="Logo" width={200} height={200}/></div>
              <div className="p-4 text-4xl text-center">Mission</div>
              <div className="p-4 text-xl text-center">Empower underprivileged children with essential skills for<br/>personal growth, self-reliance, and a brighter future</div>
              <div className="p-4 text-4xl text-center">Vision</div>
              <div className="p-4 text-xl text-center">A future where every child has the opportunity to learn and thrive</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
