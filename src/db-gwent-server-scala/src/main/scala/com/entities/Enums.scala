package com.entities

import com.basic.isAnyOf

enum CardType:
  case Leader, Hero, Unit, Special, Weather

enum CardRowType:
  case Close, Ranged, CloseOrRange, Siege, Back, Any

enum TargetRowType:
  case Any, Close, Ranged, Siege

extension (source: TargetRowType)
  def is(target: CardRowType): Boolean =
    source match
      case TargetRowType.Any => true
      case TargetRowType.Close | TargetRowType.Ranged if target == CardRowType.CloseOrRange => true
      case TargetRowType.Close if target == CardRowType.Close => true
      case TargetRowType.Ranged if target == CardRowType.Ranged => true
      case TargetRowType.Siege if target == CardRowType.Siege => true
      case _ => false

extension (source: CardRowType)
  def is(target: TargetRowType): Boolean = target.is(source)
