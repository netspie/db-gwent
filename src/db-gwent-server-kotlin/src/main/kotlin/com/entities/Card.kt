package com.entities

import com.entities.abilities.Ability

class Card(
    val id: CardId,
    val name: String,
    val type: CardType,
    val row: RowType,
    val points: PointGroup = PointGroup(),
    val abilities: Array<Ability>) {

    fun pointsTo1(id: String = ""): Boolean =
        points.modifiers.add(
            PointGroupModifier(
                value = 1, PointGroupModifierType.Constant, id) { points.originalValue })

    fun addOriginalPoints(id: String): Boolean =
        points.modifiers.add(
            PointGroupModifier(
                value = 1, PointGroupModifierType.MultiplyOriginal, id) { points.originalValue })

    fun multiplyPoints(value: Int, id: String): Boolean =
        points.modifiers.add(
            PointGroupModifier(
                value, PointGroupModifierType.Multiply, id) { points.originalValue })

    fun removeModifier(id: String): Boolean =
        points.modifiers.removeIf { it.id == id }
}

data class CardId(val value: String)
