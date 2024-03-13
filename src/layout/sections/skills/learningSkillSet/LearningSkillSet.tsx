import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
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
  const items = slides.map((slide, index) => (
    <LerningCard
      imageId={slide.imageId}
      viewBox={slide.viewBox || "0 0 128 128"}
      title={slide.title}
      key={slide.category + index.toString()}
    />
  ))

  return (
    <S.Skills>
      <AliceCarousel
        mouseTracking
        autoPlay={true}
        autoPlayInterval={1500}
        autoWidth={true}
        infinite={true}
        disableButtonsControls={true}
        items={items}
      />
    </S.Skills>
  )
}
