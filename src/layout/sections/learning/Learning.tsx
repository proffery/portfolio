import { SectionTitle } from "../../../components/SectionTitle.styled"
import { ThemeContext } from "../../../context/ThemeContext"
import { useContext } from "react"
import { skills } from "../../../data/skills"
import { LearningSkillSet } from "./learningSkillSet/LearningSkillSet"
import { S } from "./Learning_Styles"


export const Learning: React.FC = () => {
    const theme = useContext(ThemeContext)
    return (
        <S.Learning id="skills" theme={theme}>
            <S.LearningContainer theme={theme} direction="column" gap="30px" align="center">
                <SectionTitle theme={theme} color="white">Learning</SectionTitle>
                <S.LearningSkillContainer theme={theme} direction="column">
                    <S.LearningSkillsTitle>Frontend:</S.LearningSkillsTitle>
                    <LearningSkillSet slides={skills.filter(skill => skill.category === 'front')} />  
                </S.LearningSkillContainer>    
                <S.LearningSkillContainer theme={theme} direction="column">
                    <S.LearningSkillsTitle>Other:</S.LearningSkillsTitle>
                    <LearningSkillSet slides={skills.filter(skill => skill.category === 'other')} />
                </S.LearningSkillContainer>
            </S.LearningContainer>
        </S.Learning>
    )
}
