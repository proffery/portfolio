import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { LerningCard } from '../card/LearningCard'
import styled from 'styled-components'
  
interface Slides {
    imageUrl: string,
    title: string,
    category?: string
}

type PropType = {
    options?: EmblaOptionsType,
    slides: Slides[]
}

export const EmblaCarousel = (props: PropType) => {
  const { options, slides } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <Embla ref={emblaRef}>
        <EmblaViewport>
            <EmblaContainer>
                {slides.map((slide, index) => (
                <LerningCard imageUrl={slide.imageUrl} title={slide.title} key={slide.category + index.toString()}/>
                ))}
            </EmblaContainer>
        </EmblaViewport>
    </Embla>
  )
}

const Embla = styled.div`
    padding: 10px;
`

const EmblaViewport = styled.div`
    overflow: hidden;
`

const EmblaContainer = styled.div`
    backface-visibility: hidden;
    display: flex;
    touch-action: pan-y;
    gap: 12px;
`
