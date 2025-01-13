import { getComingSoonContent } from '@/app/lib/getText';
import Header from '@/components/header';

export default function ComingSoon() {
  const content = getComingSoonContent();
  return (
    <div className="h-screen overflow-hidden">
      <Header/>
      <div className="relative h-screen" style={{ backgroundImage: 'url(/banner.jpg)' }}>
        <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-50">
          <div className="absolute bottom-0 w-full h-3/5 text-center">
            <p className="text-white text-7xl">
              {content.title}
            </p>
          </div>
        </div>
      </div>
    </div>
 );
}
