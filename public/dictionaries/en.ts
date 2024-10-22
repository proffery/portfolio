import {credentials} from '@/common/constants/credentials'
const {firstNameEn, lastNameEn} = credentials;


const en = {
  footer: {
    codedBy: `Coded by ${firstNameEn} ${lastNameEn}`,
  },
  header: {
    navigation: {
      about: "About",
      contacts: "Contacts",
      home: "Home",
      projects: "Projects"
    }
  },
  homePage: {
    about: {
      title: "About"
    },
    contacts: {
      contactForm:{
        email: {
          errorMessage: "Email is not valid!",
          placeholder: "Email"
        },
        error: 'Error!',
        message: {
          errorMessage: "The message is empty!",
          placeholder: "Type your message..."
        },
        name: {
          errorMessage: "Name must be at least 3 characters long!",
          placeholder: "Name"
        },
        pending: "Sending...",
        submitButton: "Submit",
        success: "Message sent!",
        title: "Contact me"
      },
      title: "Contacts"
    },
    hero: {
      title1: `${firstNameEn} ${lastNameEn},`,
      title2: "Hi, I`m",
      title3: [
        'web - developer',
        'JS/TS - developer',
        'React - developer',
        'Next.js - developer',
      ]
    },
    projects: {
      title: "Projects"
    }
  }
}

export type Dictionaries = typeof en
export default en
