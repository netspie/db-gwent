import { create } from "zustand";

type CardSelectedState = {
  isSelected: boolean
  selectedCardId: number | undefined
  setSelected: (isSelected: boolean, selectedCardId: number) => void
}

export const useCardSelectionState = create<CardSelectedState>()((set) => ({
  isSelected: false,
  selectedCardId: undefined,
  setSelected: (isSelected: boolean, selectedCardId: number) => set({ isSelected, selectedCardId })
}))
