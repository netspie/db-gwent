import { useCardSelectionState } from "@/state/CardSelectedState";

type TestComponentProps = {
  children?: React.ReactNode
}

export default function TestComponent(props: TestComponentProps) {
  const { isSelected, setSelected } = useCardSelectionState();
  return (
    <div className="w-[200px] h-[200px] bg-slate-600 rounded-lg shadow-2xl flex flex-col justify-center items-center gap-2">
      <span className="text-white text-center">
        Selected - {isSelected ? "Y" : "N"}
      </span>
      <span className="text-white text-center">
        Random - {Math.random().toFixed(2)}
      </span>
      <span className="text-white text-center">
        Children - {props.children && props.children}
      </span>
      <button
        className="text-white text-center w-[50%] h-[20%] bg-gray-700 hover:bg-gray-800 rounded-md active:bg-gray-900"
        onClick={() => setSelected(!isSelected)}
      >
        Switch
      </button>
    </div>
  );
}
