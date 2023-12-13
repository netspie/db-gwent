package com.basic

extension (c: Unit) def $true: Boolean = true
extension (c: Unit) def $false: Boolean = false

extension (c: Unit) def t: Boolean = true
extension (c: Unit) def f: Boolean = false

extension[T] (array: Array[T])
  def it(f: T => Unit): Array[T] =
    array.foreach(f); array

extension[T] (element: T)
  def isAnyOf(elements: T*): Boolean =
    elements.contains(element)

extension[T] (source: Iterable[T])
  def containsAny(elements: T*): Boolean =
    elements.exists(el => source.exists(x => x == el))

extension[T] (option: Option[T] )
  def ifOkThen(f: (t: T) => Boolean): Boolean =
    if (option.isEmpty) false
    else f(option.get)