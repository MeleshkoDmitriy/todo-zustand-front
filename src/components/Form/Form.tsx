import { ChangeEvent, FormEvent, useState } from "react";
import { useTodoStore } from "../../store/store";
import styles from "./Form.module.scss";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
// import shallow from "zustand/shallow";

export const Form = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const { addTodo } = useTodoStore();

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
        placeholder="Todo title"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <Input
        type="text"
        placeholder="Todo category"
        value={category}
        onChange={handleCategoryChange}
        required
      />
      <Button
        type="submit"
        onClick={onSubmitClick}
      >
        Save
      </Button>
    </form>
  );
};
