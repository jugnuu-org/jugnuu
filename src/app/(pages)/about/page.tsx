'use client'

import { getAboutContent } from '@/app/lib/getText';
import { ContentSection } from '@/app/lib/types';
import Header from '@/components/header';
import Image from 'next/image';

const renderParagraphHelper = (paragraph: string, key: string) => {
  const parts = paragraph.split(/(<b>.*?<\/b>)/g);
  return parts.map((part, index) => {
    if (part.match(/<b>.*<\/b>/)) {
      const text = part.replace(/<\/?b>/g, '');
      return <strong key={`${key}-${index}`}>{text}</strong>;
    }

    return <span key={`${key}-${index}`}>{part} </span>;
  });
};

const renderParagraph = (paragraph: string, key: string) => {
  return <span>{renderParagraphHelper(paragraph, key)}</span>;
};

export default function About() {
  const content = getAboutContent();
  return (
    <div>
      <Header/>
      <div className="grid grid-cols-9 pt-20 text-green-786" style={{ backgroundImage: 'url(/banner.jpg)' }}>
        <div className="justify-self-center col-start-1 col-end-10">
          <Image src="/logo.svg" alt="Logo" width={150} height={150}/>
        </div>
        <div className="text-center bg-green-786 text-white p-5 col-start-2 col-span-2">
            <p className="text-6xl font-bold">{content.title}</p>
        </div>
      </div>

      <div className="grid grid-cols-9 bg-white text-green-786 pt-10">
        {content.sections.map((section: ContentSection) => (
          <div key={btoa(`${content.title}-${section.title}`)} className="grid grid-cols-subgrid col-span-9">
            <div className="p-6 col-start-1 col-span-9 text-center">
              <p className="text-5xl font-bold text-green-786">{section.title}</p>
            </div>
            {section.paragraphs.map((sectionParagraph: string, index: number) => (
              <div key={btoa(`${content.title}-${section.title}-paragraph-${index}`)} className="p-4 col-start-3 col-span-5">
                <p className="text-2xl text-green-786">{renderParagraph(sectionParagraph, btoa(`${content.title}-${section.title}-paragraph-${index}`))}</p>
              </div>
            ))}
            {section.subsections && section.subsections.length > 0 &&
            section.subsections.map((subSection: ContentSection) => (
              <div key={btoa(`${content.title}-${section.title}-${subSection.title}`)} className="grid grid-cols-subgrid col-span-9">
                <div className="p-4 col-start-3 col-span-5">
                  <p className="text-3xl font-bold text-green-786">{subSection.title}</p>
                </div>
                {subSection.paragraphs.map((subSectionParagraph: string, index: number) => (
                  <div key={btoa(`${content.title}-${section.title}-${subSection.title}-${index}`)} 
                  className="p-4 col-start-3 col-span-5">
                    <p className="text-xl text-green-786">{renderParagraph(subSectionParagraph, btoa(`${content.title}-${section.title}-${subSection.title}-${index}`))}</p>
                  </div>
                ))}
              </div>
            ))}
            {section.postParagraphs && section.postParagraphs.length > 0 &&
            section.postParagraphs.map((sectionPostParagraph: string, index: number) => (
              <div key={btoa(`${content.title}-${section.title}-postParagraph-${index}`)} className="p-4 col-start-3 col-span-5">
                <p className="text-2xl text-green-786">{renderParagraph(sectionPostParagraph, btoa(`${content.title}-${section.title}-postParagraph-${index}`))}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
