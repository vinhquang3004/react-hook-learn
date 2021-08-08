import { useState } from 'react';
import './App.css';
import ColorBox from './conponents/ColorBox';
import TodoList from './conponents/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: '1. tittle 1' },
    { id: 2, title: '2. tittle 2' },
    { id: 3, title: '3. tittle 3' },
  ])

  const handleTodoClick = (item) => {
    console.log(item)
    const index = todoList.findIndex(x => x.id === item.id) 
    if(index < 0) return;

    //clone arrray
    const newTodoList= [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  return (
    <div className="App">
      <h1>React hooks - To Do List</h1>
      {/* <ColorBox /> */}
      <TodoList todoProps={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
