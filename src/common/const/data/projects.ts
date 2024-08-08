import Calculator from '@/assets/images/projects/Calculator.webp'
import EtchASketch from '@/assets/images/projects/EtchASketch.webp'
import FlashCards from '@/assets/images/projects/FlashCards.webp'
import Library from '@/assets/images/projects/Library.webp'
import MemoryCard from '@/assets/images/projects/MemoryCard.webp'
import OpenAIClient from '@/assets/images/projects/OpenAIClientApp.webp'
import PhotographerHomePage from '@/assets/images/projects/PhotographerHomePage.webp'
import SocialNetwork from '@/assets/images/projects/SocialNetwork.webp'
import Task1 from '@/assets/images/projects/Task1.webp'
import TicTacToe from '@/assets/images/projects/TicTacToe.webp'
import TodoList from '@/assets/images/projects/TodoList.webp'
import WeatherApp from '@/assets/images/projects/WeatherApp.webp'

export type Project = {
  imageUrl: string
  projectCategory: string
  projectCode: string
  projectDemo: string
  projectTitle: string
}

export const projectsEn: Project[] = [
  {
    imageUrl: Calculator,
    projectCategory: 'Vanilla JS',
    projectCode: 'https://github.com/proffery/odin-calculator',
    projectDemo: 'https://proffery.github.io/odin-calculator/',
    projectTitle: 'Calculator app. Foundations Course',
  },
  {
    imageUrl: EtchASketch,
    projectCategory: 'Vanilla JS',
    projectCode: 'https://github.com/proffery/odin-etch-a-sketch',
    projectDemo: 'https://proffery.github.io/odin-etch-a-sketch/',
    projectTitle: 'Etch-a-Sketch app. Foundations Course',
  },
  {
    imageUrl: Library,
    projectCategory: 'Vanilla JS',
    projectCode: 'https://github.com/proffery/odin-library',
    projectDemo: 'https://proffery.github.io/odin-library/',
    projectTitle: 'Library app. Foundations Course',
  },
  {
    imageUrl: TicTacToe,
    projectCategory: 'Vanilla JS',
    projectCode: 'https://github.com/proffery/odin-tic-tac-toe',
    projectDemo: 'https://proffery.github.io/odin-tic-tac-toe/',
    projectTitle: 'Tic Tac Toe game. Foundations Course',
  },
  {
    imageUrl: TodoList,
    projectCategory: 'Vanilla JS',
    projectCode: 'https://github.com/proffery/odin-todo-list',
    projectDemo: 'https://proffery.github.io/odin-todo-list/',
    projectTitle: 'Todo List app. Foundations Course',
  },
  {
    imageUrl: WeatherApp,
    projectCategory: 'Vanilla JS',
    projectCode: 'https://github.com/proffery/odin-weather-app',
    projectDemo: 'https://proffery.github.io/odin-weather-app/',
    projectTitle: 'Weather app. Foundations Course',
  },
  {
    imageUrl: OpenAIClient,
    projectCategory: 'Vanilla JS',
    projectCode: 'https://github.com/proffery/openaiclient',
    projectDemo: 'https://proffery.github.io/openaiclient/',
    projectTitle: 'AI Assistant app',
  },
  {
    imageUrl: Task1,
    projectCategory: 'Test tasks',
    projectCode: 'https://github.com/proffery/test-task',
    projectDemo: 'https://test-task-proffery.vercel.app/',
    projectTitle: 'React. RTK Query. React Hook Form. Zod. MUI',
  },
  {
    imageUrl: MemoryCard,
    projectCategory: 'React',
    projectCode: 'https://github.com/proffery/odin-memory-card',
    projectDemo: 'https://proffery.github.io/odin-memory-card/',
    projectTitle: 'Memory Card game. JS React. CSS',
  },
  {
    imageUrl: PhotographerHomePage,
    projectCategory: 'React',
    projectCode: 'https://github.com/proffery/portfolio-project-two',
    projectDemo: 'https://proffery.github.io/portfolio-project-two/',
    projectTitle: 'Photographer page. JS. React-Bootstrap. Firebase',
  },
  {
    imageUrl: SocialNetwork,
    projectCategory: 'React',
    projectCode: 'https://github.com/proffery/samurai-way',
    projectDemo: 'https://proffery.github.io/samurai-way/',
    projectTitle: 'Social Network. TS. React. Redux. Axios. Styled-components',
  },
  {
    imageUrl: FlashCards,
    projectCategory: 'React',
    projectCode: 'https://github.com/proffery/cards',
    projectDemo: 'https://flashcards-proffery.vercel.app/',
    projectTitle: 'Flash Cards. TS. React. RTK Query. SCSS. Storybook',
  },
]
export const projectsRu: Project[] = [
  {
    imageUrl: Calculator,
    projectCategory: 'Чистый JS',
    projectCode: 'https://github.com/proffery/odin-calculator',
    projectDemo: 'https://proffery.github.io/odin-calculator/',
    projectTitle: 'Приложение "Калькулятор". Базовый курс',
  },
  {
    imageUrl: EtchASketch,
    projectCategory: 'Чистый JS',
    projectCode: 'https://github.com/proffery/odin-etch-a-sketch',
    projectDemo: 'https://proffery.github.io/odin-etch-a-sketch/',
    projectTitle: 'Приложение "Доска для рисования". Базовый курс',
  },
  {
    imageUrl: Library,
    projectCategory: 'Чистый JS',
    projectCode: 'https://github.com/proffery/odin-library',
    projectDemo: 'https://proffery.github.io/odin-library/',
    projectTitle: 'Приложение "Библиотека". Базовый курс',
  },
  {
    imageUrl: TicTacToe,
    projectCategory: 'Чистый JS',
    projectCode: 'https://github.com/proffery/odin-tic-tac-toe',
    projectDemo: 'https://proffery.github.io/odin-tic-tac-toe/',
    projectTitle: 'Игра "Крестики-нолики". Базовый курс',
  },
  {
    imageUrl: TodoList,
    projectCategory: 'Чистый JS',
    projectCode: 'https://github.com/proffery/odin-todo-list',
    projectDemo: 'https://proffery.github.io/odin-todo-list/',
    projectTitle: 'Приложение "Список Дел". Базовый курс',
  },
  {
    imageUrl: WeatherApp,
    projectCategory: 'Чистый JS',
    projectCode: 'https://github.com/proffery/odin-weather-app',
    projectDemo: 'https://proffery.github.io/odin-weather-app/',
    projectTitle: 'Приложение "Погода". Базовый курс',
  },
  {
    imageUrl: OpenAIClient,
    projectCategory: 'Чистый JS',
    projectCode: 'https://github.com/proffery/openaiclient',
    projectDemo: 'https://proffery.github.io/openaiclient/',
    projectTitle: 'Приложение "ИИ ассистент"',
  },
  {
    imageUrl: Task1,
    projectCategory: 'Тестовые задания',
    projectCode: 'https://github.com/proffery/test-task',
    projectDemo: 'https://test-task-proffery.vercel.app/',
    projectTitle: 'React. TS. RTK Query. React Hook Form. Zod. MUI',
  },
  {
    imageUrl: MemoryCard,
    projectCategory: 'Реакт',
    projectCode: 'https://github.com/proffery/odin-memory-card',
    projectDemo: 'https://proffery.github.io/odin-memory-card/',
    projectTitle: 'Игра "Запомни карточки". JS. React. CSS',
  },
  {
    imageUrl: PhotographerHomePage,
    projectCategory: 'Реакт',
    projectCode: 'https://github.com/proffery/portfolio-project-two',
    projectDemo: 'https://proffery.github.io/portfolio-project-two/',
    projectTitle: 'Страница фотографа. JS. React-Bootstrap. Firebase',
  },
  {
    imageUrl: SocialNetwork,
    projectCategory: 'Реакт',
    projectCode: 'https://github.com/proffery/samurai-way',
    projectDemo: 'https://proffery.github.io/samurai-way/',
    projectTitle: 'Социальная сеть. TS. React. Redux. Axios. Styled-components',
  },
  {
    imageUrl: FlashCards,
    projectCategory: 'Реакт',
    projectCode: 'https://github.com/proffery/cards',
    projectDemo: 'https://flashcards-proffery.vercel.app/',
    projectTitle: 'Обучение по карточкам. TS. React. RTK Query. SCSS. Storybook',
  },
]
