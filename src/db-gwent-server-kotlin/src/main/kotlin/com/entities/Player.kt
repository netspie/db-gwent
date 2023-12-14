package com.entities

class Player(
    val id: PlayerId,
    val leaderCard: Card,
    val idleCards: MutableList<Card> = mutableListOf(),
    val handCards: MutableList<Card> = mutableListOf(),
    val battlefield: Battlefield = Battlefield()) {

    fun battleCardsTo1(row: RowType, id: String = ""): Boolean =
        battlefield.pointsTo1(row, id)

    fun getCard(cardId: CardId): Card? =
        (idleCards + handCards + battlefield.getCards() + leaderCard).find { it.id == cardId }

    fun getPlayableCard(cardId: CardId): Card? =
        (handCards + leaderCard).find { it.id == cardId }

    fun getBattlingCardsOfName(name: String): Array<Card> =
        battlefield.getCardsOfName(name)

    fun multiplyPointsOfBattleCardsByName(name: String, rowType: RowType, id: String): Boolean =
        battlefield.multiplyPointsOfCardsByName(name, rowType, id)

    fun removeCardModifiersOfId(id: String): Boolean =
        battlefield.removeCardModifiersOfId(id)
}

data class PlayerId(val value: String)
