package com.entities

import com.basic.{ifOkThen, getOfId}

case class GameId(value: String)
case class Game(id: GameId, players: Vector[Player], turn: Turn):
  def this(id: GameId, players: Vector[Player]) =
    this(id, players, Turn(players.map(p => p.id).toList, players.head.id))

  def playCard(playerId: PlayerId, cardId: CardId, row: TargetRowType = null): Boolean =
    turn.run(
      playerId,
      () =>
        players
          .getOfId(playerId)
          .ifOkThen(p => p.playCard(cardId, row)))
