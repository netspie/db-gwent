import com.basic.uuid
import com.entities.abilities.RowCardsTo1_Ability
import com.entities.{Card, CardId, CardRowType, CardType, Game, GameId, Player, PlayerId, TargetRowType}

import java.util.UUID
import scala.collection.mutable.ListBuffer

object Main extends App:
//  val cardLeader1 = new Card(CardId("card-leader-1"), CardType.Leader, CardRowType.Back)
//  val cardLeader2 = new Card(CardId("card-leader-2"), CardType.Leader, CardRowType.Back)
//
//  val card1 = new Card(CardId("card-1"), CardType.Weather, CardRowType.Any)
//  val card2 = new Card(CardId("card-2"), CardType.Unit, CardRowType.CloseOrRange)
//
//  val player1 = new Player(PlayerId("player-1"), cardLeader1, handCards = ListBuffer(card1))
//  val player2 = new Player(PlayerId("player-2"), cardLeader2, handCards = ListBuffer(card2))
//
//  val game = new Game(GameId("game-1"), players = Vector(player1, player2))
//
//  println(game.playCard(player1.id, card1.id, TargetRowType.Any))
  println("Dope")
  // Weather Cards
  val BitingFrost = new Card(
    CardId(s"biting-frost-$uuid"),
    "Biting Frost",
    CardType.Weather,
    CardRowType.Any,
    abilities = Array(RowCardsTo1_Ability(CardRowType.Close)))

  val ImpenetrableFog = new Card(
    CardId(s"impenetrable-fog-$uuid"),
    "Impenetrable Fog",
    CardType.Weather,
    CardRowType.Any,
    abilities = Array(RowCardsTo1_Ability(CardRowType.Ranged)))

  val SkelligeStorm = new Card(
    CardId(s"skellige-storm-$uuid"),
    "Skellige Storm",
    CardType.Weather,
    CardRowType.Any,
    abilities = Array(RowCardsTo1_Ability(CardRowType.Siege)))