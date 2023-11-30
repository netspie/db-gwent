"use client";

import { useRef, useState } from "react";

type CardRowProps = {
  children?: React.ReactNode;
  onChildClickChanged?: (value: boolean) => void
};

export default function CardRow(props: CardRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);

  return (
    <div
      ref={ref}
      className="relative flex w-full h-full bg-blue-900"
    >
      {/* <div className="bg-gray-500 min-w-[80px] h-full hidden md:flex" style={{ aspectRatio: 1 / 1.5 }} ></div> */}
      <div
        className={`absolute row-parent flex gap-1 w-full h-full before:m-auto after:m-auto overflow-x-auto overflow-y-clip `}
        style={{ overflowClipMargin: "100px" }}
      >
        {props.children}
      </div>
      <div
        className="absolute min-h-[20%] bg-red-300 left-0 top-full -translate-y-full md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center z-10000"
        style={{ aspectRatio: 1 / 1 }}
      >
        <span
          className="text-sm/[12px] font-bold"
          style={{ fontSize: "1.5cqh" }}
        >
          {Math.floor(Math.random() * 10 + 1)}
        </span>
      </div>
    </div>
  );
}
