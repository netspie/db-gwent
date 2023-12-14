package com.entities.abilities

import com.entities.Card
import com.entities.Player

interface Ability {
    fun apply(card: Card, player: Player, enemy: Player): Boolean
}
