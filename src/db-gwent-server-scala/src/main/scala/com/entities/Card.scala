package com.entities

import com.basic.{Entity, t, removeIf}
import com.entities.abilities.Ability

case class CardId(value: String)
case class Card(
  id: CardId,
  name: String,
  $type: CardType,
  row: CardRowType,
  points: PointGroup = PointGroup(),
  abilities: Array[Ability]) extends Entity[CardId]:

  def hasWeatherAbility: Boolean =
    $type == CardType.Leader

  def pointsTo1(id: String = ""): Boolean =
    points.modifiers.addOne:
      PointGroupModifier(1, PointGroupModifierType.Constant, id)
    .isEmpty

  def removeModifier(id: String): Boolean =
    points.modifiers.removeIf:
      modifier => modifier.id == id
    .isDefined