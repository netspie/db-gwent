package entities

case class CardId(value: String)
case class Card(id: CardId, $type: CardType, rows: Set[CardRowType])

