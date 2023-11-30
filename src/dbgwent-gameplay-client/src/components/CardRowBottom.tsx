"use client";

type CardRowBottomProps = {
  children: React.ReactNode;
};

export default function CardRowBottom(props: CardRowBottomProps) {
  return (
    <div className="flex gap-1 justify-center bg-slate-400 w-full h-full md:p-1">
      <div className="row-parent flex gap-1 w-full h-full before:m-auto after:m-auto overflow-x-auto overflow-y-clip">
        {props.children}
      </div>
    </div>
  );
}
