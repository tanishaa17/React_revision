import styles from "./App.module.css";
import Counter from "./Components/Counter";

export default function App() {
  return (
    <>
      <div className={styles.App}>
        <Counter />
      </div>
    </>
  );
}
