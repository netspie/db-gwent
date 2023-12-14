package com.entities.abilities

import com.entities.Card
import com.entities.Player

class TightBond_Ability : Ability {

    override fun apply(card: Card, thisPlayer: Player, nextPlayer: Player): Boolean {
        var cardsAll = thisPlayer.getBattlingCardsOfName(card.name)
        var cardsOther = cardsAll.filterNot{ it.id == card.id }
        return !cardsOther.isEmpty() &&
                cardsOther.all{ it.addOriginalPoints(TightBond_Ability.Id) }
    }

    companion object {
        val Id = "tight-bond"
    }

}
