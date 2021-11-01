var currentArray = [];
let index = 0;

const currentProjects = [
  {
    name: 'ACM TeachLA Learning Lab',
    image: '',
    description:
      "Creating an online learning tool for those interested in\
    advancing their computer science skills. I'm a developer for the AI \
    and machine learning learning lab, and working closely with the ACM AI \
    group to effectively implement their curriculum",
  },
  {
    name: '', //School
    image: './images/ucla.png',
    description:
      "I'm pretty swamped with school so here are the classes I'm taking this quarter: <br><br>\
      CS M51A: Logic Design of Digital Systems <br>\
      Really fun class! Designing things such as digital clocks and vending machines\
      <br><br>\
      CS 180: Introduction to Algorithms and Complexity<br>\
      I really like learning algorithms, so this class is something I look forward\
      to every week.\
      <br><br>\
      Math 115A: Linear Algebra<br>\
      Proof based linear algebra is very painful.\
      <br><br>\
      Physics 1C: Electromagnetism, Optics, and Relativity",
  },
];

const pastProjects = [
  {
    name: 'Budgie',
    image: './images/ShakerAppLogo.svg',
    description:
      'An IoT music education product that helps music students improve their rhythm. <br><br> \
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
    image: './images/volleyball.png',
    description:
      "I started playing volleyball during the pandemic, and I fell in love with the sport\
      as soon as I picked up a ball. The thing I enjoy most about volleyball is the teamwork required\
      to get the ball back over the net. My favorite games are one's with long rallies where neither team\
      will let the ball drop.",
  },
  {
    name: 'Magic',
    image: './images/magic.png',
    description:
      'I began performing magic in 6th grade after watching Now You See Me.\
    I loved bringing amazement to the lives of those around me, and seeing jaws\
    drop when I performed brought me a lot of joy. In high school, I created a magic\
    club so that others could also enjoy magic like I did.',
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
