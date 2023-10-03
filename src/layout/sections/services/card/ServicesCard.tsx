import { Icon } from "../../../../components/icon/Icon"
import { useContext } from "react"
import { ThemeContext } from "../../../../context/ThemeContext"
import { S } from "./ServicesCard_Styles"

type ServicesCardPropsTypes = {
    iconId: string,
    title: string,
    link: string
}

export const ServicesCard: React.FC<ServicesCardPropsTypes> = (props: ServicesCardPropsTypes) => {
    const theme = useContext(ThemeContext)
    return (
        <S.ServicesCard theme={theme} direction="column" justify="space-between" align="start" width="30%">
            <S.ServicesCardIconWrapper>
                <Icon iconId={props.iconId} height="73px" width="73px" viewBox="0 0 70 70"/>
            </S.ServicesCardIconWrapper>
            <S.ServicesCardTitle theme={theme}>{props.title}</S.ServicesCardTitle>
            <S.ServicesCardLink href={props.link} theme={theme}>View More<Icon iconId="arrowRight" width="20%"/></S.ServicesCardLink>
        </S.ServicesCard>
    )
}