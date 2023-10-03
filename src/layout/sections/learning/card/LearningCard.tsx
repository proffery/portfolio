import { ThemeContext } from "../../../../context/ThemeContext"
import { useContext } from "react"
import { S } from "./LearningCard_Styles"

type LearningCardPropsTypes = {
    imageUrl: string,
    title: string,
}

export const LerningCard: React.FC<LearningCardPropsTypes> = (props: LearningCardPropsTypes) => {
    const theme = useContext(ThemeContext)
    return (
        <S.LearningCard 
            theme={theme} 
            backgroundImage={`url("${props.imageUrl}")`} 
            align="end"
            justify="center"
        >
            <S.LearningCardTitle theme={theme}>{props.title}</S.LearningCardTitle>
        </S.LearningCard>
    )
}