//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const oneBillionSeconds = 10 ** 12;

export const gigasecond = time => new Date(time.getTime() + oneBillionSeconds);
