var currentProjects = new Array();
currentProjects.push('BruinLabs');

var pastProjects = new Array();
pastProjects.push('LeetCode');

// var hobbies = new Array();
// hobbies.push('Volleyball');

let index = 0;
var currentArray = currentProjects;

const setCurrentProjects = () => {
  index = 0;
  currentArray = currentProjects;
};

const setPastProjects = () => {
  index = 0;
  currentArray = pastProjects;
};

const getCard = () => {
  return currentArray[index];
};
