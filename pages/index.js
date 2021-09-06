import Head from 'next/head'
import Portfolio from '../components/home/Portfolio'
import Services from '../components/services/Services'

export default function Home() {

  return (
    <div>
      <Head>
        <title>People choice agency client</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Services />
      <Portfolio />
    </div>
  )
}
