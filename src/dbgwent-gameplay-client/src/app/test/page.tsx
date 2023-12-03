"use client";

import TestComponent from "@/components/TestComponent";
import TestComponent2 from "@/components/TestComponent2";
import { useState, memo, useMemo } from "react";

export default function Test() {
  const [isRefreshing, setRefreshing] = useState(false);

  const nestedComponent = useMemo(() => {
    return <TestComponent2 />;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <button
          className="text-white text-center w-[80px] h-[30px] bg-gray-700 hover:bg-gray-800 active:bg-gray-900 rounded-md"
          onClick={() => {
            setRefreshing(!isRefreshing);
          }}
        >
          Refresh
        </button>
        <TestComponentMemo>{nestedComponent}</TestComponentMemo>
        <TestComponent>{nestedComponent}</TestComponent>
      </div>
    </div>
  );
}

const TestComponentMemo = memo(TestComponent);
const TestComponent2Memo = memo(TestComponent2);
