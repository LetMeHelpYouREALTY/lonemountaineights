<script>
import { generateBreadcrumbSchema, generateFAQSchema, NAP } from '$lib/schema.js';
import FAQSection from '$lib/components/FAQSection.svelte';
import { locationsFAQs } from '$lib/faqs.js';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://www.lonemountainheights.com' },
  { name: 'Locations', url: 'https://www.lonemountainheights.com/locations' },
  {
    name: 'Lone Mountain Ranch',
    url: 'https://www.lonemountainheights.com/locations/lone-mountain-ranch',
  },
]);

const propertyStats = {
  averagePrice: '$850,000',
  priceRange: '$650,000 - $1,200,000',
  bedrooms: '3-5',
  squareFootage: '2,200 - 4,500',
  yearBuilt: '2000-2010',
  lotSize: '0.25 - 0.5 acres',
};

const amenities = [
  'Golf Course Views',
  'Mountain Views',
  'Private Pools',
  'Gated Community',
  'Canyon Gate Country Club Access',
  'Walking Trails',
  'Community Parks',
];
</script>

<svelte:head>
	<title>Lone Mountain Ranch Homes for Sale | Las Vegas 89129 | Dr. Jan Duffy</title>
	<meta name="description" content="Find luxury homes in Lone Mountain Ranch, Las Vegas 89129. Dr. Jan Duffy's expert guide to this premier gated community with golf course access and mountain views." />
	
	<!-- Place Schema for Lone Mountain Ranch -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Place",
			"name": "Lone Mountain Ranch",
			"description": "Premier gated community in Lone Mountain Heights featuring luxury homes with golf course and mountain views.",
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
				"@type": "Place",
				"name": "Lone Mountain Heights"
			},
			"amenityFeature": [
				{
					"@type": "LocationFeatureSpecification",
					"name": "Golf Course",
					"value": "Canyon Gate Country Club"
				},
				{
					"@type": "LocationFeatureSpecification",
					"name": "Gated Community",
					"value": "24/7 Security"
				},
				{
					"@type": "LocationFeatureSpecification",
					"name": "Mountain Views",
					"value": "Red Rock Canyon Views"
				}
			]
		}
	</script>

	<!-- RealEstateAgent Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "RealEstateAgent",
			"name": "Dr. Jan Duffy",
			"description": "Lone Mountain Ranch real estate expert specializing in luxury homes and golf course properties.",
			"telephone": "702-222-1964",
			"email": "jan@lonemountainheights.com",
			"areaServed": {
				"@type": "Place",
				"name": "Lone Mountain Ranch"
			},
			"knowsAbout": [
				"Lone Mountain Ranch Homes",
				"Golf Course Properties",
				"Luxury Real Estate",
				"Gated Communities"
			]
		}
	</script>

	<!-- FAQ Schema - AEO -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(locationsFAQs['lone-mountain-ranch']))}
	</script>

	<!-- Breadcrumb Schema -->
	<script type="application/ld+json">
		{JSON.stringify(breadcrumbSchema)}
	</script>
</svelte:head>

<main class="location-page">
	<div class="page-header">
		<div class="container">
			<h1>Lone Mountain Ranch Homes for Sale | Las Vegas 89129</h1>
			<p>Premier gated community with golf course access and mountain views</p>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<!-- Community Overview -->
			<section class="community-overview">
				<h2>About Lone Mountain Ranch</h2>
				<p>Lone Mountain Ranch is a prestigious gated community within Lone Mountain Heights, offering luxury homes with stunning golf course and mountain views. This exclusive neighborhood features custom-built homes on larger lots with premium amenities.</p>
				
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
			
			<!-- Amenities -->
			<section class="amenities-section">
				<h2>Community Amenities</h2>
				<div class="amenities-grid">
					{#each amenities as amenity}
						<div class="amenity-item">
							<span class="amenity-icon">✓</span>
							<span class="amenity-text">{amenity}</span>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- Property Types -->
			<section class="property-types">
				<h2>Available Property Types</h2>
				<div class="types-grid">
					<div class="type-card">
						<h3>3 Bedroom Homes</h3>
						<p>Perfect for families, featuring open floor plans and modern amenities.</p>
						<div class="price-range">$650,000 - $850,000</div>
					</div>
					<div class="type-card">
						<h3>4 Bedroom Homes</h3>
						<p>Spacious layouts with master suites and bonus rooms.</p>
						<div class="price-range">$750,000 - $1,000,000</div>
					</div>
					<div class="type-card">
						<h3>5+ Bedroom Homes</h3>
						<p>Luxury estates with premium finishes and outdoor living spaces.</p>
						<div class="price-range">$900,000 - $1,200,000</div>
					</div>
				</div>
			</section>
			
			<!-- Current Listings in Lone Mountain Ranch -->
			<section class="current-listings">
				<h2>Homes for Sale in Lone Mountain Ranch</h2>
				<p>Browse current listings in this exclusive gated community</p>
				<div class="realscout-listings-widget">
					<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF,TC" minPrice="650000" maxPrice="1200000"></realscout-office-listings>
				</div>
			</section>
			
			<!-- CTA Section -->
			<FAQSection faqs={locationsFAQs['lone-mountain-ranch']} title="Lone Mountain Ranch — FAQs" />

			<section class="cta-section">
				<h2>Ready to Find Your Dream Home in Lone Mountain Ranch?</h2>
				<p>Dr. Jan Duffy has extensive experience with Lone Mountain Ranch properties and can help you find the perfect home.</p>
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
	.location-page {
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
	
	.community-overview,
	.amenities-section,
	.property-types,
	.cta-section {
		background: white;
		margin-bottom: 2rem;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.community-overview h2,
	.amenities-section h2,
	.property-types h2,
	.cta-section h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.community-overview p {
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
	
	.amenities-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	}
	
	.amenity-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		background: var(--warm-cream);
		border-radius: 8px;
	}
	
	.amenity-icon {
		color: var(--success-green);
		font-weight: 700;
		font-size: 1.2rem;
	}
	
	.amenity-text {
		color: var(--text-color);
		font-weight: 500;
	}
	
	.types-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
		margin-top: 1rem;
	}
	
	.type-card {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 12px;
		text-align: center;
	}
	
	.type-card h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.type-card p {
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

	/* Current Listings Section */
	.current-listings {
		background: #f8f9fa;
		padding: 4rem 0;
		margin: 2rem 0;
		text-align: center;
	}

	.current-listings h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a365d;
		margin: 0 0 1rem 0;
	}

	.current-listings p {
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
		.page-header h1 {
			font-size: 2rem;
		}
		
		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		
		.amenities-grid {
			grid-template-columns: 1fr;
		}
		
		.types-grid {
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
