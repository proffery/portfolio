import React from "react"
import { Button } from "../../../components/button/Button.styled"
import { Icon } from "../../../components/icon/Icon"
import { useAppContext } from "../../../common/context/appContext";

type Props = {
    className?: string
}

export const ThemeChangeButton = ({ className }: Props) => {
    const { theme, setTheme} = useAppContext()

    const themeChangeHandler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
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