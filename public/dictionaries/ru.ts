import {credentials} from '@/common/constants/credentials'

import {Dictionaries} from './en'
const {firstNameRu, lastNameRu} = credentials;

const ru: Dictionaries =  {
  footer: {
    codedBy: `Разработал ${firstNameRu} ${lastNameRu}`
  },
  header: {
    navigation: {
      about: "Обо мне",
      contacts: "Контакты",
      home: "Главная",
      projects: "Проекты"
    }
  },
  homePage: {
    about: {
      title: "Обо мне"
    },
    contacts: {
      contactForm:{
        email: {
          errorMessage: "Почта указана не верно!",
          placeholder: "Почта"
        },
        error: 'Ошибка!',
        message: {
          errorMessage: "Вы пытаетесь отправить пустое сообщение!",
          placeholder: "Напечатайте Ваше сообщение..."
        },
        name: {
          errorMessage: "Имя не должно быть короче 3 символов!",
          placeholder: "Имя"
        },
        pending: "Отправляем...",
        submitButton: "Отправить",
success: "Cообщение отправлено!",
        title: "Связаться со мной"
      },
      title: "Контакты",
    },
    hero: {
      title1: `${firstNameRu} ${lastNameRu},`,
      title2: "Привет, я -",
      title3:  [
        'Веб разработчик',
        'JS/TS разработчик',
        'React разработчик',
        'Next.js разработчик',
      ]
    },
    projects: {
      title: "Проекты"
    }
  }
}

export  default ru