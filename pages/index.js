import Head from "next/head"
import Header from "../components/Header"

export default function Home() {
    return (
        <div>
            <Head>
                <title>WinRaffle</title>
                <meta name="description" content="A smart lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
           <Header />
        </div>
    )
}
