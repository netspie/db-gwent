"use client";

import { match } from "assert";
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";

export default function Test() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="relative">
        <div className="w-[200px] h-[200px] bg-slate-500 overflow-clip flex gap-3 justify-center items-center ">
          {Square()}
        </div>
      </div>
    </div>
  );
}

type XY = {
  x: number;
  y: number;
};

const path = [
  { x: -100, y: -200 },
  { x: 0, y: -400 },
  { x: 100, y: -200 },
  { x: -150, y: -400 },
  { x: -100, y: 0 },
];

function Square() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [style, setStyle] = useState("");
  const [index, setIndex] = useState(-1);
  const [styleActual, setStyleActual] = useState<React.CSSProperties>();

  const select = () => {
    if (!ref.current) {
      console.log("ref not init");
      return;
    }

    setOffset(ref.current.offsetLeft);

    let newIndex = index;
    if (index === path.length - 1) newIndex = -1;
    else newIndex++;

    setIndex(newIndex);
    if (newIndex >= 0) {
      const pos = path[newIndex];
      console.log("index " + newIndex);

      setStyle(
        `absolute transform translate-x-0 translate-y-0 transition duration-300`
      );

      setStyleActual({
        "--tw-translate-x": `${pos.x}px`,
        "--tw-translate-y": `${pos.y}px`,
      } as React.CSSProperties);
    } else {
      setStyleActual({
        "--tw-translate-x": `0px`,
        "--tw-translate-y": `0px`,
      } as React.CSSProperties);
      setTimeout(() => {
        setStyle(
          "transform translate-x-0 translate-y-0 scale-100 transition duration-300"
        );
      }, 300)
    }
  };

  useEffect(() => {
    if (!ref.current) return;

    ref.current.style.left = `${offset}px`;
  }, [index]);

  return (
    <>
      {index >= 0 && <div className="w-[40px] h-[40px]"></div>}
      <div
        ref={ref}
        className={`${style} w-[40px] h-[40px] bg-red-700 cursor-pointer hover:bg-red-800 active:bg-red-900`}
        onClick={select}
        style={styleActual}
      ></div>
    </>
  );
}
