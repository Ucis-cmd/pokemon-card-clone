import { renderMusicCard } from "./musicCard";
import { musicCardData, type IMusicCardProps } from "./musicCardData";

const renderButton = (onClick: () => void) => {
  const button = document.createElement("button");
  button.addEventListener("click", onClick);
  return button;
};

export const renderCarouselPage = (arr: IMusicCardProps[]) => {
  let currentCardIndex = 0;

  const currentCardContainer = document.createElement("div");
  currentCardContainer.id = "current-card";

  const container = document.createElement("div");
  container.id = "carousel-container";

  const renderCurrentCard = () => {
    currentCardContainer.innerHTML = renderMusicCard(
      musicCardData[currentCardIndex]
    );
  };

  renderCurrentCard();

  const previous = () => {
    if (currentCardIndex !== 0) {
      currentCardIndex--;
      renderCurrentCard();
    } else {
      currentCardIndex = arr.length - 1;
      renderCurrentCard();
    }
  };

  const next = () => {
    if (currentCardIndex !== musicCardData.length - 1) {
      currentCardIndex++;
      renderCurrentCard();
    } else {
      currentCardIndex = 0;
      renderCurrentCard();
    }
  };

  const leftButton = renderButton(previous);
  const rightButton = renderButton(next);

  container.appendChild(leftButton);
  container.appendChild(currentCardContainer);
  container.appendChild(rightButton);

  return container;
};
