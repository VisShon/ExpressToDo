import React from 'react'
import {useState} from 'react'

function Todo({Data}) {

    const[isDone,setIsDone] =useState(false);

    return (
        <div className="cards">
            {Data==null ? <div>Loadng...</div>:
            Data.map((item, i) =>(
                <span className="todo">
                    <input type="checkbox" className="checkbox"></input>
                    {item.title}
                </span>
            ))}
        </div>
    )
}

export default Todo