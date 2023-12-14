package com.entities

class Turn(val players: List<PlayerId>, var next: PlayerId = players.first()) {
    fun run(playerId: PlayerId, f: () -> Boolean): Boolean =
        canPlay(playerId) && f() && setPlayed(playerId)

    private fun canPlay(playerId: PlayerId): Boolean =
        next == playerId

    private fun setPlayed(playerId: PlayerId): Boolean {
        next = playerId
        return true
    }
}
