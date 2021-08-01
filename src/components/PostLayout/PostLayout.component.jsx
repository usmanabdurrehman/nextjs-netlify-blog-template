import React from "react";

import styles from "../../../public/styles/content.module.css";

import { BasicMeta, JsonLdMeta, OpenGraphMeta, TwitterCardMeta } from "../meta";

import { getAuthor } from "lib/authors";
import { getTag } from "lib/tags";

import classes from "./PostLayout.module.css";

import { TagButton, ShareList } from "components";

import { format, formatISO } from "date-fns";

export default function PostLayout({
  title,
  date,
  slug,
  author,
  tags,
  blogImage,
  description = "",
  children,
}) {
  const keywords = tags.map((it) => getTag(it).name);
  const authorName = getAuthor(author).name;
  return (
    <div className={classes.postLayout}>
      <BasicMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        description={description}
        image={blogImage}
      />
      <TwitterCardMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
        image={blogImage}
      />
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
      />
      <div className={classes.wrapper}>
        <article>
          <header>
            <h1 className={classes.header}>{title}</h1>
            <div className={classes.subheader}>
              <div className={classes.metadata}>
                <div>
                  <time dateTime={formatISO(date)}>
                    <span className={classes.meta}>
                      {format(date, "LLLL d, yyyy")}
                    </span>
                  </time>
                  <span className={classes.meta}>
                    , {getAuthor(author).name}
                  </span>
                </div>
              </div>
              <ShareList/>
            </div>
          </header>
          {blogImage && <img src={blogImage} className={classes.blogImage} />}
          <div className={styles.content}>{children}</div>
          <ul className={classes.tagList}>
            {tags.map((it, i) => (
              <li key={i}>
                <TagButton tag={getTag(it)} />
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
