<script>
	import { generateFAQSchema } from '$lib/schema.js';
	import MortgageCalculator from '$lib/components/MortgageCalculator.svelte';
	import HomeFinderQuiz from '$lib/components/HomeFinderQuiz.svelte';
	import OptimizedCTA from '$lib/components/OptimizedCTA.svelte';
	import FAQSection from '$lib/components/FAQSection.svelte';
	import { toolsFAQs } from '$lib/faqs.js';
</script>

<svelte:head>
	<title>Real Estate Tools & Calculators | Lone Mountain Heights | Dr. Jan Duffy</title>
	<meta name="description" content="Free real estate tools: home value calculator, mortgage calculator, and home finder quiz. Get instant estimates and find your perfect home in Lone Mountain Heights." />
	
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
				},
				{
					"@type": "ListItem",
					"position": 2,
					"name": "Tools",
					"item": "https://www.lonemountainheights.com/tools"
				}
			]
		}
	</script>

	<!-- FAQ Schema - AEO -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(toolsFAQs))}
	</script>
</svelte:head>

<main>
	<div class="hero-section">
		<div class="container">
			<h1>Real Estate Tools & Calculators</h1>
			<p class="hero-subtitle">Get instant estimates and find your perfect home with our free real estate tools</p>
		</div>
	</div>

	<div class="tools-container">
		<div class="container">
			<div class="tools-grid">
				<div class="tool-card">
					<h2>Home Value Calculator</h2>
					<p>Get an instant estimate of your home's current market value in Lone Mountain Heights</p>
					<div class="realscout-widget-container">
						<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
					</div>
				</div>

				<div class="tool-card">
					<h2>Mortgage Calculator</h2>
					<p>Calculate your monthly payments and explore different financing options</p>
					<MortgageCalculator />
				</div>

				<div class="tool-card">
					<h2>Find Your Perfect Home</h2>
					<p>Take our quiz to discover which Lone Mountain Heights neighborhood matches your lifestyle</p>
					<HomeFinderQuiz />
				</div>
			</div>

			<!-- Featured Listings Section -->
			<div class="featured-listings">
				<h2>Current Lone Mountain Heights Listings</h2>
				<p>Browse our latest homes for sale while using our tools</p>
				<div class="realscout-listings-widget">
					<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF,TC" minPrice="300000" maxPrice="600000"></realscout-office-listings>
				</div>
			</div>

			<FAQSection faqs={toolsFAQs} title="Real Estate Tools — FAQs" />

			<div class="cta-section">
				<OptimizedCTA variant="primary" size="large" showPhone={true} showEmail={true} showText={true} showForm={true} />
			</div>
		</div>
	</div>
</main>

<style>
	.hero-section {
		background: linear-gradient(135deg, #F7F9FC 0%, #F4F1EB 100%);
		padding: 4rem 0;
		text-align: center;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 3rem;
		font-weight: 700;
		color: #1A202C;
		margin: 0 0 1rem 0;
		line-height: 1.1;
	}

	.hero-subtitle {
		font-size: 1.25rem;
		color: #4A5568;
		margin: 0;
		max-width: 600px;
		margin: 0 auto;
	}

	.tools-container {
		padding: 4rem 0;
		background: #fff;
	}

	.tools-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.tool-card {
		background: #fff;
		border: 1px solid #E2E8F0;
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.tool-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
	}

	.tool-card h2 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #1A202C;
		margin: 0 0 1rem 0;
	}

	.tool-card p {
		color: #4A5568;
		margin: 0 0 1.5rem 0;
		line-height: 1.6;
	}

	.cta-section {
		text-align: center;
		padding: 2rem 0;
		background: #F7F9FC;
		border-radius: 12px;
	}

	/* RealScout Widget Styling */
	.realscout-widget-container {
		width: 100%;
	}

	:global(realscout-home-value) {
		--rs-hvw-background-color: #ffffff;
		--rs-hvw-title-color: #000000;
		--rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
		--rs-hvw-primary-button-text-color: #ffffff;
		--rs-hvw-primary-button-color: rgb(35, 93, 137);
		--rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
		--rs-hvw-secondary-button-color: #ffffff;
		--rs-hvw-widget-width: auto;
	}

	/* Featured Listings Section */
	.featured-listings {
		background: #f8f9fa;
		padding: 4rem 0;
		margin: 2rem 0;
		text-align: center;
	}

	.featured-listings h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a365d;
		margin: 0 0 1rem 0;
	}

	.featured-listings p {
		font-size: 1.2rem;
		color: #6c757d;
		margin: 0 0 2rem 0;
	}

	.realscout-listings-widget {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	:global(realscout-office-listings) {
		--rs-listing-divider-color: rgb(101, 141, 172);
		width: 100%;
	}

	@media (max-width: 768px) {
		.container {
			padding: 0 1rem;
		}

		h1 {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.125rem;
		}

		.tools-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.tool-card {
			padding: 1.5rem;
		}
	}
</style>
