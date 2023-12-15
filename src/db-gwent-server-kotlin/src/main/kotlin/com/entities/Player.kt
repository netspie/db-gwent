package com.entities

import removeAndGetIf

fun Any?.notNull(): Boolean = this != null
inline fun Any?.ok(): Boolean = this != null

class Player(
    val id: PlayerId,
    val leaderCard: Card,
    val idleCards: MutableList<Card> = mutableListOf(),
    val handCards: MutableList<Card> = mutableListOf(),
    val battlefield: Battlefield = Battlefield()) {

    fun playCard(cardId: CardId, row: RowType? = null, enemy: Player): Boolean {
        val card = idleCards.removeAndGetIf{ it.id == cardId } ?: return false
        handCards.add(card)
        return true
    }

    fun multiplyCardRowPoints(cardId: CardId, factor: Int, id: String = ""): Boolean =
        battlefield.multiplyPointsOfCards(factor, getCardRow(cardId), id)

    fun battleCardsTo1(row: RowType, id: String = ""): Boolean =
        battlefield.pointsTo1(row, id)

    fun getCardRow(cardId: CardId): RowType =
        battlefield.getCardRow(cardId)

    fun getCard(cardId: CardId): Card? =
        (idleCards + handCards + battlefield.getCards() + leaderCard).find { it.id == cardId }

    fun getPlayableCard(cardId: CardId): Card? =
        (handCards + leaderCard).find { it.id == cardId }

    fun getBattlingCardsOfName(name: String): Array<Card> =
        battlefield.getCardsOfName(name)

    fun containsBattlingCard(cardId: CardId): Boolean =
        battlefield.contains(cardId)

    fun summonCard(row: RowType): Card? =
        idleCards
            .find{ it.summonable }
            .also{ it != null && battlefield.addCard(it, row) }

    fun multiplyPointsOfBattleCardsByName(name: String, rowType: RowType, id: String): Boolean =
        battlefield.addOriginalPointsToCardsByName(name, rowType, id)

    fun removeCardModifiersOfId(id: String): Boolean =
        battlefield.removeCardModifiersOfId(id)
}

data class PlayerId(val value: String)
