import { ChangeEvent, FormEvent, useState } from "react";
import { useTodoStore } from "../../store/store";
import styles from "./Form.module.scss";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useShallow } from "zustand/react/shallow";

export const Form = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const { addTodo, isLoading } = useTodoStore(
    useShallow((state) => ({
      addTodo: state.addTodo,
      isLoading: state.isLoading,
    }))
  );

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const onSubmitClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!title || !category) {
      return;
    }
    addTodo(title, category);
    setTitle("");
    setCategory("");
  };

  return (
    <form className={styles.form}>
      <h3 className={styles.formTitle}>Add new todo</h3>
      <Input
        type="text"
        placeholder="Write title"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <Input
        type="text"
        placeholder="Write category"
        value={category}
        onChange={handleCategoryChange}
        required
      />
      <Button type="submit" onClick={onSubmitClick} disabled={isLoading}>
        Save
      </Button>
    </form>
  );
};
