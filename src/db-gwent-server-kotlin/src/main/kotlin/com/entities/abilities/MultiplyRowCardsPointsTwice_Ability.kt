package com.entities.abilities

import com.entities.Card
import com.entities.Player

class MultiplyRowCardsPointsTwice_Ability : Ability {

    override fun apply(card: Card, thisPlayer: Player, nextPlayer: Player): Boolean =
        thisPlayer.multiplyCardRowPoints(card.id,2, Id)

    companion object {
        val Id = "multiply-row-cards-points-twice"
    }

}
