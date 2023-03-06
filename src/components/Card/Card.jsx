import React from "react";
import {Link} from "react-router-dom";

export const Card = ({book}) => {
    const { volumeInfo: { title, imageLinks }, id } = book
    let thumbnail= imageLinks && imageLinks.smallThumbnail;
    return (
        <li className="card">
            <Link className="card-link" to={"/" + id}>
                <img width="100px" className="card-img" src={thumbnail} />
                <h2 className="card-title">{title}</h2>
            </Link>
        </li>
    )

}
