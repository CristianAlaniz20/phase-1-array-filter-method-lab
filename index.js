// Code your solution here
const driversArray = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(array, driver) {
    return array.filter(item => item.toLowerCase() === driver.toLowerCase());
};

console.log(findMatching(driversArray, "Bobby"));

function fuzzyMatch(array, letters) {
    return array.filter(item => item.startsWith(letters))
};

console.log(fuzzyMatch(driversArray, "Sa"));

const driversObject = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
];

function matchName(obj, nombre) {
  return obj.filter(item => item.name === nombre)
};

console.log(matchName(driversObject, "Bobby"));