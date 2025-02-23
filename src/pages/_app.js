import '@/styles/styles.scss'
import { StoreProvider } from '../stores/StoreContext'
import Navigation from '../components/Navigation'

function MyApp({ Component, pageProps }) {
    return (
        <StoreProvider>
            <Navigation />
            <Component {...pageProps} />
        </StoreProvider>
    )
}

export default MyApp
