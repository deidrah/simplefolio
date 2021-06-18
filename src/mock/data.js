import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dominika | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Dominika',
  subtitle: "I'm the Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-pic.jpg',
  paragraphOne: "Hello! I'm Dominika, a Web Developer and Software Tester",
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/dominika-stasik-1110b9119/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projekt-1.png',
    title: 'Typing Game',
    info: 'Very cool typing game with quotes from Star Trek',
    info2: ' ',
    url: 'https://github.com/deidrah/typingGame',
    repo: 'https://deidrah.github.io/typingGame/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projekt-2.png',
    title: 'Terrarium',
    info: 'Simple drag and drop app where you can build your own terrarium of plants by dragging them into the jar',
    info2: ' ',
    url: 'https://github.com/deidrah/terrarium',
    repo: 'https://deidrah.github.io/terrarium/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projekt-3.png',
    title: 'Cat gallery',
    info: 'This app allows you to add cats you like to the gallery. It was build using VueJS framwork',
    info2: ' ',
    url: 'https://glitch.com/edit/#!/beryl-important-ogre',
    repo: 'https://beryl-important-ogre.glitch.me/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projekt-4.png',
    title: 'Bank App',
    info: 'Bank Application made in pure JS, allows you to register accounts and log into them as well as add transactions',
    info2: ' ',
    url: 'https://glitch.com/edit/#!/abyssinian-jumbled-cheshire',
    repo: 'https://abyssinian-jumbled-cheshire.glitch.me', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dominika@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dominika-stasik-1110b9119/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/deidrah',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
