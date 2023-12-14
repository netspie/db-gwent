package com.entities

class PointGroupModifier(
    val value: Int = 0,
    val type: PointGroupModifierType,
    val id: String = "",
    val getOriginalValue: () -> Int) {

    fun modify(points: Int): Int {
        return when (type) {
            PointGroupModifierType.Add -> points + value
            PointGroupModifierType.Multiply -> points * value
            PointGroupModifierType.MultiplyOriginal -> points + getOriginalValue()
            PointGroupModifierType.Constant -> value
            else -> points
        }
    }
}

enum class PointGroupModifierType {
    Add, Multiply, MultiplyOriginal, Constant
}
