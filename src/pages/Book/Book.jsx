import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const Book = () => {
    const URL = 'https://www.googleapis.com/books/v1/volumes/';
    const { book_id } = useParams();
    const [book, setBook] = useState();
    const [loading, setLoading] = useState(false);
    const getBook = async () => {
        const response = await fetch(URL + book_id)
        const data = await response.json();
        setBook(data)
    }

    useEffect(() => {
        if(book_id) getBook()
    }, [book_id])
    return (
        !loading && book ?
            <>
                <h2>{book.volumeInfo.title}</h2>
            </> :
            <span className="loading">Loading...</span>
    )
}
