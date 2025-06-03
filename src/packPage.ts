import { renderCarouselPage } from "./carouselPage";
import type { IMusicCardProps } from "./musicCardData";

export const renderPackPage = (arr: IMusicCardProps[]) => {
  let randomCards: IMusicCardProps[] = [];
  for (let i = 0; i < 3; i++) {
    randomCards.push(arr[Math.round(Math.random() * (arr.length - 1))]);
  }
  return renderCarouselPage(randomCards);
};
