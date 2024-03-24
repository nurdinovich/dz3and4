import './App.css';
import TaskList from './component/TaskList';
import TaskForm from './component/TaskForm';
import Modal from './component/Modal';
import Card from './component/Card'
import Data from './data/Data.json'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [modalActive, setModalActive] = useState("");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <div className="App">

      <h1>Forms</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
      <button onClick={() => setModalActive(true)}>open modal</button>
      <Modal active={modalActive} setacrive={setModalActive}>
        <div className='colCard'>
        {
          Data.map((item)=>(<Card 
            key={item.id}
              price={item.price}
              oldPrice={item.oldPrise}
              despreition={item.description}
              title={item.title}
              img={item.image}/>)
          
          )
        }
        </div>
        
      </Modal>
    </div>
  );
}

export default App;
