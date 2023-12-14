package com.entities.abilities

import com.entities.Card
import com.entities.Player

class TightBond_Ability : Ability {

    override fun apply(card: Card, player: Player, enemy: Player): Boolean {
        var cardsAll = player.getBattlingCardsOfName(card.name)
        var cardsOther = cardsAll.filterNot{ it.id == card.id }
        return !cardsOther.isEmpty() &&
                cardsOther.all{ it.multiplyPoints(TightBond_Ability.Id) }
    }

    companion object {
        val Id = "tight-bond"
    }

}
