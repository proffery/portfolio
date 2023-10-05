import { Fade } from 'react-awesome-reveal'
import { LerningCard } from '../card/LearningCard'
import { S } from './LearningSkillSet_Styles'
  
interface Slides {
    imageId: string,
    title: string,
    category?: string,
    viewBox?: string
}

type PropType = {
    slides: Slides[]
}

export const LearningSkillSet = (props: PropType) => {
  const { slides } = props

  return (
    <S.Skills>
        <Fade cascade triggerOnce>
          {slides.map((slide, index) => (
              <LerningCard imageId={slide.imageId} viewBox={slide.viewBox || "0 0 128 128"} title={slide.title} key={slide.category + index.toString()}/>
          ))}
        </Fade>
    </S.Skills>
  )
}
