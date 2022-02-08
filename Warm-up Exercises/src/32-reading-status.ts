export {}

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false,
  },
]

interface Library {
  title: string
  author: string
  isRead: boolean
}

const showStatus = (library: Library[]) => {
  library.forEach((book) => {
    console.log(
      `${book.isRead ? "Already read" : "You still need to read"} ${
        book.title
      } by ${book.author}`
    )
  })
}

showStatus(library)

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/
