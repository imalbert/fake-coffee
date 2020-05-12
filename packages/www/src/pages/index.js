import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import Card from "../components/card"
import Section from "../components/section"
import BackgroundSection from "../components/background-section"
import SEO from "../components/seo"
import Masthead1 from "../components/sections/masthead-1"

const IndexPage = () => (
  <Layout>
    {/* <BackgroundSection>
      <div className="container mx-auto">
        <SEO title="Home" />
        <h1 className="font-serif text-5xl font-black tracking-tighter inline-block">
          Fake Coffee
        </h1>
        <FontAwesomeIcon
          icon="mug-hot"
          size="2x"
          className="w-auto h-8 inline-block"
        />
        <h1 className="font-serif text-5xl italic leading-3">Imagine</h1>
        <p className="mt-10 mb-6">
          Kick off your day with one of our best, made-up coffees.
          <br />
          Instant delivery for free!
          <br />
        </p>
        <button className="btn btn-primary mr-2">Browse coffees</button>
        <button className="btn btn-secondary">
          <Link to="/page-2/">Create a fake plan</Link>
        </button>
      </div>
    </BackgroundSection> */}

    <Masthead1 />

    <Section>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter">Why Coffee?</h1>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-12 sm:gap-6 sm:grid-cols-3 tracking-tighter">
        <div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
          <p className="font-sans text-lg">
            A typical cup of coffee that contains 75-100mg serving of caffeine
            leads to both increased <strong>attention</strong> and{" "}
            <strong>alertness</strong>.
          </p>
          <a
            className="text-xs italic"
            href="https://www.efsa.europa.eu/en/efsajournal/pub/2054"
            target="_blank"
          >
            European Food Safety Authority (EFSA)
          </a>
        </div>

        <div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
          <p className="font-sans text-lg">
            Lifelong coffee/caffeine consumption has been associated with
            prevention of cognitive decline, improved mood, and limit
            depression.
          </p>
          <a
            className="text-xs italic"
            href="https://www.ncbi.nlm.nih.gov/pubmed/26677204"
            target="_blank"
          >
            National Center for Biotechnology Information (NCBI)
          </a>
        </div>
        <div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
          <p className="font-sans text-lg">
            Learn more about facts and health benefits of coffee at the
            Institute for Scientific Information on Coffee (ISIC) website
          </p>
          <a
            className="text-xs italic"
            href="https://www.coffeeandhealth.org/about-us/"
            target="_blank"
          >
            Institute for Scientific Information on Coffee (ISIC)
          </a>
        </div>
      </div>
    </Section>

    <Section>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter">
          Why Choose Fake Coffee?
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-12 sm:gap-6 sm:grid-cols-3 tracking-tighter">
        <div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
          <h2 className="font-bold text-xl tracking-tighter">
            The limit is your imagination
          </h2>
          <p className="font-sans text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
        <div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
          <h2 className="font-bold text-xl tracking-tighter">It's Fake</h2>
          <p className="font-sans text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
        <div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
          <h2 className="font-bold text-xl tracking-tighter">But It's Free</h2>
          <p className="font-sans text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
      </div>
    </Section>

    <Section>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter">Customize</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 tracking-tighter">
        <div className="flex flex-col space-y-4">
          <span className="text-3xl tracking-tight flex items-center space-x-2">
            <FontAwesomeIcon icon="coffee" size="xs" />
            <h2 className="font-bold text-xl tracking-tighter">
              Pick Your Coffee
            </h2>
          </span>
          <p>How you make it, how you like it. It's all in your hands.</p>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="text-3xl tracking-tight flex items-center space-x-2">
            <FontAwesomeIcon icon="clock" size="xs" />
            <h2 className="font-bold text-xl tracking-tighter">
              Choose a Frequency
            </h2>
          </span>
          <p>Get coffee every day, week, month... any frequency at all!</p>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="text-3xl tracking-tight flex items-center space-x-2">
            <FontAwesomeIcon icon="paper-plane" size="xs" />
            <h2 className="font-bold text-xl tracking-tighter">
              Instant Delivery
            </h2>
          </span>
          <p>Place your order anytime. Get your coffee immediately.</p>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="text-3xl tracking-tight flex items-center space-x-2">
            <FontAwesomeIcon icon="mug-hot" size="xs" />
            <h2 className="font-bold text-xl tracking-tighter">
              Endless Flexibility
            </h2>
          </span>
          <p>Change of plan? Change your plan.</p>
        </div>
      </div>
      <div className="container mx-auto">
        <button className="btn btn-secondary">Create my fake plan</button>
      </div>
    </Section>

    <Section>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter">
          Our Coffee is Just... Free!
        </h1>
      </div>
      <div className="container mx-auto space-y-4">
        <h2 className="text-xl tracking-tighter">
          And our customers know it. Just check out what they’ve been saying…
        </h2>

        <div className="flex">
          <h3>Excellent</h3>
          <span className="flex-grow">
            <FontAwesomeIcon icon="star" size="xs" />
            <FontAwesomeIcon icon="star" size="xs" />
            <FontAwesomeIcon icon="star" size="xs" />
            <FontAwesomeIcon icon="star" size="xs" />
            <FontAwesomeIcon icon="star" size="xs" />
          </span>
          <p>5 Average</p>
          <p>1 Review</p>
        </div>
        <div>
          Albert M
          <span>
            <FontAwesomeIcon icon="star" size="xs" />
            <FontAwesomeIcon icon="star" size="xs" />
            <FontAwesomeIcon icon="star" size="xs" />
            <FontAwesomeIcon icon="star" size="xs" />
            <FontAwesomeIcon icon="star" size="xs" />
          </span>
          <p>It's free!</p>
          <p>May 2020</p>
        </div>
      </div>
    </Section>

    <Section>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter">Best Sellers</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-1 lg:gap-2">
          <Card>
            <h2>Planalto</h2>
            <p>$0</p>
            <button className="btn btn-primary">Shop Now</button>
          </Card>
          <Card>
            <h2>Fruit and Nut Espresso</h2>
            <p>$0</p>
            <button className="btn btn-primary">Shop Now</button>
          </Card>
          <Card>
            <h2 className="bg">Bourbon Cream Espresso</h2>
            <p>$0</p>
            <button className="btn btn-primary">Shop Now</button>
          </Card>
        </div>
      </div>
    </Section>

    <Section>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter">Get The Kit</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-1 lg:gap-2">
          <Card>
            <h2>Discovery Starter Pack</h2>
            <p>$0</p>
            <button className="btn btn-primary">Shop Now</button>
          </Card>
          <Card>
            <h2>Aeropress</h2>
            <p>$0</p>
            <button className="btn btn-primary">Shop Now</button>
          </Card>
          <Card>
            <h2>Wilfa Grinder</h2>
            <p>$0</p>
            <button className="btn btn-primary">Shop Now</button>
          </Card>
        </div>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
