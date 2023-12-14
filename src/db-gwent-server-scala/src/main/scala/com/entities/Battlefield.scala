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

  def getCards: Array[Card] =
    Array.concat(
      closeRow.cards.toArray, rangedRow.cards.toArray, siegeRow.cards.toArray)

  def getCardsOfName(name: String): Array[Card] =
    getCards.filter(card => card.name == name)

  def multiplyPointsOfCardsByName(name: String, row: CardRowType, id: String): Boolean =
    row match
      case CardRowType.Close => closeRow.multiplyPointsOfCardsByName(name, id)
      case CardRowType.Ranged => rangedRow.multiplyPointsOfCardsByName(name, id)
      case CardRowType.Siege => siegeRow.multiplyPointsOfCardsByName(name, id)
      case _ => false