import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "lib/ga";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on("routeChangeComplete", handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return <Component {...pageProps} />;
}
