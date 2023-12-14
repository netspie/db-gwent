package com.entities.abilities

import com.entities.Card
import com.entities.Player

class RemoveWeather_Ability : Ability {

    override fun apply(card: Card, player: Player, enemy: Player): Boolean =
        arrayOf(player, enemy).all{
            it.removeCardModifiersOfId(RowCardsToOne_Ability.Id)
        }

}
