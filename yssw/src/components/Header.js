import Head from "next/head";

export default function Headers(props){
    return (
        <Head>
            <title>{props.title}</title>
        </Head>
    );
}