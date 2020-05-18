import React from 'react';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BackgroundImage from 'gatsby-background-image-es5';

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
	const planSectionImgFluid = data.allImageSharp.edges[0].node.fluid;
	const newsSectionImgFluid = data.allImageSharp.edges[1].node.fluid;
	const contactSectionImgFluid = data.allImageSharp.edges[2].node.fluid;

	return (
		<HomeLayout>
			<Section>
				<div className="py-12 flex flex-col sm:flex-row container mx-auto">
					<div className="sm:w-1/3 p-2 py-4 space-y-4 text-center sm:text-left flex flex-col justify-center">
						<Text.l2 className="font-bold">Featured</Text.l2>
						<Text.h2 className="font-bold">
							So much<br />coffee
						</Text.h2>
						<Text.l1 className="pt-1 font-extrabold uppercase">
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
					<Img
						className="w-full sm:w-2/3"
						style={{ height: '32rem' }}
						alt={'Coffee beans on background'}
						fluid={newsSectionImgFluid}
					/>
					<div className="absolute inset-0 sm:h-auto flex bg-gray-100 bg-opacity-50">
						{/* background */}
						<div className="p-3 sm:py-16 sm:h-auto h-full flex flex-col items-end justify-center container mx-auto">
							{/* box placement in background */}
							<div className="w-full sm:w-1/2 sm:h-auto space-y-4 bg-gray-100 text-left">
								{/* box-content */}

								<div className="px-6 sm:px-12 pt-6 sm:pt-12 flex justify-between">
									<Text.l2>News</Text.l2>
									<Text.l2 className="font-bold">18.05.2020</Text.l2>
								</div>

								<div className="flex items-center">
									<div className="w-6 sm:w-12 flex items-center justify-center">
										<Icon icon="long-arrow-alt-left" />
									</div>
									<div className="flex-grow">
										<Text.h2 className="w-full sm:w-3/4">Happy International Coffee Day!</Text.h2>
									</div>
									<div className="w-6 sm:w-12 flex items-center justify-center">
										<Icon icon="long-arrow-alt-right" />
									</div>
								</div>

								<div className="px-6 sm:px-12 flex flex-col">
									<Text.p1>
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
										eget Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
										ligula eget dolor. Aenean massa.
									</Text.p1>
								</div>

								<div className="px-6 sm:px-12 pb-6 sm:pb-12 flex flex-col">
									<Text.l1 className="pt-1 font-extrabold uppercase">
										Show more <FontAwesomeIcon icon="chevron-right" />
									</Text.l1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>

			<Section>
				<div className="py-12 flex flex-col sm:flex-row container mx-auto">
					<div className="sm:w-1/3 p-2 py-4 space-y-4 text-center sm:text-left flex flex-col">
						<Text.l2 className="font-bold">Reviews</Text.l2>
						<Text.h2 className="font-bold">
							The best<br /> clients
						</Text.h2>
						<div className="pt-1 space-x-2 flex justify-center sm:justify-start">
							<Button.RoundIcon>
								<Icon icon="long-arrow-alt-left" size="xs" />
							</Button.RoundIcon>
							<Button.RoundIcon>
								<Icon icon="long-arrow-alt-right" size="xs" />
							</Button.RoundIcon>
						</div>
					</div>
					<div className="sm:w-2/3">
						<div className="grid grid-cols-1 sm:grid-cols-3 h-full">
							<div className="p-6 flex flex-col justify-center items-center bg-gray-200">
								<img
									className="rounded-full w-12"
									src="https://avatars3.githubusercontent.com/u/12537973?s=460&u=a0d58e799f8b4dc9098f8144156ce34393d54a0f&v=4"
								/>
								<Text.h3>Albert M</Text.h3>
								<Text.p1>Where's my coffee?</Text.p1>
							</div>
						</div>
					</div>
				</div>
			</Section>

			<Section>
				<div className="relative">
					<Img style={{ height: '32rem' }} alt={'Top view of a desk'} fluid={planSectionImgFluid} />
					<div className="absolute inset-0">
						<div className="space-y-8 text-center bg-gray-300 bg-opacity-50 h-full flex flex-col items-center justify-center">
							<Text.l2 className="text-white font-bold">Subscribe</Text.l2>
							<div>
								<Text.h2 className="text-white">What goes best with a cup of coffee?</Text.h2>
								<Text.h1>
									<span className="underline">Another cup</span>.
								</Text.h1>
							</div>
							<Button.Outline>
								<Text.l1 className="text-white font-extrabold uppercase">Set a Coffee Plan</Text.l1>
							</Button.Outline>
						</div>
					</div>
				</div>
			</Section>

			<Section>
				<div className="relative">
					<Img
						className="absolute inset-0 w-full sm:w-3/4 sm:mt-0 sm:ml-0 sm:mb-0 sm:mr-auto hidden sm:block"
						style={{ height: '32rem', margin: '0 0 0 auto' }}
						alt={'Coffee beans on background'}
						fluid={contactSectionImgFluid}
					/>
					<div className="sm:absolute inset-0 bg-gray-100 bg-opacity-25">
						<div className="flex flex-col sm:flex-row justify-between items-center container mx-auto h-full">
							<div className="pl-2 py-4 sm:pr-8 space-y-4 bg-gray-100 sm:text-left w-full sm:w-auto flex flex-col">
								<Text.l2 className="font-bold text-gray-800">Contacts</Text.l2>
								<Text.h2 className="font-bold pb-2 sm:w-2/3">Let's get acquainted</Text.h2>
								<div className="leading-snug leading-loose">
									<Text.l1 className="font-bold">LinkedIn</Text.l1>
									<Text.l2 className="text-gray-800 font-semibold">linkedin.com</Text.l2>
								</div>
								<div className="leading-snug leading-loose">
									<Text.l1 className="font-bold">Github</Text.l1>
									<Text.l2 className="text-gray-800 font-bold">github.com</Text.l2>
								</div>
								<div className="leading-snug leading-loose">
									<Text.l1 className="font-bold">Email</Text.l1>
									<Text.l2 className="text-gray-800 font-bold">email.com</Text.l2>
								</div>
							</div>

							<div className="py-4 sm:py-12 px-2 sm:px-8 space-y-4 sm:text-left w-full sm:w-auto flex flex-col bg-gray-100">
								<Text.h3 className="font-bold uppercase">Contact us</Text.h3>
								<input
									id="contactus-name"
									className="appearance-none bg-gray-100 border-b-2 p-2 text-sm font-bold"
									placeholder="Name"
								/>
								<input
									id="contactus-phone"
									className="appearance-none bg-gray-100 border-b-2 p-2 text-sm font-bold"
									placeholder="Phone"
								/>
								<textarea
									id="contactus-message"
									rows="3"
									className="form-textarea appearance-none bg-gray-100 border-b-2 p-2 text-sm font-bold"
									placeholder="Message"
								/>
								<div className="pt-2">
									<button type="button">
										<div className="flex justify-between">
											<Text.l1 className="flex-grow p-2 px-8 border-2 border-gray-900 uppercase font-bold">
												Send Message
											</Text.l1>
											<div className="py-2 px-4 border-2 border-l-0 border-gray-900 flex justify-center items-center">
												<FontAwesomeIcon icon="chevron-right" size="xs" />
											</div>
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>

			<Masthead1 />
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
		allImageSharp(
			filter: { fluid: { src: { regex: "/coffee-with-sunrise.jpg|coffee-desktop.jpg|contact-us.jpg/" } } }
		) {
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
