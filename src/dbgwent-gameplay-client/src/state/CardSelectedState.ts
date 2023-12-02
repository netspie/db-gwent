import { create } from "zustand";

type CardSelectedState = {
  isSelected: boolean
  setSelected: (isSelected: boolean) => void
}

export const useCardSelectionState = create<CardSelectedState>()((set) => ({
  isSelected: false,
  setSelected: (isSelected: boolean) => set({ isSelected })
}))
