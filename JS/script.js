let arr = [
  {
    name: "Alex",
    age: 18,
  },

  {
    name: "Refat",
    age: 19,
  },

  {
    name: "Amal",
    age: 14,
  },

  {
    name: "Shoxrux",
    age: 17,
  },

  {
    name: "Abdulvosid",
    age: 16,
  },

  {
    name: "Jamshed",
    age: 18,
  },

  {
    name: "Manucher",
    age: 18,
  },

  {
    name: "Faxriddin",
    age: 24,
  },

  {
    name: "Shakhnoza",
    age: 15,
  },

  {
    name: "Timur",
    age: 17,
  },
];

alert("What's up?");

let overEightTeen = [];
let underEightTeen = [];

let filtered = arr.filter((item) => {
  if (item.age >= 18) {
    overEightTeen.push(item);
  } else if (item.age < 18) {
    underEightTeen.push(item);
  }
});

console.log(overEightTeen);
console.log(underEightTeen);

console.log(`В группе учатся ${arr.length} студентов`);
console.log(`${overEightTeen.length} из них совершеннолетние`);
console.log(`${underEightTeen.length} из них не совершеннолетние`);
