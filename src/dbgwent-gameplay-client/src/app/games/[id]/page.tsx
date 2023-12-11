"use client";

import { LocationType, RowType, SideType } from "@/app/types/types";
import Card from "@/app/components/Card";
import CardRow from "@/app/components/CardRow";
import CardRowBottom from "@/app/components/CardRowBottom";
import CardRowPool from "@/app/components/CardRowPool";
import HeroPanel from "@/app/components/HeroPanel";
import { useGameState } from "@/app/state/GameState";
import { useState, useEffect, useRef } from "react";

export default function Game() {
  const gameStateCardRowsRef = useRef(useGameState.getState().cardRows);
  const [_, refresh] = useState<any>({});

  useEffect(() => {
    useGameState.subscribe((gameState) => {
      refresh({});
      gameStateCardRowsRef.current = gameState.cardRows;
    });
  }, []);

  const getRowType = (i: number) => {
    if (i === 5 || i === 0) return RowType.Huge;
    else if (i === 4 || i === 1) return RowType.Distant;
    else return RowType.Melee;
  };

  return (
    <div className="flex w-full min-h-full justify-center gap-1 overflow-hidden md:py-3 lg:pr-20 bg-slate-200">
      <div className="w-[650px] min-h-full gap-5 flex-col hidden md:flex">
        <HeroPanel isEnemy={true} />
        <HeroPanel isEnemy={false} />
      </div>
      <div className="row-group flex flex-col grow-0 items-center justify-center gap-1 w-full">
        {gameStateCardRowsRef.current.map(
          (row, i) =>
            i < 6 && (
              <CardRow
                key={i}
                index={i}
                rowType={getRowType(i)}
                sideType={i < 3 ? SideType.Enemy : SideType.Player}
              >
                {row.cards.map((card, i) => (
                  <>
                    <Card
                      key={card.id}
                      id={card.id}
                      points={card.points}
                      imagePath={`/images/${card.imagePath}`}
                      rowType={card.rowType}
                    />
                  </>
                ))}
              </CardRow>
            )
        )}
        <div className="self-start h-full w-full flex gap-1">
          <CardRowBottom>
            {gameStateCardRowsRef.current[6].cards.map((card, i) => (
              <Card
                key={card.id}
                id={card.id}
                points={card.points}
                imagePath={`/images/${card.imagePath}`}
                locationType={LocationType.Hand}
                rowType={card.rowType}
              />
            ))}
          </CardRowBottom>
        </div>
      </div>
      {/* <div className="min-h-full shrink-0 flex-col gap-1 w-[250px] hidden lg:flex">
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
      </div> */}
    </div>
  );
}
