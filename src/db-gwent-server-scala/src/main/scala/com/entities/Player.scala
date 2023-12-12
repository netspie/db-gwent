package com.entities

import scala.collection.mutable.ListBuffer
import com.basic.removeIf

case class PlayerId(value: String)
case class Player(
   id: PlayerId,
   idleCards: ListBuffer[Card] = ListBuffer(),
   handCards: ListBuffer[Card] = ListBuffer()):

  def playCard(cardId: CardId, row: TargetRowType = null): Boolean =
    val card = idleCards.removeIf(c => c.id == cardId)
    handCards.addOne(card)
    row.is(card.row)
