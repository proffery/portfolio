import { credentials } from '@/common/const/data/credentials'

import { Locale } from './en'

export const ru: Locale = {
  translation: {
    about: {
      items: {
        item1: `Мне ${credentials.myYears} лет`,
        item2: 'Я - веб разработчик',
        item3: `Мое местоположение: ${credentials.countryRu}, ${credentials.cityRu}`,
        item4: `Я интересуюсь этой областью уже более ${credentials.expYears} лет`,
        item5: `Мой номер телефона ${credentials.phone}`,
      },
      title: 'Обо мне',
    },
    app_logo: `${credentials.firstNameRu[0]}.${credentials.lastNameRu[0]}.`,
    app_title: `Портфолио | ${credentials.firstNameRu} ${credentials.lastNameRu}`,
    contacts: {
      description: {
        email: 'Почта',
        location: 'Страна',
        phone: 'Телефон',
      },
      form: {
        email: 'Почта',
        message: 'Сообщение',
        name: 'Имя',
        send_button: 'Отправить',
        sent_button: 'Отправлено!',
        title: 'Связаться со мной',
      },
      title: 'Контакты',
    },
    copyrights: {
      coded: 'Разработал',
      name: `${credentials.firstNameRu} ${credentials.lastNameRu}`,
      rights: 'Все Права Защищены',
    },
    interests: {
      title: 'Интересы',
    },
    main: {
      download_button: 'Скачать резюме',
      projects_button: 'Проекты',
      title_description:
        'Я создаю веб-приложения, чтобы помочь Вам легко управлять Вашим бизнесом и экономить деньги.',
      title_hi: 'Привет! Я -',
      title_name: `${credentials.firstNameRu} ${credentials.lastNameRu}`,
    },
    projects: {
      card: {
        code_link: 'Код',
        demo_link: 'Демо',
      },
      title: 'Проекты',
    },
    skills: {
      skill_set1: 'Фронтенд:',
      skill_set2: 'Другие:',
      title: 'Технологии',
    },
  },
}
