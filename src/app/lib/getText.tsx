import content from "./content.json";
import { AboutContent, ComingSoonContent, HomeContent, WatchContent, ImpactContent } from "./types";

export const getHomeContent = (): HomeContent => {
    return content.home;
};

export const getWatchContent = (): WatchContent => {
    return content.watch;
};

export const getImpactContent = (): ImpactContent => {
    return content.impact;
};

export const getAboutContent = (): AboutContent => {
    return content.about;
};

export const getComingSoonContent = (): ComingSoonContent => {
    return content.comingSoon;
}
