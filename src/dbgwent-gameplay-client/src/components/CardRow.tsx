"use client";

import { RowType, SideType } from "@/app/types/types";
import { useCardRowIndicatedState } from "@/state/CardRowIndicatedState";
import { useCardSelectionState } from "@/state/CardSelectedState";
import { useRef, useState, useEffect } from "react";

type CardRowProps = {
  children?: React.ReactNode;
  index: number;
  rowType: RowType;
  sideType: SideType;
  onChildClickChanged?: (value: boolean) => void;
};

export default function CardRow(props: CardRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isSelected, setSelected, selectedCard } = useCardSelectionState();
  const { hasIndicatedRow, setIndicatedRow } = useCardRowIndicatedState();

  const isAllowedToSelect = () => selectedCard && isSelected && props.rowType === selectedCard.rowType && props.sideType === SideType.Player

  return (
    <div
      ref={ref}
      className={`relative flex w-full h-full shadow-lg ${
        isAllowedToSelect() && "cursor-pointer bg-gray-100 hover:bg-gray-200"
      }`}
      onClick={() => {
        if (!isSelected || !ref.current || !selectedCard || props.rowType !== selectedCard.rowType || props.sideType !== SideType.Player) return;
        const rect = ref.current.getBoundingClientRect();
        setIndicatedRow(
          true,
          selectedCard.id,
          rect.left + rect.width / 2,
          rect.top,
          props.index
        );
      }}
    >
      {isAllowedToSelect() && (
        <>
          <div className="absolute h-full w-[30%] from-black bg-gradient-to-r opacity-40"></div>
          <div className="absolute h-full w-[30%] right-0 from-black bg-gradient-to-l opacity-40"></div>
        </>
      )}
      {/* <div className="bg-gray-500 min-w-[80px] h-full hidden md:flex" style={{ aspectRatio: 1 / 1.5 }} ></div> */}
      <div
        className="absolute row-parent flex gap-1 w-full h-full before:m-auto after:m-auto overflow-x-auto overflow-y-clip"
        style={{ overflowClipMargin: "100px" }}
      >
        {props.children}
      </div>
      <div
        className="absolute min-h-[20%] bg-slate-300 left-0 top-full -translate-y-full md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center"
        style={{ aspectRatio: 1 / 1 }}
      >
        <span
          className="text-sm/[12px] font-bold"
          style={{ fontSize: "1.5cqh" }}
        >
          14
          {/* {Math.floor(Math.random() * 10 + 1)} */}
        </span>
      </div>
    </div>
  );
}
