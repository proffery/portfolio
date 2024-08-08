import { credentials } from '@/common/const/data/credentials'

export const en = {
  translation: {
    about: {
      items: {
        item1: `I’m ${credentials.myYears} years old`,
        item2: 'I’m web developer',
        item3: `My location: ${credentials.countryEn}, ${credentials.cityEn}`,
        item4: `I have my interest in this field more than ${credentials.expYears} years`,
        item5: `My phone number ${credentials.phone}`,
      },
      title: 'About me',
    },
    app_logo: `${credentials.firstNameEn[0]}.${credentials.lastNameEn[0]}.`,
    app_title: `Portfolio | ${credentials.firstNameEn} ${credentials.lastNameEn}`,
    contacts: {
      description: {
        email: 'Email',
        location: 'Location',
        phone: 'Phone',
      },
      form: {
        email: 'Email',
        message: 'Message',
        name: 'Name',
        send_button: 'Send',
        sent_button: 'Sended!',
        title: 'Get in touch',
      },
      title: 'Contacts',
    },
    copyrights: {
      coded: 'Coded by',
      name: `${credentials.firstNameEn} ${credentials.lastNameEn}`,
      rights: 'All Rights Reserved',
    },
    interests: {
      title: 'Interests',
    },
    main: {
      download_button: 'Download Resume',
      projects_button: 'See Projects',
      title_description:
        'I create web applications to help you easily manage your business and save money.',
      title_hi: "Hi, I'm",
      title_name: `${credentials.firstNameEn} ${credentials.lastNameEn}`,
    },
    projects: {
      card: {
        code_link: 'Code',
        demo_link: 'Demo',
      },
      title: 'Projects',
    },
    skills: {
      skill_set1: 'Frontend:',
      skill_set2: 'Other:',
      title: 'Skills',
    },
  },
}

export type Locale = typeof en
