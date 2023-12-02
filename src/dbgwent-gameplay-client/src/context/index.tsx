'use client'

import { createContext, useContext, useState } from 'react'

const AppContext = createContext({
    isCardSelected: false,
})

export function AppWrapper({ children } : {
  children: React.ReactNode
}) {
  let [state, setState] = useState({
    isCardSelected: false
  })

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}
