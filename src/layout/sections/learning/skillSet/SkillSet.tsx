import { FlexWrapper } from '../../../../components/FlexWrapper'
import { theme } from '../../../../styles/Theme.styled'
import { LerningCard } from '../card/LearningCard'
import styled from 'styled-components'
  
interface Slides {
    imageUrl: string,
    title: string,
    category?: string
}

type PropType = {
    slides: Slides[]
}

export const SkillSet = (props: PropType) => {
  const { slides } = props

  return (
    <Container>
        {slides.map((slide, index) => (
        <LerningCard imageUrl={slide.imageUrl} title={slide.title} key={slide.category + index.toString()}/>
        ))}
    </Container>
  )
}


const Container = styled(FlexWrapper)`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    width: 70%;
    gap: 30px;
    padding: 30px;
    padding-top: 0;
    max-height: 50%;
    overflow-x: hidden;
    overflow-y: hidden;
    @media ${theme.media.mobile} {
        max-height: 50vh;
        justify-content: center;
        overflow-y: auto;
    }
`
