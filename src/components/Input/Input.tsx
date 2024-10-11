import styles from "./Input.module.scss";
import { ComponentPropsWithoutRef, FC } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ value, placeholder, onChange }) => {
  return (
    <input
      type="text"
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
};
