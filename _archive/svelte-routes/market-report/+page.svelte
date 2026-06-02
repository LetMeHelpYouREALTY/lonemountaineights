<script>
import { generateFAQSchema, NAP } from '$lib/schema.js';
import FAQSection from '$lib/components/FAQSection.svelte';
import { marketReportFAQs } from '$lib/faqs.js';
// Market report data
const marketData = {
  monthlyStats: {
    avgPrice: 847000,
    medianPrice: 825000,
    pricePerSqft: 345,
    daysOnMarket: 12,
    monthsSupply: 2.1,
    priceChange: 5.2,
    volumeChange: 8.7,
  },
  vsMetro: {
    priceDifference: 12.5,
    daysDifference: -8,
    supplyDifference: -1.2,
  },
  trends: [
    {
      month: 'January 2024',
      avgPrice: 820000,
      daysOnMarket: 15,
      unitsSold: 8,
    },
    {
      month: 'February 2024',
      avgPrice: 835000,
      daysOnMarket: 13,
      unitsSold: 12,
    },
    {
      month: 'March 2024',
      avgPrice: 847000,
      daysOnMarket: 12,
      unitsSold: 15,
    },
  ],
  buyerPreferences: [
    'Updated kitchens with granite countertops',
    'Open floor plans and modern layouts',
    'Energy-efficient features and solar panels',
    'Outdoor living spaces and pools',
    'Garage space for 2+ cars',
  ],
  sellerAdvice: [
    'Price competitively - market is moving fast',
    'Stage homes to highlight modern features',
    'Consider minor updates for maximum ROI',
    'Professional photography is essential',
    'Be prepared for multiple offers',
  ],
};

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function formatPercent(value) {
  return `${value > 0 ? '+' : ''}${value}%`;
}
</script>

<svelte:head>
	<title>Lone Mountain Heights Market Report | Las Vegas 89129 | Dr. Jan Duffy</title>
	<meta name="description" content="Latest Lone Mountain Heights real estate market data for Las Vegas 89129. Price trends, inventory analysis, and expert insights from Dr. Jan Duffy." />
	
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
					"name": "Market Report",
					"item": "https://www.lonemountainheights.com/market-report"
				}
			]
		}
	</script>

	<!-- FAQ Schema - AEO -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(marketReportFAQs))}
	</script>
</svelte:head>

<main class="market-report-page">
	<div class="page-header">
		<div class="container">
			<h1>Lone Mountain Heights Market Report | Las Vegas 89129</h1>
			<p>Expert real estate market analysis and data from Dr. Jan Duffy</p>
			<span class="report-date">March 2024</span>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<!-- Key Metrics -->
			<section class="metrics-section">
				<h2>Key Market Metrics</h2>
				<div class="metrics-grid">
					<div class="metric-card">
						<span class="metric-value">{formatPrice(marketData.monthlyStats.avgPrice)}</span>
						<span class="metric-label">Average Sale Price</span>
						<span class="metric-change positive">{formatPercent(marketData.monthlyStats.priceChange)}</span>
					</div>
					<div class="metric-card">
						<span class="metric-value">{marketData.monthlyStats.daysOnMarket}</span>
						<span class="metric-label">Days on Market</span>
						<span class="metric-change negative">-3 days</span>
					</div>
					<div class="metric-card">
						<span class="metric-value">${marketData.monthlyStats.pricePerSqft}</span>
						<span class="metric-label">Price per Sq Ft</span>
						<span class="metric-change positive">+$15</span>
					</div>
					<div class="metric-card">
						<span class="metric-value">{marketData.monthlyStats.monthsSupply}</span>
						<span class="metric-label">Months of Supply</span>
						<span class="metric-change negative">-0.3</span>
					</div>
				</div>
			</section>
			
			<!-- Market Comparison -->
			<section class="comparison-section">
				<h2>Lone Mountain Heights vs Las Vegas Metro</h2>
				<div class="comparison-grid">
					<div class="comparison-item">
						<span class="comparison-label">Average Price</span>
						<span class="comparison-value positive">{formatPercent(marketData.vsMetro.priceDifference)} higher</span>
					</div>
					<div class="comparison-item">
						<span class="comparison-label">Days on Market</span>
						<span class="comparison-value positive">{marketData.vsMetro.daysDifference} days faster</span>
					</div>
					<div class="comparison-item">
						<span class="comparison-label">Inventory Level</span>
						<span class="comparison-value positive">{formatPercent(marketData.vsMetro.supplyDifference)} lower supply</span>
					</div>
				</div>
			</section>
			
			<!-- Price Trends -->
			<section class="trends-section">
				<h2>Price Trends</h2>
				<div class="trends-chart">
					{#each marketData.trends as trend, index}
						<div class="trend-item">
							<span class="trend-month">{trend.month}</span>
							<div class="trend-bar">
								<div class="trend-fill" style="width: {(trend.avgPrice / 900000) * 100}%"></div>
							</div>
							<span class="trend-price">{formatPrice(trend.avgPrice)}</span>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- Buyer Preferences -->
			<section class="preferences-section">
				<h2>What Buyers Are Looking For Right Now</h2>
				<div class="preferences-grid">
					{#each marketData.buyerPreferences as preference}
						<div class="preference-item">
							<span class="preference-icon">✓</span>
							<span class="preference-text">{preference}</span>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- Seller Advice -->
			<section class="advice-section">
				<h2>Dr. Jan's Pricing Strategy for Sellers</h2>
				<div class="advice-grid">
					{#each marketData.sellerAdvice as advice}
						<div class="advice-item">
							<span class="advice-icon">💡</span>
							<span class="advice-text">{advice}</span>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- CTA Section -->
			<FAQSection faqs={marketReportFAQs} title="Lone Mountain Heights Market — FAQs" />

			<section class="cta-section">
				<h2>Get Your Personalized Market Analysis</h2>
				<p>Dr. Jan Duffy provides detailed market analysis for your specific property</p>
				<div class="cta-buttons">
					<a href="/valuation" class="btn btn-primary">Get Home Valuation</a>
					<a href={NAP.telHref} class="btn btn-secondary">Call {NAP.telDisplay}</a>
				</div>
			</section>
		</div>
	</div>
</main>

<style>
	.market-report-page {
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
		margin: 0 0 1rem 0;
		opacity: 0.9;
	}
	
	.report-date {
		background: rgba(255, 255, 255, 0.2);
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 600;
	}
	
	.page-content {
		padding: 2rem 0;
	}
	
	.metrics-section,
	.comparison-section,
	.trends-section,
	.preferences-section,
	.advice-section {
		background: white;
		margin-bottom: 2rem;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.metrics-section h2,
	.comparison-section h2,
	.trends-section h2,
	.preferences-section h2,
	.advice-section h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 2rem 0;
	}
	
	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
	}
	
	.metric-card {
		background: var(--warm-cream);
		padding: 2rem;
		border-radius: 8px;
		text-align: center;
		border-left: 4px solid var(--accent-color);
	}
	
	.metric-value {
		display: block;
		font-size: 2rem;
		font-weight: 700;
		color: var(--accent-color);
		margin-bottom: 0.5rem;
	}
	
	.metric-label {
		display: block;
		font-size: 0.9rem;
		color: var(--text-light);
		margin-bottom: 0.5rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	.metric-change {
		font-size: 0.9rem;
		font-weight: 600;
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
	}
	
	.metric-change.positive {
		background: var(--success-green);
		color: white;
	}
	
	.metric-change.negative {
		background: var(--error-red);
		color: white;
	}
	
	.comparison-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
	}
	
	.comparison-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--warm-cream);
		padding: 1rem 1.5rem;
		border-radius: 8px;
	}
	
	.comparison-label {
		font-weight: 600;
		color: var(--heading-color);
	}
	
	.comparison-value {
		font-weight: 700;
		font-size: 1.1rem;
	}
	
	.comparison-value.positive {
		color: var(--success-green);
	}
	
	.trends-chart {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	.trend-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: var(--warm-cream);
		border-radius: 8px;
	}
	
	.trend-month {
		min-width: 150px;
		font-weight: 600;
		color: var(--heading-color);
	}
	
	.trend-bar {
		flex: 1;
		height: 20px;
		background: var(--tertiary-color);
		border-radius: 10px;
		overflow: hidden;
	}
	
	.trend-fill {
		height: 100%;
		background: linear-gradient(90deg, var(--accent-color), var(--accent-light));
		border-radius: 10px;
		transition: width 0.3s ease;
	}
	
	.trend-price {
		min-width: 120px;
		text-align: right;
		font-weight: 700;
		color: var(--accent-color);
	}
	
	.preferences-grid,
	.advice-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
	}
	
	.preference-item,
	.advice-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: var(--warm-cream);
		border-radius: 8px;
	}
	
	.preference-icon,
	.advice-icon {
		font-size: 1.2rem;
		color: var(--success-green);
	}
	
	.preference-text,
	.advice-text {
		color: var(--text-color);
		line-height: 1.5;
	}
	
	.cta-section {
		text-align: center;
		background: var(--tertiary-color);
		padding: 3rem 2rem;
		border-radius: 12px;
	}
	
	.cta-section h2 {
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
		
		.metrics-grid {
			grid-template-columns: 1fr;
		}
		
		.comparison-grid {
			grid-template-columns: 1fr;
		}
		
		.trend-item {
			flex-direction: column;
			align-items: stretch;
			gap: 0.5rem;
		}
		
		.trend-month,
		.trend-price {
			min-width: auto;
			text-align: center;
		}
		
		.preferences-grid,
		.advice-grid {
			grid-template-columns: 1fr;
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
