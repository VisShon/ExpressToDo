import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Todo from './Todo';
import bcg from './bcg.png';


function App() {
  const [data,setData] = useState(null)
  useEffect((() => {
    async function fetchData(){
      const newData = await axios.get('http://localhost:8000/api/goals').then(D=>setData(D.data));
    }
    fetchData();
  }),[]);

  const onClick= async (Data)=>{
    console.log('poop')
    const bg=document.getElementById("background");
    const pop=document.getElementById("popUp");
    const btn=document.getElementById("addGoal");
    btn.hidden=true;
    pop.hidden=false;
    bg.hidden=false;
    // await axios.post('https://jsonplaceholder.typicode.com/todos',{
      
    // })
  }

  return (
      <div className="Body">
        <span className="heading">Express To-Do</span>
        <Todo Data={data}/>
        <a href="#" id='addGoal' className="button" onClick={onClick}>Add Goal</a>
        <img id="background" src={bcg} hidden={true}></img>
        <div id="popUp" hidden={true}>
          <input type="text" placeholder='next goal?' className='textfield'></input>
        </div>
      </div>
  );
}

export default App;
