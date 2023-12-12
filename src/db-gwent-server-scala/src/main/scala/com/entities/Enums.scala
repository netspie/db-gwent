package com.entities

import com.basic.isAnyOf

enum CardType:
  case Leader, Hero, Unit, Special, Weather

enum CardRowType:
  case Close, Ranged, CloseOrRange, Siege

enum TargetRowType:
  case Any, Close, Ranged, Siege

extension (source: CardRowType)
  def is(target: TargetRowType): Boolean =
    source match
      case CardRowType.Close if target.isAnyOf(TargetRowType.Close, TargetRowType.Any) => true
      case CardRowType.Ranged if target.isAnyOf(TargetRowType.Ranged, TargetRowType.Any) => true
      case CardRowType.CloseOrRange if target.isAnyOf(TargetRowType.Ranged, TargetRowType.Close, TargetRowType.Any) => true
      case CardRowType.Siege if target.isAnyOf(TargetRowType.Siege, TargetRowType.Any) => true
      case _ => false

extension (source: TargetRowType)
  def is(target: CardRowType): Boolean = target.is(source)
