"use client";

import { LocationType } from "@/app/types/types";
import { useCardRowIndicatedState } from "@/state/CardRowIndicatedState";
import { useCardSelectionState } from "@/state/CardSelectedState";
import { useGameState } from "@/state/GameState";
import Image from "next/image";
import { useRef, useState, useEffect, RefObject } from "react";

type CardProps = {
  id: number;
  locationType?: LocationType;
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
    setSelected(false, props.id);
    setSelectedLocal(false);

    if (cardRef.current) cardRef.current.style.filter = "";
    window.removeEventListener("keypress", stopRowSelection);
  };

  const onClick = () => {
    if (props.locationType !== LocationType.Hand || !cardRef.current) return;

    cardRef.current.style.filter = "brightness(50%)";

    setSelectedLocal(true);
    setSelected(true, props.id);

    window.addEventListener("keypress", stopRowSelection);
  };

  const makeInteractable = (
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
      setSelected(false, props.id);
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

    makeInteractable(
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
          <div
            className="relative max-w-[30%] bg-slate-200  transition-transform duration-1000"
            style={{ aspectRatio: 1 / 1 }}
          >
            <span
              className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-sm/[12px] font-bold select-none"
              style={{ fontSize: "1.5cqh" }}
            >
              {/* {Math.floor(Math.random() * 10 + 1)} */}
              3
            </span>
          </div>
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
              {/* {Math.floor(Math.random() * 10 + 1)} */}
              8
            </span>
          </div>
        )}
        {/* {rect && <span>{rect.width}</span>} */}
      </div>
    </div>
  );
}
