import type { ISourceOptions } from '@tsparticles/engine'

import { themeObj } from './themeObj'

export const options: ISourceOptions = {
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          enable: true,
          force: 50,
          smooth: 10,
        },
      },
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 6,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  key: 'polygonMask',
  name: 'Polygon Mask',
  particles: {
    color: {
      value: themeObj.light.color.background.second,
    },
    move: {
      enable: true,
      outModes: 'none',
      speed: 0.4,
    },
    number: {
      value: 20,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
      },
      value: {
        max: 0.4,
        min: 0.05,
      },
    },
    shape: {
      type: ['circle', 'triangle', 'square'],
    },
    size: {
      value: { max: 15, min: 5 },
    },
  },
}

export default options
