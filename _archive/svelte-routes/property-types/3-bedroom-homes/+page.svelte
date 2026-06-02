<script>
import { generateBreadcrumbSchema, generateFAQSchema, NAP } from '$lib/schema.js';
import FAQSection from '$lib/components/FAQSection.svelte';
import { propertyTypeFAQs } from '$lib/faqs.js';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://www.lonemountainheights.com' },
  {
    name: 'Property Types',
    url: 'https://www.lonemountainheights.com/property-types',
  },
  {
    name: '3 Bedroom Homes',
    url: 'https://www.lonemountainheights.com/property-types/3-bedroom-homes',
  },
]);

const propertyStats = {
  averagePrice: '$750,000',
  priceRange: '$550,000 - $950,000',
  squareFootage: '1,800 - 2,800',
  yearBuilt: '1995-2015',
  lotSize: '0.2 - 0.4 acres',
};

const features = [
  'Open Floor Plans',
  'Master Suite with Walk-in Closet',
  'Two-Car Garage',
  'Private Backyard',
  'Modern Kitchen',
  'Updated Appliances',
  'Hardwood Floors',
  'Energy Efficient',
];
</script>

<svelte:head>
	<title>3 Bedroom Homes for Sale in Lone Mountain Heights | Las Vegas 89129 | Dr. Jan Duffy</title>
	<meta name="description" content="Find perfect 3 bedroom homes in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy's expert guide to family-friendly properties with modern amenities and great value." />
	
	<!-- RealEstateAgent Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "RealEstateAgent",
			"name": "Dr. Jan Duffy",
			"description": "3 bedroom home specialist in Lone Mountain Heights, Las Vegas 89129",
			"telephone": "702-222-1964",
			"email": "jan@lonemountainheights.com",
			"areaServed": {
				"@type": "Place",
				"name": "Lone Mountain Heights"
			},
			"knowsAbout": [
				"3 Bedroom Homes",
				"Family Properties",
				"Starter Homes",
				"Lone Mountain Heights Real Estate"
			]
		}
	</script>

	<!-- FAQ Schema - AEO -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(propertyTypeFAQs))}
	</script>

	<!-- Breadcrumb Schema -->
	<script type="application/ld+json">
		{JSON.stringify(breadcrumbSchema)}
	</script>
</svelte:head>

<main class="property-type-page">
	<div class="page-header">
		<div class="container">
			<h1>3 Bedroom Homes for Sale in Lone Mountain Heights | Las Vegas 89129</h1>
			<p>Perfect family homes with modern amenities and great value</p>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<!-- Property Overview -->
			<section class="property-overview">
				<h2>About 3 Bedroom Homes in Lone Mountain Heights</h2>
				<p>3 bedroom homes in Lone Mountain Heights offer the perfect balance of space, comfort, and value. These properties are ideal for growing families, first-time buyers, or those looking to downsize while maintaining quality living standards. With open floor plans and modern amenities, these homes provide excellent value in one of Las Vegas's most desirable communities.</p>
				
				<div class="stats-grid">
					<div class="stat-item">
						<div class="stat-number">{propertyStats.averagePrice}</div>
						<div class="stat-label">Average Price</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">{propertyStats.squareFootage}</div>
						<div class="stat-label">Square Feet</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">{propertyStats.lotSize}</div>
						<div class="stat-label">Lot Size</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">{propertyStats.yearBuilt}</div>
						<div class="stat-label">Year Built</div>
					</div>
				</div>
			</section>
			
			<!-- Features -->
			<section class="features-section">
				<h2>Common Features</h2>
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
				<h2>Popular Neighborhoods for 3 Bedroom Homes</h2>
				<div class="neighborhoods-grid">
					<div class="neighborhood-card">
						<h3>Desert Vista Estates</h3>
						<p>Family-friendly community with desert landscaping and community amenities.</p>
						<div class="price-range">$550,000 - $750,000</div>
					</div>
					<div class="neighborhood-card">
						<h3>Mountain Crest</h3>
						<p>Well-established neighborhood with mature landscaping and mountain views.</p>
						<div class="price-range">$650,000 - $850,000</div>
					</div>
					<div class="neighborhood-card">
						<h3>Tule Springs Village</h3>
						<p>Newer construction with modern amenities and energy-efficient features.</p>
						<div class="price-range">$700,000 - $950,000</div>
					</div>
				</div>
			</section>
			
			<!-- CTA Section -->
			<FAQSection faqs={propertyTypeFAQs} title="3 Bedroom Homes in Lone Mountain Heights — FAQs" />

			<section class="cta-section">
				<h2>Ready to Find Your Perfect 3 Bedroom Home?</h2>
				<p>Dr. Jan Duffy has extensive experience with 3 bedroom properties in Lone Mountain Heights and can help you find the perfect family home.</p>
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
	.property-type-page {
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
	
	.property-overview,
	.features-section,
	.neighborhoods-section,
	.cta-section {
		background: white;
		margin-bottom: 2rem;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.property-overview h2,
	.features-section h2,
	.neighborhoods-section h2,
	.cta-section h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.property-overview p {
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
