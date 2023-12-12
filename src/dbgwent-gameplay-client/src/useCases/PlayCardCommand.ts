import { CardId } from "@/entities/Card"
import { GameId } from "@/entities/Game"
import GameRepository from "@/entities/GameRepository"
import { PlayerId } from "@/entities/Player"

export default class PlayCardCommandHandler {
  gameRepository: GameRepository

  constructor(gameRepository: GameRepository) {
    this.gameRepository = gameRepository
  }
  
  public handle(command: PlayCardCommand) {
    const game = this.gameRepository.get(new GameId(command.gameId))
    game.playCard(
      new PlayerId(command.playerId),
      new CardId(command.cardId),
      command.targetRow ? command.targetRow : undefined
    )
  }
}

export class PlayCardCommand {
  readonly gameId: string
  readonly playerId: string
  readonly cardId: string
  readonly targetRow: number | undefined

  constructor(
    gameId: string,
    playerId: string,
    cardId: string,
    targetRow: number | undefined
  ) {
    this.gameId = gameId
    this.playerId = playerId
    this.cardId = cardId
    this.targetRow = targetRow
  }
}

