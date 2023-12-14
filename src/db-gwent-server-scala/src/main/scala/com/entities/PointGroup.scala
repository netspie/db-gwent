package com.entities

import scala.collection.mutable.ListBuffer

case class PointGroup(
  originalValue: Int = 0,
  modifiers: ListBuffer[PointGroupModifier] = ListBuffer()):

  def getCalculatedValue: Int =
    modifiers.foldLeft(originalValue):
      (newPoints, modifier) => modifier.modify(newPoints)
