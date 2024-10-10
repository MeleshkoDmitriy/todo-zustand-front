import { ComponentPropsWithoutRef, FC } from "react";
import styles from './Tab.module.scss'

interface TabsProps extends ComponentPropsWithoutRef<"button"> {
  children: string;
  onClick: () => void;
  active?: boolean | undefined;
}

export const Tab: FC<TabsProps> = ({ children, onClick, active }) => {
  const classNames = active ? `${styles.tab} ${styles.active}` : `${styles.tab}`

  return (
    <button
      className={classNames}
      onClick={onClick}
    >
      { children }
    </button>
  );
};