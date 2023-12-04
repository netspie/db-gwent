import { create } from "zustand";

const imagePaths: string[] = [
  "bardock-ki-blast-1.jpg",
  "goku-genki-dama-1.jpg",
  "goku-kamehame-1.jpg",
  "vegeta-final-flash-1.jpg",
  "krillin-disc-1.jpg",
  "gohan-kame-1.png",
  "picollo-strike.jpg",
  "trunks-rage-1.jpg",
  "yamucha-wolf-1.jpg",
  "18-ball-1.jpg",
  "brolly-strike.png",
  "17-shield-1.jpg",
  "gotenks-kamikaze-1.png",
  "bulma.jpg",
  "ub-blast.png"
  //"karin-1.webp",
];

type CardRowVM = {
  cards: CardVM[];
};

type CardVM = {
  id: number;
  points: number;
  imagePath: string;
};

type GameState = {
  cardRows: CardRowVM[];
  addCard: (cardId: number, targetRow: number) => void;
};

export const useGameState = create<GameState>()((set, get) => ({
  cardRows: [
    { cards: [{ id: 1, points: 3, imagePath: imagePaths[0] }] },
    { cards: [{ id: 2, points: 3, imagePath: imagePaths[1] }] },
    { cards: [{ id: 3, points: 3, imagePath: imagePaths[2] }] },
    { cards: [{ id: 4, points: 3, imagePath: imagePaths[3] }] },
    { cards: [{ id: 5, points: 3, imagePath: imagePaths[4] }] },
    { cards: [{ id: 6, points: 3, imagePath: imagePaths[5] }] },
    {
      cards: imagePaths.slice(6, imagePaths.length).map((imagePath, i) => ({ id: i + 7, points: 3, imagePath })),
    },
  ],
  addCard: (cardId: number, targetRowIndex: number) => {
    const oldState = get();
    const state = { cardRows: oldState.cardRows, addCard: oldState.addCard };

    const row = state.cardRows.find((row) =>
      row.cards.find((x) => x.id === cardId)
    );

    const card = row?.cards
      .map((card, i) => ({ value: card, i }))
      .find((card) => card.value.id === cardId);

    if (!row || !card) return;
    row?.cards.splice(card.i, 1);
    state.cardRows[targetRowIndex].cards.push(card.value);

    set(state);
  },
}));
