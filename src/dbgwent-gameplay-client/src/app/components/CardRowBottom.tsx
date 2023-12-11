"use client";

import Card from "./Card";

type CardRowBottomProps = {
  children: React.ReactNode;
};

export default function CardRowBottom(props: CardRowBottomProps) {
  return (
    <div className="flex gap-1 justify-center w-full h-full md:p-1 pr-1 shrink-1 grow-0">
      <div className="row-parent flex shrink-1 grow-0 gap-1 w-full h-full before:m-auto after:m-auto overflow-x-auto overflow-y-clip">
        {props.children}
      </div>
      <Card id={40} isReversed={true} />
      <Card id={40} isReversed={true} />
    </div>
  );
}
