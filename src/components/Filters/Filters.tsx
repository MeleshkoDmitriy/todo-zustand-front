import { ChangeEvent, useEffect, useState } from "react";
import { useTodoStore } from "../../store/store";
import styles from "./Filters.module.scss";
import { useDebounce } from "../../hooks/useDebounce";
import { Input } from "../Input/Input";
import { Tab } from "../Tab/Tab";

export const Filters = () => {
  const { filters, updateFilters, clearFilters } = useTodoStore();
  const [searchTitle, setSearchTitle] = useState(filters.title);
  const [searchCategory, setSearchCategory] = useState(filters.category);
  const [searchCompleted, setSearchCompleted] = useState(filters.completed);

  const debouncedTitle = useDebounce(searchTitle);
  const debouncedCategory = useDebounce(searchCategory);

  const handleClearFilters = () => {
    clearFilters();
    setSearchTitle("");
    setSearchCategory("");
  };

  useEffect(() => {
    updateFilters({
      title: debouncedTitle,
      category: debouncedCategory,
      completed: searchCompleted,
    });
  }, [debouncedTitle, debouncedCategory, searchCompleted, updateFilters]);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchCategory(e.target.value);
  };

  return (
    <section className={styles.filters}>
      <h3 className={styles.filtersTitle}>Filters</h3>
      <Input
        type="text"
        placeholder="Search title..."
        value={searchTitle}
        onChange={handleTitleChange}
      />
      <Input
        type="text"
        placeholder="Search category..."
        value={searchCategory}
        onChange={handleCategoryChange}
      />
      <div className={styles.filtersTabs}>
        <Tab
          onClick={() => setSearchCompleted(null)}
          active={filters.completed === null ? true : false}
        >
          All
        </Tab>
        <Tab
          onClick={() => setSearchCompleted(false)}
          active={filters.completed === false ? true : false}
        >
          Active
        </Tab>
        <Tab
          onClick={() => setSearchCompleted(true)}
          active={filters.completed === true ? true : false}
        >
          Done
        </Tab>
        <Tab onClick={handleClearFilters}>Clear</Tab>
      </div>
    </section>
  );
};
