package com.entities.abilities

import com.entities.{Player, Card}

abstract class Ability:
  def apply(card: Card, player: Player, enemy: Player): Boolean
