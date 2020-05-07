import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import BackgroundSection from "../components/background-section"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <BackgroundSection>
      <div className="container mx-auto">
        <SEO title="Home" />
        <h1 className="font-serif text-5xl font-black tracking-tighter inline-block">
          Fake Coffee
        </h1>
        <FontAwesomeIcon icon='mug-hot' size="2x" className="w-auto h-8 inline-block" />
        <h1 className="font-serif text-5xl italic leading-3">Imagine</h1>
        <p className="mt-10 mb-6">
          Kick off your day with one of our best, made-up coffees.<br/>
          Instant delivery for free!<br/>
        </p>
        <button className="btn btn-primary mr-2">Browse Coffees</button>
        <button className="btn btn-secondary">
          <Link to="/page-2/">
            Create a plan
          </Link>
        </button>
      </div>
    </BackgroundSection>

    <section className="container mx-auto">
      <h1>Why Fake Coffee?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-1 lg:gap-2">
        <div className="bg-primary">
          We Buy Direct from 8+ Countries & 3 Continents
        </div>
        <div className="bg-primary-dark">
          Farmers Get 15-125% Above Fairtrade Rates
        </div>
        <div className="bg-primary">
          You Drink World-Class Coffee Scoring 82+/100
        </div>
      </div>
    </section>

    <section className="container mx-auto">
      <h1>Create A Fake Plan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-1 lg:gap-2">
        <div className="bg-primary">
          <FontAwesomeIcon icon='mug-hot' size="2x" />
          <h2>Pick Your Coffee</h2>
          <p>How you make it, how you like it, how much you want to spend. That’s all we need to know for your perfect coffee plan. It’s all in your hands.</p>
        </div>
        <div className="bg-primary-dark">
          <FontAwesomeIcon icon='mug-hot' size="2x" />
          <h2>Choose a Frequency</h2>
          <p>Tell us when to send coffee. Every day, week, month... any frequency at all! We’ll email 48 hours before deliveries, so you can push or pause orders.</p>
        </div>
        <div className="bg-primary">
          <FontAwesomeIcon icon='mug-hot' size="2x" />
          <h2>Get Free Delivery</h2>
          <p>Place your order before 1pm Monday-Friday for next-day delivery. And letterbox-friendly packaging means there’s no need to wait in.</p>
        </div>
        <div className="bg-primary-dark">
          <FontAwesomeIcon icon='mug-hot' size="2x" />
          <h2>Pick Your Coffee</h2>
          <p>Change of plan? Change your plan. Want a different coffee, grind size, or delivery frequency? Whatever it is, you can do it on your account page.</p>
        </div>
      </div>
      <button className="btn btn-secondary">Create my fake plan</button>
    </section>

    <section className="container mx-auto">
      <h1>Why Choose Fake Coffee?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-1 lg:gap-2">
        <div className="bg-primary">
          <h2>Variety</h2>
          <p>13 rotating coffees, 8+ origins, 5 grind sizes - and all 100% speciality grade.</p>
        </div>
        <div className="bg-primary-dark">
          <h2>Quality</h2>
          <p>Grown by experts, roasted by experts - and all freshly ground for your order.</p>
        </div>
        <div className="bg-primary">
          <h2>Ethics</h2>
          <p>Every farmer gets 25-125% OVER Fairtrade rates, plus training and investment.</p>
        </div>
      </div>
    </section>

    <section className="container mx-auto">
      <h1>Our Coffee is Just... Free!</h1>
      <p>And our customers know it. Just check out what they’ve been saying…</p>

      <div className="flex">
        <h3>Excellent</h3>
        <span className="flex-grow">
          <FontAwesomeIcon icon='star' size="xs" />
          <FontAwesomeIcon icon='star' size="xs" />
          <FontAwesomeIcon icon='star' size="xs" />
          <FontAwesomeIcon icon='star' size="xs" />
          <FontAwesomeIcon icon='star' size="xs" />
        </span>
        <p>5 Average</p>
        <p>1 Review</p>
      </div>
      <div>
        Albert M
        <span>
          <FontAwesomeIcon icon='star' size="xs" />
          <FontAwesomeIcon icon='star' size="xs" />
          <FontAwesomeIcon icon='star' size="xs" />
          <FontAwesomeIcon icon='star' size="xs" />
          <FontAwesomeIcon icon='star' size="xs" />
        </span>
        <p>It's free!</p>
        <p>May 2020</p>
      </div>
    </section>

    <section className="container mx-auto">
      <h1>Best Sellers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-1 lg:gap-2">
        <div className="bg-primary">
          <h2>Planalto</h2>
          <p>$0</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
        <div className="bg-primary-dark">
          <h2>Fruit and Nut Espresso</h2>
          <p>$0</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
        <div className="bg-primary">
          <h2>Bourbon Cream Espresso</h2>
          <p>$0</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </section>

    <section className="container mx-auto">
      <h1>Get The Kit</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-1 lg:gap-2">
        <div className="bg-primary">
          <h2>Discovery Starter Pack</h2>
          <p>$0</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
        <div className="bg-primary-dark">
          <h2>Aeropress</h2>
          <p>$0</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
        <div className="bg-primary">
          <h2>Wilfa Grinder</h2>
          <p>$0</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
