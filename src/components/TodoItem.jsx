export function TodoItem({ task, completeTask, deleteTask }) {
  const { id, completed, input } = task;

  return (
    <div className="flex justify-between bg-gray-200  my-2 rounded-lg">
      <div className="flex items-center p-2">
        <input
          id={id}
          type="checkbox"
          onChange={() => completeTask(task)}
          checked={completed}
          className="w-4 h-4 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor={id}
          className="ml-2 font-medium text-gray-900 dark:text-gray-700"
        >
          {input}
        </label>
      </div>
      <div className=" w-6 flex justify-end rounded-lg">
        <button
          className="bg-red-300 h-full w-full rounded-r-lg transition duration-300 delay-100 hover:bg-red-600"
          onClick={() => deleteTask(task)}
        >
          X
        </button>
      </div>
    </div>
  );
}
