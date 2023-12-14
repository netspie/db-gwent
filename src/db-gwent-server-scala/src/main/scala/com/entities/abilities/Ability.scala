package com.entities.abilities

import com.entities.Player

abstract class Ability:
  def apply(player: Player, enemy: Player): Boolean
