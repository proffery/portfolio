import { memo, useEffect, useState } from 'react'

import options from '@/common/const/particlesOptions'
import { themeObj } from '@/common/const/themeObj'
import { useWidth } from '@/common/customHooks/useWidth'
import { extractNumberFromString } from '@/common/utils/extractNumberFromString'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const BackgroundParticles = memo(() => {
  const [init, setInit] = useState(false)
  const width = useWidth()
  const breakpoint = extractNumberFromString(themeObj.media.tablet)

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

export default BackgroundParticles
