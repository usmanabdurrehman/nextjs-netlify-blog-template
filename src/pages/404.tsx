import Error from "next/error";
import Head from "next/head";

export default function NextError() {
	return (
		<>
			<Head>
				<meta name="robots" content="none" />
			</Head>{" "}
			<Error statusCode={404}/>
		</>
	);
}
