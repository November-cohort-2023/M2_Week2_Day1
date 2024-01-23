import './App.css'
import BooksList from './components/BooksList'
import Summary from './components/Summary'
import booksData from './books.json'
import { useState } from 'react'
function App() {
  const [books,setBooks] = useState(booksData)
  
  let movie = {
    title: "The Matrix",
    year: 1999,
    director: "Lana Wachowski",
    duration: "2h 16min",
    rate: 8.7,
  }




  return (
    <>
    
    <BooksList books={books} setBooks={setBooks}></BooksList>
    <Summary books = {books}></Summary>
    </>
  )
}

export default App
