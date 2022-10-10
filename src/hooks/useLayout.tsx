import { useContext, createContext, ReactNode, useState } from 'react'

interface LayoutProviderProps {
  children: ReactNode
}

interface LayoutContextData {
  contentContainerWidth: number
  setContentContainerWidth: (width: number) => void
}

const LayoutContext = createContext({} as LayoutContextData)

function LayoutProvider({ children }: LayoutProviderProps) {
  const [contentContainerWidth, setContentContainerWidth] = useState(0)

  return (
    <LayoutContext.Provider
      value={{ contentContainerWidth, setContentContainerWidth }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

function useLayout() {
  const context = useContext(LayoutContext)

  return context
}

export { LayoutProvider, useLayout }
