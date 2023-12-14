package com.entities

import scala.collection.mutable.ListBuffer

case class BattlefieldRow(
  cards: ListBuffer[Card] = ListBuffer(),
  modifierCard: Card = null):

  def pointsTo1(id: String = ""): Boolean =
    cards.forall:
      card => card.pointsTo1(id)

  def removeModifiersOfId(id: String): Boolean =
    cards.forall:
      card => card.removeModifier(id)

  def multiplyPointsOfCardsByName(name: String, id: String): Boolean =
    cards
      .filter(card => card.name == name)
      .forall(card => card.multiplyPoints(id))