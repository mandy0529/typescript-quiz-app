import {ChangeEvent, useState} from 'react';
import TodoTask from './components/TodoTask';
import {ITask} from './interface';

function App() {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [list, setList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else {
      setDeadline(e.target.valueAsNumber);
    }
  };

  const handleClick = () => {
    let taskList: ITask = {
      taskName: task,
      deadline: deadline,
      id: task + deadline,
    };
    setList((prev) => [...prev, taskList]);
    setTask('');
    setDeadline(0);
  };

  const handleDelete = (id: string) => {
    const filteredItem = list.filter((item) => {
      return item.id !== id;
    });
    setList(filteredItem);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          {' '}
          <input
            value={task}
            name="task"
            type="text"
            placeholder="task"
            onChange={handleChange}
          />
          <input
            value={deadline}
            name="deadline"
            type="number"
            placeholder="deadlines"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>add task</button>
      </div>

      <div className="todo-list">
        {list.map((item: ITask) => {
          return (
            <TodoTask handleDelete={handleDelete} key={item.id} item={item} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
