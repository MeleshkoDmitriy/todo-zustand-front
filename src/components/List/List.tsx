import { useEffect, useState } from "react";
import { useTodoStore } from "../../store/store";
import { TTodo } from "../../types/types";
import { Todo } from "../Todo/Todo";
import styles from "./List.module.scss";

export const List = () => {
  const { todos, fetchTodos, filters } = useTodoStore();
  const [editingTodoId, setEditingTodoId] = useState<null | number>(null);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos, filters]);

  return (
    <section className={styles.list}>
      <h3 className={styles.listTitle}>
        {todos.length > 0 ? "Todolist" : "No tasks available"}
      </h3>
      {todos
        ?.slice()
        .reverse()
        .map((todo: TTodo) => (
          <Todo
            key={todo.id}
            todo={todo}
            editingTodoId={editingTodoId}
            setEditingTodoId={setEditingTodoId}
          />
        ))}
    </section>
  );
};
