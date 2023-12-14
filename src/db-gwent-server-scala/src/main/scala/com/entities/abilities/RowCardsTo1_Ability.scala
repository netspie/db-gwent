package com.entities.abilities

import com.entities.{CardRowType, Player}

case class RowCardsTo1_Ability(
  row: CardRowType)
  extends Ability:

  def apply(player: Player, enemy: Player): Boolean =
    Array(player, enemy).forall: p =>
      p.battleCardsTo1(row, RowCardsTo1_Ability.Id)

object RowCardsTo1_Ability:
  val Id = "row-cards-to-1"