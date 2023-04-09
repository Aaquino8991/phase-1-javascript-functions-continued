// code your solution here
function saturdayFun(activity1 = 'roller-skate', activity2 = 'hike') {
   return (`This Saturday, I want to ${activity1}!`);
}

function mondayWork(go = "go to the office") {
  return (`This Monday, I will ${go}.`)
}

function wrapAdjective(visualFlair = "*", word) {
  return function (word = 'special') {
    return `You are ${visualFlair}${word}${visualFlair}!`
    
  }
}

const encouragingPromptFunction = wrapAdjective("||")("a dedicated programmer");