import { expYears, myYears } from '@/common/const/data/dates'

import { Locale } from './en'

export const ru: Locale = {
  translation: {
    about: {
      items: {
        item1: `Мне ${myYears} лет`,
        item2: 'Я - веб разработчик',
        item3: 'Мое местоположение: Беларусь, Гомель',
        item4: `Я интересуюсь этой областью уже более ${expYears} лет`,
        item5: 'Мой номер телефона +375256979075',
      },
      title: 'Обо мне',
    },
    app_logo: 'Д.Ш.',
    app_title: 'Портфолио | Дмитрий Шамко',
    main: {
      download_button: 'Скачать резюме',
      projects_button: 'Проекты',
      title_description:
        'Я создаю веб-приложения, чтобы помочь Вам легко управлять Вашим бизнесом и экономить деньги.',
      title_hi: 'Привет! Я -',
      title_name: 'Дмитрий Шамко',
    },
    projects: {
      card: {
        code_link: 'Код',
        demo_link: 'Демо',
      },
      title: 'Проекты',
    },
  },
}
