export const INTRO_NOT_TYPE_NAME = [
  "Maybe you forgot to type your name",
  "It's okay to forgot your name , maybe you can type your mother name :)",
  "Hey! You can type your name if you want :)",
  "I don't know dude, maybe you forgot to type your name",
  "Are you sure you typed your name because i didn't see your name?",
  "Maybe your name is [blank] but you can type any human name :)"
];

export const generateRandomIntroNotTypeMessage = () => {
  const randomIndex = Math.floor(Math.random() * INTRO_NOT_TYPE_NAME.length);
  return INTRO_NOT_TYPE_NAME[randomIndex];
};