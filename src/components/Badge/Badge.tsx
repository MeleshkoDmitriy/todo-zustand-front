import { FC } from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  counter: number;
}

export const Badge: FC<BadgeProps> = ({ counter }) => {
  return (
    <div className={styles.badge}>
      <span className={styles.badgeCounter}>{counter}</span>
    </div>
  );
};
