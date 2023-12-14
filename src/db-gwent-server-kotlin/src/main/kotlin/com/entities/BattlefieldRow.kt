package com.entities

class BattlefieldRow(
    val cards: MutableList<Card> = mutableListOf(),
    modifierCard: Card? = null) {

    fun pointsTo1(id: String = ""): Boolean =
        cards.all{ it.pointsTo1() }

    fun removeModifiersOfId(id: String): Boolean =
        cards.all{ it.removeModifier(id) }

    fun multiplyPointsOfCardsByName(name: String, id: String): Boolean =
        cards.filter{ it.name == name }.all{ it.multiplyPoints(id) }
}
