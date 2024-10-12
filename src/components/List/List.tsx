import { useEffect, useState } from "react";
import { useTodoStore } from "../../store/store";
import { TTodo } from "../../types/types";
import { Todo } from "../Todo/Todo";
import styles from "./List.module.scss";
import { Badge } from "../Badge/Badge";
import { Loading } from "../Loading/Loading";
import { useShallow } from "zustand/react/shallow";

export const List = () => {
  const { todos, fetchTodos, filters, isLoading } = useTodoStore(
    useShallow((state) => ({
      todos: state.todos,
      fetchTodos: state.fetchTodos,
      filters: state.filters,
      isLoading: state.isLoading,
    }))
  );
  const [editingTodoId, setEditingTodoId] = useState<null | number>(null);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos, filters]);

  return (
    <section className={styles.list}>
      <h3 className={styles.listTitle}>
        {todos.length > 0 && (
          <div className={styles.listBadge}>
            <Badge counter={todos.length} />
          </div>
        )}
        {isLoading && <Loading />}
        {todos.length > 0 && !isLoading && "Todolist"}
        {todos.length <= 0 && !isLoading && "No tasks available"}
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
