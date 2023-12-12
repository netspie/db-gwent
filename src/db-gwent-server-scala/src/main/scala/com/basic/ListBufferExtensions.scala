package com.basic

import scala.collection.mutable.ListBuffer

extension[T] (source: ListBuffer[T])
  def removeIf(predicate: T => Boolean): T =
    source.remove(source.indexWhere(predicate))