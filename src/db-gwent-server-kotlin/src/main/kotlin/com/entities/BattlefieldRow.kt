package com.entities

class BattlefieldRow(
    private val cards: MutableList<Card> = mutableListOf(),
    var modifierCard: Card? = null) {

    fun cards(): Array<Card> = cards.toTypedArray()

    fun addCard(card: Card): Boolean =
        cards.add(card)

    fun pointsTo1(id: String = ""): Boolean =
        cards.all{ it.pointsTo1() }

    fun removeModifiersOfId(id: String): Boolean =
        cards.all{ it.removeModifier(id) }

    fun addOriginalPointsToCards(name: String, id: String): Boolean =
        cards.filter{ it.name == name }.all{ it.addOriginalPoints(id) }

    fun multiplyPointsOfCards(factor: Int, id: String): Boolean =
        cards.all { it.multiplyPoints(factor, id) }

    fun contains(cardId: CardId): Boolean = cards.any { it.id == cardId }
}
