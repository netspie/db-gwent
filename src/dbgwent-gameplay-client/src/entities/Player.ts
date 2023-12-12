import Card, { CardId } from "./Card";

type BattlefieldRow = {
  weatherCard: Card | undefined;
  modifierCard: Card | undefined;
  cards: Card[];
};

type Battlefield = {
  closeRow: BattlefieldRow;
  rangedRow: BattlefieldRow;
  siegeRow: BattlefieldRow;
};

export default class Player {
  readonly id: PlayerId;
  readonly leaderCard: Card | undefined;
  readonly idleCards: Card[];
  readonly handsCards: Card[];
  readonly deadCards: Card[];
  readonly battlefield: Battlefield;

  constructor(
    id: PlayerId,
    leaderCard: Card,
    idleCards: Card[],
    handsCards: Card[],
    deadCards: Card[],
    battlefield: Battlefield
  ) {
    this.id = id;
    this.leaderCard = leaderCard;
    this.idleCards = idleCards;
    this.handsCards = handsCards;
    this.deadCards = deadCards;
    this.battlefield = battlefield;
  }

  public playCard(
    cardId: CardId,
    row: RowType | undefined = undefined
  ): boolean {
    if (cardId === this.leaderCard?.id) return this.leaderCard?.play();
    if (row === undefined) return false;

    const card = removeCardOfId(cardId, this.handsCards);
    if (!card) return false;

    if (canPlayToCloseRow(card, row))
      this.battlefield.closeRow.cards.push(card);
    else if (canPlayToRangedRow(card, row))
      this.battlefield.rangedRow.cards.push(card);
    else if (canPlayToSiegeRow(card, row))
      this.battlefield.siegeRow.cards.push(card);

    return true;
  }
}

function canPlayToCloseRow(card: Card, targetRow: RowType): boolean {
  return (
    targetRow === RowType.Close &&
    (card.rowType === RowType.Close || card.rowType === RowType.CloseOrRanged)
  );
}

function canPlayToRangedRow(card: Card, targetRow: RowType): boolean {
  return (
    targetRow === RowType.Ranged &&
    (card.rowType === RowType.Ranged || card.rowType === RowType.CloseOrRanged)
  );
}

function canPlayToSiegeRow(card: Card, targetRow: RowType): boolean {
  return targetRow === RowType.Siege && card.rowType === RowType.Siege;
}

function getCardOfId(cardId: CardId, cards: Card[]): Card | undefined {
  return cards.find((x) => x.id === cardId);
}

function removeCardOfId(cardId: CardId, cards: Card[]): Card | undefined {
  const i = cards.findIndex((x) => x.id === cardId);
  if (i == -1) return undefined;
  return cards.splice(i, 1)[0];
}

export class PlayerId {
  readonly value: string;
  constructor(value: string) {
    this.value = value;
  }
}
