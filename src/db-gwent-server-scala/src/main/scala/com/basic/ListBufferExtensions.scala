package com.basic

import scala.collection.mutable.ListBuffer

extension[T] (source: ListBuffer[T])
  def removeIf(predicate: T => Boolean): Option[T] =
    val i = source.indexWhere(predicate)
    if (i != -1)
      Option(source.remove(i))
    else
      Option.empty
