import { useState, Fragment, useEffect } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
export function App() {
  const [tasks, setTasks] = useState([]);
  const [tasksToShow, setTaskToShow] = useState(tasks);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    if (filter === 0) {
      setTaskToShow(tasks);
    } else {
      if (filter === 1) {
        const newTasks = tasks.filter((task) => !task.completed);
        setTaskToShow(newTasks);
      } else {
        if (filter === 2) {
          const newTasks = tasks.filter((task) => task.completed);
          setTaskToShow(newTasks);
        }
      }
    }
  }, [filter, tasks]);

  function completeTask(taskCheckbox) {
    const newTasks = [...tasks];
    const taskChanged = newTasks.find((task) => taskCheckbox.id === task.id);
    taskChanged.completed = !taskChanged.completed;
    setTasks(newTasks);
  }

  function deleteTask(taskDeleted) {
    console.log(taskDeleted);
    const newTasks = tasks.filter((task) => task !== taskDeleted);
    setTasks(newTasks);
  }

  return (
    <Fragment>
      <div className="bg-white flex flex-col sm:w-[70%] min-w-[300px] rounded p-12 m-2">
        <Form tasks={tasks} setTasks={setTasks} />
        <TodoList
          tasks={tasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
          setFilter={setFilter}
          tasksToShow={tasksToShow}
        />
      </div>
    </Fragment>
  );
}
