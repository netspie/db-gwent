package com.entities

import com.basic.Entity

case class CardId(value: String)
case class Card(
  id: CardId,
  $type: CardType,
  row: CardRowType) extends Entity[CardId]:

  def hasWeatherAbility: Boolean =
    $type == CardType.Leader
