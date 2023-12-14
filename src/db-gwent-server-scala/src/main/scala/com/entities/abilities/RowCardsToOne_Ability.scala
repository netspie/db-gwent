package com.entities.abilities

import com.entities.{CardRowType, Player, Card}

case class RowCardsToOne_Ability(
  row: CardRowType)
  extends Ability:

  def apply(card: Card, player: Player, enemy: Player): Boolean =
    Array(player, enemy).forall: p =>
      p.battleCardsTo1(row, RowCardsToOne_Ability.Id)

object RowCardsToOne_Ability:
  val Id = "row-cards-to-1"