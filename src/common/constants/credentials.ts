const todayDate = new Date()
const myBirthdayDate = new Date(1987, 6, 16, 14, 45, 0)
const expStartDate = new Date(2023, 1, 1, 0, 0, 1)

const expYears = new Date(todayDate.getTime() - expStartDate.getTime()).getFullYear() - 1970
const myAges = new Date(todayDate.getTime() - myBirthdayDate.getTime()).getFullYear() - 1970

export const credentials = {
  countryEn: 'Belarus',
  countryRu: 'Беларуси',
  email: 'proffery@gmail.com',
  expYears,
  firstNameEn: 'Dmitry',
  firstNameRu: 'Дмитрий',
  lastNameEn: 'Shamko',
  lastNameRu: 'Шамко',
  link_github: 'https://github.com/proffery',
  link_linkedin: 'https://www.linkedin.com/in/dmitryshamko/',
  link_telegram: 'https://t.me/ShamkoDmitry',
  myAges,
  phone: '+375256979075',
}
