import { Body } from "../../organisms/Body/Body";
import { Header } from "../../organisms/Header/Header";
import styles from "./Top.module.scss";

export const Top = () => {
  return (
    <div className={styles.Top}>
      <Header />
      <Body />
    </div>
  );
};
