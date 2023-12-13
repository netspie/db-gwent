package com.entities

case class Battlefield(
  closeRow: BattlefieldRow = BattlefieldRow(),
  rangedRow: BattlefieldRow = BattlefieldRow(),
  siegeRow: BattlefieldRow = BattlefieldRow())
