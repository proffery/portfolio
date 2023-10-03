import { LerningCard } from '../card/LearningCard'
import { S } from './LearningSkillSet_Styles'
  
interface Slides {
    imageUrl: string,
    title: string,
    category?: string
}

type PropType = {
    slides: Slides[]
}

export const LearningSkillSet = (props: PropType) => {
  const { slides } = props

  return (
    <S.Skills>
        {slides.map((slide, index) => (
            <LerningCard imageUrl={slide.imageUrl} title={slide.title} key={slide.category + index.toString()}/>
        ))}
    </S.Skills>
  )
}
