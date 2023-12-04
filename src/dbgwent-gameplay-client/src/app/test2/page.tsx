"use client";

import React, { RefObject, useEffect, useRef, useState } from "react";

export default function Test() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [initialStyleClass, setInitialStyleClass] = useState<
    string | undefined
  >();
  const [boxStyleClass, setBoxStyleClass] = useState<string>("");

  useEffect(() => {
    if (!boxRef.current) return;

    let initialStyleClassLocal = initialStyleClass;
    if (initialStyleClassLocal === undefined) {
      setInitialStyleClass(boxRef.current.className);
      initialStyleClassLocal = boxRef.current.className;
    }

    boxRef.current.className = initialStyleClassLocal + " " + boxStyleClass;
  }, [boxStyleClass]);

  const makeInteractable = (oldRef: RefObject<HTMLElement>) => {
    if (!oldRef.current) return;
    
    const ref = oldRef.current.cloneNode() as HTMLElement;
    
    const rect = oldRef.current.getBoundingClientRect();
    ref.style.position = "fixed";
    ref.style.top = rect.top + "px";
    ref.style.left = rect.left + "px";
    ref.style.width = rect.width + "px";
    ref.style.height = rect.height + "px";

    ref.addEventListener("click", () => {
      ref.style.transform = "translate(100px, 100px)";
      ref.style.transitionDuration = "300ms";
    });

    oldRef.current.remove();
    document.body.append(ref);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="relative w-[300px] h-[200px] flex gap-3 justify-center bg-slate-400">
        <div className="overflow-clip w-full h-full flex gap-3 justify-center -translate-y-10">
          <div
            className="w-[10%] h-[30%] bg-red-700 cursor-pointer hover:bg-red-800 active:bg-red-900"
            onClick={() => makeInteractable(boxRef)}
            ref={boxRef}
          ></div>
        </div>
      </div>
    </div>
  );
}