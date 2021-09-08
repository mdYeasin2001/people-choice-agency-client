import Head from 'next/head'
import Features from '../components/home/features/Features'
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< HEAD
      <Header/>
=======
      <Header />
      {/* Banner */}
>>>>>>> 5fb68bef7d09128b86af151c609b263e27ddcd54
      <Services />
      <WhyOurAgency />
      <Features />
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
