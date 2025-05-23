import Header from "@/components/header";
import Image from "next/image";
import { getHomeContent } from "./lib/getText";
import { ContentSection } from "./lib/types";

export default function Home() {
  const content = getHomeContent();
  return (
    <div className="h-screen overflow-hidden">
      <Header/>
      <div className="relative h-screen" style={{ backgroundImage: 'url(/banner.jpg)' }}>
        <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-20">
            <div className="grid grid-cols-9 text-white">
              <div className="justify-self-center col-start-1 col-end-10 h-[50vh] flex">
                <Image src="/logo.svg" alt="Logo" width={200} height={200}/>
              </div>
              {content.sections.map((section: ContentSection) => (
                <div key={`${content.title}-${section.title}`} className="col-start-3 col-span-5">
                  <div className="p-4 text-5xl font-bold bg-white text-green-786">{section.title}</div>
                  {section.paragraphs.map((sectionParagraph: string, index: number) => (
                    <div key={`${content.title}-${section.title}-${index}`} className="p-4 text-2xl bg-green-786 text-white bg-opacity-35">{sectionParagraph}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}
