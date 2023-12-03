import { useCardSelectionState } from "@/state/CardSelectedState";

export default function TestComponent2() {
  const { isSelected, setSelected } = useCardSelectionState();
  return (
    <span className="text-white text-center">
      Nested Child {Math.random().toFixed(2)}{isSelected}
    </span>
  );
}
