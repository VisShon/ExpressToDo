import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Todo from './Todo';
import bcg from './bcg.png';


function App() {
  
  const [data,setData] = useState(null)
  const [newGoal,setNewGoal] = useState('')
  useEffect((() => {
    async function fetchData(){
      const newData = await axios.get('http://localhost:8000/api/goals').then(D=>setData(D.data));
    }
    fetchData();
  }),[]);
  const onInput = async() =>{
    setNewGoal(document.getElementById('input').value);
    console.log(newGoal);
  }
  const onAddGoal= async ()=>{
    console.log('poop')
    const bg=document.getElementById("background");
    const pop=document.getElementById("popUp");
    const btn=document.getElementById("addGoal");
    const btn2=document.getElementById("Done");
    btn2.hidden=false;
    btn.hidden=true;
    pop.hidden=false;
    bg.hidden=false;
  }

  const onDone = async () =>{
    console.log('poop')
    const bg=document.getElementById("background");
    const pop=document.getElementById("popUp");
    const btn=document.getElementById("addGoal");
    const btn2=document.getElementById("Done");
    btn2.hidden=true;
    btn.hidden=false;
    pop.hidden=true;
    bg.hidden=true;
    const newData = await axios.post(`http://localhost:8000/api/goals`,{title:newGoal});
  }

  return (
      <div className="Body">
        <span className="heading">Express To-Do</span>
        <Todo Data={data}/>
        <a href="#" id='addGoal' className="button" onClick={onAddGoal}>Add Goal</a>
          <a href="#" id='Done' className="button" onClick={onDone} hidden={true}>Done</a>
          <img id="background" src={bcg} hidden={true}></img>
          <div id="popUp" hidden={true}>
            <input id="input" type="text" placeholder='next goal?' className='textfield' onKeyDown={onInput}></input>
          </div>
      </div>
  );
}

export default App;
