import content from "./content.json";

type ContentData = typeof content;

export const getText = (key: keyof ContentData | string): string => {
    const value = key.split('.').reduce((o, i) => (o as any)?.[i], content);
    return typeof value === "string" ? value : `Missing: ${key}`;
};
