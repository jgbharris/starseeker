import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-left"]}>
        <Link href="/">
          <Image
            src="/star-seeker-high-resolution-logo.png"
            height={40}
            width={40}
            alt="Dummy Image"
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles["navbar-center"]}>
        <ul className={styles["nav-links"]}>
          <li>
            <Link href="/gatesinfo">Gates</Link>
          </li>
          <li>
            <Link href="/journeycost">Journey cost</Link>
          </li>
          <li>
            <Link href="/cheapestroute">Cheapest route</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
