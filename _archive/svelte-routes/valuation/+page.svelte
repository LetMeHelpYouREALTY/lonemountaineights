<script>
import { generateFAQSchema, NAP } from '$lib/schema.js';
import FAQSection from '$lib/components/FAQSection.svelte';
import { valuationFAQs } from '$lib/faqs.js';

// Mock comparable sales data for display
const comparableSales = [
  {
    address: '4567 Mountain Ridge Dr',
    price: 875000,
    sqft: 2450,
    daysOnMarket: 5,
    soldDate: '2024-01-15',
  },
  {
    address: '7890 Desert View Ln',
    price: 725000,
    sqft: 1890,
    daysOnMarket: 12,
    soldDate: '2024-01-12',
  },
  {
    address: '2345 Lone Mountain Way',
    price: 950000,
    sqft: 3200,
    daysOnMarket: 8,
    soldDate: '2024-01-10',
  },
  {
    address: '6789 Canyon Heights Blvd',
    price: 680000,
    sqft: 1750,
    daysOnMarket: 18,
    soldDate: '2024-01-08',
  },
];

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
</script>

<svelte:head>
	<title>Lone Mountain Heights Home Valuation | Las Vegas 89129 | Dr. Jan Duffy</title>
	<meta name="description" content="Get instant home valuation for Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy's expert market analysis and pricing strategy for your property." />
	
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
					"name": "Home Valuation",
					"item": "https://www.lonemountainheights.com/valuation"
				}
			]
		}
	</script>

	<!-- FAQ Schema - AEO -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(valuationFAQs))}
	</script>
</svelte:head>

<main class="valuation-page">
	<div class="page-header">
		<div class="container">
			<div class="brand-badge">
				<span class="berkshire-logo">Berkshire Hathaway</span>
				<span class="homeservices">HomeServices</span>
			</div>
			<h1>Lone Mountain Heights Home Valuation | Las Vegas 89129</h1>
			<p>Instant home valuation with Dr. Jan Duffy's expert market analysis and advanced technology</p>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<div class="content-layout">
				<!-- RealScout Home Value Widget -->
				<div class="valuation-form-section">
					<div class="form-container">
						<h2>Get Your Home's Value</h2>
						<p class="form-subtitle">Free instant valuation powered by local market data</p>
						
						<div class="realscout-widget-container">
							<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
						</div>
					</div>
				</div>
				
				<!-- Market Information Section -->
				<div class="market-info-section">
					<div class="market-container">
						<h2>Lone Mountain Heights Market Overview</h2>
						
						<div class="market-stats">
							<div class="stat-item">
								<span class="stat-number">$847K</span>
								<span class="stat-label">Average Sale Price</span>
							</div>
							<div class="stat-item">
								<span class="stat-number">23</span>
								<span class="stat-label">Days on Market</span>
							</div>
							<div class="stat-item">
								<span class="stat-number">98%</span>
								<span class="stat-label">List to Sale Ratio</span>
							</div>
							<div class="stat-item">
								<span class="stat-number">47</span>
								<span class="stat-label">Active Listings</span>
							</div>
						</div>
						
						<div class="comparable-sales">
							<h3>Recent Comparable Sales</h3>
							<div class="sales-table">
								<div class="table-header">
									<span>Address</span>
									<span>Sale Price</span>
									<span>Sq Ft</span>
									<span>Days on Market</span>
									<span>Sold Date</span>
								</div>
								{#each comparableSales as sale}
									<div class="table-row">
										<span class="address">{sale.address}</span>
										<span class="price">{formatPrice(sale.price)}</span>
										<span class="sqft">{sale.sqft.toLocaleString()}</span>
										<span class="days">{sale.daysOnMarket} days</span>
										<span class="date">{formatDate(sale.soldDate)}</span>
									</div>
								{/each}
							</div>
						</div>
						
						<FAQSection faqs={valuationFAQs} title="Home Valuation FAQs — Lone Mountain Heights" />

						<div class="cta-section">
							<h3>Ready to Sell Your Home?</h3>
							<p>Get a detailed market analysis and pricing strategy from Dr. Jan Duffy</p>
							<div class="cta-buttons">
								<a href={NAP.telHref} class="btn btn-primary">Call {NAP.telDisplay}</a>
								<a href="/contact" class="btn btn-secondary">Schedule Consultation</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.valuation-page {
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
	
	.brand-badge {
		display: inline-block;
		background: var(--accent-color);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		margin-bottom: 1rem;
		font-size: 0.9rem;
		font-weight: 600;
	}
	
	.berkshire-logo {
		display: block;
		font-weight: 700;
		font-size: 1rem;
	}
	
	.homeservices {
		display: block;
		font-size: 0.8rem;
		opacity: 0.9;
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
	
	.content-layout {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		max-width: 800px;
		margin: 0 auto;
	}
	
	.valuation-form-section {
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}
	
	.form-container {
		padding: 2rem;
	}
	
	.form-container h2 {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.form-subtitle {
		color: var(--text-light);
		margin: 0 0 2rem 0;
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

	/* Market Info Section */
	.market-info-section {
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}

	.market-container {
		padding: 2rem;
	}

	.market-container h2 {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 2rem 0;
		text-align: center;
	}

	.market-stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.stat-item {
		text-align: center;
		padding: 1.5rem 1rem;
		background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
		border-radius: 12px;
		color: white;
	}

	.stat-number {
		display: block;
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.stat-label {
		display: block;
		font-size: 0.9rem;
		opacity: 0.9;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	.form-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}
	
	.form-group {
		display: flex;
		flex-direction: column;
	}
	
	.form-group.full-width {
		grid-column: 1 / -1;
	}
	
	.form-group label {
		font-weight: 600;
		color: var(--heading-color);
		margin-bottom: 0.5rem;
		font-size: 0.9rem;
	}
	
	.form-group input,
	.form-group select {
		padding: 0.75rem;
		border: 1px solid var(--tertiary-color);
		border-radius: 6px;
		font-size: 0.9rem;
		background: white;
		transition: border-color 0.3s ease;
	}
	
	.form-group input:focus,
	.form-group select:focus {
		outline: none;
		border-color: var(--accent-color);
		box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
	}
	
	.upgrades-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 0.75rem;
		margin-top: 0.5rem;
	}
	
	.upgrade-option {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 6px;
		transition: background-color 0.3s ease;
	}
	
	.upgrade-option:hover {
		background: var(--warm-cream);
	}
	
	.upgrade-option input[type="checkbox"] {
		margin: 0;
	}
	
	.form-actions {
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
		border: none;
		cursor: pointer;
		min-width: 150px;
	}
	
	.btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	
	.btn-primary {
		background: var(--accent-color);
		color: white;
		border: 2px solid var(--accent-color);
	}
	
	.btn-primary:hover:not(:disabled) {
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
	
	.results-section {
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}
	
	.results-container {
		padding: 2rem;
	}
	
	.results-container h2 {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 2rem 0;
		text-align: center;
	}
	
	.valuation-summary {
		background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
		color: white;
		padding: 2rem;
		border-radius: 12px;
		margin-bottom: 2rem;
		text-align: center;
	}
	
	.main-valuation {
		margin-bottom: 2rem;
	}
	
	.valuation-label {
		display: block;
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
		opacity: 0.9;
	}
	
	.valuation-amount {
		display: block;
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}
	
	.valuation-range {
		display: block;
		font-size: 1.1rem;
		opacity: 0.9;
	}
	
	.valuation-details {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
	
	.detail-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 6px;
	}
	
	.detail-label {
		font-size: 0.9rem;
		opacity: 0.9;
	}
	
	.detail-value {
		font-weight: 600;
		font-size: 1.1rem;
	}
	
	.detail-value.positive {
		color: var(--success-green);
	}
	
	.recommendations {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
		margin-bottom: 2rem;
	}
	
	.recommendations h3 {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.recommendations ul {
		margin: 0;
		padding-left: 1.5rem;
	}
	
	.recommendations li {
		margin-bottom: 0.5rem;
		color: var(--text-color);
		line-height: 1.5;
	}
	
	.comparable-sales h3 {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.sales-table {
		background: white;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}
	
	.table-header {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: var(--accent-color);
		color: white;
		font-weight: 600;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	.table-row {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
		gap: 1rem;
		padding: 1rem 1.5rem;
		border-bottom: 1px solid var(--tertiary-color);
		align-items: center;
		transition: background-color 0.3s ease;
	}
	
	.table-row:hover {
		background: var(--warm-cream);
	}
	
	.table-row:last-child {
		border-bottom: none;
	}
	
	.address {
		font-weight: 600;
		color: var(--heading-color);
	}
	
	.price {
		font-weight: 700;
		color: var(--accent-color);
	}
	
	.sqft {
		color: var(--text-color);
	}
	
	.days {
		font-weight: 600;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		text-align: center;
		font-size: 0.8rem;
		background: var(--success-green);
		color: white;
	}
	
	.date {
		color: var(--text-light);
		font-size: 0.9rem;
	}
	
	.cta-section {
		text-align: center;
		background: var(--tertiary-color);
		padding: 2rem;
		border-radius: 8px;
	}
	
	.cta-section h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.cta-section p {
		color: var(--text-light);
		margin: 0 0 1.5rem 0;
	}
	
	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}
	
	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2rem;
		}
		
		.market-stats {
			grid-template-columns: repeat(2, 1fr);
		}
		
		.table-header,
		.table-row {
			grid-template-columns: 1fr;
			gap: 0.5rem;
			text-align: left;
		}
		
		.table-header span,
		.table-row span {
			padding: 0.25rem 0;
		}
		
		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}
		
		.btn {
			min-width: 200px;
		}
	}

	@media (max-width: 480px) {
		.market-stats {
			grid-template-columns: 1fr;
		}
		
		.stat-item {
			padding: 1rem;
		}
		
		.stat-number {
			font-size: 1.5rem;
		}
	}
</style>
