"use client";

type CardRowProps = {
  children?: React.ReactNode;
};

export default function CardRow(props: CardRowProps) {
  return (
    <div className="flex bg-blue-900 w-full h-full overflow-visible">
      <div className="bg-gray-500 min-w-[80px] h-full hidden md:flex"></div>
      <div className="flex gap-1 bg-blue-900 w-full h-full justify-center">
        {props.children}
      </div>
    </div>
  );
}
