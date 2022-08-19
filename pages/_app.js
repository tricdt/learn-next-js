import Layout from '../components/Layout'
import { DataProvider } from '../store/GlobalState'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
function MyApp({ Component, pageProps }) {
   return (
      <DataProvider>
         <Layout>
            <Component {...pageProps} />
         </Layout>
         <ToastContainer />
      </DataProvider>
   )
}

export default MyApp
