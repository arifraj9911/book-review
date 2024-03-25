import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className="my-10 flex flex-col items-center ">
            <h2 className="mb-10 text-[40px] font-bold">Books:{books.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    books.map(book=><Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;