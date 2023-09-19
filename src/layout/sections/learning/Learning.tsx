import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { DecorationDot } from "../../../components/decoration/DecorationDot"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { LerningCard } from "./card/LearningCard"

export const Learning = () => {
    return (
        <StyledLearning>
            <SectionTitle color="white">Learning<DecorationDot /></SectionTitle>
            <FlexWrapper direction="column">
                <FlexWrapper gap="12px"justify="space-around" wrap="wrap">
                    <LearningSkillsTitle>Website, Html & cSS</LearningSkillsTitle>
                    <LearningSkillsTitle></LearningSkillsTitle>
                    <LearningSkillsTitle></LearningSkillsTitle>
                    <LearningSkillsTitle></LearningSkillsTitle>
                </FlexWrapper>
                <FlexWrapper justify="space-around" gap="12px" wrap="wrap">
                    <LerningCard />
                    <LerningCard />
                    <LerningCard />
                    <LerningCard />
                </FlexWrapper>

            </FlexWrapper>
        </StyledLearning>
    )
}

const StyledLearning = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e4d3f5;
    padding-left: 75px;
    padding-right: 75px;
    padding-bottom: 96px;
`
const LearningSkillsTitle = styled.h3`
    display: flex;
    color: white;
    font-size: 20px;
    font-weight: 500;
    align-self: flex-start;
    width: 22%;
    min-width: 330px;
`