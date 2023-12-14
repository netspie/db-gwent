package com.entities

class Game(
    val id: GameId,
    val players: List<Player>,
    val turn: Turn = Turn(players.map{ it.id }.toList())) {

    fun playCard(playerId: PlayerId, cardId: CardId, row: RowType? = null): Boolean =
        turn.run(playerId) {
            val thisPlayer = players.find { it.id == playerId } ?: return@run false
            val nextPlayer = players.find { it.id != playerId } ?: return@run false

            thisPlayer.playCard(cardId, row, nextPlayer)

            val card = thisPlayer.getCard(cardId) ?: return@run false
            card.abilities.all { it.apply(card, thisPlayer, nextPlayer) }
        }

}

data class GameId(val value: String)
