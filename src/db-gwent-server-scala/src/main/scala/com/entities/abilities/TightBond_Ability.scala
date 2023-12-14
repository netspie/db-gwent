package com.entities.abilities

import com.entities.{CardRowType, Player, Card}

case class TightBond_Ability()
  extends Ability:

  def apply(card: Card, player: Player, enemy: Player): Boolean =
    var cardsAll = player.getBattlingCardsOfName(card.name)
    var cardsOther = cardsAll.filterNot(c => c.id == card.id)
    !cardsOther.isEmpty && cardsOther.forall(card => card.multiplyPoints(TightBond_Ability.Id))

object TightBond_Ability:
  val Id = "tight-bond"