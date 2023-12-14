package com.entities.abilities

import com.entities.{CardRowType, Player}

case class RemoveWeather_Ability()
  extends Ability:

  def apply(player: Player, enemy: Player): Boolean =
    Array(player, enemy).forall:
      p => p.removeCardModifiersOfId(RowCardsTo1_Ability.Id)
