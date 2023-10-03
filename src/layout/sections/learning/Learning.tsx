import { SectionTitle } from "../../../components/SectionTitle.styled"
import { ThemeContext } from "../../../context/ThemeContext"
import { useContext } from "react"
import { skills } from "../../../data/skills"
import { LearningSkillSet } from "./learningSkillSet/LearningSkillSet"
import { S } from "./Learning_Styles"


export const Learning: React.FC = () => {
    const theme = useContext(ThemeContext)
    return (
        <S.Learning theme={theme}>
            <S.LearningContainer theme={theme} direction="column" align="center">
                <SectionTitle theme={theme} color="white">Learning</SectionTitle>
                <S.LearningSkillContainer theme={theme} wrap="wrap">
                    <S.LearningSkillsTitle>Frontend:</S.LearningSkillsTitle>
                    <LearningSkillSet slides={skills.filter(skill => skill.category === 'front')} />  
                </S.LearningSkillContainer>    
                <S.LearningSkillContainer theme={theme} wrap="wrap">
                    <S.LearningSkillsTitle>Backend:</S.LearningSkillsTitle>
                    <LearningSkillSet slides={skills.filter(skill => skill.category === 'back')} />
                </S.LearningSkillContainer>
            </S.LearningContainer>
        </S.Learning>
    )
}
