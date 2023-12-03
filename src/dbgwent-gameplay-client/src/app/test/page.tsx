"use client";

import Transformer from "@/components/Transformer";
import React, { useRef } from "react";

export default function Test() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="relative">
        <div className="w-[200px] h-[200px] bg-slate-500 overflow-clip flex gap-3 justify-center items-center ">
          {NestedComponent()}
          {NestedComponent()}
          {NestedComponent()}
        </div>
      </div>
    </div>
  );
}

function NestedComponent() {
  const boxRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef(null);

  return (
    <Transformer
      childrenRef={boxRef}
      transformations={[
        { position: { x: -100, y: -200 } },
        { scale: 3 },
        { rotation: 90 },
        { scale: 1 },
      ]}
    >
      <div
        ref={boxRef}
        className={`w-[40px] h-[60px] bg-red-700 cursor-pointer hover:bg-red-800 active:bg-red-900`}
      ></div>
    </Transformer>
  );
}
