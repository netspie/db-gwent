"use client";

import { GetRandomFilePath } from "@/utilities/FileUtilities";
import Image from "next/image";
import { useRef, useState } from "react";

type CardBigProps = {};

const imagePaths: String[] = [
  "bardock-ki-blast-1.jpg",
  "goku-genki-dama-1.jpg",
  "goku-kamehame-1.jpg",
  "vegeta-final-flash-1.jpg",
];

export default function CardBig(props: CardBigProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reversed, setReversed] = useState(false);

  const imagePath = `/images/${
    imagePaths[Math.floor(Math.random() * imagePaths.length)]
  }`; //GetRandomFilePath('/images')

  return (
    <div
      ref={ref}
      className="relative min-h-full cursor-pointer rounded-2xl overflow-clip"
      style={{ aspectRatio: 1 / 1.5 }}
    >
      <Image
          src={`${imagePath}`}
          alt="Description"
          layout="fill"
          objectFit="cover"
        />
      <div className="h-full w-full bg-slate-600 bg-opacity-50 alpha">
        <div
          className="relative max-w-[20%] bg-white"
          style={{ aspectRatio: 1 / 1 }}
        >
          <span
            className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-sm/[12px] font-bold select-none"
            style={{ fontSize: "1.5cqh" }}
          >
            10
          </span>
        </div>
        <div className="absolute w-[15%] top-[20%] left-[3%] flex flex-col gap-5">
          <div
            className="combat-type-icon bg-white w-full text-center flex flex-col justify-center"
            style={{ aspectRatio: 1 / 1 }}
          >
            Row
          </div>
          <div
            className="ability-type-icon bg-white w-full text-center flex flex-col justify-center"
            style={{ aspectRatio: 1 / 1 }}
          >
            Ability
          </div>
        </div>
        <div className="absolute h-[10%] top-[3%] right-[3%] flex flex-col-reversed gap-5">
          <div
            className="p-2 card-type-icon bg-white w-full text-center flex flex-col justify-center"
            style={{ aspectRatio: 1 / 1 }}
          >
            Card Type
          </div>
          <div
            className="fraction-type-icon bg-white w-full text-center flex flex-col justify-center"
            style={{ aspectRatio: 1 / 1 }}
          >
            Fraction
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-[30%] bg-slate-400 bg-opacity-50 p-4">
          <div className="w-full h-full flex flex-col">
            <h4 className="font-bold text-center" style={{ fontSize: "2cqh" }}>
              Son Goku
            </h4>
            <h4 className="text-center" style={{ fontSize: "2cqh" }}>
              Ki Blasts
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
