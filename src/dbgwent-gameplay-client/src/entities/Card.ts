export default class Card {
  id: CardId;
  name: string;
  points: number;
  fraction: string;
  rowType: RowType;
  cardType: CardType;
  abilities: Ability[];
  played: boolean = false;

  constructor(
    id: CardId,
    name: string,
    points: number,
    fraction: string,
    rowType: RowType,
    cardType: CardType,
    abilities: Ability[]
  ) {
    this.id = id;
    this.name = name;
    this.points = points;
    this.fraction = fraction;
    this.rowType = rowType;
    this.cardType = cardType;
    this.abilities = abilities;
  }

  public play(): boolean {
    if (this.played) return false
    this.played = true
    return true
  }
}

export class CardId {
  readonly value: string
  constructor(value: string) {
    this.value = value
  }
}