import '../styles/global.css';

import { ChallengesContext } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesContext.Provider value={{ level:1}}>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
  )
}

export default MyApp
