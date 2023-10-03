import React from "react"
import Link from "../src/components/Link"
import PageTitle from "../src/components/PageTitle"

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then((resposta) => {
            return resposta.json()
        })
        .then((res) => {
            return res
        })

    return {
        props: {
            faq
        },
    }
}

export default function FAQPage({ faq }) {

    return (
        <div>
            <PageTitle>
                FAQ - Alura Cases Campanha
            </PageTitle>
            <h1>Alura Cases - Página de perguntas</h1>
            <Link href="/" alt="Ir para a página Home">
                Ir para a página Home
            </Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}