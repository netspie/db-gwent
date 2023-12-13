package com.basic

trait Entity[+TId]:
  val id: TId

extension[T <: Entity[TId], TId] (entities: Vector[T])
  def getOfId(id: TId): Option[T] = entities.find(p => p.id == id)

def hasSameId[T <: Entity[TId], TId](id: TId): T => Boolean =
  entity => entity.id == id
