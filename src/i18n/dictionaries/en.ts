import { credentials } from '@/common/credentials'

const { countryRu, expYears, firstNameEn, lastNameEn, myAges } = credentials

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
    about: {
      description: `I'm a ${myAges}-year-old web developer based in ${countryRu}, with over a ${expYears} years of 
      experience in creating visually appealing and user-friendly websites. My passion lies in transforming ideas into 
      digital realities, focusing on responsive designs and interactive features. I stay up-to-date with the latest 
      technologies and trends in the ever-evolving IT industry, dedicated to delivering high-quality web solutions.`,
      resumeLink: 'Download resume',
      title: 'About me',
    },
    contacts: {
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
    hero: {
      title1: `${firstNameEn} ${lastNameEn},`,
      title2: 'Hi, I`m',
      title3: ['web - developer', 'JS/TS - developer', 'React - developer', 'Next.js - developer'],
    },
    projects: {
      title: 'Projects',
    },
  },
}

export type Dictionaries = typeof en
export default en
