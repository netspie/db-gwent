package com.entities

case class CardId(value: String)
case class Card(
  id: CardId,
  $type: CardType,
  row: CardRowType)
