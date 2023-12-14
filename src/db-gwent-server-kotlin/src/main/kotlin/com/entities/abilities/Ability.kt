package com.entities.abilities

import com.entities.Card
import com.entities.Player

interface Ability {
    fun apply(card: Card, thisPlayer: Player, nextPlayer: Player): Boolean
}
