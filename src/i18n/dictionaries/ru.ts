import { credentials } from '@/common/credentials'
import { projectsRu } from '@/common/projects'

import { Dictionaries } from './en'

const { expYears, firstNameRu, lastNameRu, myAges } = credentials

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
          avatarUrl: '/images/avatars/image3.webp',
          description: `Я веб-разработчик из Беларуси, мне ${myAges} лет. У меня более ${expYears} ${
            expYears <= 1 ? 'года' : 'лет'
          } опыта в этой сфере. 
          Я создаю визуально привлекательные и удобные для пользователей веб-сайты. От адаптивного дизайна до интерактивных
          функций, мне нравится превращать идеи в цифровую реальность. Я слежу за постоянно развивающейся IT-индустрией и 
          стараюсь быть в курсе последних технологий и трендов.`,
          id: 1,
          title: 'Давайте познакомимся!',
        },
        {
          avatarUrl: '/images/avatars/image2.webp',
          description: `<ul>
                          <li>TypeScript, JavaScript</li>
                          <li>React, Next.js</li>
                          <li>Redux Toolkit, RTK Query, Zustand</li>
                          <li>Axios</li>
                          <li>CSS, SASS/SCSS, Styled Components</li>
                          <li>React Hook Form, Formik</li>
                          <li>Zod</li>
                          <li>Radix UI, Material UI</li>
                          <li>Storybook, Jest</li>
                          <li>GIT</li>
                        </ul>`,
          id: 2,
          title: 'Технологии и библиотеки, которые я использую',
        },
        {
          avatarUrl: '/images/avatars/image1.webp',
          description: `Кроме интереса к IT-сфере, я также увлекаюсь научной фантастикой, люблю читать книги и 
          смотреть фильмы на эту тему. Иногда, когда позволяет время, играю в игры. Временами выхожу на прогулку  
          с фотоаппаратом, пытаясь запечатлеть сюжеты городской и уличной жизни.`,
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
      title2: 'Привет! Я—',
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
