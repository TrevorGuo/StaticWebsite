var currentArray = [];
let index = 0;

const currentProjects = [
  {
    name: 'This website',
    image: '',
    description: "My portfolio site so you can find out more about me and what I've done!",
  },
];

const pastProjects = [
  {
    name: 'Budgie',
    image: './images/ShakerAppLogo.svg',
    description: 'An IoT music education product that helps music students improve their rhythm. <br><br> \
    A physical shaker device connects to a mobile app over bluetooth. The app will then display a rhythm for the musician to play. \
    The musician will then receive feedback on which notes they played early, late, or even missed. <br><br> \
    This product was submitted to BruinLabs, an entrepreneurship program at UCLA, where my team and I earned honorable mention. <br><br> \
    Find out more about the product <a href="https://pitchdeck.figmatic.com/slides/ksbc38di07561?token=TkkrbjhZW2tvbUdWcGs%3D" target="_blank">here</a> <br> \
    Take a look at the code on our <a href="https://github.com/TrevorGuo/Budgie" target="_blank">GitHub</a>',
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
  const card = document.getElementById('card');

  while (card.firstChild) {
    card.removeChild(card.firstChild);
  }

  const title = document.createElement('h1');
  title.innerHTML = currentArray[index].name;
  title.setAttribute('id', 'cardTitle');
  card.appendChild(title);

  if (currentArray[index].image != '') {
    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('id', 'imageContainer');
    const image = document.createElement('img');
    image.setAttribute('src', currentArray[index].image);
    imageContainer.append(image);
    card.appendChild(imageContainer);
  }

  const description = document.createElement('p');
  description.innerHTML = currentArray[index].description;
  description.setAttribute('id', 'cardDescription');
  card.append(description);

}
