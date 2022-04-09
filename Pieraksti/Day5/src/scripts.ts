// strings
// numbers
// boolean
// Array
// Object

// strings
// teksts
// ir pēdiņās
// savas unikālas funkcijas (metodes)

// const firstName = "Jānis"
// const lastName = "Bērziņš"

// const fullname = firstName.concat(lastName);
// const fullName = firstname + ' ' + lastName;
// const fullName = `${firstName} ${lastName}`;

// Numbers ar/bez komatiem, bez pēdiņām un savas unikālas funkcijas

// falsy vērtības
// 0, NaN, '', undefined, null, false

// const age = 28
//
// console.log(Number(age));
// console.log(parseFloat(age));
// console.log(parseInt(age));

// console.log(Boolean(age));
// console.log(!!age);

// Array
// Pēc indeksiem sakārtota datu rinda
// []
// masīvi labi loopojas
// masīvs var saturēt masīvus

// const fruits = [
//   "Apple",
//   "Pear",
//   "Peach",
//   "Orange",
//   "Banana",
//   "Watermelon",
//   "Cherry",
//   "Plum",
//   "Pineapple",
// ]

// console.log(fruits[2])
// console.log(fruits.length)

// const fruits1 = [
//   [
//     "Apple",
//     "Pear",
//     "Peach",
//     "Orange",
//     "Banana",
//     "Watermelon",
//     "Cherry",
//     "Plum",
//     "Pineapple",
//   ],
// ]

// console.log(fruits1[0][2])

// for (let i = 1; i < fruits.length; i++) {
//   const firstLetter = fruits[i].charAt(0).toLowerCase()

//   if (firstLetter === "p") {
//     console.log(fruits[i])
//   }
// }

// fruits.forEach((fruit) => {
//   const firstLetter = fruit[0]
//   const firstLetterLower = firstLetter.toLowerCase()

//   if (firstLetterLower === "p") {
//     console.log(fruit)
//   }
// })

// Object
// Key-> value pāris

// const fruit = {
//   name: "Apple",
//   color: "Green",
//   colorTypes: ["Green", "Red", "Yellow"],
// }

// variables
// Sagatavot datus kaut kam
// Pārizmantot (DRY)
// pārsaglabāt datus

// const fruits = [
//   "Apple",
//   "Pear",
//   "Peach",
//   "Orange",
//   "Banana",
//   "Watermelon",
//   "Cherry",
//   "Plum",
//   "Pineapple",
// ]

// const fruitsStartingWithP = fruits.filter((fruit) => {
//   const firstLetter = fruit[0].toLocaleLowerCase()

//   return firstLetter === "p"
// })

// const modifiedArr = fruits.map((fruit) => {
//   const reversedFruit = fruit.split("").reverse().join("")

//   return reversedFruit
// })

// Task #-4
// car[1].name // Volvo

const car = [
  {},
  {
    name: "Volvo",
  },
]

console.log(car[1].name)

// Task #-3
// car.sum() // return 3000000EUR

const car1 = {
  sum: () => {
    return "3000000EUR"
  },
}

console.log(car1.sum())

// Task #-2
// car.model.color // returns red

const car2 = {
  model: {
    color: "red",
  },
}

console.log(car2.model.color)

// Task #-1
// Make an object which fruit[0][1]; // returns 'Apple'

const fruit = [[[], ["Apple"]]]

console.log(fruit[0][1])

// Task #0
// human.name('Jānis') // returns Jānis

const human = {
  name: (name: string) => name,
}

console.log(human.name("Jānis"))

// Tasks #1
// math.sum()()(1,3).sum // return 13

const math = {
  sum: () => () => (number1: number, number2: number) => ({
    sum: Number(`${number1}${number2}`),
  }),
}

console.log(math.sum()()(1, 3).sum)

// Task #2
// human().rights[2][1].amendment[2].paragraph() // 'Lorem Ipsum'

const human1 = () => ({
  rights: [
    [],
    [],
    [
      [],
      {
        amendment: [
          {},
          {},
          {
            paragraph: () => "Lorem Ipsum",
          },
        ],
      },
    ],
  ] as any,
})

console.log(human1().rights[2][1].amendment[2].paragraph())

// Task #3
// returns powered x with y and sum powered by Z
// math(x, y)()()()()()()()()(z) //

// Task #4
// Take animal array from
// https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a
// Filter out Animals with letters "A" "Z" "U" "G" and capitalize it

// Task #5
// take array from https://stackoverflow.com/a/20623472/2927424
// filter out countries that have less than 6 characters
// modify array without nativeName key
