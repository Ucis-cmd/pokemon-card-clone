import type { IMusicCardProps, IAbilityProps } from "./musicCardData";

const renderAbilityElement = (ability: IAbilityProps) => {
  const abilityDiv = document.createElement("div");
  abilityDiv.className = "ability";

  const energyAmount = document.createElement("p");
  energyAmount.className = "energy-amount";
  energyAmount.textContent = ability.energyAmount.toString();

  const abilityTitle = document.createElement("p");
  abilityTitle.className = "ability-title";
  abilityTitle.textContent = ability.name;

  const damage = document.createElement("p");
  damage.className = "damage";
  damage.textContent = ability.damage.toString();

  abilityDiv.append(energyAmount, abilityTitle, damage);
  return abilityDiv;
};

export const renderMusicCardElement = (
  card: IMusicCardProps,
  className?: string
) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = `card ${className || ""}`;
  cardDiv.style.backgroundColor = card.cardColor;
  cardDiv.style.setProperty("--text-color", card.textColor);

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";

  const cardTitle = document.createElement("h1");
  cardTitle.className = "card-title";
  cardTitle.textContent = card.title || "";

  const hp = document.createElement("p");
  hp.textContent = `${card.hp}hp`;

  cardHeader.append(cardTitle, hp);

  const cardImg = document.createElement("img");
  cardImg.className = "card-img";
  cardImg.src = card.imgSource;

  cardDiv.append(cardHeader, cardImg);

  card.abilities.forEach((ability) => {
    cardDiv.appendChild(renderAbilityElement(ability));
  });

  return cardDiv;
};
