const ps = require("prompt-sync");
const prompt = ps();

let fishAdjectives1 = [
  "huge",
  "gentle",
  "charming",
  "rough",
  "sharp",
  "beautiful",
  "meaningless",
  "nicer",
  "adorable",
  "breakable",
];

let fishAdjectives2 = [
  "cruel",
  "fantastic",
  "perfect",
  "zealous",
  "gorgeous",
  "nicer",
  "bitter",
  "bland",
  "salty",
  "sweet",
];

let fishNames = [
  "Betta",
  "Clownfish",
  "Firefish",
  "Puffer",
  "Sunfish",
  "Tuna",
  "Eel",
  "Lionfish",
  "Yellowtang",
  "Bluetang",
];

let areYouDone = prompt("Are you [d]one fishing or [n]o?: ");

let storage = [];
counter = 0;

let accWeight = 0;
let accValue = 0;
let accWeight1 = 0;
let accValue1 = 0;

let hour = 6;

while (areYouDone !== "d" && areYouDone === "n") {
  let randomFishName = `${
    fishAdjectives1[Math.floor(Math.random() * fishAdjectives1.length)]
  } ${fishAdjectives2[Math.floor(Math.random() * fishAdjectives2.length)]} ${
    fishNames[Math.floor(Math.random() * fishNames.length)]
  }`;

  let randomWeight = (Math.random() * 10).toFixed(2);
  let randomValue = (Math.random() * 100).toFixed(2);
  if (hour !== 12) {
    if (storage.length < 1) {
      console.log(
        `The time is ${hour}am. So far you've caught: 0 fish, 0lbs, $0.00`
      );
      console.log(
        "========================================================================="
      );
    } else {
      console.log(
        `The time is ${hour}am. So far you've caught: ${counter} fish, ${accWeight1.toFixed(
          2
        )} lbs, $${accValue1.toFixed(2)}`
      );
      console.log(
        "========================================================================="
      );
    }
  } else if (hour === 12) {
    console.log(`The time is ${hour}pm. Times up!`);
    console.log(
      "========================================================================="
    );
    break;
  }

  let fish = {
    name: randomFishName,
    weight: randomWeight,
    value: randomValue,
  };

  console.log(
    `You caught a ${fish.name} weighing ${fish.weight} lbs with a value of $${fish.value}`
  );
  console.log(
    "========================================================================="
  );

  let catchOrRelease = prompt("Your action: [c]atch or [r]elease or [d]one?: ");
  if (catchOrRelease === "c") {
    console.log(
      "========================================================================="
    );
    console.log("You chose to keep the fish");
    console.log(
      "========================================================================="
    );
    accWeight += Number(fish.weight);
    accValue += eval(fish.value);
    if (accWeight > 10.0) {
      prompt("This fish would put you over 10 lbs, so you to release it");
      prompt("Press [enter] to continue");
      console.log(
        "========================================================================="
      );
      accWeight -= Number(fish.weight);
    } else {
      accWeight1 += Number(fish.weight);
      accValue1 += eval(fish.value);
      storage.push(fish);
      counter++;
    }
  } else if (catchOrRelease === "d") {
    break;
  } else if (catchOrRelease === "r") {
    console.log("You chose to release the fish");
    console.log(
      "========================================================================="
    );
  }
  hour++;
}
// console.log(storage);
console.log(`You caught ${storage.length} fish:`);
for (let i = 0; i < storage.length; i++) {
  let it = storage[i];
  console.log(`* ${it.name}, ${it.weight} lbs, $${it.value}`);
}
console.log("                                                ");
console.log(`Total weight: ${accWeight1.toFixed(2)} lbs`);
console.log(`Total value: $${accValue1.toFixed(2)}`);
