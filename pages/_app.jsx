import '../styles/globals.css'
import '../styles/custom.css'
import '../styles/morph.scss'
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout> 
  )
}

export default MyApp

