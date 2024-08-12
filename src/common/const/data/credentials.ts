const todayDate = new Date()
const myBirthdayDate = new Date(1987, 6, 16, 14, 45, 0)
const expStartDate = new Date(2023, 1, 1, 0, 0, 1)

const expYears = new Date(todayDate.getTime() - expStartDate.getTime()).getFullYear() - 1970
const myYears = new Date(todayDate.getTime() - myBirthdayDate.getTime()).getFullYear() - 1970

export const credentials = {
  cityEn: 'Gomel',
  cityRu: 'Гомель',
  countryEn: 'Belarus',
  countryRu: 'Беларусь',
  email: 'proffery@gmail.com',
  emailJs: {
    API_KEY: 'u6DZWsUFpg84ikb5W',
    serviceID: 'service_ypumi3n',
    templateID: 'template_mnxi9t4',
  },
  expYears,
  firstNameEn: 'Dmitry',
  firstNameRu: 'Дмитрий',
  lastNameEn: 'Shamko',
  lastNameRu: 'Шамко',
  link_github: 'https://github.com/proffery',
  link_instagram: 'https://www.instagram.com/proffery/',
  link_linkedin: 'https://www.linkedin.com/in/dmitryshamko/',
  link_telegram: 'https://t.me/ShamkoDmitry',
  link_viber: 'viber://chat?number=%2B375256979075',
  link_whatsapp: 'https://wa.me/375256979075',
  myYears,
  phone: '+375256979075',
}
