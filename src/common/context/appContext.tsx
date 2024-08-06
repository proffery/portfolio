import React, { ReactNode, createContext, memo, useContext, useEffect, useState } from 'react'

const initialState = {
  setTheme: (newTheme: Theme) => {},
  setWidth: (width: number) => {},
  theme: 'dark' as Theme,
  width: window.innerWidth,
}

export type Theme = 'dark' | 'light'

const AppContext = createContext(initialState)

type Props = { children: ReactNode }
const AppContextProvider = memo(({ children }: Props) => {
  const [context, setContext] =
    useState<Omit<typeof initialState, 'setTheme' | 'setWidth'>>(initialState)

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
