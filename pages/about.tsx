import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function AboutPage() {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <Link href="/">Home!</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/about.js</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(children:any) {
  return (
    <MainLayout>
      <DarkLayout>{children}</DarkLayout>
    </MainLayout>
  );
};
