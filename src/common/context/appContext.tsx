import { ReactNode, createContext, memo, useContext, useState } from 'react'

type Context = {
  setTheme?: (newTheme: Theme) => void
  theme: Theme
}

export type Theme = 'dark' | 'light'

const AppContext = createContext<Context>({ theme: detectSystemTheme() })

type Props = { children: ReactNode }
const AppContextProvider = memo(({ children }: Props) => {
  const [context, setContext] = useState<Context>({
    theme: detectSystemTheme(),
  })

  const setTheme = (themeName: Theme) => {
    setContext({ ...context, theme: themeName })
  }

  return <AppContext.Provider value={{ ...context, setTheme }}>{children}</AppContext.Provider>
})

const useAppContext = () => useContext(AppContext)

function detectSystemTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export { AppContextProvider, useAppContext }
