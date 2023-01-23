import React from "react";
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id:uuidv4(),
        "title" : "Bijoy",
        "desc"  : "this is desc1"
    },

    {
        id:uuidv4(),
        "title" : "Korim",
        "desc"  : "this is desc2"
    },

    {
        id:uuidv4(),
        "title" : "Rofiq",
        "desc"  : "this is desc3"
    }
];

const List = () =>{
    return <div>
        {todos.map((todo) => {
            const {id, title, desc} = todo
            return (
                <div key={id}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            );
        })}
    </div>
};

export default List;