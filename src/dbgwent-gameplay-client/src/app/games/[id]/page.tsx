"use client";

import { LocationType } from "@/app/types/types";
import Card from "@/components/Card";
import CardRow from "@/components/CardRow";
import CardRowBottom from "@/components/CardRowBottom";
import CardRowPool from "@/components/CardRowPool";
import HeroPanel from "@/components/HeroPanel";
import { useGameState } from "@/state/GameState";
import { useState, useEffect, useRef } from "react";

export default function Game() {
  const gameStateCardRowsRef = useRef(useGameState.getState().cardRows);
  const [_, refresh] = useState<any>({});

  useEffect(() => {
    useGameState.subscribe((gameState) => {
      refresh({})
      gameStateCardRowsRef.current = gameState.cardRows;
    });
  }, []);

  return (
    <div className="flex w-full min-h-full justify-center gap-1 overflow-hidden md:py-3 bg-slate-200">
      <div className="w-[650px] min-h-full gap-5 flex-col hidden md:flex">
        <HeroPanel isEnemy={true} />
        <HeroPanel isEnemy={false} />
      </div>
      <div className="row-group flex flex-col grow-0 items-center justify-center gap-1 w-full">
        {gameStateCardRowsRef.current.map(
          (row, i) =>
            i < 6 && (
              <CardRow key={i} index={i}>
                {row.cards.map((card, i) => (
                  <>
                    <Card
                      key={card.id}
                      id={card.id}
                      imagePath={`/images/${card.imagePath}`}
                    />
                  </>
                ))}
              </CardRow>
            )
        )}
        <CardRowBottom>
          {gameStateCardRowsRef.current[6].cards.map((card, i) => (
            <Card
              key={card.id}
              id={card.id}
              imagePath={`/images/${card.imagePath}`}
              locationType={LocationType.Hand}
            />
          ))}
        </CardRowBottom>
      </div>
      <div className="min-h-full shrink-0 flex-col gap-1 w-[250px] hidden lg:flex">
        <CardRowPool noPadding={true}>
          <Card id={40} isReversed={true} />
          <Card id={41} isReversed={true} count={10} />
        </CardRowPool>
        <div className="h-full"></div>
        <div className="h-full"></div>
        <div className="h-full"></div>
        <div className="h-full"></div>
        <div className="h-full"></div>
        <CardRowPool>
          <Card id={51} isReversed={true} />
          <Card id={52} isReversed={true} count={13} />
        </CardRowPool>
      </div>
    </div>
  );
}
