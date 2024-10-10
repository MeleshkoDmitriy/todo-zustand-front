export type TTodo = {
  id: number,
  category: string,
  title: string,
  completed: boolean,
}

export type TFilters = {
  title: string;
  category: string;
  completed: boolean | null;
}