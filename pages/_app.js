// This was where justyn told me to put a nav on every page lol
// import "bootstrap/dist/css/bootstrap.min.css"
// import "@/styles/globals.css"

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp


import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp