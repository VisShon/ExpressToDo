import React from 'react'
import axios from 'axios'

function Todo({Data,setData}) {


    const Checked = async (e)=>{
        console.log(Data);
        await axios.put(`https://expressgoalsapi.herokuapp.com/api/goals/${e.target.value}`,{status:true});
        await axios.get('https://expressgoalsapi.herokuapp.com/api/goals').then(D=>setData(D.data));
    }

    return (
        <div className="cards">
            {Data==null ? <div>Loading...</div>:
            Data.map((item, i) =>(
                !item.status&&(<span className="todo" key={i}>
                    <input type="checkbox" className="checkbox" value={(item._id)} onChange={e=>{Checked(e)}}/>
                    {item.title}
                </span>)
            ))}
        </div>
    )
}

export default Todo