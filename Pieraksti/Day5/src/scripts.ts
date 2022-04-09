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

// math.sum()()(1,3).sum // return 13

// const sum = (x: number, y: number) => {
//   const result = x.toString() + y.toString()
//   return parseInt(result)
// }

// const math: any = {
//   sum: () => {
//     return () => {
//       return (x: number, y: number) => {
//         return sum(x, y)
//       }
//     }
//   },
// }

// console.log(math.sum()()(1, 3))

// const math = {
//   sum: () => () => (number1: number, number2: number) => ({
//     sum: Number(`${number1}${number2}`),
//   }),
// }

// console.log(math.sum()()(1, 3).sum)


// human().rights[2][1].amendment[2].paragraph() // 'Lorem Ipsum'

//@ts-ignore
const human = () => ({
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



console.log(human().rights[2][1].amendment[2].paragraph())
