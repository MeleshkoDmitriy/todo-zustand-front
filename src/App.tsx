import styles from "./App.module.scss";
import { Filters } from "./components/Filters/Filters";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";

export const App = () => {
  return (
    <div className={styles.app}>
      <section className={styles.appContainer}>
        <Form />
        <Filters />
        <List />
      </section>
    </div>
  );
};
