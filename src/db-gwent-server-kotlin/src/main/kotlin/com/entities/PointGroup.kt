package com.entities

class PointGroup(
    val originalValue: Int = 0,
    val modifiers: MutableList<PointGroupModifier> = mutableListOf()) {

    fun getCalculatedValue(): Int {
        return modifiers.fold(originalValue) {
            newPoints, modifier -> modifier.modify(newPoints)
        }
    }
}