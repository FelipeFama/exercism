//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const weeks = { first: 1, second: 8, third: 15, fourth: 22, teenth: 13}

export const meetup = (year, month, descriptor, weekday) => {
  const dayIndex = days.indexOf(weekday);
  const weeksDateInRange = weeks[descriptor] || new Date(year, (month),0).getDate() - 6;
  const weeksDay = new Date(year, month -1, weeksDateInRange).getDay()
  const date = weeksDateInRange + (dayIndex - weeksDay + 7) % 7
  
  return new Date(year, month-1, date)
};
