import { FC, useState } from "react";
import styles from "./Todo.module.scss";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { TTodo } from "../../types/types";
import { useTodoStore } from "../../store/store";
import { Input } from "../Input/Input";
import { IconButton } from "../IconButton/IconButton";
import { Checkbox } from "../Checkbox/Checkbox";
import cn from "classnames";

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
  const { toggleTodo, deleteTodo, updateTodo, selectCategory } = useTodoStore();
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [todoCategory, setTodoCategory] = useState(todo.category);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateTodo = () => {
    if (!todoTitle || !todoCategory) {
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
    if(confirm("Are you sure you want to delete this task?")) {
      deleteTodo(todo.id);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditingTodoId(todo.id);
  };

  const handleCategoryClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const { textContent } = e.currentTarget;
    if (textContent) {
      selectCategory(textContent);
    }
  };  

  return (
    <div className={styles.todo}>
      <div className={styles.todoText}>
        {isEditing && editingTodoId === todo.id ? (
          <Input
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
        ) : (
          <span
            className={cn(styles.todoTextTitle, {
              [styles.completed]: todo.completed,
            })}
          >
            {todoTitle}
          </span>
        )}
        {isEditing && editingTodoId === todo.id ? (
          <Input
            value={todoCategory}
            onChange={(e) => setTodoCategory(e.target.value)}
          />
        ) : (
          <span className={styles.todoTextCategory} onClick={handleCategoryClick}>{todoCategory}</span>
        )}
      </div>
      <div className={styles.todoButtons}>
        <Checkbox
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {isEditing && editingTodoId === todo.id ? (
          <>
            <IconButton onClick={handleUpdateTodo}>
              <MdFileDownloadDone />
            </IconButton>
          </>
        ) : (
          <IconButton onClick={handleEditClick}>
            <BiSolidEditAlt />
          </IconButton>
        )}
        <IconButton onClick={handleDeleteClick}>
          <MdDelete />
        </IconButton>
      </div>
    </div>
  );
};
