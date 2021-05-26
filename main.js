let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = true
let runnerAge = 17

if (runnerAge > 18 && registerEarly == true) {
  raceNumber += 1000
}

if (runnerAge > 18 && registerEarly == true) {
  console.log(`Your race starts at 9:30 am and your race number is ${raceNumber}`)
} else if (runnerAge > 18 && registerEarly == false) {
  console.log(`If runner is over 18 AND did not register early they will race at 11:00am and your race number is ${raceNumber}`)
} else {
  console.log(`Youth registrants run at 12:30 pm and your race number is ${raceNumber}`)
}