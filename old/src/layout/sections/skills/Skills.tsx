import { SectionTitle } from "../../../components/SectionTitle.styled"
import { useAppContext} from "../../../common/context/appContext"
import React from "react"
import { skills } from "../../../common/const/data/skills"
import { SkillSet } from "./SkillSet/SkillSet"
import { S } from "./Skills_Styles"


export const Skills = () => {
    const { theme } = useAppContext()

    return (
        <S.Learning id="skills" theme={theme}>
            <S.LearningContainer theme={theme} direction="column" align="center">
                <SectionTitle theme={theme} color="white">Skills</SectionTitle>
                <S.LearningSkillContainer theme={theme} direction="column">
                    <S.LearningSkillsTitle>Front-end:</S.LearningSkillsTitle>
                    <SkillSet slides={skills.filter(skill => skill.category === 'front')} />
                </S.LearningSkillContainer>    
                <S.LearningSkillContainer theme={theme} direction="column">
                    <S.LearningSkillsTitle>Other:</S.LearningSkillsTitle>
                    <SkillSet slides={skills.filter(skill => skill.category === 'other')} />
                </S.LearningSkillContainer>
            </S.LearningContainer>
        </S.Learning>
    )
}
