function BooksList(props) {

  console.log(props)

  function deleteBook(idParam){
    
    const filteredBooks = props.books.filter((oneBook)=>{
      return oneBook.id !== idParam
    })
    props.setBooks(filteredBooks)
  }

  function sortBooks(){
    const booksCopy = [...props.books]
    booksCopy.sort((a,b)=>{
      return a.title.localeCompare(b.title)
    })
    props.setBooks(booksCopy)
  }

  function consoleSomething(){
    console.log("Books")
  }

  function addDiogoBook(){
    const newBook = {title:"Diogo Book",author:"Diogo",id:"infieoi"}
    props.setBooks([...props.books,newBook])
  }
   
  return (
    <div>
      <h2>Books List</h2>
      <button onClick={addDiogoBook}>Add Diogo Book</button>
      <button onClick={sortBooks}>Sort Books</button>
      {props.books.map((oneBook)=>{
        return(
          <div key={oneBook.id}>
            <h4>Title: {oneBook.title}</h4>
            <p>Author: {oneBook.author}</p>
            <button onClick={()=>{deleteBook(oneBook.id)}}>Delete Book</button>
          </div>
        )
      })}
      
    </div>
  )
}

export default BooksList