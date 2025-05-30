export interface IAbilityProps {
  energyAmount: number;
  name: string;
  damage: number;
}

export interface IMusicCardProps {
  title: string;
  hp: number;
  imgSource: string;
  abilities: IAbilityProps[];
  cardColor: string;
  textColor: string;
}

export const musicCardData = [
  {
    title: "Tyler, the Creator",
    hp: 1200,
    imgSource:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400&auto=format&fit=crop",
    abilities: [{ energyAmount: 2, name: "Rumble", damage: 100 }],
    cardColor: "rgb(216, 132, 132)",
    textColor: "black",
  },
  {
    title: "Beyoncé",
    hp: 1500,
    imgSource:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop",
    abilities: [
      { energyAmount: 3, name: "Formation", damage: 150 },
      { energyAmount: 1, name: "Halo", damage: 50 },
    ],
    cardColor: "rgb(255, 215, 0)",
    textColor: "black",
  },
  {
    title: "Kendrick Lamar",
    hp: 1300,
    imgSource:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&auto=format&fit=crop",
    abilities: [
      { energyAmount: 2, name: "Humble", damage: 120 },
      { energyAmount: 4, name: "DNA", damage: 200 },
    ],
    cardColor: "rgb(70, 130, 180)",
    textColor: "white",
  },
  {
    title: "Billie Eilish",
    hp: 1100,
    imgSource:
      "https://images.unsplash.com/photo-1638913974023-cef988e81629?w=400&auto=format&fit=crop",
    abilities: [
      { energyAmount: 1, name: "Whisper", damage: 80 },
      { energyAmount: 2, name: "Bad Guy", damage: 100 },
    ],
    cardColor: "rgb(0, 128, 128)",
    textColor: "white",
  },
  {
    title: "The Weeknd",
    hp: 1400,
    imgSource:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400&auto=format&fit=crop",
    abilities: [
      { energyAmount: 3, name: "Blinding Lights", damage: 130 },
      { energyAmount: 2, name: "Starboy", damage: 110 },
    ],
    cardColor: "rgb(255, 69, 0)",
    textColor: "white",
  },
  {
    title: "Daft Punk",
    hp: 1250,
    imgSource:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop",
    abilities: [
      { energyAmount: 4, name: "Harder Better Faster", damage: 180 },
      { energyAmount: 1, name: "Robot Rock", damage: 60 },
    ],
    cardColor: "rgb(0, 0, 139)",
    textColor: "white",
  },
  {
    title: "Adele",
    hp: 1600,
    imgSource:
      "https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?w=400&auto=format&fit=crop",
    abilities: [
      { energyAmount: 3, name: "Rolling in the Deep", damage: 140 },
      { energyAmount: 2, name: "Hello", damage: 90 },
    ],
    cardColor: "rgb(178, 34, 34)",
    textColor: "white",
  },
  {
    title: "Travis Scott",
    hp: 1150,
    imgSource:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&auto=format&fit=crop",
    abilities: [
      { energyAmount: 2, name: "Sicko Mode", damage: 110 },
      { energyAmount: 3, name: "Goosebumps", damage: 130 },
    ],
    cardColor: "rgb(75, 0, 130)",
    textColor: "white",
  },
];
