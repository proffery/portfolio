import { credentials } from '@/common/credentials'
import { projectsEn } from '@/common/projects'

const { expYears, firstNameEn, lastNameEn, myAges } = credentials

const en = {
  footer: {
    codedBy: `Coded by`,
    name: `${firstNameEn} ${lastNameEn}`,
  },
  header: {
    navigation: {
      about: 'About',
      contacts: 'Contacts',
      home: 'Home',
      projects: 'Projects',
    },
  },
  homePage: {
    aboutSection: {
      abouts: [
        {
          avatarUrl: '/images/avatars/image1.webp',
          description: `I'm a ${myAges} years-old web developer based in Belarus, with over a ${expYears} years of 
          experience in creating visually appealing and user-friendly websites. My passion lies in transforming ideas into 
          digital realities, focusing on responsive designs and interactive features. I stay up-to-date with the latest 
          technologies and trends in the ever-evolving IT industry, dedicated to delivering high-quality web solutions.`,
          id: 1,
          title: `Let's get to know each other!`,
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
                        Material UI,
                        Radix UI,
                        Jest,
                        GIT`,
          id: 2,
          title: 'Technologies and libraries that I use most often:',
        },
        {
          avatarUrl: '/images/avatars/image3.webp',
          description: `Besides my interest in the IT field, I am very passionate about science fiction and love 
          reading books and watching films on this topic. Sometimes, when time allows, I play games. I also 
          occasionally go for walks with my camera, trying to capture the stories of urban and street life.`,
          id: 3,
          title: 'Interests',
        },
      ],

      resumeButton: 'Download resume',
      resumeLink: '/cv/cv-en.pdf',
      title: 'About me',
    },
    contactsSection: {
      contactForm: {
        email: {
          errorMessage: 'Email is not valid!',
          placeholder: 'Email',
        },
        error: 'Error!',
        message: {
          errorMessage: 'The message is empty!',
          placeholder: 'Type your message...',
        },
        name: {
          errorMessage: 'Name must be at least 3 characters long!',
          placeholder: 'Name',
        },
        pending: 'Sending...',
        submitButton: 'Submit',
        success: 'Message sent!',
        title: 'Contact me',
      },
      title: 'Contacts',
    },
    heroSection: {
      title1: `${firstNameEn} ${lastNameEn}`,
      title2: 'Hi, I`m',
      title3: ['web-developer', 'JS/TS-developer', 'React-developer', 'Next.js-developer'],
    },
    projectsSection: {
      codeLink: 'Code',
      demoLink: 'Check live site',
      projects: projectsEn,
      techSpriteUrl: '/images/technologies-sprite.svg',
      title: 'Projects',
    },
  },
  metadata: {
    applicationName: 'Portfolio',
    description: `${firstNameEn} ${lastNameEn} web developer portfolio`,
    title: `${firstNameEn} ${lastNameEn}`,
  },
  notFoundPage: {
    button: 'Go back',
    description: 'Unfortunately, the requested page does not exist...',
    title: 'Page not found!',
  },
}

export type Dictionaries = typeof en
export default en
