import React, { Component } from 'react';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function FCreate() {
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const navigate = useNavigate();
    
    useEffect(()=>{
        setTitle('')
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert(`title: ${title}\ncover: ${cover}\nauthor: ${author} `)

        const newBook = {
            title:title,
            cover:cover,
            author:author
        }

        axios.post('http://localhost:4000/api/books', newBook)
            .then((response) => {
                navigate('/read')
            })
            .catch();
    }

    return (
        <div style={{ width: "40%" }}>
            <form onSubmit={handleSubmit}>
                <label>Add Title</label>
                <br></br>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => [
                        setTitle(e.target.value)
                    ]}
                ></input>
                <br></br>
                <label>Add Cover</label>
                <input
                    type="text"
                    className="form-control"
                    value={cover}
                    onChange={(e) => [
                        setCover(e.target.value)
                    ]}
                ></input>
                <br></br>
                <label>Add Author</label>
                <input
                    type="text"
                    className="form-control"
                    value={author}
                    onChange={(e) => [
                        setAuthor(e.target.value)
                    ]}
                ></input>
                <input type="submit" value="Add book"></input>
            </form>
        </div>
    );
} 