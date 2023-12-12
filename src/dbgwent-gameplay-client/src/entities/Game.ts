import { CardId } from "./Card";
import Player, { PlayerId } from "./Player";

export default class Game {
  players: Player[]

  constructor(players: Player[]) {
    this.players = players
  }

  public playCard(
    playerId: PlayerId, 
    cardId: CardId, 
    targetRow: RowType | undefined = undefined,
    ) : boolean {

      const player = getPlayerOfId(playerId, this.players)
      if (!player?.playCard(cardId)) return false

      return true
      // card = getCard()
      // card.Effects.forEach(effect => {
      //   effect.Apply(ownerPlayer: player, enemyPlayer: enemy)
      // });
  }
}

function getPlayerOfId(playerId: PlayerId, players: Player[]): Player | undefined {
  return players.find(x => x.id === playerId)
}

export class GameId {
  readonly value: string
  constructor(value: string) {
    this.value = value
  }
}

// export class KillStrongestUnitsEffect {
//   Apply(effectOwner: Player, enemy: Player) {
//     strongestUnits = GetStrongestUnitCards(effectOwner, enemy)
//     Destroy(strongestUnits)
//   }
// }
