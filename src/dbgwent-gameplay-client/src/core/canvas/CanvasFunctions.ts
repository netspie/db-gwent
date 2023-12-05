
export type Coords = {
  x: number;
  y: number;
  x1: number;
  y1: number;
};

export type Line = {
  color: string;
  width: number;
};

export function createLine(
  canvas: HTMLCanvasElement,
  coords: Coords,
  line: Line = { color: "red", width: 2 }
) {
  canvas.width = canvas.clientWidth
  canvas.height = canvas.clientHeight
  
  const canvasContext = canvas.getContext("2d");
  if (!canvasContext) return;

  canvasContext.beginPath();
  canvasContext.moveTo(coords.x, coords.y);
  canvasContext.lineTo(coords.x1, coords.y1);
  canvasContext.strokeStyle = line.color;
  canvasContext.lineWidth = line.width;
  canvasContext.stroke();
};

export function clearCanvas(canvas: HTMLCanvasElement) {
  canvas
    ?.getContext("2d")
    ?.clearRect(0, 0, canvas.width, canvas.height);
};