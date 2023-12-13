package com.entities

import com.basic.{getOfId, getNotOfId, ifOkThen, t}

case class GameId(value: String)
case class Game(
  id: GameId, players: Vector[Player], turn: Turn):
  def this(id: GameId, players: Vector[Player]) =
    this(id, players, Turn(players.map(p => p.id).toList, players.head.id))

  def playCard(playerId: PlayerId, cardId: CardId, row: TargetRowType = null): Boolean =
    turn.run(playerId): () =>
      players
        .getOfId(playerId)
        .ifOkThen:
          getEnemyAndPlayCard(cardId, row)
        .isDefined

  private def getEnemyAndPlayCard(cardId: CardId, row: TargetRowType = null)(player: Player): Boolean =
    players.getNotOfId(player.id) match
      case Some(otherPlayer) => player.playCard(cardId, row, otherPlayer)
      case _ => false