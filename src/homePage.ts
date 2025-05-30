import type { IMusicCardProps } from "./musicCardData";
import { renderMusicCardElement } from "./musicCard";

export const renderHomePage = (arr: IMusicCardProps[]) => {
  const container = document.createElement("div");
  container.id = "card-container";

  arr.forEach((card) => {
    container.appendChild(renderMusicCardElement(card));
  });

  return container;
};
