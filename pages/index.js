import Head from 'next/head'
import Features from '../components/home/features/Features'
import Header from '../components/home/Header/Header'
import Pricing from '../components/home/pricing/Pricing'
import WhyOurAgency from '../components/home/whyOurAgency/WhyOurAgency'
import Portfolio from '../components/home/Portfolio'
import Services from '../components/home/services/Services'
import OurExpertise from '../components/home/OurExpertise/OurExpertise'
import SponsorBrand from '../components/home/SponsorBrand'
import Reviews from '../components/home/Review/Reviews'
import Blogs from '../components/home/blog/blogs'
import NewsLetterSubscribe from '../components/home/newsletterSubscribe/NewsletterSubscribe'
import ContactSection from '../components/home/contact/contactSection'

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
      <Features />
      <Portfolio />
      <NewsLetterSubscribe />
      {/* <Blogs /> */}
      <OurExpertise />
      <Pricing />
      <Reviews />
      <SponsorBrand />
      <ContactSection />
    </div>
  )
}
