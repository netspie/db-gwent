"use client";

import { useEffect, useRef, useState } from "react";

type Coords = {
  x: number;
  y: number;
  x1: number;
  y1: number;
};

type Line = {
  color: string;
  width: number;
};

export default function Test() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isKeyHandlerSet, setKeyHandlerSet] = useState(false);
  let canvasContext: CanvasRenderingContext2D | null;
  const [coords, setCoords] = useState<Coords>({
    x: 10,
    y: 10,
    x1: 100,
    y1: 200,
  });
  const [bob, setBob] = useState(false);

  useEffect(() => {
    setBob(true);
    if (!isKeyHandlerSet) {
      setKeyHandlerSet(true);
      console.log("add");
      window.addEventListener("mousemove", (ev: MouseEvent) => {
        if (!canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        clearCanvas();
        const newCoords = coords;
        newCoords.x1 = ev.clientX - rect.x;
        newCoords.y1 = ev.clientY - rect.y;
        setCoords(newCoords);

        createLine(newCoords, { color: "black", width: 8 });
      });
    }

    if (!canvasRef) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    // get context of the canvas
    canvasContext = canvas.getContext("2d");

    return () => {
      console.log('unset');
    };
  }, []);

  useEffect(() => {
    createLine(
      { x: 10, y: 10, x1: 100, y1: 100 },
      { color: "black", width: 8 }
    );
    createLine(
      { x: 10, y: 140, x1: 10, y1: 20 },
      { color: "orange", width: 3 }
    );
  }, []);

  const createLine = (
    info: Coords,
    data: Line = { color: "black", width: 8 }
  ) => {
    const { x, y, x1, y1 } = info;
    const { color = "black", width = 1 } = data;
    if (!canvasContext || !canvasRef.current) return;

    canvasContext.beginPath();
    canvasContext.moveTo(x, y);
    canvasContext.lineTo(x1, y1);
    canvasContext.strokeStyle = color;
    canvasContext.lineWidth = width;
    canvasContext.stroke();
  };

  const clearCanvas = () => {
    if (!canvasContext || !canvasRef.current) return;
    canvasContext.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  return (
    <div className="fixed h-full w-full flex justify-center items-center">
      <canvas
        ref={canvasRef}
        id="canvas"
        className="bg-slate-300 h-full w-full"
        width={window.outerWidth}
        height={window.outerHeight}
        onMouseMove={(ev) => {
        }}
      ></canvas>
    </div>
  );
}
