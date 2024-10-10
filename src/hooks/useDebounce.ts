import { useEffect, useState } from "react"

export const useDebounce = (value: string, delay: number = 200): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay])

  return debouncedValue;
}