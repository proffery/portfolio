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
    aboutSection: {
      description: `Я веб-разработчик из ${countryRu}, мне ${myAges} лет. У меня более ${expYears} лет опыта в этой сфере. 
      Я создаю визуально привлекательные и удобные для пользователей веб-сайты. От адаптивного дизайна до интерактивных
       функций, мне нравится превращать идеи в цифровую реальность. Я увлечен постоянно развивающейся IT-индустрией и 
       стараюсь быть в курсе последних технологий и трендов.`,
      resumeButton: 'Загрузить резюме',
      resumeLink: '/cv/cv-ru.pdf',
      title: 'Обо мне',
    },
    contactsSection: {
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
    heroSection: {
      title1: `${firstNameRu} ${lastNameRu},`,
      title2: 'Привет, я -',
      title3: ['Веб разработчик', 'JS/TS разработчик', 'React разработчик', 'Next.js разработчик'],
    },
    projectsSection: {
      projects: [
        {
          codeLink: 'https://github.com/proffery/my-blog',
          coverLink: 'link3',
          demoLink: 'https://streetphoto.world/',
          description: 'Project 1 description',
          technologiesLinks: ['link1', 'link2', 'link3'],
          title: 'Блог-платформа',
        },
      ],
      title: 'Проекты',
    },
  },
}

export default ru
