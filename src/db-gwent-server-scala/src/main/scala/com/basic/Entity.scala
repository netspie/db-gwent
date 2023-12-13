package com.basic

trait Entity[+TId]:
  val id: TId

extension[T <: Entity[TId], TId] (entities: Iterable[T])
  def getOfId(id: TId): Option[T] = entities.find(p => p.id == id)

extension[T <: Entity[TId], TId] (entities: Iterable[T])
  def getNotOfId(id: TId): Option[T] = entities.find(p => p.id != id)

def hasSameId[T <: Entity[TId], TId](id: TId): T => Boolean =
  entity => entity.id == id

extension[TId] (id: TId)
  def findEntityIn[T <: Entity[TId]](collections: Iterable[T] | T*): Option[T] =
    val it = collections.iterator
    while (it.hasNext) {
      it.next() match
        case collection: Iterable[T] =>
          val option = collection.find(c => c.id == id)
          if option.isDefined then return option
        case item: T =>
          if item.id == id then return Some(item)
    }
    None
