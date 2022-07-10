import React from 'react'
import {useState} from 'react'

function Todo({Data}) {

    const[isDone,setIsDone] =useState(false);

    const Checked = ()=>{

    }

    return (
        <div className="cards">
            {Data==null ? <div>Loadng...</div>:
            Data.map((item, i) =>(
                <span className="todo" key={i}>
                    <input type="checkbox" className="checkbox" ></input>
                    {item.title}
                </span>
            ))}
        </div>
    )
}

export default Todo