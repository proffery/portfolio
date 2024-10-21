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
      title: "Контакты"
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