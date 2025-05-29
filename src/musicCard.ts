import type { IMusicCardProps } from "./musicCardData";

const renderAbilitites = (card: IMusicCardProps) => {
  return card.abilities
    .map((ability) => {
      return `<div class="ability">
        <p class="energy-amount">${ability.energyAmount}</p> 
        <p class="ability-title">${ability.name}</p>
        <p class="damage">${ability.damage}</p>
      </div>`;
    })
    .join("");
};

export const renderMusicCard = (card: IMusicCardProps, className?: string) => {
  const abilityElements = renderAbilitites(card);

  return `<div class="card ${className}" style="background-color:${card.cardColor};--text-color:${card.textColor}">
    <div class="card-header">
      <h1 class="card-title">${card?.title}</h1>
      <p>${card?.hp}hp</p>
    </div>
      <img class="card-img" src=${card.imgSource}></img>
      ${abilityElements}
      </div>`;
};
