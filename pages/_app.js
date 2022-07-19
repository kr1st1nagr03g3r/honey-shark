// This was where justyn told me to put a nav on every page lol
// import "bootstrap/dist/css/bootstrap.min.css"
// import "@/styles/globals.css"

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp


import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"
import Head from "next/head"



function MyApp({ Component, pageProps }) {
  return (
    <>    
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Kristina Groeger - UIX Developer and Designer</title>
    </Head>

      <Component {...pageProps} />

    </>

  )

}

export default MyApp