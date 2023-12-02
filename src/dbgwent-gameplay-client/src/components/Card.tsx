"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type CardProps = {
  isReversed?: boolean;
  onSelectedChanged?: (value: boolean) => void;
  count?: number;
};

const imagePaths: String[] = [
  "bardock-ki-blast-1.jpg",
  "goku-genki-dama-1.jpg",
  "goku-kamehame-1.jpg",
  "vegeta-final-flash-1.jpg",
];

export default function Card(props: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reversed, setReversed] = useState(false);
  const [posStyle, setPosStyle] = useState("relative");
  const [isSelected, setSelected] = useState(false)

  const imagePath = `/images/${
    imagePaths[Math.floor(Math.random() * imagePaths.length)]
  }`; //GetRandomFilePath('/images')
  
  const startPositioning = () => {
    //setPosStyle('fixed')
    console.log("dope");
  };

  const endPositioning = () => {
    //setPosStyle('relative z-999999')
  };

  const onClick = () => {
  };

  return (
    <div
      onClick={onClick}
      ref={ref}
      className={`${posStyle} min-h-full ${
        !props.isReversed && "cursor-pointer"
      } ${false ? "absolute transform -translate-y-20 translate-x-20 transition duration-300 " : "transform translate-y-0 translate-x-0 transition duration-300"}`}
      style={{ aspectRatio: 1 / 1.5 }}
    >
      <div
        className={`${
          !props.isReversed &&
          "relative hover:brightness-90"
        } h-full w-full bg-slate-600 rounded-lg overflow-clip select-none`}
      >
        {!props.isReversed && (
          <Image
            src={`${imagePath}`}
            alt="Dope"
            layout="fill"
            objectFit="cover"
            className={`${isSelected ? 'z-99999' : ''}`}
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
