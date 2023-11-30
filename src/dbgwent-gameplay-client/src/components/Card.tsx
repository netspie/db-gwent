"use client";

import {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type CardProps = {
  isReversed?: boolean;
  onClickChanged?: (value: boolean) => void;
  count?: number
};

export default function Card(props: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reversed, setReversed] = useState(false);

  return (
    <div
      onMouseUp={() => props.onClickChanged && props?.onClickChanged(false)}
      onMouseDown={() => props.onClickChanged && props?.onClickChanged(true)}
      onMouseOut={() => props.onClickChanged && props?.onClickChanged(false)}
      ref={ref}
      className={`relative min-h-full ${!props.isReversed && "cursor-pointer"}`}
      style={{ aspectRatio: 1 / 1.5 }}
    >
      <div
        className={`${
          !props.isReversed && "duration-100 opacity-80 hover:opacity-100" //hover:md:scale-[120%]
        } h-full w-full bg-slate-600 rounded-lg`}
      >
        {!props.isReversed && (
          <div
            className="relative max-w-[30%] bg-slate-200"
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
