"use client";

type CardRowBottomProps = {
  children: React.ReactNode;
};

export default function CardRowBottom(props: CardRowBottomProps) {
  return (
    <div className="flex gap-1 justify-center bg-green-900 w-full h-full md:p-1 overflow-visible">
      <div className="flex gap-1 w-full h-full justify-center">
        {props.children}
      </div>
    </div>
  );
}
