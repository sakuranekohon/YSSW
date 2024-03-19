import Link from "next/link";
import styles from "../../public/styles/bar.module.css";
import Image from "next/image";

export default function Bar({ path }) {
    return (
        <nav className={styles.bar}>
            <Link href={path} className={styles.link}>Home</Link>
        </nav>
    );
}