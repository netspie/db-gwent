import com.basic.Entity
import com.entities.{Card, CardId, CardRowType, CardType, Game, GameId, Player, PlayerId, TargetRowType}

import scala.collection.mutable.ListBuffer

object Main extends App {

  val card1 = new Card(CardId("card-1"), CardType.Unit, CardRowType.CloseOrRange)
  val card2 = new Card(CardId("card-2"), CardType.Unit, CardRowType.CloseOrRange)

  val player1 = new Player(PlayerId("player-1"), idleCards = ListBuffer(card1))
  val player2 = new Player(PlayerId("player-2"), idleCards = ListBuffer(card2))

  val game = new Game(GameId("game-1"), players = Vector(player1, player2))
  println(game.playCard(player1.id, card1.id, TargetRowType.Close))
}
