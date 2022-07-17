import Head from "next/head"
import { getHome } from "../util/api"
import Hero from "../src/components/Hero"

export default function Index({ homeInfo }) {
    return (
        <>
            <Head>  <title>KG</title></Head>

            <Hero heroTitle={homeInfo.title} heroSubtitle={homeInfo.heroSubtitle} heroImage={homeInfo.heroImage} />
            {/* <p>{homeInfo.heroSubtitle}</p> */}
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
