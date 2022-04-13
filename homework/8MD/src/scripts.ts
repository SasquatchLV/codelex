const allButtons = document.querySelectorAll<HTMLButtonElement>(".button")
const allBoxes = document.querySelectorAll<HTMLDivElement>(".box")

/* ----- Task 1 ----- */

allButtons[0].addEventListener("click", () => {
  const backgroundColor = allBoxes[0].style.backgroundColor
  if (backgroundColor === "yellow") {
    allBoxes[0].style.backgroundColor = "#1fc2ae"
  } else {
    allBoxes[0].style.backgroundColor = "yellow"
  }
})

allButtons[1].addEventListener("click", () => {
  const innerText = allBoxes[1].innerText
  if (innerText === "FAIL") {
    allBoxes[1].innerText = "SUCCESS"
  } else {
    allBoxes[1].innerText = "FAIL"
  }
})

/* ----- Task 2 ----- */

allButtons[2].addEventListener("click", () => {
  allBoxes[2].classList.add("hidden")
})

/* ----- Task 3 ----- */

allButtons[3].addEventListener("click", () => {
  allBoxes[3].classList.toggle("hidden")
})

/* ----- Task 4 ----- */

allButtons[4].addEventListener("click", () => {
  const getRandomColor = () => {
    const possibleColors = [
      "red",
      "yellow",
      "green",
      "blue",
      "chocolate",
      "purple",
      "orange",
      "pink",
    ]

    return possibleColors[Math.floor(Math.random() * possibleColors.length)]
  }

  const setRandomColor = () => {
    let currentColor = allBoxes[4].style.backgroundColor
    let randomColor = getRandomColor()

    while (randomColor === currentColor) {
      randomColor = getRandomColor()
    }

    allBoxes[4].style.backgroundColor = randomColor
  }

  setRandomColor()
})

/* ----- Task 5 ----- */

allButtons[5].addEventListener("click", () => {
  let number = 0
  const interval = setInterval(() => {
    number++
    allBoxes[5].innerText = number.toString()
    if (number === 10) {
      clearInterval(interval)
    }
  }, 3000)
})

/* ----- Task 6 ----- */

allButtons[6].addEventListener("click", () => {
  const backgroundColor = window
    .getComputedStyle(document.body, null)
    .getPropertyValue("background-color")

  if (backgroundColor === "rgba(0, 0, 0, 0)") {
    document.body.style.backgroundColor = "#000000"
    allBoxes.forEach((box) => {
      box.style.backgroundColor = "#18D5E1"
    })
  } else {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0)"
    allBoxes.forEach((box) => {
      box.style.backgroundColor = "#1fc2ae"
    })
  }
})

/* ----- Task 7 ----- */

allBoxes[0].addEventListener("mouseenter", () => {
  allBoxes[0].style.backgroundColor = "#FF0000"
})

allBoxes[0].addEventListener("mouseleave", () => {
  allBoxes[0].style.backgroundColor = "#1fc2ae"
})

/* ----- Task 8 ----- */

allBoxes[4].addEventListener("mouseenter", () => {
  let number = 0

  const interval = setInterval(() => {
    number += 1
    allBoxes[4].innerText = number.toString()
    if (number === 10) {
      clearInterval(interval)
    }
  }, 1000)

  allBoxes[4].onmouseout = () => {
    clearInterval(interval)
    allBoxes[4].innerText = "0"
  }
})

/* ----- Task 9 ----- */

const inputEL = document.querySelector<HTMLInputElement>(".input")
const inputTextEl = document.querySelector<HTMLSpanElement>(".input-text")

inputEL.addEventListener("input", () => {
  inputTextEl.innerText = inputEL.value
})
