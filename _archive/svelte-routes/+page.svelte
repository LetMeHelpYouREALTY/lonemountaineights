<script>
	import Hero from '$lib/Hero.svelte';
	import TrustSignals from '$lib/components/TrustSignals.svelte';
	import OptimizedCTA from '$lib/components/OptimizedCTA.svelte';
	import FAQSection from '$lib/components/FAQSection.svelte';
	import { generateFAQSchema } from '$lib/schema.js';
	import { homeFAQs } from '$lib/faqs.js';
	</script>

<svelte:head>
	<title>Lone Mountain Heights Homes for Sale | Dr. Jan Duffy Expert | Las Vegas 89129</title>
	<meta name="description" content="Find your dream home in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy, your complete real estate partner, offers exclusive listings, market insights, and personalized service." />
	
	<!-- LocalBusiness Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "RealEstateAgent",
			"name": "Dr. Jan Duffy - Lone Mountain Heights Real Estate Expert",
			"description": "Expert real estate agent specializing in Lone Mountain Heights, Las Vegas 89129. 500+ transactions, Berkshire Hathaway HomeServices Nevada Properties team leader.",
			"url": "https://www.lonemountainheights.com",
			"telephone": "702-222-1964",
			"email": "jan@lonemountainheights.com",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Lone Mountain Heights",
				"addressLocality": "Las Vegas",
				"addressRegion": "NV",
				"postalCode": "89129",
				"addressCountry": "US"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": "36.1699",
				"longitude": "-115.2798"
			},
			"areaServed": {
				"@type": "City",
				"name": "Las Vegas",
				"containedInPlace": {
					"@type": "State",
					"name": "Nevada"
				}
			},
			"serviceType": "Real Estate Services",
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Real Estate Services",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Home Buying Services",
							"description": "Expert assistance with purchasing homes in Lone Mountain Heights"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Home Selling Services",
							"description": "Professional home selling and marketing services"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Home Valuation",
							"description": "Accurate home valuation and market analysis"
						}
					}
				]
			},
			"memberOf": {
				"@type": "Organization",
				"name": "Berkshire Hathaway HomeServices Nevada Properties",
				"url": "https://www.berkshirehathawayhomeservices.com"
			},
			"knowsAbout": [
				"Lone Mountain Heights Real Estate",
				"Las Vegas 89129 Properties",
				"Luxury Home Sales",
				"Market Analysis",
				"Home Valuation",
				"Real Estate Investment"
			],
			"aggregateRating": {
				"@type": "AggregateRating",
				"ratingValue": "5.0",
				"reviewCount": "47",
				"bestRating": "5",
				"worstRating": "1"
			},
			"openingHours": "Mo-Su 00:00-23:59",
			"priceRange": "$$$"
		}
	</script>

	<!-- Place Schema for Lone Mountain Heights -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Place",
			"name": "Lone Mountain Heights",
			"description": "Premier residential community in Las Vegas, Nevada featuring luxury homes, excellent schools, and mountain views.",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Las Vegas",
				"addressRegion": "NV",
				"postalCode": "89129",
				"addressCountry": "US"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": "36.1699",
				"longitude": "-115.2798"
			},
			"containedInPlace": {
				"@type": "City",
				"name": "Las Vegas"
			},
			"hasMap": "https://maps.google.com/?q=Lone+Mountain+Heights,+Las+Vegas,+NV+89129",
			"amenityFeature": [
				{
					"@type": "LocationFeatureSpecification",
					"name": "Golf Course",
					"value": "Canyon Gate Country Club"
				},
				{
					"@type": "LocationFeatureSpecification",
					"name": "Schools",
					"value": "William G. Geer Elementary, Sig Rogich Middle, Liberty High School"
				},
				{
					"@type": "LocationFeatureSpecification",
					"name": "Shopping",
					"value": "Summerlin Shopping Centers"
				}
			]
		}
	</script>

	<!-- Review Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Review",
			"itemReviewed": {
				"@type": "RealEstateAgent",
				"name": "Dr. Jan Duffy"
			},
			"reviewRating": {
				"@type": "Rating",
				"ratingValue": "5",
				"bestRating": "5"
			},
			"author": {
				"@type": "Person",
				"name": "Sarah M."
			},
			"reviewBody": "Dr. Jan Duffy made our home buying experience in Lone Mountain Heights absolutely seamless. Her knowledge of the area and attention to detail helped us find the perfect home. Highly recommend!",
			"datePublished": "2024-11-15"
		}
	</script>

	<!-- FAQ Schema - AEO positioning Dr. Jan Duffy as expert -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(homeFAQs))}
	</script>

	<!-- Breadcrumb Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Home",
					"item": "https://www.lonemountainheights.com"
				}
			]
		}
	</script>
</svelte:head>

<main>
	<Hero />
	<div class="main-content-container">
		<TrustSignals />
		
		<!-- Mid-Page CTA -->
		<section class="mid-cta">
			<div class="container">
				<h2>Ready to take your next step?</h2>
				<p>Buy or sell your home in Lone Mountain Heights with a trusted local expert.</p>
				<div class="mid-cta-buttons">
					<a href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx" class="btn btn-gold" target="_blank" rel="noopener noreferrer">View Current Homes</a>
					<a href="/valuation" class="btn btn-outline">Get Home Valuation</a>
				</div>
			</div>
		</section>
		
		<!-- Additional Services Section -->
		<section class="additional-services">
			<div class="container">
				<h2>Additional Services</h2>
				<p class="section-subtitle">We're passionate about helping our clients achieve their real estate goals with a full suite of professional services.</p>
				<div class="services-grid">
					<div class="service-card">
						<div class="service-icon">📸</div>
						<h3>Professional Photography & Videography</h3>
						<p>High-quality marketing materials that showcase your home's best features and attract serious buyers.</p>
					</div>
					<div class="service-card">
						<div class="service-icon">🏠</div>
						<h3>Open House & Virtual Tours</h3>
						<p>Expertly executed open houses and 3D virtual tours to maximize exposure and reach remote buyers.</p>
					</div>
					<div class="service-card">
						<div class="service-icon">✨</div>
						<h3>Staging Consultation</h3>
						<p>Proven staging strategies to help your home sell faster and for top dollar in the Lone Mountain Heights market.</p>
					</div>
					<div class="service-card">
						<div class="service-icon">📊</div>
						<h3>Data-Driven Market Analysis</h3>
						<p>Accurate pricing based on current comps, trends, and neighborhood-specific insights for Las Vegas 89129.</p>
					</div>
					<div class="service-card">
						<div class="service-icon">🤝</div>
						<h3>Expert Negotiation</h3>
						<p>Skilled representation to secure the best terms whether you're buying or selling in Lone Mountain Heights.</p>
					</div>
					<div class="service-card">
						<div class="service-icon">📱</div>
						<h3>24/7 Support & Communication</h3>
						<p>Responsive availability and clear communication throughout every step of your real estate journey.</p>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Featured Listings Section -->
		<section class="featured-listings">
			<div class="container">
				<h2>Current Lone Mountain Heights Listings</h2>
				<p>Browse our latest homes for sale in Lone Mountain Heights, Las Vegas 89129</p>
				<div class="realscout-listings-widget">
					<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF,TC" minPrice="500000" maxPrice="1000000"></realscout-office-listings>
				</div>
			</div>
		</section>
		
		<!-- Quick Access Section -->
		<section class="quick-access">
			<div class="container">
				<h2>Everything You Need to Know</h2>
				<div class="quick-links">
					<a href="/tools" class="quick-link">
						<div class="quick-link-icon">🧮</div>
						<h3>Real Estate Tools</h3>
						<p>Home value calculator, mortgage calculator, and home finder quiz</p>
					</a>
					<a href="/tools" class="quick-link">
						<div class="quick-link-icon">📋</div>
						<h3>Mortgage Helpers</h3>
						<p>Mortgage calculator, pre-approval guidance, and financing resources</p>
					</a>
					<a href="/market-intelligence" class="quick-link">
						<div class="quick-link-icon">📈</div>
						<h3>Investment Info</h3>
						<p>Market trends, ROI analysis, and investment property insights</p>
					</a>
					<a href="/neighborhoods" class="quick-link">
						<div class="quick-link-icon">🗺️</div>
						<h3>Neighborhood Guide</h3>
						<p>Micro-neighborhoods, amenities, schools, and lifestyle features</p>
					</a>
				</div>
			</div>
		</section>

		<!-- FAQ Section - AEO positioning Dr. Jan Duffy as expert -->
		<section class="faq-wrapper">
			<div class="container">
				<FAQSection faqs={homeFAQs} title="Lone Mountain Heights Real Estate FAQs" />
			</div>
		</section>

		<OptimizedCTA variant="primary" size="large" showPhone={true} showEmail={true} showText={true} showForm={true} />
	</div>
</main>

<style>
	main {
		width: 100%;
		min-height: 100vh;
	}
	
	.main-content-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		width: 100%;
		box-sizing: border-box;
	}

	/* Mid-Page CTA */
	.mid-cta {
		background: linear-gradient(135deg, var(--accent-color) 0%, var(--accent-light) 100%);
		padding: 3rem 2rem;
		margin: 2rem 0;
		border-radius: 12px;
		text-align: center;
	}
	
	.mid-cta h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.mid-cta p {
		font-size: 1.1rem;
		color: var(--heading-color);
		opacity: 0.9;
		margin: 0 0 2rem 0;
	}
	
	.mid-cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}
	
	.mid-cta .btn {
		padding: 1rem 2rem;
		border-radius: 8px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.3s ease;
		display: inline-block;
	}
	
	.mid-cta .btn-gold {
		background: var(--heading-color);
		color: var(--accent-light);
		border: 2px solid var(--heading-color);
	}
	
	.mid-cta .btn-gold:hover {
		background: var(--secondary-color);
		border-color: var(--secondary-color);
		transform: translateY(-2px);
	}
	
	.mid-cta .btn-outline {
		background: transparent;
		color: var(--heading-color);
		border: 2px solid var(--heading-color);
	}
	
	.mid-cta .btn-outline:hover {
		background: var(--heading-color);
		color: var(--accent-light);
		transform: translateY(-2px);
	}
	
	.faq-wrapper {
		padding: 2rem 0;
		background: #f8fafc;
	}
	
	/* Additional Services */
	.additional-services {
		background: white;
		padding: 4rem 0;
		margin: 2rem 0;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
	}
	
	.additional-services h2 {
		text-align: center;
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.additional-services .section-subtitle {
		text-align: center;
		font-size: 1.2rem;
		color: var(--text-light);
		max-width: 600px;
		margin: 0 auto 3rem;
		line-height: 1.6;
	}
	
	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}
	
	.service-card {
		background: var(--warm-cream);
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
		transition: all 0.3s ease;
		border: 1px solid rgba(0, 0, 0, 0.05);
	}
	
	.service-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
		border-color: var(--accent-color);
	}
	
	.service-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}
	
	.service-card h3 {
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--heading-color);
		margin: 0 0 0.75rem 0;
	}
	
	.service-card p {
		font-size: 0.95rem;
		color: var(--text-light);
		line-height: 1.5;
		margin: 0;
	}
	
	.quick-access {
		background: #F7F9FC;
		padding: 4rem 0;
		margin: 2rem 0;
		border-radius: 12px;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
	}

	.quick-access h2 {
		text-align: center;
		font-size: 2.5rem;
		font-weight: 700;
		color: #1A202C;
		margin: 0 0 3rem 0;
	}

	.quick-links {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.quick-link {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		text-decoration: none;
		color: inherit;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
		transition: all 0.3s ease;
		text-align: center;
	}

	.quick-link:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
		text-decoration: none;
	}

	.quick-link-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.quick-link h3 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #1A202C;
		margin: 0 0 1rem 0;
	}

	.quick-link p {
		color: #4A5568;
		margin: 0;
		line-height: 1.6;
	}

	/* Featured Listings Section */
	.featured-listings {
		background: #f8f9fa;
		padding: 4rem 0;
		margin: 2rem 0;
	}

	.featured-listings .container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.featured-listings h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a365d;
		text-align: center;
		margin: 0 0 1rem 0;
	}

	.featured-listings p {
		font-size: 1.2rem;
		color: #6c757d;
		text-align: center;
		margin: 0 0 2rem 0;
	}

	.realscout-listings-widget {
		width: 100%;
	}

	:global(realscout-office-listings) {
		--rs-listing-divider-color: rgb(101, 141, 172);
		width: 100%;
	}
	
	@media (max-width: 768px) {
		.main-content-container {
			padding: 0 1rem;
		}
		
		.mid-cta h2 {
			font-size: 1.5rem;
		}
		
		.mid-cta-buttons {
			flex-direction: column;
			align-items: center;
		}
		
		.additional-services {
			padding: 2rem 0;
		}
		
		.additional-services h2 {
			font-size: 2rem;
		}
		
		.services-grid {
			grid-template-columns: 1fr;
		}

		.quick-access {
			padding: 2rem 0;
			margin: 1rem 0;
		}

		.quick-access h2 {
			font-size: 2rem;
			margin-bottom: 2rem;
		}

		.quick-links {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.quick-link {
			padding: 1.5rem;
		}
	}
</style>
