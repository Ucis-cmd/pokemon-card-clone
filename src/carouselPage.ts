import { renderMusicCardElement } from "./musicCard";
import { musicCardData, type IMusicCardProps } from "./musicCardData";

const renderButton = (onClick: () => void, symbol: string) => {
  const button = document.createElement("button");
  button.textContent = symbol;
  button.addEventListener("click", onClick);
  button.className = "carousel-button";
  return button;
};

class carouselIndex {
  index: number;
  getArrLength: () => number;
  constructor(initialIndex: number, getArrLength: () => number) {
    this.index = initialIndex;
    this.getArrLength = getArrLength;
  }
  decrement() {
    if (this.index !== 0) {
      this.index--;
    } else {
      this.index = this.getArrLength() - 1;
    }
    return this.index;
  }
  increment() {
    if (this.index === this.getArrLength() - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
    return this.index;
  }
}

export const renderCarouselPage = (arr: IMusicCardProps[]) => {
  const currentCardContainer = document.createElement("div");
  currentCardContainer.id = "current-card";

  const prevCardContainer = document.createElement("div");
  prevCardContainer.id = "previous-card";
  prevCardContainer.className = "carousel-bg-card-container";

  const nextCardContainer = document.createElement("div");
  nextCardContainer.id = "next-card";
  nextCardContainer.className = "carousel-bg-card-container";

  const container = document.createElement("div");
  container.id = "carousel-container";

  const getArrLength = () => {
    return arr.length;
  };

  const prevCardIndex = new carouselIndex(arr.length - 1, getArrLength);
  const currentCardIndex = new carouselIndex(0, getArrLength);
  const nextCardIndex = new carouselIndex(1, getArrLength);

  const renderCarouselCards = () => {
    currentCardContainer.replaceChildren();
    currentCardContainer.append(
      renderMusicCardElement(
        musicCardData[currentCardIndex.index],
        "moveFromLeft"
      )
    );

    prevCardContainer.replaceChildren();
    prevCardContainer.append(
      renderMusicCardElement(musicCardData[prevCardIndex.index])
    );

    nextCardContainer.replaceChildren();
    nextCardContainer.append(
      renderMusicCardElement(musicCardData[nextCardIndex.index], "moveRight")
    );
  };

  renderCarouselCards(); //move this down

  const previous = () => {
    prevCardIndex.increment();
    currentCardIndex.increment();
    nextCardIndex.increment();
    renderCarouselCards();
  };

  const next = () => {
    prevCardIndex.decrement();
    currentCardIndex.decrement();
    nextCardIndex.decrement();
    renderCarouselCards();
  };

  const leftButton = renderButton(previous, "<");
  const rightButton = renderButton(next, ">");

  container.appendChild(leftButton);
  container.appendChild(prevCardContainer);
  container.appendChild(currentCardContainer);
  container.appendChild(nextCardContainer);
  container.appendChild(rightButton);

  return container;
};
