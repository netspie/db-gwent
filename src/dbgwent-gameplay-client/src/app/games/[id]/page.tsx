"use client";

import Card from "@/components/Card";
import CardRow from "@/components/CardRow";
import CardRowBottom from "@/components/CardRowBottom";
import CardRowPool from "@/components/CardRowPool";
import HeroPanel from "@/components/HeroPanel";
import { useState, useEffect } from "react";

const imagePaths: string[] = [
  "bardock-ki-blast-1.jpg",
  "goku-genki-dama-1.jpg",
  "goku-kamehame-1.jpg",
  "vegeta-final-flash-1.jpg",
];

const getRandomImagePath = () => {
  return `/images/${imagePaths[Math.floor(Math.random() * imagePaths.length)]}`;
};

export default function Game() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <div className="flex w-full min-h-full justify-center gap-1 overflow-hidden md:py-3 bg-slate-200">
      <div className="w-[650px] min-h-full gap-5 flex-col hidden md:flex">
        <HeroPanel isEnemy={true} />
        <HeroPanel isEnemy={false} />
      </div>
      <div className="row-group flex flex-col grow-0 items-center justify-center gap-1 w-full overflow-clip">
        <CardRow>
          <Card id={1} imagePath={getRandomImagePath()} />
          <Card id={2} imagePath={getRandomImagePath()} />
          <Card id={3} imagePath={getRandomImagePath()} />
        </CardRow>
        <CardRow>
          <Card id={4} imagePath={getRandomImagePath()} />
          <Card id={5} imagePath={getRandomImagePath()} />
        </CardRow>
        <CardRow>
          <Card id={6} imagePath={getRandomImagePath()} />
          <Card id={7} imagePath={getRandomImagePath()} />
          <Card id={8} imagePath={getRandomImagePath()} />
          <Card id={9} imagePath={getRandomImagePath()} />
          <Card id={10} imagePath={getRandomImagePath()} />
          <Card id={11} imagePath={getRandomImagePath()} />
          <Card id={12} imagePath={getRandomImagePath()} />
          <Card id={13} imagePath={getRandomImagePath()} />
          <Card id={14} imagePath={getRandomImagePath()} />
          <Card id={15} imagePath={getRandomImagePath()} />
          <Card id={16} imagePath={getRandomImagePath()} />
        </CardRow>
        <CardRow>
          <Card id={81} imagePath={getRandomImagePath()} />
        </CardRow>
        <CardRow>
          <Card id={19} imagePath={getRandomImagePath()} />
          <Card id={20} imagePath={getRandomImagePath()} />
        </CardRow>
        <CardRow>
          <Card id={21} imagePath={getRandomImagePath()} />
          <Card id={22} imagePath={getRandomImagePath()} />
          <Card id={23} imagePath={getRandomImagePath()} />
        </CardRow>
        <CardRowBottom>
          <Card id={24} imagePath={getRandomImagePath()} />
          <Card id={25} imagePath={getRandomImagePath()} />
          <Card id={26} imagePath={getRandomImagePath()} />
          <Card id={27} imagePath={getRandomImagePath()} />
          <Card id={28} imagePath={getRandomImagePath()} />
          <Card id={29} imagePath={getRandomImagePath()} />
          <Card id={30} imagePath={getRandomImagePath()} />
          <Card id={31} imagePath={getRandomImagePath()} />
          <Card id={32} imagePath={getRandomImagePath()} />
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
