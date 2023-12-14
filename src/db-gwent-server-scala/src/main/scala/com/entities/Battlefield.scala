package com.entities

case class Battlefield(
  closeRow: BattlefieldRow = BattlefieldRow(),
  rangedRow: BattlefieldRow = BattlefieldRow(),
  siegeRow: BattlefieldRow = BattlefieldRow()):

  def pointsTo1(row: CardRowType, id: String = ""): Boolean =
    row match
      case CardRowType.Close => closeRow.pointsTo1(id)
      case CardRowType.Ranged => rangedRow.pointsTo1(id)
      case CardRowType.Siege => siegeRow.pointsTo1(id)
      case _ => false

  def removeCardModifiersOfId(id: String): Boolean =
    Array(closeRow, rangedRow, siegeRow).forall:
      row => row.removeModifiersOfId(id)