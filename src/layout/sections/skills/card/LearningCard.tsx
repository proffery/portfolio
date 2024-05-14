import { ThemeContext } from "../../../../common/context/ThemeContext"
import React, { useContext } from "react"
import { S } from "./LearningCard_Styles"
import { Icon } from "../../../../components/icon/Icon"

type LearningCardPropsTypes = {
    imageId: string,
    title: string,
    viewBox?: string
}

export const LearningCard: React.FC<LearningCardPropsTypes> = (props: LearningCardPropsTypes) => {
    const theme = useContext(ThemeContext)
    return (
        <S.LearningCard 
            theme={theme} 
            align="end"
            justify="center"
        >
            <Icon iconId={props.imageId} width="70%" height="70%" viewBox={props.viewBox}/>
        </S.LearningCard>
    )
}