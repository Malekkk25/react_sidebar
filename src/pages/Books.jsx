import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const Books = () => {
    const [books,setBooks] =useState([])

    useEffect(() => {
        const fetchAllBooks=async () =>{
            try{
                const res = await axios.get("http://localhost:3001/books")
                setBooks(res.data);
            } catch (err){
                console.log(err)
            }
        }
   fetchAllBooks()  
    },[])   
  return (
    <div><h1> Books</h1>
    <div className='books'>
        {books.map (book=>(
            <div className='book'>
              <h2>{book.movieName}</h2>
              <h2>{book.movieReview}</h2>
              </div> 
        ))}
   
    </div>
    </div>
  )
}

export default Books