import { useLayoutEffect, useState } from "react";

type Transform = {
    position?: XY;
    rotation?: number;
    scale?: number;
  };
  
  type XY = {
    x: number;
    y: number;
  };
  
  type TransformerProps = {
    children: React.ReactNode;
    childrenRef: React.RefObject<HTMLElement>;
    transformations: Transform[];
  };
  
  export default function Transformer(props: TransformerProps) {
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
      if (index === props.transformations.length - 1) newIndex = -1;
      else newIndex++;
  
      setIndex(newIndex);
      if (newIndex >= 0) {
        const transform = props.transformations[newIndex];
        console.log("index " + newIndex);
  
        setStyleClass(
          `absolute transform translate-x-0 translate-y-0 scale-100 rotate-0 transition duration-300`
        );
  
        const lastPosition = props.transformations.find(
          (t, i) => t.position && i <= newIndex
        );
        const lastScale = props.transformations.find((t, i) => t.scale && i <= newIndex);
        const lastRotation = props.transformations.find(
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
  