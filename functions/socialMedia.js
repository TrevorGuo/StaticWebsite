const socials = [
  {
    name: 'GitHub',
    image: './images/github.png',
    link: 'https://github.com/TrevorGuo',
  },
  {
    name: 'LinkedIn',
    image: './images/linkedin.png',
    link: 'https://www.linkedin.com/in/trevor-guo-63387719a/',
  },
  {
    name: 'Instagram',
    image: './images/instagram.png',
    link: 'https://www.instagram.com/tree.guo/?hl=en',
  },
  {
    name: 'Discord',
    image: './images/discord.png',
    link: 'https://discord.com/users/127611267388014592',
  },
];

function setSocials() {
  socials.forEach((social) => createIcon(social));
}

function createIcon(social) {
  const tag = document.createElement('a');
  const image = document.createElement('img');
  image.setAttribute('src', social.image);
  image.setAttribute('alt', 'My ' + social.name);
  tag.appendChild(image);
  tag.setAttribute('href', social.link);
  tag.setAttribute('target', '_blank');
  const element = document.getElementById('socials');
  element.appendChild(tag);
}
