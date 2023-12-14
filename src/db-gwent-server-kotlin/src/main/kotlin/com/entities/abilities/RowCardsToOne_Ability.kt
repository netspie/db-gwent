package com.entities.abilities

import com.entities.Card
import com.entities.Player
import com.entities.RowType

class RowCardsToOne_Ability(
    val row: RowType) : Ability {

    override fun apply(card: Card, thisPlayer: Player, nextPlayer: Player): Boolean =
        arrayOf(thisPlayer, nextPlayer).all{
            it.battleCardsTo1(row, Id)
        }

    companion object {
        val Id = "row-cards-to-1"
    }

}
