package entities

class Game(
    val id: GameId,
    val players: List<Player>,
    val turn: Turn = Turn(players)
) {
    fun playCard(playerId: PlayerId, cardId: CardId, rowType: RowType? = null) =
        turn.run(playerId) {
            players.getOfId(playerId)?.playCard(cardId) ?: false
        }
}

data class GameId(val value: String)

fun List<Player>.getOfId(id: PlayerId) = this.find { it.id == id }

enum class RowType {
    Any,
    Close,
    Ranged,
    CloseOrRanged,
    Siege;
}

class Turn(
    val players: List<Player>,
    private var nextToPlay: PlayerId? = null) {

    fun run(playerId: PlayerId, action: () -> Boolean) =
        canPlay(playerId) && action() && setPlayed(playerId)

    private fun canPlay(playerId: PlayerId) =
        players.getOfId(playerId) != null && nextToPlay == playerId

    private fun setPlayed(playerId: PlayerId) =
        playerId != nextToPlay && go { nextToPlay = playerId }
}

fun go(action: () -> Unit) = action().run { true }