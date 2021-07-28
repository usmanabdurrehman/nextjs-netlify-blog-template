import React,{useState,useEffect} from "react";
import styles from "./ShareList.module.css";

import { useRouter } from 'next/router';

import config from "lib/config";

import {
	FacebookShareButton,
	InstapaperShareButton,
	PinterestShareButton,
	RedditShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	FacebookIcon,
	TwitterIcon,
	PinterestIcon,
	TelegramIcon,
	WhatsappIcon,
	RedditIcon,
	InstapaperIcon,
} from "react-share";

export default function ShareList() {
	const { asPath } = useRouter()
	const URL = config.base_url + asPath

	return (
		<div className={styles.sharelist}>
			<FacebookShareButton url={URL}>
				<FacebookIcon size={32} round={true} />
			</FacebookShareButton>
			<RedditShareButton url={URL}>
				<RedditIcon size={32} round={true} />
			</RedditShareButton>
			<TwitterShareButton url={URL}>
				<TwitterIcon size={32} round={true} />
			</TwitterShareButton>
			<WhatsappShareButton url={URL}>
				<WhatsappIcon size={32} round={true} />
			</WhatsappShareButton>
		</div>
	);
}
