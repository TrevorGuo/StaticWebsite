var currentArray = [];
let index = 0;

const currentProjects = [
  {
    name: 'This website',
    image: '',
    description: '',
  },
];

const pastProjects = [
  {
    name: 'Budgie',
    image: '',
    description: '',
  },
];

const hobbies = [
  {
    name: 'Volleyball',
    image: '',
    description: '',
  },
  {
    name: 'Magic',
    image: '',
    description: '',
  },
];

function setCurrentProjects() {
  index = 0;
  currentArray = currentProjects;
  setCard();
}

function setPastProjects() {
  index = 0;
  currentArray = pastProjects;
  setCard();
}

function setHobbies() {
  index = 0;
  currentArray = hobbies;
  setCard();
}

function previousCard() {
  index = Math.abs((index - 1) % currentArray.length);
  setCard();
  console.log(index);
}

function nextCard() {
  index = (index + 1) % currentArray.length;
  setCard();
}

function setCard() {
  const element = document.getElementById('card');
  element.innerHTML = currentArray[index].name;
}
