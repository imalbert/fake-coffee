import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import HomeLayout from "../components/layout/home-layout"
import Card from "../components/card/card"
import Section from "../components/section"
// import SEO from "../components/seo"
import Masthead1 from "../components/sections/masthead-1"
import Masthead2 from "../components/sections/masthead-2"
import ProductCard from "../components/card/product-card"
import Hyperlink from "../components/hyperlink"

const IndexPage = () => (
  <HomeLayout>
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
          <Hyperlink
            className="text-xs italic"
            href="https://www.efsa.europa.eu/en/efsajournal/pub/2054"
          >
            European Food Safety Authority (EFSA)
          </Hyperlink>
        </div>

        <div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
          <p className="font-sans text-lg">
            Lifelong coffee/caffeine consumption has been associated with
            prevention of cognitive decline, improved mood, and limit
            depression.
          </p>
          <Hyperlink
            href="https://www.ncbi.nlm.nih.gov/pubmed/26677204"
            className="text-xs italic"
          >
            National Center for Biotechnology Information (NCBI)
          </Hyperlink>
        </div>
        <div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
          <p className="font-sans text-lg">
            Learn more about facts and health benefits of coffee at the
            Institute for Scientific Information on Coffee (ISIC) website
          </p>
          <Hyperlink
            href="https://www.coffeeandhealth.org/about-us/"
            className="text-xs italic"
          >
            Institute for Scientific Information on Coffee (ISIC)
          </Hyperlink>
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

        <Card noborder>
          <div className="flex space-x-2 items-center p-4 pb-2">
            <div className="w-6 h-6 rounded-full bg-secondary" />
            <span className="font-bold text-base">Albert M.</span>
            <span className="text-primary">
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
            </span>
          </div>
          <div className="space-x-2 p-4 pt-0">
            <p className="text-base">
              Because of the lockdown caused by the pandemic, it's been 60 days
              since I drank my last cup of coffee. What is life?
            </p>
            <p className="text-right text-sm">May 2020</p>
          </div>
        </Card>
      </div>
    </Section>

    <Section>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter">Best Sellers</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-1 lg:gap-4">
          <ProductCard
            title="Planalto"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil."
            img="light"
            price="$0.00"
          />
          <ProductCard
            title="Fruit and Nut Espresso"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil."
            price="$0.00"
          />
          <ProductCard
            title="Bourbon Cream Espresso"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil."
            img="light"
            price="$0.00"
          />
        </div>
      </div>
    </Section>

    <Section>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter">Get The Kit</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-1 lg:gap-4">
          <ProductCard
            title="Discovery Starter Pack"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil."
            price="$0.00"
          />
          <ProductCard
            title="Aeropress"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil."
            img="light"
            price="$0.00"
          />
          <ProductCard
            title="Wilfa Grinder"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil."
            price="$0.00"
          />
        </div>
      </div>
    </Section>
    <Masthead2 />
  </HomeLayout>
)

export default IndexPage
