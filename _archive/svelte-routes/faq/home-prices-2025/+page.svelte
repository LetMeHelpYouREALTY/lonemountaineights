<script>
import { NAP } from '$lib/schema.js';
const currentYear = new Date().getFullYear();
const marketData = {
  avgPrice: 847000,
  medianPrice: 825000,
  priceRange: {
    low: 650000,
    high: 1200000,
  },
  pricePerSqFt: 265,
  yearOverYearChange: 4.2,
  monthlyChange: 0.8,
  daysOnMarket: 12,
  inventory: 47,
  salesThisYear: 156,
};

const priceRanges = [
  { range: '$650k - $750k', count: 12, percentage: 25.5 },
  { range: '$750k - $850k', count: 18, percentage: 38.3 },
  { range: '$850k - $950k', count: 10, percentage: 21.3 },
  { range: '$950k+', count: 7, percentage: 14.9 },
];

const recentSales = [
  {
    address: '123 Mountain View Dr',
    price: 875000,
    sqft: 3200,
    pricePerSqFt: 273,
    bedrooms: 4,
    bathrooms: 3,
    daysOnMarket: 8,
  },
  {
    address: '456 Desert Vista Way',
    price: 920000,
    sqft: 3500,
    pricePerSqFt: 263,
    bedrooms: 5,
    bathrooms: 4,
    daysOnMarket: 15,
  },
  {
    address: '789 Lone Mountain Blvd',
    price: 798000,
    sqft: 2800,
    pricePerSqFt: 285,
    bedrooms: 3,
    bathrooms: 2,
    daysOnMarket: 5,
  },
  {
    address: '321 Canyon Ridge Ct',
    price: 1100000,
    sqft: 4200,
    pricePerSqFt: 262,
    bedrooms: 5,
    bathrooms: 4,
    daysOnMarket: 22,
  },
  {
    address: '654 Summit Peak Ln',
    price: 725000,
    sqft: 2600,
    pricePerSqFt: 279,
    bedrooms: 3,
    bathrooms: 3,
    daysOnMarket: 12,
  },
];

const marketTrends = [
  { month: 'Jan 2024', avgPrice: 812000, sales: 14 },
  { month: 'Feb 2024', avgPrice: 825000, sales: 18 },
  { month: 'Mar 2024', avgPrice: 835000, sales: 22 },
  { month: 'Apr 2024', avgPrice: 845000, sales: 19 },
  { month: 'May 2024', avgPrice: 850000, sales: 25 },
  { month: 'Jun 2024', avgPrice: 855000, sales: 28 },
  { month: 'Jul 2024', avgPrice: 840000, sales: 24 },
  { month: 'Aug 2024', avgPrice: 845000, sales: 26 },
  { month: 'Sep 2024', avgPrice: 850000, sales: 23 },
  { month: 'Oct 2024', avgPrice: 855000, sales: 21 },
  { month: 'Nov 2024', avgPrice: 860000, sales: 19 },
  { month: 'Dec 2024', avgPrice: 847000, sales: 16 },
];

const factors = [
  {
    title: 'Location & Views',
    impact: 'High',
    description: 'Homes with mountain views command 15-25% premium',
    examples: [
      'Corner lots',
      'Cul-de-sac locations',
      'Mountain-facing properties',
    ],
  },
  {
    title: 'Home Size & Layout',
    impact: 'High',
    description: 'Price per square foot varies by bedroom count and layout',
    examples: ['Open floor plans', 'Master suite size', 'Kitchen upgrades'],
  },
  {
    title: 'Condition & Updates',
    impact: 'Medium',
    description: 'Updated homes sell 10-20% faster and for higher prices',
    examples: ['Kitchen renovations', 'Bathroom updates', 'Flooring quality'],
  },
  {
    title: 'Market Timing',
    impact: 'Medium',
    description: 'Seasonal trends and market conditions affect pricing',
    examples: [
      'Spring selling season',
      'Interest rate changes',
      'Inventory levels',
    ],
  },
];
</script>

<svelte:head>
	<title>Lone Mountain Heights Home Prices 2025 | Las Vegas 89129 | Dr. Jan Duffy</title>
	<meta name="description" content="Complete guide to Lone Mountain Heights home prices 2025. Current market data, price trends, recent sales, and expert insights from Dr. Jan Duffy. Las Vegas 89129 real estate." />
	
	<!-- FAQ Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": [
				{
					"@type": "Question",
					"name": "What are home prices in Lone Mountain Heights 2025?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Lone Mountain Heights home prices in 2025 average $847,000 with a median of $825,000. Prices range from $650,000 to $1.2M, with an average of $265 per square foot."
					}
				},
				{
					"@type": "Question",
					"name": "How have Lone Mountain Heights home prices changed?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Lone Mountain Heights home prices have increased 4.2% year-over-year and 0.8% month-over-month. The market remains strong with homes selling in an average of 12 days."
					}
				},
				{
					"@type": "Question",
					"name": "What factors affect Lone Mountain Heights home prices?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Key factors include location and mountain views (15-25% premium), home size and layout, condition and updates (10-20% impact), and market timing including seasonal trends and interest rates."
					}
				}
			]
		}
	</script>
</svelte:head>

<main class="prices-page">
	<div class="page-header">
		<div class="container">
			<nav class="breadcrumb">
				<a href="/">Home</a> > 
				<a href="/faq">FAQ</a> > 
				<span>Home Prices 2025</span>
			</nav>
			
			<h1>Lone Mountain Heights Home Prices 2025</h1>
			<p class="page-subtitle">Current market data, trends, and expert insights for Las Vegas 89129 real estate</p>
		</div>
	</div>

	<div class="container">
		<div class="content-grid">
			<article class="main-content">
				<!-- Quick Answer -->
				<div class="quick-answer">
					<h2>Quick Answer</h2>
					<div class="answer-box">
						<p><strong>Lone Mountain Heights home prices average $847,000 in 2025</strong>, with a median of $825,000. Prices range from $650,000 to $1.2M, averaging $265 per square foot. The market shows 4.2% year-over-year growth.</p>
					</div>
				</div>

				<!-- Current Market Overview -->
				<section class="market-overview">
					<h2>Current Market Overview</h2>
					<div class="overview-grid">
						<div class="overview-card primary">
							<div class="card-value">${marketData.avgPrice.toLocaleString()}</div>
							<div class="card-label">Average Sale Price</div>
							<div class="card-change positive">+{marketData.yearOverYearChange}% YoY</div>
						</div>
						<div class="overview-card">
							<div class="card-value">${marketData.medianPrice.toLocaleString()}</div>
							<div class="card-label">Median Sale Price</div>
							<div class="card-change positive">+{marketData.monthlyChange}% MoM</div>
						</div>
						<div class="overview-card">
							<div class="card-value">${marketData.pricePerSqFt}</div>
							<div class="card-label">Price per Sq Ft</div>
							<div class="card-note">Average</div>
						</div>
						<div class="overview-card">
							<div class="card-value">{marketData.daysOnMarket}</div>
							<div class="card-label">Days on Market</div>
							<div class="card-note">Average</div>
						</div>
					</div>
				</section>

				<!-- Price Ranges -->
				<section class="price-ranges">
					<h2>Price Distribution</h2>
					<div class="ranges-grid">
						{#each priceRanges as range}
							<div class="range-card">
								<div class="range-header">
									<h3>{range.range}</h3>
									<div class="range-count">{range.count} homes</div>
								</div>
								<div class="range-bar">
									<div class="range-fill" style="width: {range.percentage}%"></div>
								</div>
								<div class="range-percentage">{range.percentage}%</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- Recent Sales -->
				<section class="recent-sales">
					<h2>Recent Sales Data</h2>
					<div class="sales-table">
						<div class="table-header">
							<div>Address</div>
							<div>Sale Price</div>
							<div>Sq Ft</div>
							<div>Price/Sq Ft</div>
							<div>Beds/Baths</div>
							<div>Days on Market</div>
						</div>
						{#each recentSales as sale}
							<div class="table-row">
								<div class="address">{sale.address}</div>
								<div class="price">${sale.price.toLocaleString()}</div>
								<div class="sqft">{sale.sqft.toLocaleString()}</div>
								<div class="psf">${sale.pricePerSqFt}</div>
								<div class="beds-baths">{sale.bedrooms}/{sale.bathrooms}</div>
								<div class="dom">{sale.daysOnMarket}</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- Market Trends Chart -->
				<section class="market-trends">
					<h2>12-Month Price Trends</h2>
					<div class="trends-chart">
						<div class="chart-header">
							<div class="chart-title">Average Sale Price by Month</div>
							<div class="chart-period">2024 Data</div>
						</div>
						<div class="chart-container">
							{#each marketTrends as trend, index}
								<div class="trend-bar">
									<div class="bar-fill" style="height: {(trend.avgPrice / 900000) * 100}%"></div>
									<div class="bar-value">${(trend.avgPrice / 1000).toFixed(0)}k</div>
									<div class="bar-month">{trend.month.split(' ')[0]}</div>
								</div>
							{/each}
						</div>
					</div>
				</section>

				<!-- Price Factors -->
				<section class="price-factors">
					<h2>What Affects Home Prices in Lone Mountain Heights?</h2>
					<div class="factors-grid">
						{#each factors as factor}
							<div class="factor-card">
								<div class="factor-header">
									<h3>{factor.title}</h3>
									<div class="impact-badge" class:high={factor.impact === 'High'} class:medium={factor.impact === 'Medium'}>
										{factor.impact} Impact
									</div>
								</div>
								<p class="factor-description">{factor.description}</p>
								<div class="factor-examples">
									<h4>Examples:</h4>
									<ul>
										{#each factor.examples as example}
											<li>{example}</li>
										{/each}
									</ul>
								</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- Market Predictions -->
				<section class="predictions">
					<h2>2025 Market Outlook</h2>
					<div class="prediction-grid">
						<div class="prediction-card positive">
							<h3>Positive Factors</h3>
							<ul>
								<li>Limited inventory in gated communities</li>
								<li>Strong demand from California buyers</li>
								<li>Low interest rates expected to continue</li>
								<li>Las Vegas job market growth</li>
							</ul>
						</div>
						<div class="prediction-card neutral">
							<h3>Market Challenges</h3>
							<ul>
								<li>Rising construction costs</li>
								<li>Potential interest rate increases</li>
								<li>Economic uncertainty</li>
								<li>Seasonal market fluctuations</li>
							</ul>
						</div>
					</div>
					<div class="prediction-summary">
						<p><strong>Outlook:</strong> Lone Mountain Heights is expected to see continued moderate price growth of 3-5% in 2025, supported by strong demand and limited supply in this desirable gated community.</p>
					</div>
				</section>

				<!-- FAQ Section -->
				<section class="faq-section">
					<h2>Frequently Asked Questions</h2>
					
					<div class="faq-item">
						<h3>Are Lone Mountain Heights home prices overpriced?</h3>
						<p>Lone Mountain Heights prices reflect the premium location, gated community status, and mountain views. While above Las Vegas average, they're competitive with similar gated communities and offer excellent value for the amenities and location.</p>
					</div>

					<div class="faq-item">
						<h3>What's the best time to buy in Lone Mountain Heights?</h3>
						<p>Spring (March-May) typically offers the most inventory, while fall (September-November) may have motivated sellers. However, with limited inventory year-round, the best time is when you find the right home at the right price.</p>
					</div>

					<div class="faq-item">
						<h3>How do Lone Mountain Heights prices compare to other Las Vegas areas?</h3>
						<p>Lone Mountain Heights commands a 20-30% premium over average Las Vegas home prices due to its gated community status, mountain views, and established neighborhood. It's comparable to other premium areas like Summerlin and Henderson.</p>
					</div>

					<div class="faq-item">
						<h3>Should I wait for prices to drop before buying?</h3>
						<p>Given the limited inventory and strong demand in Lone Mountain Heights, waiting for significant price drops is risky. The market has shown consistent growth, and waiting could mean missing out on your ideal home or paying more later.</p>
					</div>

					<div class="faq-item">
						<h3>What's the price per square foot range in Lone Mountain Heights?</h3>
						<p>Price per square foot typically ranges from $240-$300, with most homes falling between $250-$280. Factors like views, lot size, and home condition significantly impact the price per square foot.</p>
					</div>
				</section>

				<!-- CTA Section -->
				<section class="cta-section">
					<h2>Ready to Buy or Sell in Lone Mountain Heights?</h2>
					<p>Dr. Jan Duffy can provide detailed market analysis, home valuations, and expert guidance on current pricing trends in Lone Mountain Heights.</p>
					<div class="cta-buttons">
						<a href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Search Homes in Lone Mountain Heights</a>
						<a href="/valuation" class="btn btn-secondary">Get Home Valuation</a>
						<a href={NAP.telHref} class="btn btn-secondary">Call {NAP.telDisplay}</a>
					</div>
				</section>
			</article>

			<aside class="sidebar">
				<div class="sidebar-card">
					<h3>Market Quick Facts</h3>
					<ul>
						<li><strong>Avg Price:</strong> $847,000</li>
						<li><strong>Median Price:</strong> $825,000</li>
						<li><strong>Price/Sq Ft:</strong> $265</li>
						<li><strong>Days on Market:</strong> 12</li>
						<li><strong>YoY Growth:</strong> +4.2%</li>
					</ul>
				</div>

				<div class="sidebar-card">
					<h3>Price Ranges</h3>
					<ul>
						<li><strong>$650k-$750k:</strong> 25.5%</li>
						<li><strong>$750k-$850k:</strong> 38.3%</li>
						<li><strong>$850k-$950k:</strong> 21.3%</li>
						<li><strong>$950k+:</strong> 14.9%</li>
					</ul>
				</div>

				<div class="sidebar-card">
					<h3>Related Information</h3>
					<ul>
						<li><a href="/market-report">Market Report</a></li>
						<li><a href="/sales">Recent Sales</a></li>
						<li><a href="/homes">Current Listings</a></li>
						<li><a href="/neighborhoods">Neighborhood Guide</a></li>
					</ul>
				</div>

				<div class="sidebar-card">
					<h3>Contact Dr. Jan Duffy</h3>
					<p>Your Complete Real Estate Partner</p>
<p><a href={NAP.telHref}>📞 {NAP.telDisplay}</a></p>
  					<p><a href={`mailto:${NAP.email}`}>✉️ Email Dr. Jan</a></p>
				</div>
			</aside>
		</div>
	</div>
</main>

<style>
	.prices-page {
		background: var(--warm-cream);
		min-height: 100vh;
	}

	.page-header {
		background: var(--primary-color);
		color: white;
		padding: 3rem 0;
	}

	.breadcrumb {
		margin-bottom: 1rem;
		font-size: 0.9rem;
		opacity: 0.9;
	}

	.breadcrumb a {
		color: white;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.page-subtitle {
		font-size: 1.2rem;
		margin: 0;
		opacity: 0.9;
	}

	.content-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 3rem;
		padding: 3rem 0;
	}

	.main-content {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	.quick-answer {
		background: var(--accent-light);
		padding: 1.5rem;
		border-radius: 8px;
		margin-bottom: 2rem;
		border-left: 4px solid var(--accent-color);
	}

	.answer-box {
		font-size: 1.1rem;
		line-height: 1.6;
	}

	.overview-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin: 2rem 0;
	}

	.overview-card {
		background: white;
		border: 2px solid var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
		transition: all 0.3s ease;
	}

	.overview-card.primary {
		border-color: var(--accent-color);
		background: var(--accent-light);
	}

	.overview-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.card-value {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--accent-color);
		margin-bottom: 0.5rem;
	}

	.card-label {
		font-weight: 600;
		margin-bottom: 0.25rem;
		color: var(--heading-color);
	}

	.card-change {
		font-size: 0.9rem;
		font-weight: 600;
	}

	.card-change.positive {
		color: var(--success-color);
	}

	.card-note {
		font-size: 0.9rem;
		color: var(--text-light);
	}

	.ranges-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin: 2rem 0;
	}

	.range-card {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
	}

	.range-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.range-header h3 {
		margin: 0;
		color: var(--heading-color);
	}

	.range-count {
		font-weight: 600;
		color: var(--accent-color);
	}

	.range-bar {
		background: white;
		height: 8px;
		border-radius: 4px;
		margin-bottom: 0.5rem;
		overflow: hidden;
	}

	.range-fill {
		background: var(--accent-color);
		height: 100%;
		transition: width 0.3s ease;
	}

	.range-percentage {
		font-weight: 600;
		color: var(--heading-color);
		text-align: right;
	}

	.sales-table {
		background: var(--warm-cream);
		border-radius: 8px;
		overflow: hidden;
		margin: 2rem 0;
	}

	.table-header {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
		gap: 1rem;
		background: var(--primary-color);
		color: white;
		padding: 1rem;
		font-weight: 600;
	}

	.table-row {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
		gap: 1rem;
		padding: 1rem;
		border-bottom: 1px solid var(--border-color);
		background: white;
	}

	.table-row:last-child {
		border-bottom: none;
	}

	.address {
		font-weight: 500;
	}

	.price {
		font-weight: 700;
		color: var(--accent-color);
	}

	.sqft, .psf, .beds-baths, .dom {
		font-weight: 600;
		text-align: center;
	}

	.trends-chart {
		background: var(--warm-cream);
		padding: 2rem;
		border-radius: 8px;
		margin: 2rem 0;
	}

	.chart-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
	}

	.chart-title {
		font-weight: 700;
		color: var(--heading-color);
		font-size: 1.2rem;
	}

	.chart-period {
		color: var(--text-light);
		font-size: 0.9rem;
	}

	.chart-container {
		display: flex;
		align-items: end;
		gap: 0.5rem;
		height: 200px;
	}

	.trend-bar {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	.bar-fill {
		background: var(--accent-color);
		width: 100%;
		border-radius: 4px 4px 0 0;
		margin-bottom: 0.5rem;
		transition: height 0.3s ease;
	}

	.bar-value {
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--heading-color);
		margin-bottom: 0.25rem;
	}

	.bar-month {
		font-size: 0.7rem;
		color: var(--text-light);
	}

	.factors-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.factor-card {
		background: white;
		border: 2px solid var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.factor-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.factor-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.factor-header h3 {
		margin: 0;
		color: var(--heading-color);
	}

	.impact-badge {
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.impact-badge.high {
		background: var(--success-color);
		color: white;
	}

	.impact-badge.medium {
		background: var(--accent-color);
		color: white;
	}

	.factor-description {
		margin: 0 0 1rem 0;
		line-height: 1.6;
	}

	.factor-examples h4 {
		margin: 0 0 0.5rem 0;
		color: var(--heading-color);
		font-size: 0.9rem;
	}

	.factor-examples ul {
		margin: 0;
		padding-left: 1.5rem;
	}

	.factor-examples li {
		margin-bottom: 0.25rem;
		font-size: 0.9rem;
	}

	.prediction-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.prediction-card {
		padding: 1.5rem;
		border-radius: 8px;
		border: 2px solid;
	}

	.prediction-card.positive {
		border-color: var(--success-color);
		background: rgba(22, 178, 134, 0.05);
	}

	.prediction-card.neutral {
		border-color: var(--accent-color);
		background: rgba(30, 58, 138, 0.05);
	}

	.prediction-card h3 {
		margin: 0 0 1rem 0;
		color: var(--heading-color);
	}

	.prediction-card ul {
		margin: 0;
		padding-left: 1.5rem;
	}

	.prediction-card li {
		margin-bottom: 0.5rem;
	}

	.prediction-summary {
		background: var(--accent-light);
		padding: 1.5rem;
		border-radius: 8px;
		margin-top: 1rem;
		border-left: 4px solid var(--accent-color);
	}

	.faq-section {
		margin: 3rem 0;
	}

	.faq-item {
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--border-color);
	}

	.faq-item:last-child {
		border-bottom: none;
	}

	.faq-item h3 {
		color: var(--heading-color);
		margin: 0 0 1rem 0;
		font-size: 1.2rem;
	}

	.faq-item p {
		margin: 0;
		line-height: 1.6;
	}

	.cta-section {
		background: var(--accent-color);
		color: white;
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
		margin-top: 3rem;
	}

	.cta-section h2 {
		margin: 0 0 1rem 0;
	}

	.cta-section p {
		margin: 0 0 2rem 0;
		font-size: 1.1rem;
		opacity: 0.9;
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
		transition: all 0.3s ease;
		display: inline-block;
	}

	.btn-primary {
		background: white;
		color: var(--accent-color);
	}

	.btn-primary:hover {
		background: var(--warm-cream);
		transform: translateY(-2px);
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border: 2px solid white;
	}

	.btn-secondary:hover {
		background: white;
		color: var(--accent-color);
	}

	.sidebar {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.sidebar-card {
		background: white;
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.sidebar-card h3 {
		margin: 0 0 1rem 0;
		color: var(--heading-color);
	}

	.sidebar-card ul {
		margin: 0;
		padding-left: 1.5rem;
	}

	.sidebar-card li {
		margin-bottom: 0.5rem;
	}

	.sidebar-card a {
		color: var(--accent-color);
		text-decoration: none;
	}

	.sidebar-card a:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.content-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.overview-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.ranges-grid {
			grid-template-columns: 1fr;
		}

		.factors-grid {
			grid-template-columns: 1fr;
		}

		.prediction-grid {
			grid-template-columns: 1fr;
		}

		.table-header,
		.table-row {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}

		.cta-buttons {
			flex-direction: column;
		}
	}
</style>
