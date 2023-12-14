package com.entities

case class PointGroupModifier(
  value: Int = 0,
  $type: PointGroupModifierType,
  id: String = "",
  getOriginalValue: () => Int):

  def modify(points: Int): Int =
    $type match
      case PointGroupModifierType.Add => points + value
      case PointGroupModifierType.Multiply => points * value
      case PointGroupModifierType.MultiplyOriginal => points + getOriginalValue()
      case PointGroupModifierType.Constant => value

enum PointGroupModifierType:
  case Add, Multiply, MultiplyOriginal, Constant
