export const options: any = {
  fps_limit: 30,
  interactivity: {
    detect_on: 'canvas',
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
      repulse: { distance: 400, duration: 0.4 },
    },
  },
  particles: {
    color: { value: '#ffffff' },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 600 },
      bounce: false,
      direction: 'none',
      enable: true,
      out_mode: 'out',
      random: true,
      size: true,
      speed: 0.1,
      straight: false,
    },
    number: { density: { enable: true, value_area: 800 }, value: 200 },
    opacity: {
      anim: { enable: true, opacity_min: 0, speed: 1, sync: false },
      random: true,
      value: 1,
    },
    size: {
      anim: { enable: false, size_max: 1, size_min: 0.1, speed: 4, sync: false },
      random: true,
      value: { max: 1, min: 0.1 },
    },
  },
  retina_detect: true,
}
