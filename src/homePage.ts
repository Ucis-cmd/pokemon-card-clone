import type { IMusicCardProps } from "./musicCardData";
import { renderMusicCard } from "./musicCard";

export const renderHomePage = (arr: IMusicCardProps[]) => {
  const musicCards = arr
    .map((card) => {
      return renderMusicCard(card);
    })
    .join("");

  return `<div id="card-container">${musicCards}</div>`;
};
