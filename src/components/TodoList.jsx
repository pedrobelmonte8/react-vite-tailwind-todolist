import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({
  tasks,
  completeTask,
  deleteTask,
  setFilter,
  tasksToShow,
}) {
  const buttonFilters = document.querySelectorAll(".buttonStates");

  function handleFilter(e) {
    const buttonPressedId = e.target.id;
    buttonFilters.forEach((button, index) => {
      if (button.id !== buttonPressedId) {
        button.classList.remove("border-b-2");
      } else {
        button.classList.add("border-b-2");
        setFilter(index);
      }
    });
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="mx-2 flex flex-col h-[375px]">
      <div className="">
        <button
          id="all"
          onClick={handleFilter}
          className="buttonStates py-3 px-4 min-[400px]:mx-2 mt-6 mb-2 border-b-2 border-blue-500 hover:bg-slate-100 rounded-sm "
        >
          All{" "}
          <span className=" text-xs">
            {tasks.length}
          </span>
        </button>
        <button
          id="active"
          onClick={handleFilter}
          className="buttonStates py-3 px-4 min-[400px]:mx-2 mt-6 mb-2 border-blue-500 hover:bg-slate-100 rounded-sm"
        >
          Active{" "}
          <span className=" text-xs">
            {tasks.filter((task) => !task.completed).length}
          </span>
        </button>
        <button
          id="completed"
          onClick={handleFilter}
          className="buttonStates py-3 px-4 min-[400px]:mx-2 mt-6 mb-2 border-blue-500 hover:bg-slate-100 rounded-sm"
        >
          Completed{" "}
          <span className=" text-xs">
            {tasks.filter((task) => task.completed).length}
          </span>
        </button>
      </div>
      <div className="overflow-y-auto">
        {tasksToShow.map((task) => {
          return (
            <TodoItem
              task={task}
              completeTask={completeTask}
              deleteTask={deleteTask}
              key={task.id}
            />
          );
        })}
      </div>
    </div>
  );
}
