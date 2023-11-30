"use client";

import Card from "@/components/Card";
import CardRow from "@/components/CardRow";
import CardRowBottom from "@/components/CardRowBottom";
import CardRowPool from "@/components/CardRowPool";

export default function Game() {
  return (
    <div className="flex w-full min-h-full justify-center gap-2">
      <div className="w-[550px] min-h-full bg-gray-900 hidden md:block"></div>
      <div className="flex flex-col items-center justify-center gap-1 w-full overflow-hidden">
        <CardRow>
          <Card />
          <Card />
          <Card />
        </CardRow>
        <CardRow>
          <Card />
          <Card />
        </CardRow>
        <CardRow>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardRow>
        <CardRow>
          <Card />
        </CardRow>
        <CardRow>
          <Card />
          <Card />
        </CardRow>
        <CardRow>
          <Card />
          <Card />
          <Card />
        </CardRow>
        <CardRowBottom>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardRowBottom>
      </div>
      <div className="min-h-full flex-col gap-1 w-[250px] bg-red-900 hidden lg:flex">
        <CardRowPool noPadding={true}>
          <Card isReversed={true} />
          <Card isReversed={true} />
        </CardRowPool>
        <CardRow />
        <CardRow />
        <CardRow />
        <CardRow />
        <CardRow />
        <CardRowPool>
          <Card isReversed={true} />
          <Card isReversed={true} />
        </CardRowPool>
      </div>
    </div>
  );
}
