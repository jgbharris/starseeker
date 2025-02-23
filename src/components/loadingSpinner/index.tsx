import { MoonLoader } from "react-spinners";
import styles from "./loadingspinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <MoonLoader size={100} color="#FFFFFF" />
    </div>
  );
};

export default LoadingSpinner;
