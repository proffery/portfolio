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
