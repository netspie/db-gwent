package entities

class Card(
    val id: CardId,
    val type: CardType,
    val fraction: String,
    val abilities: List<Ability> = emptyList(),
    val played: Boolean = false) {

}

data class CardId(val value: String)

enum class CardType {
    Leader,
    Hero,
    Unit,
    Special,
    Weather
}

data class Ability(val value: String)