import React, { useContext } from "react"
import { Button } from "../../../components/button/Button.styled"
import { Icon } from "../../../components/icon/Icon"
import { ThemeContext } from "../../../context/ThemeContext"

type ThemeChangeButtonTypes = {
    className?: string
    setCurrentTheme: any,
}

export const ThemeChangeButton: React.FC<ThemeChangeButtonTypes> = ({ className, setCurrentTheme }: ThemeChangeButtonTypes) => {
    const theme = useContext(ThemeContext)
    const themeChangeHandler = () => {
        theme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light')
    }

    return (
        <Button 
            borderColor="transparent" 
            background="transparent" 
            aria-label="Theme change button" 
            hoverShadow="none" 
            hoverBackground="none" 
            minWidth="0px"
            onClick={themeChangeHandler}
            className={className}
        >
            <Icon
                iconId={theme === 'light' ? 'moon' : 'sun'}
                width="40px"
                height="40px"
                viewBox={theme === 'light' ? '0 0 45 50' : '10 20 500 500'}
            />
        </Button>
    )
}