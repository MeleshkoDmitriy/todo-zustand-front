import { ChangeEvent, useEffect, useState } from "react";
import { useTodoStore } from "../../store/store";
import styles from "./Filters.module.scss";
import { useDebounce } from "../../hooks/useDebounce";

export const Filters = () => {
  const { filters, updateFilters } = useTodoStore();
  const [searchTitle, setSearchTitle] = useState(filters.title);
  const [searchCategory, setSearchCategory] = useState(filters.category);
  const [searchCompleted, setSearchCompleted] = useState(filters.completed);

  const debouncedTitle = useDebounce(searchTitle);
  const debouncedCategory = useDebounce(searchCategory);

  const handleClearFilters = () => {
    setSearchTitle("");
    setSearchCategory("");
    setSearchCompleted(null);
  }

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
    <section>
      <input
        type="text"
        placeholder="Search title..."
        value={searchTitle}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Search category..."
        value={searchCategory}
        onChange={handleCategoryChange}
      />
      <div>
        <button
          onClick={() => setSearchCompleted(null)}
          className={`${filters.completed === null ? styles.active : null}`}
        >
          All
        </button>
        <button
          onClick={() => setSearchCompleted(false)}
          className={`${filters.completed === false ? styles.active : null}`}
        >
          Active
        </button>
        <button
          onClick={() => setSearchCompleted(true)}
          className={`${filters.completed === true ? styles.active : null}`}
        >
          Done
        </button>
        <button
          onClick={handleClearFilters}
          // className={}
        >
          Clear
        </button>
      </div>
    </section>
  );
};
