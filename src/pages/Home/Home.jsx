import React, {useEffect, useState} from "react";
import {Card} from "../../components/Card/Card";

export const Home = () => {
    const URL = 'https://www.googleapis.com/books/v1/volumes';
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false);
    const getBooks = async () => {
        setLoading(true)
        const response = await fetch(`${URL}?q=${search}&key=AIzaSyBgkYbWXlCSSxyQX4VW-V9hUY9TMOj93ew&maxResults=40`)
        const data = await response.json();
        setBooks(data.items)
        setLoading(false)
    }

    const handleButton = () => {
        if (search.trim().length) {
            getBooks()
        }
    }

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="home">
            <div className="input-wrapper">
                <input className="input" value={search} onChange={handleInput}/>
                <button onClick={handleButton} className="input-button">search</button>
            </div>
            <ul>
                {
                    !loading ? books.map((book) =>
                        <Card key={book.id} book={book}/>) :
                        <span className="loading">Loading...</span>
                }
            </ul>
        </div>
    )
}
