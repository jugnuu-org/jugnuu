export type ContentSection = {
  title: string,
  paragraphs: string[],
  subsections?: ContentSection[],
  postParagraphs?: string[],
  images?: string[],
};
  
export type HomeContent = {
  title: string,
  sections: ContentSection[],
};

export type WatchContent = {
  title: string,
  videoUrl: string,
};

export type ImpactContent = {
  title: string,
  sections: ContentSection[],
};

export type AboutContent = {
  title: string,
  sections: ContentSection[],
}

export type ComingSoonContent = {
  title: string,
};
