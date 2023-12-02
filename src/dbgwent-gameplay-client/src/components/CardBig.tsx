"use client";

import {
  useRef,
  useState,
} from "react";

type CardBigProps = {
};

export default function CardBig(props: CardBigProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reversed, setReversed] = useState(false);

  return (
    <div
      ref={ref}
      className='relative min-h-full cursor-pointer'
      style={{ aspectRatio: 1 / 1.5 }}
    >
      <div
        className="duration-100 opacity-80 hover:opacity-100 h-full w-full bg-slate-600 rounded-lg"
      >
          <div
            className="relative max-w-[20%] bg-slate-200"
            style={{ aspectRatio: 1 / 1 }}
          >
            <span
              className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-sm/[12px] font-bold select-none"
              style={{ fontSize: "1.5cqh" }}
            >
              {Math.floor(Math.random() * 10 + 1)}
            </span>
          </div>
          <div className="absolute w-[15%] h-[30%] top-[20%] left-[3%] flex flex-col gap-5">
            <div className="bg-white w-full" style={{ aspectRatio: 1 / 1 }}></div>
            <div className="bg-white w-full" style={{ aspectRatio: 1 / 1 }}></div>
          </div>
          <div className="absolute bottom-0 w-full h-[30%] bg-slate-400 p-4">
            <div className="w-full h-full flex flex-col">
              <h4 className="font-bold" style={{ fontSize: "2cqh" }}>Son Goku</h4>
              <h4 className="" style={{ fontSize: "2cqh" }} >Ki Blasts</h4>
            </div>
          </div>
      </div>
    </div>
  );
}
