import React, {useState } from "react";
import "./todoList.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function TodoList () {
    const [tasks, setTasks] = useState([]);
    const [inputvalue, setInputvalue] = useState('');
    const onChange = (e) => {
        setInputvalue(e.target.value);
      };
    const onSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks,{string: inputvalue,completed: false}]);
        setInputvalue('');  
    };  
    const completing = (task) => {
        const updatedTasks = tasks.map((item) =>
            item === task ? { ...item, completed: !item.completed } : item
        );
        setTasks(updatedTasks);
    };
    const deleting = (task) => {
        const updatedTasks = tasks.filter((tasks) => tasks !== task);
        setTasks(updatedTasks);
    };
    return (
        <div className="mx-auto w-50 my-5">
            <form onSubmit={onSubmit} className="input-group mx-auto w-50 form-outline my-3">
                <input id="taskInput" type="text" onChange={onChange} value={inputvalue} className=" form-control" placeholder="new item"></input>
                <button type="submit" className={"btn btn-outline-light btn-rounded"} btn btn-outline-light btn-rounded>submit</button>
            </form>
            <ul class="list-group flex-column-reverse">
                {tasks.map((task) => (
                    <li className={`${task.completed ? 'line_through' : ''} list-group-item rounded-3 active border my-2 d-flex `}>
                        <input type="checkbox" onChange={() => completing(task)} className="mx-auto my-auto form-check-input" id="mycheckbox"/>
                        <h2 className="text-start text-break">{task.string}</h2>
                        <button type="button" onClick={() => deleting(task)} className="w-auto my-auto mx-auto btn btn-outline-light btn-rounded" data-mdb-ripple-init data-mdb-ripple-color="dark">X</button>
                    </li>
                ))}
        </ul>
        </div>
    )
};
export default TodoList;