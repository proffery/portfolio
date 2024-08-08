const todayDate = new Date()
const myBirthdayDate = new Date(1987, 6, 16, 14, 45, 0)
const expStartDate = new Date(2023, 1, 1, 0, 0, 1)

export const expYears = new Date(todayDate.getTime() - expStartDate.getTime()).getFullYear() - 1970
export const myYears = new Date(todayDate.getTime() - myBirthdayDate.getTime()).getFullYear() - 1970
