import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Todo from './Todo';


function App() {
  const [data,setData] = useState(null)
  useEffect((() => {
    async function fetchData(){
      const newData = await axios.get('https://jsonplaceholder.typicode.com/todos').then(D=>setData(D.data));
    }
    fetchData();
  }),[]);

  const onClick= async (Data)=>{
    console.log('poop')
    await axios.post('https://jsonplaceholder.typicode.com/todos',{
      
    })
  }

  return (
      <div className="Body">
        <span className="heading">Express ToDo</span>
        <Todo Data={data}/>
        <a href="#" className="button" onClick={onClick}>Add Goal</a>
      </div>
  );
}

export default App;
