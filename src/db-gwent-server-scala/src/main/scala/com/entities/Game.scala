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
        .getOfId(playerId) match
          case Some(player) =>
            getEnemyAndPlayCard(player, cardId, row)
            toNextRound(player, cardId)
          case None => false

  private def toNextRound(player: Player, cardId: CardId): Boolean =
    (player.getCard(cardId), players.getNotOfId(player.id)) match
      case (Some(card), Some(otherPlayer)) =>
        card.abilities.forall(a => a.apply(card, player, otherPlayer))
      case _ => false

  private def getEnemyAndPlayCard(player: Player, cardId: CardId, row: TargetRowType = null): Boolean =
    players.getNotOfId(player.id) match
      case Some(otherPlayer) => player.playCard(cardId, row, otherPlayer)
      case _ => false