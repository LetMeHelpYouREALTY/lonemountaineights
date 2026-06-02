<script>
	import MarketStats from '$lib/components/MarketStats.svelte';
	import MarketInfographics from '$lib/components/MarketInfographics.svelte';
	import SeasonalContent from '$lib/components/SeasonalContent.svelte';
	import OptimizedCTA from '$lib/components/OptimizedCTA.svelte';
</script>

<svelte:head>
	<title>Lone Mountain Heights Market Intelligence | Real Estate Data & Trends | Dr. Jan Duffy</title>
	<meta name="description" content="Comprehensive market intelligence for Lone Mountain Heights: current statistics, trends, seasonal insights, and data-driven analysis from Dr. Jan Duffy." />
	
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
					"name": "Market Intelligence",
					"item": "https://www.lonemountainheights.com/market-intelligence"
				}
			]
		}
	</script>
</svelte:head>

<main>
	<div class="hero-section">
		<div class="container">
			<h1>Market Intelligence</h1>
			<p class="hero-subtitle">Data-driven insights and trends for Lone Mountain Heights real estate market</p>
		</div>
	</div>

	<div class="intelligence-container">
		<div class="container">
			<section class="market-stats-section">
				<h2>Current Market Statistics</h2>
				<p>Real-time data and key metrics for the Lone Mountain Heights market</p>
				<MarketStats />
			</section>

			<section class="infographics-section">
				<h2>Market Trends & Analysis</h2>
				<p>Visual insights and comprehensive market analysis</p>
				<MarketInfographics />
			</section>

			<section class="seasonal-section">
				<h2>Seasonal Market Insights</h2>
				<p>How the market changes throughout the year and what it means for buyers and sellers</p>
				<SeasonalContent />
			</section>

			<div class="cta-section">
				<h2>Ready to Make Your Move?</h2>
				<p>Get personalized market analysis and expert guidance for your real estate goals</p>
				<OptimizedCTA variant="primary" size="large" showPhone={true} showEmail={true} showText={true} showForm={true} />
			</div>
		</div>
	</div>
</main>

<style>
	.hero-section {
		background: linear-gradient(135deg, #1A202C 0%, #2D3748 100%);
		padding: 4rem 0;
		text-align: center;
		color: white;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 3rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		line-height: 1.1;
	}

	.hero-subtitle {
		font-size: 1.25rem;
		color: #E2E8F0;
		margin: 0;
		max-width: 600px;
		margin: 0 auto;
	}

	.intelligence-container {
		padding: 4rem 0;
		background: #F7F9FC;
	}

	section {
		margin-bottom: 4rem;
		padding: 2rem;
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
	}

	section h2 {
		font-size: 2rem;
		font-weight: 600;
		color: #1A202C;
		margin: 0 0 1rem 0;
		text-align: center;
	}

	section p {
		color: #4A5568;
		margin: 0 0 2rem 0;
		text-align: center;
		font-size: 1.125rem;
		line-height: 1.6;
	}

	.cta-section {
		text-align: center;
		padding: 3rem 2rem;
		background: linear-gradient(135deg, #3A8DDE 0%, #5BA0E8 100%);
		border-radius: 12px;
		color: white;
	}

	.cta-section h2 {
		color: white;
		font-size: 2.5rem;
		margin: 0 0 1rem 0;
	}

	.cta-section p {
		color: #E2E8F0;
		font-size: 1.25rem;
		margin: 0 0 2rem 0;
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

		section {
			padding: 1.5rem;
			margin-bottom: 2rem;
		}

		section h2 {
			font-size: 1.75rem;
		}

		.cta-section h2 {
			font-size: 2rem;
		}

		.cta-section p {
			font-size: 1.125rem;
		}
	}
</style>
