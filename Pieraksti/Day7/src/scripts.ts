const inputEl = document.querySelector<HTMLInputElement>(".js-input")
const listEl = document.querySelector<HTMLUListElement>(".js-list")
const formEl = document.querySelector<HTMLFormElement>(".js-form")
const incompletedEL = document.querySelector<HTMLButtonElement>(
  ".js-show-incomplete"
)
const deleteAllBtn = document.querySelector<HTMLButtonElement>(".js-delete-all")

// Uztaisiet todo sarakstu ar opcijjām:
// Pievienot sarakstam
// Izdzēst no saraksta
// Mark ar comleted
// Poga parādīt neizpildītos
// Izdzēst visus
// BONUSS:
// Edit iespēja

formEl.addEventListener("submit", (e: Event) => {
  e.preventDefault()
  let { value } = inputEl

  const newLiNode = document.createElement("li")
  newLiNode.innerHTML = value

  const newButton = document.createElement("button")
  newButton.addEventListener("click", () => {
    newLiNode.remove()
  })

  const markAsCompleted = document.createElement("button")
  markAsCompleted.addEventListener("click", () => {
    newLiNode.classList.toggle("completed")
  })

  const editBtn = document.createElement("button")
  editBtn.addEventListener("click", () => {
    const newInput = document.createElement("input")
    newInput.value = value
    newLiNode.innerHTML = ""
    newLiNode.appendChild(newInput)
    newInput.focus()
    newInput.addEventListener("keyup", (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        newLiNode.innerHTML = newInput.value
        newLiNode.appendChild(newButton)
        newLiNode.appendChild(markAsCompleted)
        newLiNode.appendChild(editBtn)
        value = newInput.value
      }
    })
  })

  incompletedEL.addEventListener("click", (e: Event) => {
    e.preventDefault()
    if (newLiNode.classList.contains("completed")) {
      newLiNode.classList.toggle("hidden")
      incompletedEL.innerText = "Hide completed"
      if (newLiNode.classList.contains("hidden")) {
        incompletedEL.innerText = "Show completed"
      }
    }
  })

  deleteAllBtn.addEventListener("click", (e: Event) => {
    e.preventDefault()
    listEl.innerHTML = ""
  })

  newButton.innerText = "Delete"
  markAsCompleted.innerText = "Completed"
  editBtn.innerText = "Edit"
  newLiNode.appendChild(newButton)
  newLiNode.appendChild(markAsCompleted)
  newLiNode.appendChild(editBtn)
  listEl.appendChild(newLiNode)
})
