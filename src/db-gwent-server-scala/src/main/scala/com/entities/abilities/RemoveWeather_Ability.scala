package com.entities.abilities

import com.entities.{CardRowType, Player, Card}

case class RemoveWeather_Ability()
  extends Ability:

  def apply(card: Card, player: Player, enemy: Player): Boolean =
    Array(player, enemy).forall:
      p => p.removeCardModifiersOfId(RowCardsToOne_Ability.Id)
