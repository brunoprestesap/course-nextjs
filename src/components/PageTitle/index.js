import Head from "next/head"

export default function PageTitle({ children, ...props }) {
    return (
        <Head>
            <title>
                {children}
            </title>
        </Head>
    )
}