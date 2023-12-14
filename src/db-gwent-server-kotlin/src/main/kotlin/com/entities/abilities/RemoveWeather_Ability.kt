package com.entities.abilities

import com.entities.Card
import com.entities.Player

class RemoveWeather_Ability : Ability {

    override fun apply(card: Card, thisPlayer: Player, nextPlayer: Player): Boolean =
        arrayOf(thisPlayer, nextPlayer).all{
            it.removeCardModifiersOfId(RowCardsToOne_Ability.Id)
        }

}
