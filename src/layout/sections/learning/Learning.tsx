import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { LerningCard } from "./card/LearningCard"
import { ThemeContext } from "../../../context/ThemeContext"
import { useContext } from "react"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"
import cardHtml from "../../../assets/images/learning-html5.svg"
import cardCss from "../../../assets/images/learning-css3.svg"
import cardJs from "../../../assets/images/learning-javascript.svg"
import cardTs from "../../../assets/images/learning-typescript.svg"
import cardReact from "../../../assets/images/learning-react.svg"
import cardBootstrap from "../../../assets/images/learning-bootstrap.svg"
import cardTailwind from "../../../assets/images/learning-tailwindcss.svg"
import cardFirebase from "../../../assets/images/learning-firebase.svg"

export const Learning = () => {
    const theme = useContext(ThemeContext)
    return (
        <StyledLearning theme={theme}>
            <StyledContainer theme={theme} direction="column" align="center" justify="center">
                <SectionTitle theme={theme} color="white">Learning</SectionTitle>
                <FlexWrapper direction="column">
                    <FlexWrapper>
                        <LearningSkillsTitle theme={theme}>Website:</LearningSkillsTitle>
                    </FlexWrapper>
                    <FlexWrapper justify="space-between" gap="12px" wrap="wrap">
                        <LerningCard title="HTML" imageUrl={cardHtml}/>
                        <LerningCard title="CSS" imageUrl={cardCss}/>
                        <LerningCard title="JavaScript" imageUrl={cardJs}/>
                        <LerningCard title="TypeScript" imageUrl={cardTs}/>
                    </FlexWrapper>
                    <FlexWrapper>
                        <LearningSkillsTitle theme={theme}>Technologies:</LearningSkillsTitle>
                    </FlexWrapper>
                    <FlexWrapper justify="space-between" gap="12px" wrap="wrap">
                        <LerningCard title="React" imageUrl={cardReact}/>
                        <LerningCard title="Bootstrap" imageUrl={cardBootstrap}/>
                        <LerningCard title="Tailwind" imageUrl={cardTailwind}/>
                        <LerningCard title="Firebase" imageUrl={cardFirebase}/>
                    </FlexWrapper>
                </FlexWrapper>
            </StyledContainer>
        </StyledLearning>
    )
}

const StyledLearning = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
`
const StyledContainer = styled(Container)`
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    padding: 60px;
`

const LearningSkillsTitle = styled.h3`
    margin: 0 auto 0 0;
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.second :
        theme.dark.color.text.primary};
    margin-top: 10px;
`