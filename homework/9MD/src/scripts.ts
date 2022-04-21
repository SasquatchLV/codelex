//@ts-nocheck
const subscribeBtn = document.querySelector<HTMLButtonElement>(
  ".footer-subscribe__btn"
)
const subscribeInput = document.querySelector<HTMLInputElement>(
  ".footer-subscribe__input"
)
const footer = document.querySelector<HTMLDivElement>(".footer")

const subscribeOutput =
  document.querySelector<HTMLDivElement>(".subscribe-output")

const headerNav = document.querySelector(".header__nav")

subscribeInput.addEventListener("input", (e) => {
  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
  ]

  let color = colors[Math.floor(Math.random() * colors.length)]

  footer.style.backgroundColor = color
})

subscribeBtn.addEventListener("click", (e) => {
  let text = subscribeInput.value

  subscribeOutput.innerText = text
})

window.onload = () => {
  const links = ["Home", "Events", "About", "Blog", "Contact"]

  links.forEach((link) => {
    const navItem = document.createElement("a")
    navItem.classList.add("header__nav--item")
    navItem.innerText = link
    navItem.href = `${link}`
    headerNav.appendChild(navItem)
  })

  document.querySelector(".how-it-works").addEventListener("click", (e) => {
    e.preventDefault()
    nativeToast({
      message: "This is a toast message",
      position: "north-east",
      // Self destroy in 5 seconds
      timeout: 5000,
      rounded: true,
      icon: false,
      closeOnClick: true,
      type: "success",
    })
  })
}
