package entities

import java.util.function.Predicate

class Player(
    val id: PlayerId,
    val leaderCard: Card,
    val idleCards: MutableList<Card>,
    val handCards: MutableList<Card>,
    val deadCards: List<Card> = emptyList(),
    val battleCards: Battlefield = Battlefield()) {

    fun playCard(cardId: CardId, rowType: RowType? = null): Boolean {
        val card = idleCards.removeAndGet { it.id == cardId }
        card != null && handCards.add(card)
        return false
    }
}

fun<T> T.then(action: () -> Unit): T {
    action()
    return this
}

fun<T> MutableList<T>.removeAndGet(predicate: (T) -> Boolean) =
    this.find(predicate).then { this.removeIf(predicate) }

data class PlayerId(val value: String)

class Battlefield(
    val closeRow: BattleRow = BattleRow(),
    val rangedRow: BattleRow = BattleRow(),
    val siegeRow: BattleRow = BattleRow(),
)

class BattleRow(
    val cards: List<Card> = emptyList(),
    val modifierCard: Card? = null,
    val weatherCard: Card? = null)

