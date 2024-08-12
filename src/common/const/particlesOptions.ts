import type { ISourceOptions } from '@tsparticles/engine'

import { themeObj } from './themeObj'

export const options: ISourceOptions = {
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          enable: false,
          force: 2,
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
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 80,
      },
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      slow: {
        active: false,
        factor: 1,
        radius: 0,
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
      outModes: 'bounce',
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
