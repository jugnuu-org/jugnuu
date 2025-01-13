export type ContentSection = {
  title: string,
  paragraphs: string[],
  subsections?: ContentSection[],
  postParagraphs?: string[],
};
  
export type HomeContent = {
  title: string,
  sections: ContentSection[],
};

export type WatchContent = {
  title: string,
  videoUrl: string,
};

export type AboutContent = {
  title: string,
  sections: ContentSection[],
}

export type ComingSoonContent = {
  title: string,
};
