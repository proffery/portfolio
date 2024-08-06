import { ReactNode, createContext, memo, useContext, useEffect, useState } from 'react'

type Context = {
  setTheme?: (newTheme: Theme) => void
  setWidth?: (width: number) => void
  theme?: Theme
  width?: number
}

export type Theme = 'dark' | 'light'

const AppContext = createContext<Context>({})

type Props = { children: ReactNode }
const AppContextProvider = memo(({ children }: Props) => {
  const [context, setContext] = useState<Omit<Context, 'setTheme' | 'setWidth'>>({ theme: 'dark' })

  const setWidth = (width: number) => {
    setContext({ ...context, width })
  }
  const setTheme = (themeName: Theme) => {
    setContext({ ...context, theme: themeName })
  }

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [window.innerWidth])

  useEffect(() => {
    setTheme(
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    )
  }, [])

  return (
    <AppContext.Provider value={{ ...context, setTheme, setWidth }}>{children}</AppContext.Provider>
  )
})

const useAppContext = () => useContext(AppContext)

export { AppContextProvider, useAppContext }
