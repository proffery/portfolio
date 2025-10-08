'use client'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useActions } from '@/common/use-actions'
import withRedux from '@/common/with-redux'
import { Button } from '@/components/button/button'
import { SvgSpriteIcon } from '@/components/svg-sprite-icon/svg-sprite-icon'
import { selectIsSound, selectSectionInView } from '@/services/app/app.selectors'
import { appActions } from '@/services/app/app.slice'
import clsx from 'clsx'
import useSound from 'use-sound'

import s from './sound-control.module.scss'

const SoundControl = () => {
  const classNames = {
    button: clsx(s.soundButton),
  }

  const { setIsSound } = useActions(appActions)
  const [areSoundsLoaded, setAreSoundsLoaded] = useState(false)
  const [loadedSounds, setLoadedSounds] = useState({
    background: false,
    swipe: false,
  })

  const isSound = useSelector(selectIsSound)
  const section = useSelector(selectSectionInView)
  const [prevSection, setPrevSection] = useState(section)

  useEffect(() => {
    const allLoaded = loadedSounds.background && loadedSounds.swipe

    setAreSoundsLoaded(allLoaded)
  }, [loadedSounds])

  const [playBackground, { pause: pauseBackground }] = useSound('/sounds/background.mp3', {
    // @ts-ignore
    loop: true,
    onload: () => {
      setLoadedSounds(prev => ({ ...prev, background: true }))
    },
    playbackRate: 1,
    volume: 0.2,
  })

  const [playSwipe] = useSound('/sounds/swipe.mp3', {
    interrupt: true,
    onload: () => {
      setLoadedSounds(prev => ({ ...prev, swipe: true }))
    },
    playbackRate: 0.2,
    volume: 0.2,
  })

  useEffect(() => {
    isSound && areSoundsLoaded ? playBackground() : pauseBackground()
  }, [isSound, areSoundsLoaded])

  useEffect(() => {
    // Only play swipe sound if:
    // 1. Sound is enabled
    // 2. Sounds are loaded
    // 3. Section actually changed (not on initial render)
    if (isSound && areSoundsLoaded && section !== prevSection) {
      playSwipe()
    }
    // Update previous section
    setPrevSection(section)
  }, [section, isSound, areSoundsLoaded])

  const handleToggleSound = () => {
    if (areSoundsLoaded) {
      setIsSound(!isSound)
    }
  }

  return (
    <Button className={classNames.button} disabled={!areSoundsLoaded} onClick={handleToggleSound}>
      <SvgSpriteIcon
        iconId={isSound ? 'soundOn' : 'soundOff'}
        spriteUrl={'/images/navbar-sprite.svg'}
        viewBox={'-7 0 90 90'}
      />
    </Button>
  )
}

export default withRedux(SoundControl)
