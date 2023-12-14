package com.entities.abilities

import com.entities.{CardRowType, Player}

case class TightBond_Ability(
  row: CardRowType)
  extends Ability:

  def apply(player: Player, enemy: Player): Boolean =
    false//player.
