import { useEffect, useState } from "react";
import { useTodoStore } from "../../store/store";
import { TTodo } from "../../types/types";
import { Todo } from "../Todo/Todo";

export const List = () => {
  const { todos, fetchTodos, filters } = useTodoStore();
  const [editingTodoId, setEditingTodoId] = useState<null | number>(null);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos, filters]);

  return (
    <section>
      {todos?.map((todo: TTodo) => (
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
