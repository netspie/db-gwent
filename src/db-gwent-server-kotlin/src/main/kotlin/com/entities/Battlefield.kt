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

    fun multiplyPointsOfCardsByName(name: String, row: RowType, id: String): Boolean =
        when (row) {
            RowType.Close -> closeRow.multiplyPointsOfCardsByName(name, id)
            RowType.Ranged -> rangedRow.multiplyPointsOfCardsByName(name, id)
            RowType.Siege -> siegeRow.multiplyPointsOfCardsByName(name, id)
            else -> false
        }
    }
