'use client'

import Header from '@/components/header';
import Image from 'next/image';

export default function Donate() {
  return (
    <div>
      <Header/>
      <div className="bg-[url(/banner.jpg)]">
      <div className="bg-black bg-opacity-20">
      <div className="grid grid-cols-9 pt-20 text-green-786">
        <div className="justify-self-center col-start-1 col-end-10">
          <Image src="/logo.svg" alt="Logo" width={150} height={150}/>
        </div>
        <div className="text-center bg-green-786 text-white p-5 col-start-2 col-span-2">
            <p className="text-6xl font-bold">Donate</p>
        </div>
      </div>

      <div className="grid grid-cols-9 bg-white text-green-786 pt-10">
        <div className="p-6 col-start-1 col-span-9 text-center">
          <p className="text-4xl text-green-786 font-bold">Support Our Cause</p>
          <p className="text-green-786">Please note: all donations will be processed in USD</p>
        </div>
        <div className="p-6 col-start-4 col-span-3 flex justify-center items-center">
          <iframe
            src="https://donorbox.org/embed/jugnuu"
            allow="payment"
            className="w-96 h-[900px]"
          />
        </div>
        <div className="p-6 col-start-1 col-span-9 text-center">
          
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
