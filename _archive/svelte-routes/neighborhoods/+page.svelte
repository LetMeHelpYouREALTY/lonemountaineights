<script>
import { generateBreadcrumbSchema, generateFAQSchema } from '$lib/schema.js';
import { microNeighborhoods } from '$lib/microNeighborhoods.js';
import FAQSection from '$lib/components/FAQSection.svelte';
import { neighborhoodsFAQs } from '$lib/faqs.js';

let selectedCategory = 'subdivisions';
let selectedSubdivision = null;

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function selectSubdivision(subdivision) {
  selectedSubdivision = subdivision;
}

function closeSubdivision() {
  selectedSubdivision = null;
}

// Generate breadcrumb schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://lonemountainheights.com' },
  {
    name: 'Neighborhoods',
    url: 'https://lonemountainheights.com/neighborhoods',
  },
]);
</script>

<svelte:head>
	<title>Lone Mountain Heights Neighborhoods | Las Vegas 89129 | Dr. Jan Duffy</title>
	<meta name="description" content="Discover Lone Mountain Heights micro-neighborhoods in Las Vegas 89129. Dr. Jan Duffy's expert guide to subdivisions, communities, and local amenities." />
	
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
					"name": "Neighborhoods",
					"item": "https://www.lonemountainheights.com/neighborhoods"
				}
			]
		}
	</script>

	<!-- FAQ Schema - AEO -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(neighborhoodsFAQs))}
	</script>
</svelte:head>

<main class="neighborhoods-page">
	<div class="page-header">
		<div class="container">
			<h1>Lone Mountain Heights Neighborhoods | Las Vegas 89129</h1>
			<p>Expert guide to micro-neighborhoods, subdivisions, and communities by Dr. Jan Duffy</p>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<!-- Category Navigation -->
			<nav class="category-nav">
				<button 
					class="category-btn" 
					class:active={selectedCategory === 'subdivisions'}
					on:click={() => selectedCategory = 'subdivisions'}
				>
					Subdivisions
				</button>
				<button 
					class="category-btn" 
					class:active={selectedCategory === 'streetClusters'}
					on:click={() => selectedCategory = 'streetClusters'}
				>
					Street Clusters
				</button>
				<button 
					class="category-btn" 
					class:active={selectedCategory === 'ageSpecific'}
					on:click={() => selectedCategory = 'ageSpecific'}
				>
					Age-Specific
				</button>
				<button 
					class="category-btn" 
					class:active={selectedCategory === 'geographicPockets'}
					on:click={() => selectedCategory = 'geographicPockets'}
				>
					Geographic Pockets
				</button>
			</nav>
			
			<!-- Subdivisions Section -->
			{#if selectedCategory === 'subdivisions'}
				<section class="neighborhoods-section">
					<h2>Primary Subdivisions</h2>
					<p>Each subdivision has its own unique character, amenities, and market dynamics</p>
					
					<div class="neighborhoods-grid">
						{#each microNeighborhoods.subdivisions as subdivision}
              <div class="neighborhood-card" on:click={() => selectSubdivision(subdivision)} on:keydown={(e) => e.key === 'Enter' && selectSubdivision(subdivision)} tabindex="0" role="button" aria-label="View details for {subdivision.name}">
								<div class="card-header">
									<h3>{subdivision.name}</h3>
									<span class="price-range">
										{formatPrice(subdivision.priceRange.min)} - {formatPrice(subdivision.priceRange.max)}
									</span>
								</div>
								<div class="card-content">
									<p class="description">{subdivision.description}</p>
									<div class="card-stats">
										<div class="stat">
											<span class="stat-label">Avg Price</span>
											<span class="stat-value">{formatPrice(subdivision.avgPrice)}</span>
										</div>
										<div class="stat">
											<span class="stat-label">Year Built</span>
											<span class="stat-value">{subdivision.yearBuilt}</span>
										</div>
										<div class="stat">
											<span class="stat-label">HOA</span>
											<span class="stat-value">{subdivision.hoa ? `$${subdivision.hoaFee}/mo` : 'None'}</span>
										</div>
									</div>
									<div class="amenities">
										{#each subdivision.amenities.slice(0, 3) as amenity}
											<span class="amenity-tag">{amenity}</span>
										{/each}
									</div>
								</div>
								<div class="card-footer">
									<span class="view-details">View Details →</span>
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}
			
			<!-- Street Clusters Section -->
			{#if selectedCategory === 'streetClusters'}
				<section class="neighborhoods-section">
					<h2>Key Street Clusters</h2>
					<p>Major street corridors and their unique characteristics</p>
					
					<div class="neighborhoods-grid">
						{#each microNeighborhoods.streetClusters as cluster}
							<div class="neighborhood-card">
								<div class="card-header">
									<h3>{cluster.name}</h3>
									<span class="price-range">
										Avg: {formatPrice(cluster.avgPrice)}
									</span>
								</div>
								<div class="card-content">
									<p class="description">{cluster.description}</p>
									<div class="key-streets">
										<h4>Key Streets:</h4>
										<ul>
											{#each cluster.keyStreets as street}
												<li>{street}</li>
											{/each}
										</ul>
									</div>
									<div class="characteristics">
										{#each cluster.characteristics as char}
											<span class="char-tag">{char}</span>
										{/each}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}
			
			<!-- Age-Specific Communities Section -->
			{#if selectedCategory === 'ageSpecific'}
				<section class="neighborhoods-section">
					<h2>Age-Specific Communities</h2>
					<p>Communities designed for specific age groups and lifestyles</p>
					
					<div class="neighborhoods-grid">
						{#each microNeighborhoods.ageSpecific as community}
							<div class="neighborhood-card">
								<div class="card-header">
									<h3>{community.name}</h3>
									<span class="price-range">
										Avg: {formatPrice(community.avgPrice)}
									</span>
								</div>
								<div class="card-content">
									<div class="subdivisions">
										<h4>Subdivisions:</h4>
										<ul>
											{#each community.subdivisions as sub}
												<li>{sub}</li>
											{/each}
										</ul>
									</div>
									<div class="characteristics">
										{#each community.characteristics as char}
											<span class="char-tag">{char}</span>
										{/each}
									</div>
									<div class="amenities">
										{#each community.amenities as amenity}
											<span class="amenity-tag">{amenity}</span>
										{/each}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}
			
			<!-- Geographic Pockets Section -->
			{#if selectedCategory === 'geographicPockets'}
				<section class="neighborhoods-section">
					<h2>Geographic Pockets</h2>
					<p>Specialized areas with unique geographic features</p>
					
					<div class="neighborhoods-grid">
						{#each microNeighborhoods.geographicPockets as pocket}
							<div class="neighborhood-card">
								<div class="card-header">
									<h3>{pocket.name}</h3>
									<span class="price-range">
										Avg: {formatPrice(pocket.avgPrice)}
									</span>
								</div>
								<div class="card-content">
									<p class="description">{pocket.description}</p>
									<div class="subdivisions">
										<h4>Subdivisions:</h4>
										<ul>
											{#each pocket.subdivisions as sub}
												<li>{sub}</li>
											{/each}
										</ul>
									</div>
									<div class="characteristics">
										{#each pocket.characteristics as char}
											<span class="char-tag">{char}</span>
										{/each}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}
		</div>
		
		<!-- FAQ Section - AEO -->
		<section class="faq-section-wrapper">
			<div class="container">
				<FAQSection faqs={neighborhoodsFAQs} title="Lone Mountain Heights Neighborhood FAQs" />
			</div>
		</section>

		<!-- Current Listings Section -->
		<section class="current-listings">
			<div class="container">
				<h2>Homes for Sale in Lone Mountain Heights</h2>
				<p>Browse current listings across all neighborhoods and subdivisions</p>
				<div class="realscout-listings-widget">
					<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF,TC" minPrice="400000" maxPrice="800000"></realscout-office-listings>
				</div>
			</div>
		</section>
	</div>
</main>

<!-- Subdivision Detail Modal -->
{#if selectedSubdivision}
  <div class="modal-overlay" on:click={closeSubdivision} on:keydown={(e) => e.key === 'Escape' && closeSubdivision()}>
    <div class="modal-content" on:click|stopPropagation on:keydown|stopPropagation>
			<div class="modal-header">
				<h2>{selectedSubdivision.name}</h2>
				<button class="close-btn" on:click={closeSubdivision}>×</button>
			</div>
			<div class="modal-body">
				<div class="subdivision-details">
					<div class="detail-section">
						<h3>Overview</h3>
						<p>{selectedSubdivision.description}</p>
						<p class="market-insights">{selectedSubdivision.marketInsights}</p>
					</div>
					
					<div class="detail-section">
						<h3>Market Data</h3>
						<div class="market-stats">
							<div class="market-stat">
								<span class="stat-label">Average Price</span>
								<span class="stat-value">{formatPrice(selectedSubdivision.avgPrice)}</span>
							</div>
							<div class="market-stat">
								<span class="stat-label">Price Range</span>
								<span class="stat-value">
									{formatPrice(selectedSubdivision.priceRange.min)} - {formatPrice(selectedSubdivision.priceRange.max)}
								</span>
							</div>
							<div class="market-stat">
								<span class="stat-label">Year Built</span>
								<span class="stat-value">{selectedSubdivision.yearBuilt}</span>
							</div>
							<div class="market-stat">
								<span class="stat-label">HOA Fee</span>
								<span class="stat-value">
									{selectedSubdivision.hoa ? `$${selectedSubdivision.hoaFee}/month` : 'No HOA'}
								</span>
							</div>
						</div>
					</div>
					
					<div class="detail-section">
						<h3>Home Styles</h3>
						<div class="home-styles">
							{#each selectedSubdivision.homeStyles as style}
								<span class="style-tag">{style}</span>
							{/each}
						</div>
					</div>
					
					<div class="detail-section">
						<h3>Key Streets</h3>
						<ul class="key-streets">
							{#each selectedSubdivision.keyStreets as street}
								<li>{street}</li>
							{/each}
						</ul>
					</div>
					
					<div class="detail-section">
						<h3>Amenities</h3>
						<div class="amenities">
							{#each selectedSubdivision.amenities as amenity}
								<span class="amenity-tag">{amenity}</span>
							{/each}
						</div>
					</div>
					
					<div class="detail-section">
						<h3>Lot Sizes</h3>
						<div class="lot-sizes">
							{#each selectedSubdivision.lotSizes as lotSize}
								<span class="lot-tag">{lotSize}</span>
							{/each}
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<a href="/homes" class="btn btn-primary">View Available Homes</a>
				<a href="/valuation" class="btn btn-secondary">Get Home Valuation</a>
			</div>
		</div>
	</div>
{/if}

<style>
	.neighborhoods-page {
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
	
	.category-nav {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
		justify-content: center;
		flex-wrap: wrap;
	}
	
	.category-btn {
		padding: 1rem 2rem;
		border: 2px solid var(--accent-color);
		background: white;
		color: var(--accent-color);
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	
	.category-btn:hover,
	.category-btn.active {
		background: var(--accent-color);
		color: white;
	}
	
	.neighborhoods-section {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.neighborhoods-section h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.neighborhoods-section p {
		color: var(--text-light);
		margin: 0 0 2rem 0;
		font-size: 1.1rem;
	}
	
	.neighborhoods-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 1.5rem;
	}
	
	.neighborhood-card {
		background: var(--warm-cream);
		border-radius: 12px;
		padding: 1.5rem;
		cursor: pointer;
		transition: all 0.3s ease;
		border: 2px solid transparent;
	}
	
	.neighborhood-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
		border-color: var(--accent-color);
	}
	
	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
	}
	
	.card-header h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0;
	}
	
	.price-range {
		background: var(--accent-color);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 600;
	}
	
	.description {
		color: var(--text-color);
		margin-bottom: 1rem;
		line-height: 1.5;
	}
	
	.card-stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 1rem;
		margin-bottom: 1rem;
	}
	
	.stat {
		text-align: center;
	}
	
	.stat-label {
		display: block;
		font-size: 0.8rem;
		color: var(--text-light);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin-bottom: 0.25rem;
	}
	
	.stat-value {
		display: block;
		font-size: 1rem;
		font-weight: 700;
		color: var(--accent-color);
	}
	
	.amenities,
	.characteristics {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
	
	.amenity-tag,
	.char-tag {
		background: var(--tertiary-color);
		color: var(--text-color);
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 0.8rem;
		font-weight: 500;
	}
	
	.card-footer {
		text-align: center;
		padding-top: 1rem;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}
	
	.view-details {
		color: var(--accent-color);
		font-weight: 600;
		font-size: 0.9rem;
	}
	
	.key-streets ul,
	.subdivisions ul {
		list-style: none;
		padding: 0;
		margin: 0.5rem 0;
	}
	
	.key-streets li,
	.subdivisions li {
		padding: 0.25rem 0;
		color: var(--text-color);
	}
	
	/* Modal Styles */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 2rem;
	}
	
	.modal-content {
		background: white;
		border-radius: 12px;
		max-width: 800px;
		width: 100%;
		max-height: 90vh;
		overflow-y: auto;
	}
	
	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	
	.modal-header h2 {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0;
	}
	
	.close-btn {
		background: none;
		border: none;
		font-size: 2rem;
		color: var(--text-light);
		cursor: pointer;
		padding: 0;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all 0.3s ease;
	}
	
	.close-btn:hover {
		background: var(--tertiary-color);
		color: var(--text-color);
	}
	
	.modal-body {
		padding: 2rem;
	}
	
	.subdivision-details {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	
	.detail-section h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.market-insights {
		background: var(--warm-cream);
		padding: 1rem;
		border-radius: 8px;
		font-style: italic;
		color: var(--text-color);
		margin-top: 0.5rem;
	}
	
	.market-stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
	
	.market-stat {
		background: var(--warm-cream);
		padding: 1rem;
		border-radius: 8px;
		text-align: center;
	}
	
	.market-stat .stat-label {
		display: block;
		font-size: 0.9rem;
		color: var(--text-light);
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
	
	.market-stat .stat-value {
		display: block;
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--accent-color);
	}
	
	.home-styles,
	.lot-sizes {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	
	.style-tag,
	.lot-tag {
		background: var(--accent-color);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 600;
	}
	
	.modal-footer {
		padding: 2rem;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		display: flex;
		gap: 1rem;
		justify-content: center;
	}
	
	.btn {
		padding: 1rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		transition: all 0.3s ease;
		display: inline-block;
		text-align: center;
		min-width: 150px;
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
		
		.neighborhoods-grid {
			grid-template-columns: 1fr;
		}
		
		.category-nav {
			flex-direction: column;
			align-items: center;
		}
		
		.category-btn {
			width: 200px;
		}
		
		.modal-overlay {
			padding: 1rem;
		}
		
		.modal-header,
		.modal-body,
		.modal-footer {
			padding: 1.5rem;
		}
		
		.market-stats {
			grid-template-columns: 1fr;
		}
		
		.modal-footer {
			flex-direction: column;
		}
		
		.btn {
			min-width: 100%;
		}
	}

	.faq-section-wrapper {
		padding: 2rem 0;
	}

	/* Current Listings Section */
	.current-listings {
		background: #f8f9fa;
		padding: 4rem 0;
		margin-top: 2rem;
	}

	.current-listings .container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.current-listings h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a365d;
		text-align: center;
		margin: 0 0 1rem 0;
	}

	.current-listings p {
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
</style>
