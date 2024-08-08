import { expYears, myYears } from '@/common/const/data/dates'

export const en = {
  translation: {
    about: {
      items: {
        item1: `I’m ${myYears} years old`,
        item2: 'I’m web developer',
        item3: 'My location: Belarus, Gomel',
        item4: `I have my interest in this field more than ${expYears} years`,
        item5: 'My phone number +375256979075',
      },
      title: 'About',
    },
    app_logo: 'D.S.',
    app_title: 'Portfolio | Dmitry Shamko',
    main: {
      download_button: 'Download Resume',
      projects_button: 'See Projects',
      title_description:
        'I create web applications to help you easily manage your business and save money.',
      title_hi: "Hi, I'm",
      title_name: 'Dmitry Shamko',
    },
    projects: {
      card: {
        code_link: 'Code',
        demo_link: 'Demo',
      },
      title: 'Projects',
    },
  },
}

export type Locale = typeof en
