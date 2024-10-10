import { ComponentPropsWithoutRef, FC, FormEvent } from 'react';
import styles from './Button.module.scss'


interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: string;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      { children }
    </button>
  );
};
