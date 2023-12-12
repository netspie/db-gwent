package entities

import scala.collection.mutable.ListBuffer

case class PlayerId(value: String)
case class Player(
                   id: PlayerId,
                   idleCards: ListBuffer[Card] = ListBuffer(),
                   handCards: ListBuffer[Card] = ListBuffer()):

  def playCard(cardId: CardId, row: RowType = null): Boolean =
    val card = idleCards.remove(idleCards.indexWhere(c => c.id == cardId))
    row match
      case RowType.Close if card.rows.contains(RowType.Close) => println(RowType.Close).$true
      case RowType.Ranged if card.rows.contains(RowType.Ranged) => println(RowType.Ranged).$true
      case RowType.Siege if card.rows.contains(RowType.Siege) => println(RowType.Siege).$true
      case _ => println(false).$false