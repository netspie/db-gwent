import com.basic.findEntityIn
import com.entities.{Card, CardId, CardRowType, CardType}
import org.scalatest.flatspec.AnyFlatSpec

import scala.collection.mutable.ListBuffer

class EntitySpec extends AnyFlatSpec:
  behavior of ""

  it should s"" in:
    val card1 = new Card(CardId("card-1"), CardType.Unit, CardRowType.CloseOrRange)
    val card2 = new Card(CardId("card-2"), CardType.Unit, CardRowType.CloseOrRange)

    val leaderCard: Card = new Card(CardId("card-3"), CardType.Leader, CardRowType.Back)
    val idleCards: ListBuffer[Card] = ListBuffer(card1)
    val handCards: ListBuffer[Card] = ListBuffer(card2)

    var cardOpt = CardId("card-1").findEntityIn(leaderCard, idleCards, handCards)
    assert(cardOpt.isDefined)
