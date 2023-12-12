package entities

case class GameId(value: String)
case class Game(id: GameId, players: Vector[Player], turn: Turn):
  def this(id: GameId, players: Vector[Player]) =
    this(id, players, Turn(players.map(p => p.id).toList, PlayerId("")))

  def playCard(playerId: PlayerId, cardId: CardId, row: TargetRowType = null): Boolean =
    turn.run(playerId, () => players.find(p => p.id == playerId).get.playCard(cardId, row))
