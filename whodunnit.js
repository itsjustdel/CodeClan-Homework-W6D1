//EPISODE 1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict); //predicted verdict: Miss Scarlet - attribute declared in scenario object and called from declaredMurderer

//EPISODE 2
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);    //error thrown, unable to change const variable "murderer"


//EPISODE 3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict); //Murderer is Mrs Peacock, let variable murderer won't change "Professer Plum", but declares a var in scope of function


// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict); //Murderer is Prof Plum, function only uses its own declaree variable

//EPISODE 4 
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`; // The suspects are Miss Scarlet, Prof Plum, Col Mustard - scoped variable takes precedence
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`); //Mrs Peacock - suspectThree in function is scoped, so use original variable

//EPISDOE 5
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick' //changes to Revolver
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict); // The weapon is the Revolver - properties of a const can still be changed

//EPISODE 6
// let murderer = 'Colonel Mustard'; //changes to Mr Green //then changes to Mrs White

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict); //The murderer is Mrs White - murderer "let" is changed twice, once by changeMurderer, and secondly by the nested function "plotTwist

//EPISDOE 7
// let murderer = 'Professor Plum'; 

// const changeMurderer = function() {
//   murderer = 'Mr. Green';//change main murderer to Mr Green

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard'; //scoped murderer - won't change main murderer

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet'; // uses scoped murderer, doesn't change main murderer
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict); //Mr Green, only ln 104 changes it

// const scenario = {
//     murderer: 'Mrs. Peacock', //to Col. Mustard
//     room: 'Conservatory', //changes to Dining Room
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {//goes in to this block
//         scenario.murderer = 'Colonel Mustard'; //hits here
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) { //scenario murderer is now Col Mustard and argument passed is Col Mustard
//           scenario.weapon = 'Candle Stick'; //so we hit here
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon(); // weapon is candle stick
//   console.log(verdict);

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock'; //doesn't change var above - scoped in block
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict); //Prof Plum, variable remained unchanged

//EXTENSION - MY EPISODE
let murderer = 'Miss Scarlett';
let weapons = ['Candle Stick', 'Revolver', 'Dagger', 'Lead Pipe', 'Wrench', 'Rope'];

const scenario = {
    murderer: murderer,
    weapon: weapons[2]
}

const takeTheirWeaponsAway = function(){
    for(let i = weapons.length; i > 0; i--){
         weapons.splice(i,1);        
    }

    const makeThemBehave = function() {
        weapons[0] = "Pillow"
    }

    makeThemBehave();
}

takeTheirWeaponsAway();

//what will this print out?
console.log(scenario.weapon);

//what will this print out?
console.log(weapons[2])




