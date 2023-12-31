import { ThemeContext } from "../../../../context/ThemeContext"
import { useContext } from "react"
import { S } from "./LearningCard_Styles"
import { Icon } from "../../../../components/icon/Icon"

type LearningCardPropsTypes = {
    imageId: string,
    title: string,
    viewBox?: string
}

export const LerningCard: React.FC<LearningCardPropsTypes> = (props: LearningCardPropsTypes) => {
    const theme = useContext(ThemeContext)
    return (
        <S.LearningCard 
            theme={theme} 
            align="end"
            justify="center"
        >
            <Icon iconId={props.imageId} width="100%" height="100%" viewBox={props.viewBox}/>
            <S.LearningCardTitle theme={theme}>{props.title}</S.LearningCardTitle>
        </S.LearningCard>
    )
}