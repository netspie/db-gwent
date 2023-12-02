"use client";

import { useEffect, useRef, useState } from "react";

type Position = {
  x: number;
  y: number;
};

const calculateOffset = (hElement: HTMLElement | null): Position => {
  let globalX = 0;
  let globalY = 0;
  while (hElement) {
    const localX = hElement.offsetLeft;
    const localY = hElement.offsetTop;

    console.log(hElement?.clientLeft);
    console.log(hElement?.offsetLeft);
    console.log(hElement?.scrollLeft);

    if (localX) {
      globalX += localX;
    }
    if (localY) {
      globalY += localY;
    }
    hElement = hElement.offsetParent as HTMLElement;
  }
  return { x: globalX, y: globalY };
};

export default function Test() {
  const ref = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect>();
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [isDope, setDope] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  function resizeHandler(ev: UIEvent) {
    setRect(ref.current?.getBoundingClientRect());

    const offset = calculateOffset(ref.current);
    if (ref.current) {
      //setTop(ref.current.ref);
      //setLeft(offset.x);
    }
    console.log(ref.current?.getBoundingClientRect());
  }

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    setRect(ref.current?.getBoundingClientRect());
    const offset = calculateOffset(ref.current);
    if (ref.current) {
      setTop(ref.current.offsetTop);
      setLeft(ref.current.offsetTop);
    }
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const setDopeAsHell = () => {
    setDope(!isDope);
  };

  const boxStyle = {
    transform: isHover ? `translate(${rect?.left}px, ${rect?.top}px)` : "",
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
        <div
          onClick={setDopeAsHell}
          className={`bg-gray-700 w-[200px] h-[200px] rounded-lg shadow-2xl transform hover:brightness-50 transition duration-500
        ${isDope ? "translate-x-20 translate-y-20" : ""}`}
        ></div>
    </div>
    // <div className="flex min-w-full min-h-full before:m-auto after:m-auto"
    // >
    //   <div
    //     ref={ref}
    //     className={`flex flex-wrap bg-gray-700 w-[200px] h-[200px]
    //       before:top-[${rect?.top}px] before:left-[${rect && (rect?.left+500)}px
    //       after:top-[${rect?.top}px] after:left-[${rect && (rect?.left+500)}px
    //       hover:top-[${rect?.top}px] hover:left-[${rect && (rect?.left+500)}px
    //       hover:fixed hover:w-[${rect?.width}px] hover:h-[${rect?.width}px]`}
    //      style={boxStyle}
    //   >
    //     {rect && (
    //       <div className="flex flex-col">
    //         <span className="text-white text-center">
    //           {rect.width}x{rect.height}!
    //         </span>
    //         <span className="text-white text-center">
    //           Bottom - {rect.bottom}, Right - {rect.right},
    //           Top - {rect.top}, Left - {rect.left}
    //         </span>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
}
