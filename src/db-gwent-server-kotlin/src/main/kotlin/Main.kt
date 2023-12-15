import com.entities.*
import com.entities.abilities.RowCardsToOne_Ability
import com.entities.abilities.TightBond_Ability
import java.util.UUID

fun main() {

    val player1 = Player(PlayerId("player-1"), BitingFrost, handCards = mutableListOf(BlueStripesCommando))
    val player2 = Player(PlayerId("player-2"), ImpenetrableFog, handCards = mutableListOf(BlueStripesCommando))

    val game = Game(GameId("game-1"), listOf(player1, player2))
    println(game.playCard(player1.id, ImpenetrableFog.id))
    println(game.playCard(player1.id, BitingFrost.id))

    println(!BitingFrost)
}

fun uuid(): String = UUID.randomUUID().toString()

val BitingFrost = Card(
    CardId("biting-frost-${uuid()}"),
    "Biting Frost",
    CardType.Weather,
    RowType.Any,
    abilities = arrayOf(RowCardsToOne_Ability(RowType.Close))
)

val ImpenetrableFog = Card(
    CardId("impenetrable-fog-${uuid()}"),
    "Impenetrable Fog",
    CardType.Weather,
    RowType.Any,
    abilities = arrayOf(RowCardsToOne_Ability(RowType.Ranged)))

val SkelligeStorm = Card(
    CardId("skellige-storm-${uuid()}"),
    "Skellige Storm",
    CardType.Weather,
    RowType.Any,
    abilities = arrayOf(RowCardsToOne_Ability(RowType.Siege)))

val ClearWeather = Card(
    CardId("clear-weather-${uuid()}"),
    "Clear Weather",
    CardType.Weather,
    RowType.Any,
    abilities = arrayOf(RowCardsToOne_Ability(RowType.Any)))

// Northern Realms Gwent deck / Earth Heroes
val BlueStripesCommando = Card(
    CardId("blue-stripes-commando-${uuid()}"),
    "Blue Stripes Commando",
    CardType.Weather,
    RowType.Any,
    points = PointGroup(4),
    abilities = arrayOf(TightBond_Ability()))

