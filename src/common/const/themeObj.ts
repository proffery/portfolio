export const themeObj = {
  dark: {
    color: {
      background: {
        bannerBorder: 'rgba(71, 71, 71, 0.30)',
        card: 'rgba(53, 53, 53, 1)',
        form: 'rgba(44, 43, 43, 1)',
        input: 'rgba(57, 56, 56, 1)',
        primary: 'rgba(34, 34, 34, 1)',
        second: 'rgba(36, 51, 92, 1)',
      },
      text: {
        link: 'rgb(68, 116, 248)',
        placeholder: 'rgba(165, 165, 165, 1)',
        primary: 'rgb(255, 255, 255)',
        second: 'rgba(57, 57, 57, 1)',
      },
    },
    gradient: {
      banner:
        'linear-gradient(147deg, rgba(57, 57, 57, 0.50) -6.76%, rgba(0, 66, 255, 0.05) 102.96%)',
      dot: 'linear-gradient(180deg, rgba(166, 188, 250, 1), rgba(33, 87, 242, 1))',
    },
    shadow: {
      card: 'rgba(0, 0, 0, 0.15) 0 4px 6px',
      main: 'rgba(0, 0, 0, 0.05) 8px 8px 34px',
      text: 'rgba(0, 0, 0,  0.25) 0 4px 4px',
    },
  },

  light: {
    color: {
      background: {
        bannerBorder: 'rgba(255, 255, 255, 0.6)',
        card: 'rgba(249, 249, 252, 1)',
        form: 'rgb(255, 255, 255)',
        input: 'rgba(245, 245, 245, 1)',
        primary: 'rgb(255, 255, 255)',
        second: 'rgb(166, 188, 250)',
      },
      text: {
        link: 'rgba(33, 87, 242, 1)',
        placeholder: 'rgba(165, 165, 165, 1)',
        primary: 'rgb(57, 57, 57)',
        second: 'rgb(255, 255, 255)',
      },
    },
    gradient: {
      banner:
        'linear-gradient(147deg, rgba(255, 255, 255, 0.50) -6.76%, rgba(0, 71, 255, 0.05) 102.96%)',
      dot: 'linear-gradient(180deg, rgba(166, 188, 250, 1), rgba(33, 87, 242, 1))',
    },
    shadow: {
      card: 'rgba(0, 0, 0, 0.15) 0 4px 6px',
      main: 'rgba(0, 0, 0, 0.05) 8px 8px 34px',
      text: 'rgba(0, 0, 0,  0.25) 0 4px 4px',
    },
  },

  media: {
    mobile: 'screen and (max-width: 576px)',
    tablet: 'screen and (max-width: 768px)',
  },
}
