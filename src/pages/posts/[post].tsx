import { GetStaticProps, GetStaticPaths } from "next";

import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import hydrate from "next-mdx-remote/hydrate";

import matter from "gray-matter";

import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from "date-fns";

import InstagramEmbed from "react-instagram-embed";
import YouTube from "react-youtube";
import { TwitterTweetEmbed } from "react-twitter-embed";

import {
  countPosts,
  listPostContent,
  PostContent,
  fetchPostContent,
} from "lib/posts";
import { listTags, TagContent } from "lib/tags";

import { Layout } from "Layouts";

import classes from "styles/postpage.module.css";

import Link from "next/link";

import { PostCard, PostLayout } from "components";

export type Props = {
  posts: object[];
  title: string;
  dateString: string;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  source: MdxRemote.Source;
  blogImage: string;
};

const components = { InstagramEmbed, YouTube, TwitterTweetEmbed };
const slugToPostContent = ((postContents) => {
  let hash = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPostContent());

export default function Post(props: Props) {
  const {
    title,
    dateString,
    slug,
    tags,
    author,
    description = "",
    source,
    blogImage,
    posts,
  } = props;

  const content = hydrate(source, { components });
  return (
    <Layout>
      <div className={classes.wrapper}>
        <PostLayout
          title={title}
          date={parseISO(dateString)}
          slug={slug}
          tags={tags}
          author={author}
          description={description}
          blogImage={blogImage}
        >
          {content}
        </PostLayout>
        <div className={classes.sidebarWrapper}>
          <div className={classes.recentHeader}>Recent</div>
          <div className={classes.sidebarPosts}>
            {posts
              .filter((post) => post.slug !== slug)
              .map((post) => (
                <PostCard post={post} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map((it) => "/posts/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.post as string;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });
  const mdxSource = await renderToString(content, { components, scope: data });

  const posts = listPostContent(1, 3);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / 3),
  };
  return {
    props: {
      posts,
      tags,
      title: data.title,
      dateString: data.date,
      slug: data.slug,
      description: "",
      blogImage: data.blogImage ? data.blogImage : null,
      tags: data.tags,
      author: data.author,
      source: mdxSource,
    },
  };
};
