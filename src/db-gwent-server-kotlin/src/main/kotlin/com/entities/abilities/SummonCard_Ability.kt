package com.entities.abilities

import com.entities.Card
import com.entities.Player
import com.entities.ok

class SummonCard_Ability : Ability {

    override fun apply(card: Card, thisPlayer: Player, nextPlayer: Player): Boolean {
        if (!thisPlayer.containsBattlingCard(card.id)) return false
        return thisPlayer.summonCard(card.row) == null
    }

    companion object {
        val Id = "summon-card"
    }

}
