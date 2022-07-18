import Head from "next/head"
import { getHome } from "/util/api"
import Hero from "@/components/Hero"
import Nav from "@/components/Nav"

export default function Index({ homeInfo }) {
    return (
        <>
            <Head>  <title>Kristina Groeger - UIX Developer and Designer</title></Head>
            <Nav navImage={homeInfo.navImage} />
            <Hero heroTitle={homeInfo.title} heroSubtitle={homeInfo.heroSubtitle} heroImage={homeInfo.heroImage} />
            <h1>{homeInfo.heroSubtitle}</h1>
        </>
    )
}

export async function getStaticProps() {
    const homeInfo = await getHome()
    console.log(homeInfo)
    return {
        props: {
            homeInfo,
        }
    }
}
