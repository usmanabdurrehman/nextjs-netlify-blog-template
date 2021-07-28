import React from "react";
import classes from "./PostCard.module.css";

import Link from "next/link";

import { classNames } from "utils";

export default function PostCard({ post, bigHeader, className }) {
	return (
		<Link href={"/posts/" + post.slug}>
			<div
				className={classNames({
					[classes.post]: true,
					[className]: className,
				})}
			>
				<img src={post.blogImage} className={classes.postImage} />
				<div className={classes.postInfo}>
					{bigHeader ? <h3>{post.title}</h3> : <h4>{post.title}</h4>}
					<p>{post.date}</p>
				</div>
				<div className={classes.cardCategory}>News</div>
			</div>
		</Link>
	);
}
