import { create } from "zustand";
import { TFilters, TTodo } from "../types/types";
import axios from "axios";
import { BASE_URL } from "../api/api";
import qs from "qs";

interface ITodoStore {
  isLoading: boolean;
  todos: TTodo[];
  filters: TFilters;
  clearFilters: () => void;
  updateFilters: (filters: TFilters) => void;
  selectCategory: (category: string) => void;
  addTodo: (title: string, category: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (todo: TTodo) => void;
  toggleTodo: (id: number) => void;
  fetchTodos: () => Promise<void>;
}

export const useTodoStore = create<ITodoStore>((set, get) => ({
  isLoading: false,
  todos: [],
  filters: {
    title: "",
    category: "",
    completed: null,
  },
  addTodo: async (title: string, category: string) => {
    const newTodo = {
      id: Date.now(),
      title,
      category,
      completed: false,
    };

    try {
      set((state) => ({ ...state, isLoading: true }));
      await axios.post(BASE_URL, newTodo);
      set((state) => ({
        todos: [...state.todos, newTodo],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      set((state) => ({ ...state, isLoading: false }));
    }
  },
  deleteTodo: async (id: number) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      set((state) => ({ ...state, isLoading: false }));
    }
  },
  updateTodo: async (todo: TTodo) => {
    const updatedTodo = {
      id: todo.id,
      title: todo.title,
      category: todo.category,
      completed: todo.completed,
    };
    try {
      set((state) => ({ ...state, isLoading: true }));
      set((state) => ({
        todos: state.todos.map((todo) => {
          if (todo.id === todo.id) {
            return { ...todo, title: todo.title, category: todo.category };
          } else {
            return todo;
          }
        }),
      }));
      await axios.put(`${BASE_URL}/${todo.id}`, updatedTodo);
    } catch (error) {
      console.log(error);
    } finally {
      set((state) => ({ ...state, isLoading: false }));
    }
  },
  toggleTodo: async (id: number) => {
    try {
      set((state) => ({
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        }),
      }));
      await axios.patch(`${BASE_URL}/${id}`);
    } catch (error) {
      console.log(error);
    }
  },
  updateFilters: (filters: TFilters) => {
    set((state) => ({
      ...state,
      filters: {
        title: filters.title.trim(),
        category: filters.category.trim(),
        completed: filters.completed,
      },
    }));
  },
  selectCategory: (category: string) => {
    set((state) => ({
      ...state,
      filters: {
        title: state.filters.title,
        category: category.trim(),
        completed: state.filters.completed,
      },
    }));
  },
  clearFilters: () => {
    set((state) => ({
      ...state,
      filters: {
        title: "",
        category: "",
        completed: null,
      },
    }));
  },
  fetchTodos: async () => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      const { title, category, completed } = get().filters;
      const params = qs.stringify(
        {
          completed: completed !== null ? completed : undefined,
          title: title || undefined,
          category: category || undefined,
        },
        { skipNulls: true }
      );
      const url = params ? `${BASE_URL}?${params}` : BASE_URL;

      const res = await axios.get(url);
      set((state) => ({
        ...state,
        todos: res.data,
      }));
    } catch (error) {
      console.log(error);
      set((state) => ({ ...state, todos: [] }));
    } finally {
      set((state) => ({ ...state, isLoading: false }));
    }
  },
}));
