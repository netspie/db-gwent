"use client";

import { Coords, clearCanvas, createLine, createShadow } from "@/core/canvas/CanvasFunctions";
import { useEffect, useRef, useState } from "react";

export default function Test() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [coords, setCoords] = useState<Coords>({
    x: 10,
    y: 10,
    x1: 100,
    y1: 200,
  });

  const onMouseMove = (ev: MouseEvent) => {
    drawLine(ev.clientX, ev.clientY)
  };

  const onTouchMove = (ev: TouchEvent) => {
    const t = ev.changedTouches[0]
    drawLine(t.clientX, t.clientY)
  };

  const drawLine = (x: number, y: number) => {
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();

    clearCanvas(canvasRef.current);
    coords.x1 = x - rect.x;
    coords.y1 = y - rect.y;
    setCoords(coords);

    createShadow(canvasRef.current, coords, { width: 1, color: "rgba(255, 0, 0, 1)" });
  }

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div className="fixed h-full w-full flex justify-center items-center">
      <canvas
        ref={canvasRef}
        id="canvas"
        className="bg-slate-300 h-full w-full"
        onMouseMove={(ev) => {}}
      ></canvas>
    </div>
  );
}
