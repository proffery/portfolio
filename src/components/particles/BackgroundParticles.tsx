import { memo, useEffect, useState } from 'react'

import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

import options from '../../common/const/particlesOptions'
import { themeObj } from '../../common/const/themeObj'
import { useAppContext } from '../../common/context/appContext'
import { extractNumberFromString } from '../../common/utils/extractNumberFromString'

export const BackgroundParticles = memo(() => {
  const [init, setInit] = useState(false)
  const { width } = useAppContext()
  const breakpoint = extractNumberFromString(themeObj.media.mobile)

  useEffect(() => {
    if (width && width > breakpoint) {
      initParticlesEngine(async engine => {
        await loadSlim(engine)
      }).then(() => {
        setInit(true)
      })
    } else {
      setInit(false)
    }
  }, [width])

  return init ? <Particles id={'tsparticles'} options={options} /> : null
})
