import '../styles/globals.scss'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
    return <Provider store = { store } > < Component {...pageProps }
    /></Provider >
}

if (typeof window !== 'undefined') {
    // expose store when run in Cypress
    if (window.Cypress) {
        window.store = store
    }
}
export default MyApp