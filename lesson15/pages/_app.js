import '@/styles/globals.css'
import Header from "../components/Header"
import Head from 'next/head'
import { MoralisProvider } from 'react-moralis'
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoralisProvider appId ='001' serverUrl='http://demoparseservermigration-env.eba-tef33zcq.us-east-1.elasticbeanstalk.com/server'>
        <Header/>
        <Component {...pageProps} />
      </MoralisProvider>
    </div>
  )
}