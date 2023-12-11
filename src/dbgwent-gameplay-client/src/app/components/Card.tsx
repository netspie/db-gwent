"use client";

import { LocationType, RowType } from "@/app/types/types";
import { useCardRowIndicatedState } from "@/app/state/CardRowIndicatedState";
import { useCardSelectionState } from "@/app/state/CardSelectedState";
import { useGameState } from "@/app/state/GameState";
import Image from "next/image";
import { useRef, useState, useEffect, RefObject } from "react";

export type CardProps = {
  id: number;
  points?: number;
  locationType?: LocationType;
  rowType?: RowType;
  imagePath?: string;
  isReversed?: boolean;
  onSelectedChanged?: (value: boolean) => void;
  count?: number;
};

export default function Card(props: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [reversed, setReversed] = useState(false);
  const { isSelected, setSelected } = useCardSelectionState();
  const {
    hasIndicatedRow,
    indicationX,
    indicationY,
    setIndicatedRow,
    rowIndex,
    indicationSelectedCardId,
  } = useCardRowIndicatedState();
  const [isSelectedLocal, setSelectedLocal] = useState(false);
  const { addCard } = useGameState();

  const onDoubleClick = () => {
    // if (!cardRef.current) return;
    // const rect = cardRef.current.getBoundingClientRect();
    // const scale =
    //   Math.min(
    //     window.innerWidth / rect.width,
    //     window.innerHeight / rect.height
    //   ) * 0.9;
    // const x = window.innerWidth / 2 - (rect.width / 2) * scale;
    // const y = window.innerHeight / 2 - (rect.height / 2) * scale;
    // makeInteractable(cardRef, x, y, scale);
  };

  const stopRowSelection = () => {
    setSelected(false, undefined);
    setSelectedLocal(false);

    if (cardRef.current) cardRef.current.style.filter = "";
    window.removeEventListener("keypress", stopRowSelection);
  };

  const onClick = () => {
    if (props.locationType !== LocationType.Hand || !cardRef.current) return;

    cardRef.current.style.filter = "brightness(50%)";

    setSelectedLocal(true);
    setSelected(true, props);

    window.addEventListener("keypress", stopRowSelection);
  };

  const clone = (
    oldRef: RefObject<HTMLElement>,
    x: number,
    y: number,
    scale: number
  ) => {
    if (!oldRef.current) return;

    const ref = oldRef.current.cloneNode(true) as HTMLElement;

    const rect = oldRef.current.getBoundingClientRect();
    ref.className = "";
    ref.style.position = "fixed";
    ref.style.top = rect.top + "px";
    ref.style.left = rect.left + "px";

    ref.style.minWidth = rect.width + "px";
    ref.style.width = rect.width + "px";
    ref.style.maxWidth = rect.width + "px";

    ref.style.minHeight = rect.height + "px";
    ref.style.height = rect.height + "px";
    ref.style.maxHeight = rect.height + "px";

    ref.style.zIndex = "99999";

    setTimeout(() => {
      let xDelta = x - (rect.left - (rect.width / 2) * (scale - 1));
      let yDelta = y - (rect.top - (rect.height / 2) * (scale - 1));

      ref.style.transitionDuration = "300ms";
      ref.style.transform = `translate(${xDelta}px, ${yDelta}px) scale(${scale})`;
    }, 0);

    const perform = () => {
      ref.style.transitionDuration = "300ms";
      ref.style.transform = "translate(0, 0) scale(1)";
      setSelectedLocal(false);
      setSelected(false, undefined);
      window.removeEventListener("click", perform);
      window.removeEventListener("keypress", perform);
      ref.removeEventListener("keypress", perform);
      setTimeout(() => {
        if (oldRef.current) oldRef.current.style.opacity = "1";
        ref.remove();
      }, 300);
    };

    window.addEventListener("click", perform);
    window.addEventListener("keypress", perform);
    ref.addEventListener("keypress", perform);

    oldRef.current.style.opacity = "0";
    document.body.append(ref);
  };

  useEffect(() => {
    if (
      !cardRef.current ||
      !hasIndicatedRow ||
      props.id !== indicationSelectedCardId
    ) {
      return;
    }

    stopRowSelection();

    clone(
      cardRef,
      indicationX - cardRef.current.offsetWidth / 2,
      indicationY,
      1
    );
    setIndicatedRow(false, undefined, 0, 0, 0);
    setTimeout(() => {
      addCard(indicationSelectedCardId, rowIndex);
    }, 300);
  }, [hasIndicatedRow]);

  const getIconPath = () => {
    switch (props.rowType) {
      case RowType.Melee:
        return "/icons/punch.png";
      case RowType.Distant:
        return "/icons/distant-attack.png";
      case RowType.Huge:
        return "/icons/huge-attack.png";
      case RowType.MeleeOrDistant:
        return "/icons/melee-or-distant.png"
    }
  };

  return (
    <div
      onDoubleClick={onDoubleClick}
      onClick={onClick}
      ref={cardRef}
      className={`card min-h-full ${
        (!props.isReversed || isSelectedLocal) && "cursor-pointer"
      } ${isSelected && "pointer-events-none"}`}
      style={{ aspectRatio: 1 / 1.5 }}
    >
      <div
        className={`relative ${
          !props.isReversed && "relative hover:brightness-90"
        } h-full w-full bg-slate-600 rounded-lg overflow-clip select-none`}
      >
        {!props.isReversed && props.imagePath && (
          <Image
            src={`${props.imagePath}`}
            alt="Dope"
            layout="fill"
            objectFit="cover"
            quality={2}
          />
        )}

        {!props.isReversed && (
          <>
            <div className="absolute left-[4%] top-[3%] h-full w-full flex flex-col gap-1 ">
              <div
                className="points relative bg-black bg-opacity-80 rounded-md max-w-[20%]"
                style={{ aspectRatio: 1 / 1 }}
              >
                <span
                  className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-sm/[12px] font-bold select-none text-white"
                  style={{ fontSize: "1.5cqh" }}
                >
                  {props.points && props.points}
                </span>
              </div>
            </div>
            <div className="absolute h-[20%] bottom-0 left-0 w-full flex justify-end from-black bg-gradient-to-t ">
              <div
                className={`skill relative  rounded-sm h-full flex justify-center items-center `}
                style={{ aspectRatio: 1 / 1 }}
              >
                <Image
                  src={`${getIconPath()}`}
                  alt="Dope"
                  layout="fill"
                  objectFit="cover"
                  quality={2}
                />
              </div>
              <div
                className={`skill relative bg-black rounded-sm h-full flex justify-center items-center bg-opacity-0`}
                style={{ aspectRatio: 1 / 1 }}
              >
                <Image
                  src={`${getIconPath()}`}
                  alt="Dope"
                  layout="fill"
                  objectFit="cover"
                  quality={2}
                />
              </div>
            </div>
          </>
        )}
        {props.isReversed && props.count && (
          <div
            className="absolute w-[30%] bg-slate-800 left-[50%] bottom-0 -translate-x-1/2"
            style={{ aspectRatio: 1 / 1 }}
          >
            <span
              className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-sm/[12px] font-bold select-none text-white"
              style={{ fontSize: "1.5cqh" }}
            >
              {/* {Math.floor(Math.random() * 10 + 1)} */}8
            </span>
          </div>
        )}
        {/* {rect && <span>{rect.width}</span>} */}
      </div>
    </div>
  );
}
