import styles from "./Checkbox.module.scss";
import { ChangeEvent, ComponentPropsWithoutRef, FC } from "react";
import { MdOutlineDone } from "react-icons/md";

interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
  checked: boolean;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  placeholder,
  onChange,
}) => {

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={checked}
        placeholder={placeholder}
        onChange={onChange}
      />
      {checked && <MdOutlineDone className={styles.checkboxIcon} />}
    </label>
  );
};
