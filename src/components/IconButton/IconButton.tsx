import { ComponentPropsWithoutRef, FC, FormEvent } from "react";
import styles from "./IconButton.module.scss";

interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
}

export const IconButton: FC<IconButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.buttonIcon}>{children}</span>
    </button>
  );
};
