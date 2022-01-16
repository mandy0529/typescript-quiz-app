import {ITask} from '../interface';

interface ITodoTask {
  item: ITask;
  handleDelete: (id: string) => void;
}
const TodoTask = ({item, handleDelete}: ITodoTask) => {
  console.log(item);
  return (
    <div className="todo-task">
      <h4>{item.taskName}</h4>
      <p>{item.deadline}</p>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </div>
  );
};

export default TodoTask;
