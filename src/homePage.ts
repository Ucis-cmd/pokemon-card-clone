import type { IMusicCardProps } from "./musicCardData";
import { renderMusicCard } from "./musicCard";

export const renderHomePage = (arr: IMusicCardProps[]) => {
  const container = document.createElement("div");
  container.id = "card-container";

  const musicCards = arr
    .map((card) => {
      return renderMusicCard(card);
    })
    .join("");

  container.innerHTML = `${musicCards}`;

  return container;
};
