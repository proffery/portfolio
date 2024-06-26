import React, {createContext, memo, ReactNode, useContext, useEffect, useState} from "react";

const initialState = {
    theme: 'dark' as Theme,
    width: window.innerWidth,
    setWidth: (width: number) => {},
    setTheme: (newTheme: Theme) => {},
}
export type Theme = 'light' | 'dark'

const AppContext = createContext(initialState)

type Props = { children: ReactNode }
const AppContextProvider = memo(({ children }: Props) => {
    const [context, setContext] = useState<Omit<typeof initialState, 'setWidth' | 'setTheme'>>(initialState)

    const setWidth = (width: number) => {
        setContext({...context, width})
    }
    const setTheme = (themeName: Theme) => {
        setContext({...context, theme: themeName})
    }

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, [window.innerWidth])

    useEffect(() => {
        setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }, [])

    return <AppContext.Provider value={{...context, setWidth, setTheme}}>{children}</AppContext.Provider>
})

const useAppContext = () => useContext(AppContext)

export { useAppContext, AppContextProvider }