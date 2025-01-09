"use client"

import Header from '@/components/header';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube'

const Watch: React.FC = () => {
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
      <div className="relative h-screen" style={{ backgroundImage: 'url(/banner.jpg)' }}>
        <div className={`absolute bottom-0 w-full h-full bg-black ${isPlaying ? 'bg-opacity-75' : 'bg-opacity-50'} transition-all`}>
          <div className="flex items-center justify-center bottom-0 w-full h-5/6">
            <div className="relative w-4/5 h-4/5">
              {
                hasWindow &&
                <ReactPlayer
                  url="https://www.youtube.com/embed/gA2PpZbyXAk"
                  playing={isPlaying}
                  onPlay={() => handlePlayPause(true)}
                  onPause={() => handlePlayPause(false)}
                  width="100%"
                  height="100%"
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
