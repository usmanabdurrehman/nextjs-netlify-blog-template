import Link from "next/link";
import { TagContent } from "lib/tags";

import styles from './TagButton.module.css'

export default function TagButton({ tag }) {
  return (
    <>
      <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
        <a className={styles.link}>{`#${tag.name}`}</a>
      </Link>
    </>
  );
}
