const showButton = document.querySelector<HTMLButtonElement>("#show-button")
const todoList = document.querySelector<HTMLUListElement>("#todo-list")
const bodyButton = document.querySelector<HTMLButtonElement>("#body-button")
const boxEl = document.querySelectorAll<HTMLDivElement>(".box")
const boxRed = document.querySelector<HTMLDivElement>(".box--red")
const boxGreen = document.querySelector<HTMLDivElement>(".box--green")
const boxBlue = document.querySelector<HTMLDivElement>(".box--blue")
const boxButtonEl = document.querySelectorAll<HTMLButtonElement>("#box-button")

showButton.addEventListener("click", () => {
  if (todoList.classList.toggle("hidden")) {
    showButton.innerText = "Show list"
  } else {
    showButton.innerText = "Hide list"
  }
})

// Uztaisīt pogu, kad uz viņas nospiež body krāsa mainās uz zilu

bodyButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue"
})

// Kad uzhovero uz pogas, pogai mainās teksts: hovered

bodyButton.addEventListener("mouseenter", () => {
  bodyButton.innerText = "Hovered"
})

bodyButton.addEventListener("mouseleave", () => {
  bodyButton.innerText = "Change color"
})

// Uztaisam trīs kastes (div 100x100) un trīs pogas (reg, green, blue) kad spiežam uz attiecīgās pogas, kastes paliek pogas nosaukuma krāsā. Izmantojam document.querySelectorAll lai selektētus divus
// Bonuss: arī pogas tiek selektētas ar vienādu selektoru un kastēm krāsa tiek iedota no button.innerText :)

boxButtonEl.forEach((button: HTMLButtonElement) => {
  button.addEventListener("click", () => {
    boxEl.forEach((box: HTMLDivElement) => {
      box.style.backgroundColor = button.innerText
    })
  })
})
