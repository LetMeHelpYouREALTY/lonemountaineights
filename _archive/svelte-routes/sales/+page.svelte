<script>
import { generateFAQSchema, NAP } from '$lib/schema.js';
import FAQSection from '$lib/components/FAQSection.svelte';
import { salesFAQs } from '$lib/faqs.js';
// Mock recent sales data - in production this would come from MLS API
const recentSales = [
  {
    id: 1,
    address: '4567 Mountain Ridge Dr',
    price: 875000,
    sqft: 2450,
    bedrooms: 4,
    bathrooms: 3,
    daysOnMarket: 5,
    soldDate: '2024-01-15',
    pricePerSqft: 357,
    homeStyle: 'Two Story',
    yearBuilt: 2018,
    insight:
      'Corner lot with mountain views - sold above asking due to premium location',
    drJanComment:
      'This home had multiple offers within 48 hours. The mountain views and corner lot location made it highly desirable.',
  },
  {
    id: 2,
    address: '7890 Desert View Ln',
    price: 725000,
    sqft: 1890,
    bedrooms: 3,
    bathrooms: 2,
    daysOnMarket: 12,
    soldDate: '2024-01-12',
    pricePerSqft: 383,
    homeStyle: 'Single Story',
    yearBuilt: 2015,
    insight: 'Recently updated kitchen - great value for the area',
    drJanComment:
      'The updated kitchen was the key selling point. Buyers loved the modern finishes and open concept.',
  },
  {
    id: 3,
    address: '2345 Lone Mountain Way',
    price: 950000,
    sqft: 3200,
    bedrooms: 5,
    bathrooms: 4,
    daysOnMarket: 8,
    soldDate: '2024-01-10',
    pricePerSqft: 297,
    homeStyle: 'Two Story',
    yearBuilt: 2020,
    insight: 'Luxury finishes throughout - one of the best streets in the area',
    drJanComment:
      'This was a luxury home with premium finishes. The buyers were specifically looking for this level of quality.',
  },
  {
    id: 4,
    address: '6789 Canyon Heights Blvd',
    price: 680000,
    sqft: 1750,
    bedrooms: 3,
    bathrooms: 2,
    daysOnMarket: 18,
    soldDate: '2024-01-08',
    pricePerSqft: 389,
    homeStyle: 'Single Story',
    yearBuilt: 2012,
    insight: 'Great starter home with potential for updates',
    drJanComment:
      'First-time buyers loved the potential and the quiet cul-de-sac location. Great investment opportunity.',
  },
  {
    id: 5,
    address: '3456 Desert Ridge Ln',
    price: 825000,
    sqft: 2200,
    bedrooms: 4,
    bathrooms: 3,
    daysOnMarket: 15,
    soldDate: '2024-01-05',
    pricePerSqft: 375,
    homeStyle: 'Two Story',
    yearBuilt: 2017,
    insight: 'Solar panels included - significant energy savings',
    drJanComment:
      'The solar panels were a major selling point. Buyers appreciated the long-term energy savings.',
  },
  {
    id: 6,
    address: '1234 Mountain View Dr',
    price: 750000,
    sqft: 1950,
    bedrooms: 3,
    bathrooms: 2,
    daysOnMarket: 22,
    soldDate: '2024-01-03',
    pricePerSqft: 385,
    homeStyle: 'Single Story',
    yearBuilt: 2016,
    insight: 'Cul-de-sac location - quiet street with minimal traffic',
    drJanComment:
      'The cul-de-sac location attracted families with young children. Safety and quiet were top priorities.',
  },
];

let sortBy = 'soldDate';
let filterBy = 'all';

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function getDaysOnMarketClass(days) {
  if (days <= 10) return 'fast';
  if (days <= 20) return 'normal';
  return 'slow';
}

$: filteredAndSortedSales = recentSales
  .filter((sale) => {
    if (filterBy === 'all') return true;
    if (filterBy === 'fast') return sale.daysOnMarket <= 10;
    if (filterBy === 'recent') {
      const saleDate = new Date(sale.soldDate);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return saleDate >= thirtyDaysAgo;
    }
    return true;
  })
  .sort((a, b) => {
    switch (sortBy) {
      case 'soldDate':
        return new Date(b.soldDate).getTime() - new Date(a.soldDate).getTime();
      case 'price':
        return b.price - a.price;
      case 'priceAsc':
        return a.price - b.price;
      case 'daysOnMarket':
        return a.daysOnMarket - b.daysOnMarket;
      case 'sqft':
        return b.sqft - a.sqft;
      default:
        return 0;
    }
  });

$: marketStats = {
  averagePrice: Math.round(
    recentSales.reduce((sum, sale) => sum + sale.price, 0) / recentSales.length,
  ),
  averageDaysOnMarket: Math.round(
    recentSales.reduce((sum, sale) => sum + sale.daysOnMarket, 0) /
      recentSales.length,
  ),
  averagePricePerSqft: Math.round(
    recentSales.reduce((sum, sale) => sum + sale.pricePerSqft, 0) /
      recentSales.length,
  ),
  totalSales: recentSales.length,
};
</script>

<svelte:head>
	<title>Lone Mountain Heights Recent Sales | Las Vegas 89129 | Dr. Jan Duffy</title>
	<meta name="description" content="Recent home sales in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy's expert analysis on every transaction with market insights and pricing data." />
	
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
					"name": "Recent Sales",
					"item": "https://www.lonemountainheights.com/sales"
				}
			]
		}
	</script>

	<!-- FAQ Schema - AEO -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(salesFAQs))}
	</script>
</svelte:head>

<main class="sales-page">
	<div class="page-header">
		<div class="container">
			<h1>Lone Mountain Heights Recent Sales | Las Vegas 89129</h1>
			<p>Transparent market data with Dr. Jan Duffy's expert transaction insights</p>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<!-- Market Stats -->
			<div class="market-stats">
				<div class="stat-card">
					<span class="stat-number">{formatPrice(marketStats.averagePrice)}</span>
					<span class="stat-label">Average Sale Price</span>
				</div>
				<div class="stat-card">
					<span class="stat-number">{marketStats.averageDaysOnMarket}</span>
					<span class="stat-label">Avg Days on Market</span>
				</div>
				<div class="stat-card">
					<span class="stat-number">${marketStats.averagePricePerSqft}</span>
					<span class="stat-label">Avg Price per Sq Ft</span>
				</div>
				<div class="stat-card">
					<span class="stat-number">{marketStats.totalSales}</span>
					<span class="stat-label">Total Sales (30 days)</span>
				</div>
			</div>
			
			<!-- Controls -->
			<div class="controls-section">
				<div class="filter-controls">
					<label for="filter-select">Filter by:</label>
					<select id="filter-select" bind:value={filterBy}>
						<option value="all">All Sales</option>
						<option value="fast">Fast Sales (≤10 days)</option>
						<option value="recent">Last 30 Days</option>
					</select>
				</div>
				
				<div class="sort-controls">
					<label for="sort-select">Sort by:</label>
					<select id="sort-select" bind:value={sortBy}>
						<option value="soldDate">Most Recent</option>
						<option value="price">Highest Price</option>
						<option value="priceAsc">Lowest Price</option>
						<option value="daysOnMarket">Days on Market</option>
						<option value="sqft">Largest Homes</option>
					</select>
				</div>
			</div>
			
			<!-- Sales List -->
			<div class="sales-list">
				{#each filteredAndSortedSales as sale}
					<div class="sale-card">
						<div class="sale-header">
							<div class="sale-address">
								<h3>{sale.address}</h3>
								<span class="sale-date">Sold {formatDate(sale.soldDate)}</span>
							</div>
							<div class="sale-price">
								<span class="price">{formatPrice(sale.price)}</span>
								<span class="price-per-sqft">${sale.pricePerSqft}/sqft</span>
							</div>
						</div>
						
						<div class="sale-details">
							<div class="property-specs">
								<span class="spec">{sale.bedrooms} bed</span>
								<span class="spec">{sale.bathrooms} bath</span>
								<span class="spec">{sale.sqft.toLocaleString()} sqft</span>
								<span class="spec">{sale.homeStyle}</span>
								<span class="spec">{sale.yearBuilt}</span>
							</div>
							
							<div class="market-info">
								<div class="days-on-market">
									<span class="days-label">Days on Market:</span>
									<span class="days-value {getDaysOnMarketClass(sale.daysOnMarket)}">
										{sale.daysOnMarket} days
									</span>
								</div>
							</div>
						</div>
						
						<div class="dr-jan-insight">
							<div class="insight-header">
								<span class="insight-icon">💡</span>
								<span class="insight-title">Dr. Jan's Analysis</span>
							</div>
							<p class="insight-text">{sale.drJanComment}</p>
						</div>
					</div>
				{/each}
			</div>
			
			<!-- CTA Section -->
			<FAQSection faqs={salesFAQs} title="Lone Mountain Heights Recent Sales — FAQs" />

			<div class="cta-section">
				<h3>Want to Know What Your Home is Worth?</h3>
				<p>Get a detailed market analysis based on recent sales in your area</p>
				<div class="cta-buttons">
					<a href="/valuation" class="btn btn-primary">Get Home Valuation</a>
					<a href={NAP.telHref} class="btn btn-secondary">Call {NAP.telDisplay}</a>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.sales-page {
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
	
	.market-stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin-bottom: 3rem;
	}
	
	.stat-card {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		text-align: center;
		transition: transform 0.3s ease;
	}
	
	.stat-card:hover {
		transform: translateY(-2px);
	}
	
	.stat-number {
		display: block;
		font-size: 2rem;
		font-weight: 700;
		color: var(--accent-color);
		margin-bottom: 0.5rem;
	}
	
	.stat-label {
		font-size: 0.9rem;
		color: var(--text-light);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	.controls-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: white;
		padding: 1.5rem 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		margin-bottom: 2rem;
	}
	
	.filter-controls,
	.sort-controls {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	
	.filter-controls label,
	.sort-controls label {
		font-weight: 600;
		color: var(--heading-color);
	}
	
	.filter-controls select,
	.sort-controls select {
		padding: 0.5rem 1rem;
		border: 1px solid var(--tertiary-color);
		border-radius: 6px;
		background: white;
	}
	
	.sales-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 3rem;
	}
	
	.sale-card {
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}
	
	.sale-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
	}
	
	.sale-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 2rem;
		border-bottom: 1px solid var(--tertiary-color);
	}
	
	.sale-address h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.sale-date {
		color: var(--text-light);
		font-size: 0.9rem;
	}
	
	.sale-price {
		text-align: right;
	}
	
	.price {
		display: block;
		font-size: 2rem;
		font-weight: 700;
		color: var(--accent-color);
		margin-bottom: 0.25rem;
	}
	
	.price-per-sqft {
		color: var(--text-light);
		font-size: 0.9rem;
	}
	
	.sale-details {
		padding: 0 2rem 1rem;
	}
	
	.property-specs {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	
	.spec {
		background: var(--tertiary-color);
		color: var(--text-color);
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 500;
	}
	
	.market-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.days-on-market {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	
	.days-label {
		font-weight: 600;
		color: var(--heading-color);
	}
	
	.days-value {
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-weight: 600;
		font-size: 0.9rem;
	}
	
	.days-value.fast {
		background: var(--success-green);
		color: white;
	}
	
	.days-value.normal {
		background: var(--warning-orange);
		color: white;
	}
	
	.days-value.slow {
		background: var(--error-red);
		color: white;
	}
	
	.dr-jan-insight {
		background: var(--warm-cream);
		border-left: 4px solid var(--accent-color);
		padding: 1.5rem 2rem;
		margin: 0;
	}
	
	.insight-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}
	
	.insight-icon {
		font-size: 1.2rem;
	}
	
	.insight-title {
		font-weight: 600;
		color: var(--accent-color);
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	.insight-text {
		margin: 0;
		color: var(--text-color);
		line-height: 1.6;
		font-size: 1rem;
	}
	
	.cta-section {
		text-align: center;
		background: white;
		padding: 3rem 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.cta-section h3 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
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
		min-width: 200px;
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
		
		.controls-section {
			flex-direction: column;
			gap: 1rem;
			align-items: stretch;
		}
		
		.filter-controls,
		.sort-controls {
			justify-content: space-between;
		}
		
		.sale-header {
			flex-direction: column;
			gap: 1rem;
		}
		
		.sale-price {
			text-align: left;
		}
		
		.price {
			font-size: 1.5rem;
		}
		
		.property-specs {
			gap: 0.5rem;
		}
		
		.spec {
			font-size: 0.8rem;
			padding: 0.4rem 0.8rem;
		}
		
		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}
		
		.btn {
			min-width: 250px;
		}
	}
</style>
