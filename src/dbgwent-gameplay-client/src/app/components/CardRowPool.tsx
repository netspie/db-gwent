"use client";

type CardRowPoolProps = {
  children?: React.ReactNode;
  noPadding?: boolean
};

export default function CardRowPool(props: CardRowPoolProps) {
  return (
    <div className={`flex gap-1 w-full h-full ${!props.noPadding && 'p-1'} pl-2 overflow-visible`}>
      <div className="flex gap-1 w-full h-full">
        {props.children}
      </div>
    </div>
  );
}
