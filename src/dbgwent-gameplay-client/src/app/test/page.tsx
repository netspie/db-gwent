"use client";

import { match } from "assert";
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";

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

type Transform = {
  position?: XY;
  rotation?: number;
  scale?: number;
};

type XY = {
  x: number;
  y: number;
};

const path = [
  { x: -100, y: -200 },
  { x: 0, y: -400 },
  { x: 100, y: -200 },
];

const transforms: Transform[] = [
  { position: { x: -100, y: -200 } },
  { scale: 3 },
  { rotation: 90 },
  { scale: 1 },
];

type TransformerProps = {
  children: React.ReactNode;
  childrenRef: React.RefObject<HTMLElement>;
};

function Transformer(props: TransformerProps) {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [styleClassInitial, setStyleClassInitial] = useState("");
  const [styleClass, setStyleClass] = useState("");
  const [index, setIndex] = useState(-1);
  const [style, setStyle] = useState<React.CSSProperties>();
  const [fillerStyle, setFillerStyle] = useState<React.CSSProperties>();

  const select = () => {
    if (!props.childrenRef.current) {
      console.log("ref not init");
      return;
    }

    setOffsetX(props.childrenRef.current.offsetLeft);
    setOffsetY(props.childrenRef.current.offsetTop);

    let newIndex = index;
    if (index === transforms.length - 1) newIndex = -1;
    else newIndex++;

    setIndex(newIndex);
    if (newIndex >= 0) {
      const transform = transforms[newIndex];
      console.log("index " + newIndex);

      setStyleClass(
        `absolute transform translate-x-0 translate-y-0 scale-100 rotate-0 transition duration-300`
      );

      const lastPosition = transforms.find(
        (t, i) => t.position && i <= newIndex
      );
      const lastScale = transforms.find((t, i) => t.scale && i <= newIndex);
      const lastRotation = transforms.find(
        (t, i) => t.rotation && i <= newIndex
      );

      setStyle({
        // Position X
        ...((transform.position && {
          "--tw-translate-x": `${
            transform.position ? transform.position.x : "0"
          }px`,
        }) ||
          (lastPosition && {
            "--tw-translate-x": `${lastPosition?.position?.x}px`,
          })),

        // Position Y
        ...((transform.position && {
          "--tw-translate-y": `${
            transform.position ? transform.position.y : "0"
          }px`,
        }) ||
          (lastPosition && {
            "--tw-translate-y": `${lastPosition?.position?.y}px`,
          })),

        // Scale X
        ...((transform.scale && {
          "--tw-scale-x": `${transform.scale}`,
        }) ||
          (lastScale && {
            "--tw-scale-x": `${lastScale.scale}`,
          })),

        // Scale Y
        ...((transform.scale && {
          "--tw-scale-y": `${transform.scale}`,
        }) ||
          (lastScale && {
            "--tw-scale-y": `${lastScale.scale}`,
          })),

        // Rotation
        ...((transform.rotation && {
          "--tw-rotate": `${transform.rotation}deg`,
        }) ||
          (lastRotation && {
            "--tw-rotate": `${lastRotation.rotation}deg`,
          })),
      } as React.CSSProperties);
    } else {
      setStyle({
        "--tw-translate-x": `0px`,
        "--tw-translate-y": `0px`,
        "--tw-scale-x": 1,
        "--tw-scale-y": 1,
        "--tw-rotate": `0deg`,
      } as React.CSSProperties);
      setTimeout(() => {
        setStyleClass(
          "transform translate-x-0 translate-y-0 scale-100 rotate-0 transition duration-300"
        );
      }, 300);
    }
  };

  useLayoutEffect(() => {
    if (!props.childrenRef.current || !style) return;

    let initialClassName = styleClassInitial;
    if (styleClassInitial.length == 0) {
      initialClassName = props.childrenRef.current.className;
      setStyleClassInitial(initialClassName);

      const rect = props.childrenRef.current.getBoundingClientRect();
      setFillerStyle({
        width: rect.width,
        height: rect.height,
      });
    }

    console.log(initialClassName);
    props.childrenRef.current.style.left = `${offsetX}px`;
    props.childrenRef.current.style.top = `${offsetY}px`;
    props.childrenRef.current.className = initialClassName + " " + styleClass;

    Object.keys(style).forEach((key) => {
      if (!props.childrenRef.current || !style || !key) return;
      const attribute = (style as any)[key];
      props.childrenRef.current.style.setProperty(key, attribute);
    });
  }, [index]);

  return (
    <div style={fillerStyle} onClick={select} className="h-fit w-fit">
      {index >= 0 && <div style={fillerStyle}></div>}
      {props.children}
    </div>
  );
}

function NestedComponent() {
  const boxRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef(null);

  return (
    <Transformer childrenRef={boxRef}>
      <div
        ref={boxRef}
        className={`w-[40px] h-[60px] bg-red-700 cursor-pointer hover:bg-red-800 active:bg-red-900`}
      ></div>
    </Transformer>
  );
}
