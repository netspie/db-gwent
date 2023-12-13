package com.entities

import scala.collection.mutable.ListBuffer
import com.basic.{Entity, removeIf, ifOkThen, hasSameId}

case class PlayerId(value: String)
case class Player(
   id: PlayerId,
   idleCards: ListBuffer[Card] = ListBuffer(),
   handCards: ListBuffer[Card] = ListBuffer()) extends Entity[PlayerId]:

  def playCard(cardId: CardId, row: TargetRowType = null): Boolean =
    idleCards
      .removeIf(hasSameId(cardId))
      .ifOkThen: card =>
        handCards.addOne(card)
        row.is(card.row)
