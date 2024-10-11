import { useEffect, useState } from "react";
import { useTodoStore } from "../../store/store";
import { TTodo } from "../../types/types";
import { Todo } from "../Todo/Todo";
import styles from "./List.module.scss";
import { Badge } from "../Badge/Badge";
import { Loading } from "../Loading/Loading";

export const List = () => {
  const { todos, fetchTodos, filters, loading } = useTodoStore();
  const [editingTodoId, setEditingTodoId] = useState<null | number>(null);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos, filters]);

  console.log(loading)

  return (
    <section className={styles.list}>
      <h3 className={styles.listTitle}>
        {todos.length > 0 && (
          <div className={styles.listBadge}>
            <Badge counter={todos.length} />
          </div>
        )}
        {loading && <Loading />}
        {todos.length > 0 && !loading && "Todolist"}
        {todos.length <= 0 && !loading && "No tasks available"}
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
