'use client'

import Header from '@/components/header';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube'
import Image from 'next/image';
import { getWatchContent } from '@/app/lib/getText';

const Watch: React.FC = () => {
  const content = getWatchContent();

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlayPause = (state: boolean): void => {
    setIsPlaying(state);
  };

  return (
    <div className="h-screen overflow-hidden">
      <Header/>
      <div className="bg-[url(/banner.jpg)]">
        <div className={`bg-black transition-all ${isPlaying ? "bg-opacity-75" : "bg-opacity-20"}`}>
          <div className="grid grid-cols-9 grid-rows-[auto,auto,1fr] min-h-screen pt-20">
            <div className="justify-self-center col-start-1 col-end-10">
              <Image src="/logo.svg" alt="Logo" width={150} height={150}/>
            </div>
            <div className="text-center bg-green-786 text-white p-5 col-start-2 col-span-2">
                <p className="text-6xl font-bold">{content.title}</p>
            </div>
            <div className="col-start-2 col-span-7 h-full">
              {
                hasWindow &&
                <ReactPlayer
                  url={content.videoUrl}
                  playing={isPlaying}
                  onPlay={() => handlePlayPause(true)}
                  onPause={() => handlePlayPause(false)}
                  width="100%"
                  height="95%"
                />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
 );
}

export default Watch;
