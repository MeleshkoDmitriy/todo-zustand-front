import { FC, useState } from "react";
import styles from "./Todo.module.scss";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { TTodo } from "../../types/types";
import { useTodoStore } from "../../store/store";

interface TodoProps {
  todo: TTodo;
  editingTodoId: null | number;
  setEditingTodoId: (id: number | null) => void;
}

export const Todo: FC<TodoProps> = ({
  todo,
  editingTodoId,
  setEditingTodoId,
}) => {
  const { toggleTodo, deleteTodo, updateTodo } = useTodoStore();
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [todoCategory, setTodoCategory] = useState(todo.category);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateTodo = () => {
    if(!todoTitle || !todoCategory) {
      return;
    }
    
    updateTodo({
      id: todo.id,
      title: todoTitle,
      category: todoCategory,
      completed: todo.completed,
    });
    setIsEditing(false);
    setEditingTodoId(null);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditingTodoId(todo.id);
  };

  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing && editingTodoId === todo.id ? (
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      ) : (
        <span>{todoTitle}</span>
      )}
      {isEditing && editingTodoId === todo.id ? (
        <input
          type="text"
          value={todoCategory}
          onChange={(e) => setTodoCategory(e.target.value)}
        />
      ) : (
        <span>{todoCategory}</span>
      )}
      <div>
        {isEditing && editingTodoId === todo.id ? (
          <>
            <button onClick={handleUpdateTodo}>
              <MdFileDownloadDone />
            </button>
          </>
        ) : (
          <button onClick={handleEditClick}>
            <BiSolidEditAlt />
          </button>
        )}
        <button onClick={handleDeleteClick}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};
