package com.entities

enum class RowType {
    Any, Close, Ranged, CloseOrRanged, Siege, Leader
}

fun RowType.same(rowType: RowType): Boolean {
    if (this == rowType)
        return true

    fun isCloseOrRanged(row: RowType) = row == RowType.Close || row == RowType.Ranged

    return when (this) {
        RowType.CloseOrRanged -> isCloseOrRanged(rowType)
        else -> false
    } || when (rowType) {
        RowType.CloseOrRanged -> isCloseOrRanged(this)
        else -> false
    }
}