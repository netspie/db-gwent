package com.entities.abilities

import com.entities.Card
import com.entities.Player
import com.entities.RowType

class RowCardsToOne_Ability(
    val row: RowType) : Ability {

    override fun apply(card: Card, player: Player, enemy: Player): Boolean =
        arrayOf(player, enemy).all{
            it.battleCardsTo1(row, RowCardsToOne_Ability.Id)
        }

    companion object {
        val Id = "row-cards-to-1"
    }

}
