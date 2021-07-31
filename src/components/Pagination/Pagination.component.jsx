import { generatePagination } from "lib/pagination";
import Link from "next/link";

import styles from './Pagination.module.css'

export default function Pagination({ current, pages, link }) {
  const pagination = generatePagination(current, pages);
  return (
    <ul className={styles.list}>
      {pagination.map((it, i) => (
        <li key={i} className={styles.listItem}>
          {it.excerpt ? (
            "..."
          ) : (
            <Link href={link.href(it.page)} as={link.as(it.page)}>
              <a className={it.page === current ? "active" : null}>{it.page}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
