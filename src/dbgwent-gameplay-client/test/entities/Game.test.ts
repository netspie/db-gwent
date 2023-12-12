import Game from '@/entities/Game'
import test, { describe } from "node:test";

describe("Game - Play Card", () => {
  it("Should be fine", () => {

    const game = new Game([])
    expect(game.players).toStrictEqual([])
  });
});
