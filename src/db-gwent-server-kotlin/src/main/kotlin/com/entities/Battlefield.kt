package com.entities

class Battlefield(
    val closeRow: BattlefieldRow = BattlefieldRow(),
    val rangedRow: BattlefieldRow = BattlefieldRow(),
    val siegeRow: BattlefieldRow = BattlefieldRow()) {

    fun pointsTo1(row: RowType, id: String = ""): Boolean =
        when (row) {
            RowType.Close -> closeRow.pointsTo1 (id)
            RowType.Ranged -> rangedRow.pointsTo1(id)
            RowType.Siege -> siegeRow.pointsTo1 (id)
            else -> false
        }

    fun removeCardModifiersOfId(id: String): Boolean =
        arrayOf(closeRow, rangedRow, siegeRow).all{
            it.removeModifiersOfId(id)
        }

    fun getCards(): Array<Card> =
        closeRow.cards.toTypedArray() +
        rangedRow.cards.toTypedArray() +
        siegeRow.cards.toTypedArray()

    fun getCardsOfName(name: String): Array<Card> =
        getCards().filter{ it.name == name }.toTypedArray()

    fun addOriginalPointsToCardsByName(name: String, row: RowType, id: String): Boolean =
        when (row) {
            RowType.Close -> closeRow.addOriginalPointsToCards(name, id)
            RowType.Ranged -> rangedRow.addOriginalPointsToCards(name, id)
            RowType.Siege -> siegeRow.addOriginalPointsToCards(name, id)
            else -> false
        }

    fun multiplyPointsOfCards(factor: Int, row: RowType, id: String): Boolean =
        when (row) {
            RowType.Close -> closeRow.multiplyPointsOfCards(factor, id)
            RowType.Ranged -> rangedRow.multiplyPointsOfCards(factor, id)
            RowType.Siege -> siegeRow.multiplyPointsOfCards(factor, id)
            else -> false
        }

    fun getCardRow(cardId: CardId): RowType {
        if (closeRow.contains(cardId)) return RowType.Close
        if (rangedRow.contains(cardId)) return RowType.Ranged
        if (siegeRow.contains(cardId)) return RowType.Siege
        return RowType.Any
    }
}
