import Header from '@/components/header';

export default function ComingSoon() {
  return (
    <div className="h-screen overflow-hidden">
      <Header/>
      <div className="relative h-screen" style={{ backgroundImage: 'url(/banner.jpg)' }}>
        <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-50">
          <div className="absolute bottom-0 w-full h-3/5 text-center">
            <h1 className="text-white text-6xl">
              Coming Soon!
            </h1>
          </div>
        </div>
      </div>
    </div>
 );
}
