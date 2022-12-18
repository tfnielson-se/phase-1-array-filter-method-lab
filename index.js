// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (drivers, name) {
    return drivers.filter(function(match) {
        return match.toLowerCase() === name.toLowerCase()
    });
}

console.log(findMatching(drivers, 'bobby'))

function fuzzyMatch (drivers, letters) {
    return drivers.filter((match) => match.toLowerCase().indexOf(letters.toLowerCase()) === 0 
    );
}
console.log(fuzzyMatch(drivers, 'bob'));

function matchName (drivers, name) {
    return drivers.filter( function(match) {
        return match.name === name
    });
    }

console.log(matchName(drivers, 'Bobby'))