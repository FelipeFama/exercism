//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const isSilence = message => !/\S/.test(message);
const isQuestion = message => /\?\s*$/.test(message);
const isShout = message => /^[^a-z]*[A-Z][^a-z]*$/.test(message);
const isQuestionAndShout = message => isQuestion(message) && isShout(message);
const isDefault = () => true;
const responses = [
  [isSilence, 'Fine. Be that way!'],
  [isQuestionAndShout, 'Calm down, I know what I\'m doing!'],
  [isQuestion, 'Sure.'],
  [isShout, 'Whoa, chill out!'],
  [isDefault, 'Whatever.']
]

export const hey = message => responses.find(([check]) => check(message))[1];

