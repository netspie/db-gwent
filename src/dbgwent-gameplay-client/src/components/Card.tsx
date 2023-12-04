"use client";

import Image from "next/image";
import { useRef, useState, useEffect, RefObject } from "react";

type CardProps = {
  id: number;
  imagePath?: string;
  isReversed?: boolean;
  onSelectedChanged?: (value: boolean) => void;
  count?: number;
};

export default function Card(props: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [reversed, setReversed] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const onClick = () => {
    setSelected(!isSelected);
    makeInteractable(cardRef);
  };

  const makeInteractable = (oldRef: RefObject<HTMLElement>) => {
    if (!oldRef.current) return;

    const ref = oldRef.current.cloneNode(true) as HTMLElement;

    const rect = oldRef.current.getBoundingClientRect();
    console.log("before");
    console.log(rect);
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
    console.log("after");
    console.log(ref.getBoundingClientRect());

    setTimeout(() => {

      const scale = 3
      const xDelta = -(rect.left /2 - (rect.width * scale / 2) + rect.width / 2) //window.innerWidth 
      const yDelta = -(rect.top / 1.2- (rect.height * scale / 2) + rect.height / 2) //window.innerWidth 

      ref.style.transitionDuration = "300ms";
      ref.style.transform = `translate(${xDelta}px, ${yDelta}px) scale(${scale})`;
    }, 0);

    ref.addEventListener("click", () => {
      ref.style.transitionDuration = "300ms";
      ref.style.transform = "translate(0, 0) scale(1)";
      setTimeout(() => {
        if (oldRef.current) oldRef.current.style.opacity = "1";
        ref.remove();
      }, 300);
    });

    oldRef.current.style.opacity = "0";
    document.body.append(ref);
  };

  useEffect(() => {}, [refresh]);

  return (
    <div
      onClick={onClick}
      ref={cardRef}
      className={`card min-h-full ${!props.isReversed && "cursor-pointer"} `}
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
              {Math.floor(Math.random() * 10 + 1)}
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
              {Math.floor(Math.random() * 10 + 1)}
            </span>
          </div>
        )}
        {/* {rect && <span>{rect.width}</span>} */}
      </div>
    </div>
  );
}
