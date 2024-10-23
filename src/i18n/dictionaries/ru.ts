import { credentials } from '@/common/credentials'

import { Dictionaries } from './en'

const { countryRu, expYears, firstNameRu, lastNameRu, myAges } = credentials

const ru: Dictionaries = {
  footer: {
    codedBy: `Разработал ${firstNameRu} ${lastNameRu}`,
  },
  header: {
    navigation: {
      about: 'Обо мне',
      contacts: 'Контакты',
      home: 'Главная',
      projects: 'Проекты',
    },
  },
  homePage: {
    about: {
      description: `Я веб-разработчик из ${countryRu}, мне ${myAges} лет. У меня более ${expYears} лет опыта в этой сфере. 
      Я создаю визуально привлекательные и удобные для пользователей веб-сайты. От адаптивного дизайна до интерактивных
       функций, мне нравится превращать идеи в цифровую реальность. Я увлечен постоянно развивающейся IT-индустрией и 
       стараюсь быть в курсе последних технологий и трендов.`,
      resumeLink: 'Загрузить резюме',
      title: 'Обо мне',
    },
    contacts: {
      contactForm: {
        email: {
          errorMessage: 'Почта указана не верно!',
          placeholder: 'Почта',
        },
        error: 'Ошибка!',
        message: {
          errorMessage: 'Вы пытаетесь отправить пустое сообщение!',
          placeholder: 'Напечатайте Ваше сообщение...',
        },
        name: {
          errorMessage: 'Имя не должно быть короче 3 символов!',
          placeholder: 'Имя',
        },
        pending: 'Отправляем...',
        submitButton: 'Отправить',
        success: 'Cообщение отправлено!',
        title: 'Связаться со мной',
      },
      title: 'Контакты',
    },
    hero: {
      title1: `${firstNameRu} ${lastNameRu},`,
      title2: 'Привет, я -',
      title3: ['Веб разработчик', 'JS/TS разработчик', 'React разработчик', 'Next.js разработчик'],
    },
    projects: {
      title: 'Проекты',
    },
  },
}

export default ru
