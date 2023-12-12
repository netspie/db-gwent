import Game, { GameId } from "./Game";

export default interface GameRepository {
  get(gameId: GameId): Game
  add(game: Game): void
  delete(game: Game): void
  modify(game: Game): void
}
