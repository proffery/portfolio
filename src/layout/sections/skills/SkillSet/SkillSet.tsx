import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { SkillsCard } from '../card/SkillsCard'
import { S } from './SkillSet_Styles'
import {Bounce} from "react-awesome-reveal";

interface Slides {
  imageId: string,
  title: string,
  category?: string,
  viewBox?: string
}

type PropType = {
  slides: Slides[]
}



export const SkillSet = (props: PropType) => {
  const { slides } = props
  const items = slides.map((slide, index) => (
      <Bounce duration={400}>
            <SkillsCard
              imageId={slide.imageId}
              viewBox={slide.viewBox || "0 0 128 128"}
              title={slide.title}
              key={slide.category + index.toString()}
            />
      </Bounce>

  ))

  return (
    <S.Skills>
      <AliceCarousel
        mouseTracking
        autoPlay={true}
        autoPlayInterval={2500}
        infinite={true}
        disableButtonsControls={true}
        items={items}
        responsive={{
          0: {
            items: 1,
          },
          576: {
            items: 2,
            itemsFit: 'contain',
          },
            1024: {
            items: 3,
            itemsFit: 'contain',
          },
          1444: {
            items: 5,
            itemsFit: 'contain',
          }
        }}
      />
    </S.Skills>
  )
}
