import { useAppContext } from "../../../../common/context/appContext"
import React from "react"
import { S } from "./SkillsCard_Styles"
import { Icon } from "../../../../components/icon/Icon"

type LearningCardPropsTypes = {
    imageId: string,
    title: string,
    viewBox?: string
}

export const SkillsCard = (props: LearningCardPropsTypes) => {
    const {theme} = useAppContext()
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