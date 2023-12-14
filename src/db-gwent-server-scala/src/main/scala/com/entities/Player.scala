package com.entities

import scala.collection.mutable.ListBuffer
import com.basic.{Entity, removeIf, ifOkThen, hasSameId, findEntityIn, t}

case class PlayerId(value: String)
case class Player(
   id: PlayerId,
   leaderCard: Card,
   idleCards: ListBuffer[Card] = ListBuffer(),
   handCards: ListBuffer[Card] = ListBuffer(),
   battlefield: Battlefield = Battlefield()) extends Entity[PlayerId]:

  def playCard(cardId: CardId, row: TargetRowType = null, enemy: Player): Boolean =
    idleCards
      .removeIf(hasSameId(cardId))
      .ifOkThen: card =>
        tryApplyEffects(card, this, enemy)
        handCards.addOne(card).t
      .isDefined

  private def tryApplyEffects(card: Card, players: Player*): Boolean =
    card.$type match
      case CardType.Weather | CardType.Leader if card.hasWeatherAbility =>
        players.forall(player => player.applyWeather(card))
      case _ => false

  def battleCardsTo1(row: CardRowType, id: String = ""): Boolean =
    battlefield.pointsTo1(row, id)

  def getCard(cardId: CardId): Option[Card] =
    cardId.findEntityIn(leaderCard, idleCards, handCards)

  def getPlayableCard(cardId: CardId): Option[Card] =
    cardId.findEntityIn(leaderCard, handCards)

  def removeCardModifiersOfId(id: String): Boolean =
    false

  private def applyWeather(card: Card): Boolean =
    true
