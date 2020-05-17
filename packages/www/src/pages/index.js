import React from 'react';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HomeLayout from '../components/layout/home-layout';
import Card from '../components/card/card';
import Section from '../components/sections/section';
// import SEO from "../components/seo"
import Masthead1 from '../components/sections/masthead-1';
import Masthead2 from '../components/sections/masthead-2';
import CoffeeShowcase from '../components/sections/coffee-showcase';
import Icon from '../components/icon/icon';
import Hyperlink from '../components/hyperlink';

import Text from '../components/text';
import Button from '../components/button';
// import CoffeeImage from '../components/image/coffee-image';

const IndexPage = ({ data }) => {
	const coffees = data.allMarkdownRemark.edges.map(({ node }) => ({
		...node.frontmatter,
		slug: node.fields.slug
	}));
	const newsSectionImgFluid = data.allImageSharp.edges[0].node.fluid;
	const planSectionImgFluid = data.allImageSharp.edges[1].node.fluid;

	return (
		<HomeLayout>
			<Section>
				<div className="flex flex-col sm:flex-row container mx-auto">
					<div className="sm:w-1/3 space-y-3 flex flex-col justify-center">
						<Text.l2>Featured</Text.l2>
						<Text.h2 className="font-bold">Coffee</Text.h2>
						<Text.l1 className="pt-1">
							Full catalog <FontAwesomeIcon icon="chevron-right" />
						</Text.l1>
					</div>
					<div className="sm:w-2/3">
						<CoffeeShowcase coffees={coffees} />
					</div>
				</div>
			</Section>

			<Section>
				<div className="relative">
					<Img className="h-64" alt={'Coffee beans on background'} fluid={planSectionImgFluid} />
					<div className="absolute inset-0">
						<div className="text-white flex justify-center h-full">
							<div className="hidden sm:flex" />
							<div className="space-y-3 w-full sm:w-1/2 flex flex-col items-center justify-center">
								<Text.l2>Subscribe</Text.l2>
								<p>
									<Text.h2>What goes best with a cup of coffee?</Text.h2>
									<Text.h1>Another cup.</Text.h1>
								</p>
								<Button.Outline>
									<Text.l1>Set a Coffee Plan</Text.l1>
								</Button.Outline>
							</div>
							<div className="hidden sm:flex" />
						</div>
					</div>
				</div>
			</Section>

			{/* <Section>
				<div className="container mx-auto">
					<div className="">
						<figure className="">
							<Img objectFit="contain" fluid={newsSectionImgFluid} alt="I need Coffee" />
						</figure>
					</div>
				</div>
			</Section> */}

			<Section>
				<div className="container mx-auto">
					<h1 className="text-3xl font-bold tracking-tighter">Why Coffee?</h1>
				</div>

				<div className="container mx-auto grid grid-cols-1 gap-12 sm:gap-6 sm:grid-cols-3 tracking-tighter">
					<div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
						<p className="font-sans text-lg">
							A typical cup of coffee that contains 75-100mg serving of caffeine leads to both increased{' '}
							<strong>attention</strong> and <strong>alertness</strong>.
						</p>
						<Hyperlink className="text-xs italic" href="https://www.efsa.europa.eu/en/efsajournal/pub/2054">
							European Food Safety Authority (EFSA)
						</Hyperlink>
					</div>

					<div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
						<p className="font-sans text-lg">
							Lifelong coffee/caffeine consumption has been associated with prevention of cognitive
							decline, improved mood, and limit depression.
						</p>
						<Hyperlink href="https://www.ncbi.nlm.nih.gov/pubmed/26677204" className="text-xs italic">
							National Center for Biotechnology Information (NCBI)
						</Hyperlink>
					</div>
					<div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
						<p className="font-sans text-lg">
							Learn more about facts and health benefits of coffee at the Institute for Scientific
							Information on Coffee (ISIC) website
						</p>
						<Hyperlink href="https://www.coffeeandhealth.org/about-us/" className="text-xs italic">
							Institute for Scientific Information on Coffee (ISIC)
						</Hyperlink>
					</div>
				</div>
			</Section>

			<Section>
				<div className="container mx-auto">
					<h1 className="text-3xl font-bold tracking-tighter">Why Choose Fake Coffee?</h1>
				</div>
				<div className="container mx-auto grid grid-cols-1 gap-12 sm:gap-6 sm:grid-cols-3 tracking-tighter">
					<div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
						<h2 className="font-bold text-xl tracking-tighter">The limit is your imagination</h2>
						<p className="font-sans text-lg">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
							Aenean massa.
						</p>
					</div>
					<div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
						<h2 className="font-bold text-xl tracking-tighter">It's Fake</h2>
						<p className="font-sans text-lg">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
							Aenean massa.
						</p>
					</div>
					<div className="flex text-center items-center justify-center flex-col h-64 space-x-1 space-y-2">
						<h2 className="font-bold text-xl tracking-tighter">But It's Free</h2>
						<p className="font-sans text-lg">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
							Aenean massa.
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
							<h2 className="font-bold text-xl tracking-tighter">Pick Your Coffee</h2>
						</span>
						<p>How you make it, how you like it. It's all in your hands.</p>
					</div>
					<div className="flex flex-col space-y-4">
						<span className="text-3xl tracking-tight flex items-center space-x-2">
							<FontAwesomeIcon icon="clock" size="xs" />
							<h2 className="font-bold text-xl tracking-tighter">Choose a Frequency</h2>
						</span>
						<p>Get coffee every day, week, month... any frequency at all!</p>
					</div>
					<div className="flex flex-col space-y-4">
						<span className="text-3xl tracking-tight flex items-center space-x-2">
							<FontAwesomeIcon icon="paper-plane" size="xs" />
							<h2 className="font-bold text-xl tracking-tighter">Instant Delivery</h2>
						</span>
						<p>Place your order anytime. Get your coffee immediately.</p>
					</div>
					<div className="flex flex-col space-y-4">
						<span className="text-3xl tracking-tight flex items-center space-x-2">
							<FontAwesomeIcon icon="mug-hot" size="xs" />
							<h2 className="font-bold text-xl tracking-tighter">Endless Flexibility</h2>
						</span>
						<p>Change of plan? Change your plan.</p>
					</div>
				</div>
				<div className="container mx-auto">
					<button className="btn btn-gray-800">Create my fake plan</button>
				</div>
			</Section>

			<Section>
				<div className="container mx-auto">
					<h1 className="text-3xl font-bold tracking-tighter">Our Coffee is Just... Free!</h1>
				</div>
				<div className="container mx-auto space-y-4">
					<h2 className="text-xl tracking-tighter">
						And our customers know it. Just check out what they’ve been saying…
					</h2>

					<Card noborder>
						<div className="flex space-x-2 items-center p-4 pb-2">
							<div className="w-6 h-6 rounded-full bg-gray-800" />
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
								Because of the lockdown caused by the pandemic, it's been 60 days since I drank my last
								cup of coffee. What is life?
							</p>
							<p className="text-right text-sm">May 2020</p>
						</div>
					</Card>
				</div>
			</Section>

			<Masthead1 />
			<Masthead2 />
		</HomeLayout>
	);
};

export const query = graphql`
	query CoffeeShowcase {
		allMarkdownRemark(limit: 3) {
			edges {
				node {
					frontmatter {
						title
						price
						img {
							childImageSharp {
								fluid(maxWidth: 400) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					fields {
						slug
					}
				}
			}
		}
		allImageSharp(filter: { fluid: { src: { regex: "/coffee-bean-1.png|coffee-desktop.jpg/" } } }) {
			edges {
				node {
					fluid(srcSetBreakpoints: [400, 600, 800, 1200, 1600]) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`;

export default IndexPage;
