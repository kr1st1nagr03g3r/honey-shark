import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"
import Nav from "../src/components/Nav"


function MyApp({ Component, pageProps }) {
  return (
  <> 
  <Nav />
  <Component {...pageProps} />
  </> 
  )
}

export default MyApp
