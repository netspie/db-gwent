package com.entities

import scala.collection.mutable.ListBuffer

case class BattlefieldRow(
  cards: ListBuffer[Card] = ListBuffer(),
  modifierCard: Card = null)
