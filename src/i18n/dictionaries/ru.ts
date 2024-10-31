import { credentials } from '@/common/credentials'
import { projectsRu } from '@/common/projects'

import { Dictionaries } from './en'

const { countryRu, expYears, firstNameRu, lastNameRu, myAges } = credentials

const ru: Dictionaries = {
  footer: {
    codedBy: `Разработал`,
    name: `${firstNameRu} ${lastNameRu}`,
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
      abouts: [
        {
          avatarUrl: '/images/avatars/image1.webp',
          description: `Я веб-разработчик из ${countryRu}, мне ${myAges} лет. У меня более ${expYears} лет опыта в этой сфере. 
          Я создаю визуально привлекательные и удобные для пользователей веб-сайты. От адаптивного дизайна до интерактивных
          функций, мне нравится превращать идеи в цифровую реальность. Я увлечен постоянно развивающейся IT-индустрией и 
          стараюсь быть в курсе последних технологий и трендов.`,
          id: 1,
          title: 'Давайте познакомимся!',
        },
        {
          avatarUrl: '/images/avatars/image2.webp',
          description: `TypeScript,
                        React,
                        Next.js,
                        Redux,
                        Axios,
                        HTML,
                        CSS,
                        SASS/SCSS,
                        Styled Components,
                        Storybook,
                        React Hook Form,
                        Formik,
                        Zod,
                        Material-UI,
                        RadixUI,
                        Jest,
                        GIT`,
          id: 2,
          title: 'Технологии и библиотеки, которые я использую чаще всего:',
        },
        {
          avatarUrl: '/images/avatars/image3.webp',
          description: `Кроме интереса к IT-сфере, я сильно увлекаюсь научной фантастикой, люблю читать книги и 
          смотреть фильмы на эту тему. Иногда, когда позволяет время, играю в игры. А также временами выхожу на прогулку  
          с фотоаппаратом, пытаясь запечалеть сюжеты городской и уличной жизни.`,
          id: 3,
          title: 'Интересы',
        },
      ],
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
      title1: `${firstNameRu} ${lastNameRu}`,
      title2: 'Привет, я -',
      title3: ['веб-разработчик', 'JS/TS-разработчик', 'React-разработчик', 'Next.js-разработчик'],
    },
    projectsSection: {
      codeLink: 'Смотреть код',
      demoLink: 'Демо',
      projects: projectsRu,
      techSpriteUrl: '/images/technologies-sprite.svg',
      title: 'Проекты',
    },
  },
  metadata: {
    applicationName: 'Портфолио',
    description: `Портфолио веб-разрабочика ${firstNameRu} ${lastNameRu}`,
    title: `${firstNameRu} ${lastNameRu}`,
  },
  notFoundPage: {
    button: 'Назад',
    description: 'С кожалению запрашиваемой страницы не существует...',
    title: 'Страница не найдена!',
  },
}

export default ru
