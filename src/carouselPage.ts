import { renderMusicCard } from "./musicCard";
import type { IMusicCardProps } from "./musicCardData";

const renderButton = () => {
    
}

export const renderCarouselPage = (arr: IMusicCardProps[]) => {
  let currentCardIndex = 0;
  const currentCard = renderMusicCard(arr[currentCardIndex]);


  return `<div id="carousel-container">${currentCard}</div>`;
};
