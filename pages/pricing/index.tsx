import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";
export default function Pricing() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        Welcome to <Link href="/">Pricing!</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/pricing/pricing.js</code>
      </p>
    </MainLayout>
  );
}
