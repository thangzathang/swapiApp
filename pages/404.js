import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  // Redirect the user back
  useEffect(() => {
    setTimeout(() => {
      // Redirects to Home Page
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooops </h1>
      <h2>This page you are looking for in the archives cannot be found...</h2>
      <h3>
        <Link href="/">
          <a className={styles.btn}>Return Home</a>
        </Link>
      </h3>
    </div>
  );
};

export default NotFound;
