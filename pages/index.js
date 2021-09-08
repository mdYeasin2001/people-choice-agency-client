import Head from 'next/head'
import Header from '../components/home/Header/Header'
import Pricing from '../components/home/pricing/Pricing'
import WhyOurAgency from '../components/home/whyOurAgency/WhyOurAgency'
import Portfolio from '../components/home/Portfolio'
import Services from '../components/services/Services'
import OurExpertise from '../components/home/OurExpertise/OurExpertise'
import SponsorBrand from '../components/home/SponsorBrand'
import Reviews from '../components/home/Review/Reviews'

export default function Home() {

  return (
    <div>
      <Head>
        <title>People choice agency client</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      {/* Banner */}
      <Services />
      <WhyOurAgency />
      {/* Feature */}
      <Portfolio />
      {/* NewsLetter */}
      {/* Our Expertise */}
      <OurExpertise />
      <Pricing />
      {/* ClientReview */}
      <Reviews/>
      <SponsorBrand />
      {/* GetInTouch */}

      {/* Navbar & Footer will goes to _app Layout page */}
    </div>
  )
}
