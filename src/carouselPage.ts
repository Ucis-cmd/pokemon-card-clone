import { renderMusicCardElement } from "./musicCard";
import { type IMusicCardProps } from "./musicCardData";

interface ICarouselCardProps {
  prevClass?: string;
  currClass?: string;
  nextClass?: string;
}

class CarouselIndex {
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

const renderButton = (onClick: () => void, symbol: string) => {
  const button = document.createElement("button");
  button.textContent = symbol;
  button.addEventListener("click", onClick);
  button.className = "carousel-button";
  return button;
};

export const renderCarouselPage = (arr: IMusicCardProps[]) => {
  console.log(arr);
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

  const prevCardIndex = new CarouselIndex(arr.length - 1, getArrLength);
  const currentCardIndex = new CarouselIndex(0, getArrLength);
  const nextCardIndex = new CarouselIndex(1, getArrLength);

  const renderCarouselCards = ({
    prevClass,
    currClass,
    nextClass,
  }: ICarouselCardProps) => {
    currentCardContainer.replaceChildren();
    currentCardContainer.append(
      renderMusicCardElement(arr[currentCardIndex.index], currClass)
    );

    prevCardContainer.replaceChildren();
    prevCardContainer.append(
      renderMusicCardElement(arr[prevCardIndex.index], prevClass)
    );

    nextCardContainer.replaceChildren();
    nextCardContainer.append(
      renderMusicCardElement(arr[nextCardIndex.index], nextClass)
    );
  };

  const previous = () => {
    prevCardIndex.decrement();
    currentCardIndex.decrement();
    nextCardIndex.decrement();
    renderCarouselCards({
      currClass: "curr-move-from-left",
      nextClass: "next-move-from-left",
    });
  };

  const next = () => {
    prevCardIndex.increment();
    currentCardIndex.increment();
    nextCardIndex.increment();
    renderCarouselCards({
      currClass: "curr-move-from-right",
      prevClass: "prev-move-from-right",
    });
  };

  const leftButton = renderButton(previous, "<");
  const rightButton = renderButton(next, ">");

  renderCarouselCards({});

  container.appendChild(leftButton);
  container.appendChild(prevCardContainer);
  container.appendChild(currentCardContainer);
  container.appendChild(nextCardContainer);
  container.appendChild(rightButton);

  return container;
};
