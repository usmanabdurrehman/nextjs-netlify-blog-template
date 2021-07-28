import { GetStaticProps } from "next";
import BasicMeta from "components/meta/BasicMeta";
import OpenGraphMeta from "components/meta/OpenGraphMeta";
import TwitterCardMeta from "components/meta/TwitterCardMeta";
import PostList from "components/PostList";
import config from "lib/config";
import { countPosts, listPostContent, PostContent } from "lib/posts";
import { listTags, TagContent } from "lib/tags";
import Head from "next/head";

import Link from "next/link";

import {Layout} from "Layouts";

import classes from "styles/indexpage.module.css";
import { Container, PostCard } from "components";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ posts, tags, pagination }: Props) {
  const url = "/";
  const title = "Home";
  let mainPost = posts[0];
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      {/*<PostList posts={posts} tags={tags} pagination={pagination} />*/}
      <div className={classes.wrapper}>
        <div>
          <PostCard post={mainPost} bigHeader className={classes.mainPost}/>
          <div className={classes.posts}>
            {posts?.length>=2 && posts.slice(1, 3).map((post) => <PostCard post={post}/>)}
          </div>
        </div>
        <div className={classes.sidebarWrapper}>
          <div className={classes.recentHeader}>Recent</div>
          <div className={classes.sidebarPosts}>
            {posts?.length>=4 && posts.slice(3).map((post) => <PostCard post={post}/>)}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, 10);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
