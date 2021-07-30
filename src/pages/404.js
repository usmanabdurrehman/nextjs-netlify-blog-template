import Error from "next/error";
import Head from "next/head";

export default function Error() {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex" />
			</Head>{" "}
			<Error />
		</>
	);
}
