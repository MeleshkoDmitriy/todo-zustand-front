import styles from "./Loading.module.scss";
import { RiLoader5Fill } from "react-icons/ri";

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <RiLoader5Fill className={styles.loadingIcon} />
    </div>
  );
};
