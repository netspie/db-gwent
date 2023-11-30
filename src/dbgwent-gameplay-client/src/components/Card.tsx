"use client";

import { useState } from "react";

type CardProps = {
  isReversed?: boolean;
};

export default function Card(props: CardProps) {
  const [reversed, setReversed] = useState(false);

  return (
    <div className={`min-h-full ${!props.isReversed && 'cursor-pointer'}`} style={{ aspectRatio: 1 / 1.5 }}>
      <div className={`${!props.isReversed && 'hover:scale-110'} duration-100 w-full h-full bg-gray-900`}>
        {!props.isReversed && (
          <div
            className="relative bg-white max-w-[30%]"
            style={{ aspectRatio: 1 / 1 }}
          >
            <span className="absolute top-[10%] text-sm/[12px]">10</span>
          </div>
        )}
      </div>
    </div>
  );
}
