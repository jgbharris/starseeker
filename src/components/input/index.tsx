import { ChangeEvent, FC } from "react";
import styles from "./input.module.css";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <div className={styles["input-wrapper"]}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={styles.input}
      />
      {error && <p className="error">Input filed must not be empty!</p>}
    </div>
  );
};

export default Input;
