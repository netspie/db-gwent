package entities

case class Turn(players: List[PlayerId], var next: PlayerId):
  def run(playerId: PlayerId, f: () => Boolean): Boolean =
    canPlay(playerId) && f() && setPlayed(playerId)

  private def canPlay(playerId: PlayerId): Boolean =
    next == playerId

  private def setPlayed(playerId: PlayerId): Boolean =
    next = playerId; true
