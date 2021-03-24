import React from 'react'

export default function BookList(props) {
    return (
        <li onClick={e => props.select(props.book, e)}>
            {props.book.title}
        </li>
    )
}