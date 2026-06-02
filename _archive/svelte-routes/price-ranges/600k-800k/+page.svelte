<script>
import { generateBreadcrumbSchema, generateFAQSchema, NAP } from '$lib/schema.js';
import FAQSection from '$lib/components/FAQSection.svelte';
import { priceRangeFAQs } from '$lib/faqs.js';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://www.lonemountainheights.com' },
  {
    name: 'Price Ranges',
    url: 'https://www.lonemountainheights.com/price-ranges',
  },
  {
    name: '$600k - $800k',
    url: 'https://www.lonemountainheights.com/price-ranges/600k-800k',
  },
]);

const propertyStats = {
  averagePrice: '$725,000',
  priceRange: '$600,000 - $800,000',
  bedrooms: '3-4',
  squareFootage: '2,000 - 3,200',
  yearBuilt: '1995-2015',
  lotSize: '0.25 - 0.5 acres',
};

const features = [
  'Updated Kitchens',
  'Master Suite',
  'Two-Car Garage',
  'Private Backyard',
  'Hardwood Floors',
  'Modern Appliances',
  'Energy Efficient',
  'Low HOA Fees',
];
</script>

<svelte:head>
	<title>$600k - $800k Homes for Sale in Lone Mountain Heights | Las Vegas 89129 | Dr. Jan Duffy</title>
	<meta name="description" content="Find quality homes in the $600k-$800k price range in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy's expert guide to the best value properties in this premier community." />
	
	<!-- RealEstateAgent Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "RealEstateAgent",
			"name": "Dr. Jan Duffy",
			"description": "Mid-range home specialist in Lone Mountain Heights, Las Vegas 89129",
			"telephone": "702-222-1964",
			"email": "jan@lonemountainheights.com",
			"areaServed": {
				"@type": "Place",
				"name": "Lone Mountain Heights"
			},
			"knowsAbout": [
				"Mid-Range Homes",
				"Value Properties",
				"Lone Mountain Heights Real Estate",
				"$600k-$800k Price Range"
			]
		}
	</script>

	<!-- FAQ Schema - AEO -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(priceRangeFAQs))}
	</script>

	<!-- Breadcrumb Schema -->
	<script type="application/ld+json">
		{JSON.stringify(breadcrumbSchema)}
	</script>
</svelte:head>

<main class="price-range-page">
	<div class="page-header">
		<div class="container">
			<h1>$600k - $800k Homes for Sale in Lone Mountain Heights | Las Vegas 89129</h1>
			<p>Quality homes with excellent value in one of Las Vegas's most desirable communities</p>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<!-- Price Range Overview -->
			<section class="price-overview">
				<h2>About the $600k - $800k Price Range</h2>
				<p>The $600k to $800k price range in Lone Mountain Heights offers exceptional value for money. These properties typically feature 3-4 bedrooms, updated amenities, and prime locations within the community. This price point attracts both first-time buyers and those looking to upgrade, making it one of the most competitive segments in the market.</p>
				
				<div class="stats-grid">
					<div class="stat-item">
						<div class="stat-number">{propertyStats.averagePrice}</div>
						<div class="stat-label">Average Price</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">{propertyStats.bedrooms}</div>
						<div class="stat-label">Bedrooms</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">{propertyStats.squareFootage}</div>
						<div class="stat-label">Square Feet</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">{propertyStats.lotSize}</div>
						<div class="stat-label">Lot Size</div>
					</div>
				</div>
			</section>
			
			<!-- Features -->
			<section class="features-section">
				<h2>Common Features in This Price Range</h2>
				<div class="features-grid">
					{#each features as feature}
						<div class="feature-item">
							<span class="feature-icon">✓</span>
							<span class="feature-text">{feature}</span>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- Neighborhoods -->
			<section class="neighborhoods-section">
				<h2>Best Neighborhoods for $600k - $800k Homes</h2>
				<div class="neighborhoods-grid">
					<div class="neighborhood-card">
						<h3>Desert Vista Estates</h3>
						<p>Family-friendly community with desert landscaping and community amenities.</p>
						<div class="price-range">$600,000 - $750,000</div>
					</div>
					<div class="neighborhood-card">
						<h3>Mountain Crest</h3>
						<p>Well-established neighborhood with mature landscaping and mountain views.</p>
						<div class="price-range">$650,000 - $800,000</div>
					</div>
					<div class="neighborhood-card">
						<h3>Tule Springs Village</h3>
						<p>Newer construction with modern amenities and energy-efficient features.</p>
						<div class="price-range">$700,000 - $800,000</div>
					</div>
				</div>
			</section>
			
			<!-- CTA Section -->
			<FAQSection faqs={priceRangeFAQs} title="$600K–$800K Homes in Lone Mountain Heights — FAQs" />

			<section class="cta-section">
				<h2>Ready to Find Your Perfect Home in the $600k - $800k Range?</h2>
				<p>Dr. Jan Duffy has extensive experience with mid-range properties in Lone Mountain Heights and can help you find the best value for your budget.</p>
				<div class="cta-buttons">
					<a href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Search All Homes in Lone Mountain Heights</a>
					<a href={NAP.telHref} class="btn btn-secondary">Call {NAP.telDisplay}</a>
					<a href="/homes" class="btn btn-secondary">Browse Listings</a>
					<a href="/valuation" class="btn btn-secondary">Get Home Valuation</a>
				</div>
			</section>
		</div>
	</div>
</main>

<style>
	.price-range-page {
		min-height: 100vh;
		background: var(--warm-cream);
	}
	
	.page-header {
		background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
		color: white;
		padding: 3rem 2rem;
		text-align: center;
	}
	
	.container {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.page-header h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
	}
	
	.page-header p {
		font-size: 1.2rem;
		margin: 0;
		opacity: 0.9;
	}
	
	.page-content {
		padding: 2rem 0;
	}
	
	.price-overview,
	.features-section,
	.neighborhoods-section,
	.cta-section {
		background: white;
		margin-bottom: 2rem;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.price-overview h2,
	.features-section h2,
	.neighborhoods-section h2,
	.cta-section h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.price-overview p {
		font-size: 1.1rem;
		line-height: 1.6;
		color: var(--text-color);
		margin-bottom: 2rem;
	}
	
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}
	
	.stat-item {
		text-align: center;
		padding: 1.5rem;
		background: var(--warm-cream);
		border-radius: 12px;
	}
	
	.stat-number {
		font-size: 2rem;
		font-weight: 700;
		color: var(--accent-color);
		margin-bottom: 0.5rem;
	}
	
	.stat-label {
		font-size: 1rem;
		color: var(--text-color);
		font-weight: 500;
	}
	
	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	}
	
	.feature-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		background: var(--warm-cream);
		border-radius: 8px;
	}
	
	.feature-icon {
		color: var(--success-green);
		font-weight: 700;
		font-size: 1.2rem;
	}
	
	.feature-text {
		color: var(--text-color);
		font-weight: 500;
	}
	
	.neighborhoods-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
		margin-top: 1rem;
	}
	
	.neighborhood-card {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 12px;
		text-align: center;
	}
	
	.neighborhood-card h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.neighborhood-card p {
		color: var(--text-color);
		margin-bottom: 1rem;
		line-height: 1.5;
	}
	
	.price-range {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--accent-color);
	}
	
	.cta-section {
		text-align: center;
		background: var(--tertiary-color);
	}
	
	.cta-section h2 {
		color: var(--heading-color);
	}
	
	.cta-section p {
		font-size: 1.1rem;
		color: var(--text-light);
		margin: 0 0 2rem 0;
	}
	
	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}
	
	.btn {
		padding: 1rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		transition: all 0.3s ease;
		display: inline-block;
		min-width: 150px;
		text-align: center;
	}
	
	.btn-primary {
		background: var(--accent-color);
		color: white;
		border: 2px solid var(--accent-color);
	}
	
	.btn-primary:hover {
		background: var(--accent-light);
		border-color: var(--accent-light);
		transform: translateY(-2px);
	}
	
	.btn-secondary {
		background: transparent;
		color: var(--accent-color);
		border: 2px solid var(--accent-color);
	}
	
	.btn-secondary:hover {
		background: var(--accent-color);
		color: white;
		transform: translateY(-2px);
	}
	
	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2rem;
		}
		
		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		
		.features-grid {
			grid-template-columns: 1fr;
		}
		
		.neighborhoods-grid {
			grid-template-columns: 1fr;
		}
		
		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}
		
		.btn {
			min-width: 200px;
		}
	}
</style>
