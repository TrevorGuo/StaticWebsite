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
      "Here are the classes I'm taking in Fall 2023: <br><br> \
      Parallel and Distributed Computing<br> \
      Game Theory<br>\
      Elementary Modern Japanese<br>\
      Technology and Law<br>\
      ",
  },
];

const pastProjects = [
  { name: '', //Sofi
    image: './images/sofi.png',
    description:
    "I worked 12 weeks in Summer 2023 at SoFi Technologies Inc. as a Software Engineer Intern. \
     I was part of the debit card team, and worked to create a script that would automatically perform\
     end-to-end system validation on the team's PayIn4 service. \
     For this project, I learned how to develop code in Kotlin with Spring Boot, and I was also able to \
     leverage my previous experience with DynamoDB.\
     I also utilized Optimizely for feature flag rollout, and Kibana and DataDog for production data analytics.\
     "
  },
  {
    name: '', //Amazon
    image: './images/amazon.png',
    description:
      "I worked 14 weeks in Summer 2022 at Amazon as a Software Development Engineer Intern. \
      I was part of the Amazon Prime team that handles the benefit eligibility of Prime customers. \
      My project focused on creating Lambda functions to record and query the enrollment history of prime customers. \
      I had to learn many of the featured AWS products, primarily AWS Lambda, DynamoDB, SNS, API Gateway, and CloudFormation. \
      "
  },
  {
    name: 'Budgie',
    image: './images/ShakerAppLogo.svg',
    description:
      'An IoT music education product that helps music students improve their rhythm. <br><br> \
    A physical shaker device connects to a mobile app over bluetooth. Next, the app will display a rhythm for the musician to play. \
    The musician will then receive feedback on which notes they played early, late, or even missed. <br><br> \
    This product was submitted to BruinLabs, an entrepreneurship program at UCLA, where my team and I earned honorable mention. <br><br> \
    Find out more about the product <a href="https://pitchdeck.figmatic.com/slides/ksbc38di07561?token=TkkrbjhZW2tvbUdWcGs%3D" target="_blank">here</a> <br> \
    Take a look at the code on our <a href="https://github.com/TrevorGuo/Budgie" target="_blank">GitHub</a>',
  },
  {
    name: 'WorkTogether',
    image: '',
    description:
      "A full stack React social media web application that helps users more easily reach their goals by having them hold each other accountable. <br><br> \
    Users will join small groups with friends that will all be pursuing similar goals. They'll share their progress with one another, and if someone is falling behind \
    everyone will make sure they follow through. This is especially helpful for people that can't be physically together to hold each other accountable. <br><br> \
    I had no prior experience in web development, so this project really pushed me to learn and understand front and back end web development. \
    This was the final project for my software construction class. Take a look at the code on the <a href='https://github.com/TrevorGuo/WorkTogether' target='_blank'>GitHub</a>",
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
  index = Math.abs((index + currentArray.length- 1) % currentArray.length);
  setCard();
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
