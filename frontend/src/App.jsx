import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Todo from './Todo';
import bcg from './bcg.png';


function App() {
  const [popUp,setIsPopUp] =useState(false);
  const [data,setData] = useState(null)
  const [newGoal,setNewGoal] = useState('')
  useEffect((() => {
    async function fetchData(){
      const newData = await axios.get('https://expressgoalsapi.herokuapp.com/api/goals').then(D=>setData(D.data));
      console.log('poop')
    }
    fetchData();
  }),[popUp]);

  const onDone = async () =>{
    const postData = await axios.post(`https://expressgoalsapi.herokuapp.com/api/goals`,{title:newGoal});
    setIsPopUp(false);
  }

  return (
      <div className="Body">
        <span className="heading">Express To-Do</span>
        <Todo Data={data}/>
        {!popUp && <a href="#" id='addGoal' className="button" onClick={e => setIsPopUp(true)}>Add Goal</a>}
          {popUp && (<>
          <a href="#" id='Done' className="button" onClick={onDone}>Done</a>
          <img id="background" src={bcg}></img>
          <div id="popUp">
            <input id="input" type="text" placeholder='next goal?' className='textfield' value={newGoal} onChange={e => setNewGoal(e.target.value)}></input>
          </div>
                  </>)}
      </div>
  );
}

export default App;
