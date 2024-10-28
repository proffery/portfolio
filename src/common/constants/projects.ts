export const projectsEn = [
  {
    codeUrl: 'https://github.com/proffery/my-blog',
    coverUrl: '/images/projects/blog.webp',
    demoUrl: 'https://streetphoto.world',
    description:
      'This platform is designed for writing articles. Utilizing internationalization ' +
      'features, users can create posts on the topic of street photography in their native language. An intuitive ' +
      'form validation system and a text editor provide a clear interface for authors, while role separation allows ' +
      'for convenient moderation of submitted articles. For the backend, an open-source platform is used that provides ' +
      'authentication, database, and file storage functionality.',
    id: 1,
    techIds: ['typeScript', 'next', 'redux', 'appWrite', 'storyBook', 'sass'],
    title: 'Blog platform',
  },
  {
    codeUrl: 'https://github.com/proffery/cards',
    coverUrl: '/images/projects/flashcards.webp',
    demoUrl: 'https://flashcards-proffery.vercel.app',
    description:
      'This educational project is primarily designed for training teamwork skills. ' +
      'The project implements a complete authorization cycle, starting from user registration ' +
      'to password recovery. The main functionality of this application is to facilitate memorization through the ' +
      'use of flashcards. Users can create and manage their own flashcards, consisting of questions and corresponding' +
      ' answers.',
    id: 2,
    techIds: ['typeScript', 'react', 'redux', 'sass', 'storyBook'],
    title: 'Flashcard learning',
  },
]

export const projectsRu: Project[] = [
  {
    codeUrl: 'https://github.com/proffery/my-blog',
    coverUrl: '/images/projects/blog.webp',
    demoUrl: 'https://streetphoto.world',
    description:
      'Эта платформа предназначена для написания статей. Используя ' +
      'возможности интернационализации, пользователи могут создавать посты на тему уличной фотографии на своем родном ' +
      'языке. С интуитивной системой валидации форм и текстовым редактором реализован понятный интерфейс для авторов, ' +
      'а разделение ролей позволяет удобно модерировать предложенные статьи. Для бэкенд используется платформа ' +
      'с открытым исходным кодом, предоставляющая фунционал аутентификации, базы данных и хранения файлов.',
    id: 1,
    techIds: ['typeScript', 'next', 'redux', 'appWrite', 'sass', 'storyBook'],
    title: 'Блог-платформа',
  },
  {
    codeUrl: 'https://github.com/proffery/cards',
    coverUrl: '/images/projects/flashcards.webp',
    demoUrl: 'https://flashcards-proffery.vercel.app',
    description:
      'Этот учебный проект предназначен, в первую очередь, для преобретения навыков ' +
      'работы в команде. В проекте реализован полный цикл авторизации начиная с регистрации пользователя и заканчивая ' +
      'востановлением забытого пароля. Основной функционал этого приложения заключается в тренировке запоминания ' +
      'с помощью карточек. Пользователи могут создавать и управлять своими собственными карточками, состоящими из ' +
      'вопросов и соответствующих ответов.',
    id: 2,
    techIds: ['typeScript', 'react', 'redux', 'sass', 'storyBook'],
    title: 'Обучение по карточкам',
  },
]

export type Project = (typeof projectsEn)[0]
