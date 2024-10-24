import { credentials } from '@/common/credentials'

const { countryEn, expYears, firstNameEn, lastNameEn, myAges } = credentials

const en = {
  footer: {
    codedBy: `Coded by ${firstNameEn} ${lastNameEn}`,
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
      description: `I'm a ${myAges}-year-old web developer based in ${countryEn}, with over a ${expYears} years of 
      experience in creating visually appealing and user-friendly websites. My passion lies in transforming ideas into 
      digital realities, focusing on responsive designs and interactive features. I stay up-to-date with the latest 
      technologies and trends in the ever-evolving IT industry, dedicated to delivering high-quality web solutions.`,
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
      title1: `${firstNameEn} ${lastNameEn},`,
      title2: 'Hi, I`m',
      title3: ['web - developer', 'JS/TS - developer', 'React - developer', 'Next.js - developer'],
    },
    projectsSection: {
      projects: [
        {
          codeLink: 'https://github.com/proffery/my-blog',
          coverLink: 'link3',
          demoLink: 'https://streetphoto.world/',
          description: 'Project 1 description',
          technologiesLinks: ['link1', 'link2', 'link3'],
          title: 'Blog Platform',
        },
      ],
      title: 'Projects',
    },
  },
}

export type Dictionaries = typeof en
export default en
