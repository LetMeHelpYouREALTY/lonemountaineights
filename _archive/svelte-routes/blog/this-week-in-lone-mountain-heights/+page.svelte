<script>
import { generateBreadcrumbSchema, NAP } from '$lib/schema.js';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://www.lonemountainheights.com' },
  { name: 'Blog', url: 'https://www.lonemountainheights.com/blog' },
  {
    name: 'This Week in Lone Mountain Heights',
    url: 'https://www.lonemountainheights.com/blog/this-week-in-lone-mountain-heights',
  },
]);

// Weekly market data (in a real app, this would come from an API)
const weeklyData = {
  date: 'December 19, 2024',
  newListings: 12,
  closedSales: 8,
  averagePrice: '$850,000',
  priceChange: '+2.3%',
  daysOnMarket: 28,
  inventoryLevel: 'Low',
  marketCondition: "Seller's Market",
};

// Recent sales data
const recentSales = [
  {
    address: '1234 Mountain View Dr',
    price: '$875,000',
    bedrooms: 4,
    bathrooms: 3,
    sqft: '2,850',
    daysOnMarket: 15,
    subdivision: 'Lone Mountain Ranch',
  },
  {
    address: '5678 Desert Vista Way',
    price: '$725,000',
    bedrooms: 3,
    bathrooms: 2,
    sqft: '2,200',
    daysOnMarket: 22,
    subdivision: 'Desert Vista Estates',
  },
  {
    address: '9012 Canyon Gate Blvd',
    price: '$1,150,000',
    bedrooms: 5,
    bathrooms: 4,
    sqft: '3,500',
    daysOnMarket: 31,
    subdivision: 'Canyon Gate Country Club',
  },
];

// Market insights
const marketInsights = [
  'Inventory remains tight with only 45 active listings across Lone Mountain Heights',
  'Average days on market decreased to 28 days, indicating strong buyer demand',
  'Luxury properties ($1M+) showing increased activity with 3 sales this week',
  'Interest rates stabilizing around 6.5% for 30-year fixed mortgages',
  'Spring selling season expected to bring more inventory in Q1 2025',
];

// Neighborhood news
const neighborhoodNews = [
  'New walking trail completed connecting Desert Vista Estates to community park',
  'Canyon Gate Country Club announces golf course renovation project for 2025',
  'William G. Geer Elementary receives state recognition for academic excellence',
  'New restaurant opening in Summerlin Center, 5 minutes from Lone Mountain Heights',
];
</script>

<svelte:head>
	<title>This Week in Lone Mountain Heights: December 2024 Market Update | Dr. Jan Duffy</title>
	<meta name="description" content="Stay updated with the latest Lone Mountain Heights real estate market data, recent sales, and neighborhood news. Weekly insights from Dr. Jan Duffy, your local expert." />
	
	<!-- Article Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Article",
			"headline": "This Week in Lone Mountain Heights: December 2024 Market Update",
			"description": "Weekly real estate market update for Lone Mountain Heights, Las Vegas 89129",
			"author": {
				"@type": "Person",
				"name": "Dr. Jan Duffy",
				"url": "https://www.lonemountainheights.com/about"
			},
			"publisher": {
				"@type": "Organization",
				"name": "Berkshire Hathaway HomeServices Lone Mountain Heights Team",
				"url": "https://www.lonemountainheights.com"
			},
			"datePublished": "2024-12-19",
			"dateModified": "2024-12-19",
			"mainEntityOfPage": "https://www.lonemountainheights.com/blog/this-week-in-lone-mountain-heights",
			"about": {
				"@type": "Place",
				"name": "Lone Mountain Heights",
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Las Vegas",
					"addressRegion": "NV",
					"postalCode": "89129"
				}
			}
		}
	</script>

	<!-- Breadcrumb Schema -->
	<script type="application/ld+json">
		{JSON.stringify(breadcrumbSchema)}
	</script>
</svelte:head>

<main class="blog-post-page">
	<div class="page-header">
		<div class="container">
			<div class="post-meta">
				<span class="post-category">This Week in Lone Mountain Heights</span>
				<span class="post-date">{weeklyData.date}</span>
				<span class="post-read-time">5 min read</span>
			</div>
			<h1>This Week in Lone Mountain Heights: December 2024 Market Update</h1>
			<p>Weekly real estate insights and neighborhood news from Dr. Jan Duffy</p>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<div class="content-grid">
				<!-- Main Content -->
				<article class="main-content">
					<!-- Market Overview -->
					<section class="market-overview">
						<h2>Market Overview</h2>
						<p>Lone Mountain Heights continues to show strong market performance as we approach the end of 2024. This week brought significant activity with <strong>{weeklyData.newListings} new listings</strong> and <strong>{weeklyData.closedSales} closed sales</strong>, maintaining our position as one of Las Vegas's most desirable communities.</p>
						
						<div class="market-stats">
							<div class="stat-card">
								<div class="stat-value">{weeklyData.averagePrice}</div>
								<div class="stat-label">Average Sale Price</div>
								<div class="stat-change positive">{weeklyData.priceChange}</div>
							</div>
							<div class="stat-card">
								<div class="stat-value">{weeklyData.daysOnMarket}</div>
								<div class="stat-label">Days on Market</div>
								<div class="stat-change negative">-5 days</div>
							</div>
							<div class="stat-card">
								<div class="stat-value">{weeklyData.inventoryLevel}</div>
								<div class="stat-label">Inventory Level</div>
								<div class="stat-change neutral">Stable</div>
							</div>
							<div class="stat-card">
								<div class="stat-value">{weeklyData.marketCondition}</div>
								<div class="stat-label">Market Condition</div>
								<div class="stat-change positive">Strong</div>
							</div>
						</div>
					</section>
					
					<!-- Recent Sales -->
					<section class="recent-sales">
						<h2>Recent Sales This Week</h2>
						<p>Here are the notable sales that closed in Lone Mountain Heights this week:</p>
						
						<div class="sales-list">
							{#each recentSales as sale}
								<div class="sale-item">
									<div class="sale-address">{sale.address}</div>
									<div class="sale-details">
										<span class="sale-price">{sale.price}</span>
										<span class="sale-specs">{sale.bedrooms} bed / {sale.bathrooms} bath / {sale.sqft} sq ft</span>
										<span class="sale-subdivision">{sale.subdivision}</span>
									</div>
									<div class="sale-meta">
										<span class="sale-days">{sale.daysOnMarket} days on market</span>
									</div>
								</div>
							{/each}
						</div>
					</section>
					
					<!-- Market Insights -->
					<section class="market-insights">
						<h2>Market Insights & Analysis</h2>
						<ul class="insights-list">
							{#each marketInsights as insight}
								<li>{insight}</li>
							{/each}
						</ul>
					</section>
					
					<!-- Neighborhood News -->
					<section class="neighborhood-news">
						<h2>Neighborhood News & Updates</h2>
						<ul class="news-list">
							{#each neighborhoodNews as news}
								<li>{news}</li>
							{/each}
						</ul>
					</section>
					
					<!-- Call to Action -->
					<section class="cta-section">
						<h2>Ready to Buy or Sell in Lone Mountain Heights?</h2>
						<p>With market conditions favoring sellers and strong buyer demand, now is an excellent time to make your move. Contact Dr. Jan Duffy for personalized market analysis and expert guidance.</p>
						<div class="cta-buttons">
							<a href={NAP.telHref} class="btn btn-primary">Call {NAP.telDisplay}</a>
							<a href="/homes" class="btn btn-secondary">View Available Homes</a>
							<a href="/valuation" class="btn btn-secondary">Get Home Valuation</a>
						</div>
					</section>
				</article>
				
				<!-- Sidebar -->
				<aside class="sidebar">
					<!-- Market Trends Widget -->
					<div class="widget">
						<h3>Market Trends</h3>
						<div class="trend-item">
							<span class="trend-label">Price Trend</span>
							<span class="trend-value positive">↗ +2.3%</span>
						</div>
						<div class="trend-item">
							<span class="trend-label">Inventory</span>
							<span class="trend-value negative">↘ -15%</span>
						</div>
						<div class="trend-item">
							<span class="trend-label">Days on Market</span>
							<span class="trend-value positive">↘ -5 days</span>
						</div>
					</div>
					
					<!-- Quick Stats Widget -->
					<div class="widget">
						<h3>Quick Stats</h3>
						<div class="quick-stat">
							<div class="stat-number">45</div>
							<div class="stat-label">Active Listings</div>
						</div>
						<div class="quick-stat">
							<div class="stat-number">28</div>
							<div class="stat-label">Avg Days on Market</div>
						</div>
						<div class="quick-stat">
							<div class="stat-number">6.5%</div>
							<div class="stat-label">Interest Rate</div>
						</div>
					</div>
					
					<!-- Related Posts Widget -->
					<div class="widget">
						<h3>Related Posts</h3>
						<div class="related-posts">
							<a href="/blog/november-market-analysis" class="related-post">
								<h4>November 2024 Market Analysis</h4>
								<p>Deep dive into market trends and predictions</p>
							</a>
							<a href="/blog/canyon-gate-country-club-spotlight" class="related-post">
								<h4>Canyon Gate Country Club Spotlight</h4>
								<p>Exclusive lifestyle and amenities</p>
							</a>
							<a href="/blog/winter-home-staging-tips" class="related-post">
								<h4>Winter Home Staging Tips</h4>
								<p>Make your home shine in winter</p>
							</a>
						</div>
					</div>
				</aside>
			</div>
		</div>
	</div>
</main>

<style>
	.blog-post-page {
		min-height: 100vh;
		background: var(--warm-cream);
	}
	
	.page-header {
		background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
		color: white;
		padding: 3rem 2rem;
	}
	
	.container {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.post-meta {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
		font-size: 0.9rem;
		opacity: 0.9;
	}
	
	.post-category {
		font-weight: 600;
	}
	
	.page-header h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		line-height: 1.2;
	}
	
	.page-header p {
		font-size: 1.2rem;
		margin: 0;
		opacity: 0.9;
	}
	
	.page-content {
		padding: 2rem 0;
	}
	
	.content-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 3rem;
	}
	
	.main-content {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.main-content h2 {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1.5rem 0;
	}
	
	.main-content p {
		font-size: 1.1rem;
		line-height: 1.6;
		color: var(--text-color);
		margin-bottom: 1.5rem;
	}
	
	.market-stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin: 2rem 0;
	}
	
	.stat-card {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 12px;
		text-align: center;
	}
	
	.stat-value {
		font-size: 2rem;
		font-weight: 700;
		color: var(--accent-color);
		margin-bottom: 0.5rem;
	}
	
	.stat-label {
		font-size: 0.9rem;
		color: var(--text-color);
		margin-bottom: 0.5rem;
	}
	
	.stat-change {
		font-size: 0.8rem;
		font-weight: 600;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
	}
	
	.stat-change.positive {
		background: var(--success-green);
		color: white;
	}
	
	.stat-change.negative {
		background: #ff6b6b;
		color: white;
	}
	
	.stat-change.neutral {
		background: var(--tertiary-color);
		color: var(--text-color);
	}
	
	.sales-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 1.5rem 0;
	}
	
	.sale-item {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid var(--accent-color);
	}
	
	.sale-address {
		font-weight: 700;
		color: var(--heading-color);
		margin-bottom: 0.5rem;
	}
	
	.sale-details {
		display: flex;
		gap: 1rem;
		margin-bottom: 0.5rem;
		font-size: 0.9rem;
	}
	
	.sale-price {
		font-weight: 700;
		color: var(--accent-color);
	}
	
	.sale-meta {
		font-size: 0.8rem;
		color: var(--text-light);
	}
	
	.insights-list,
	.news-list {
		list-style: none;
		padding: 0;
		margin: 1.5rem 0;
	}
	
	.insights-list li,
	.news-list li {
		padding: 0.75rem 0;
		border-bottom: 1px solid var(--tertiary-color);
		position: relative;
		padding-left: 1.5rem;
	}
	
	.insights-list li::before {
		content: '📊';
		position: absolute;
		left: 0;
	}
	
	.news-list li::before {
		content: '📰';
		position: absolute;
		left: 0;
	}
	
	.cta-section {
		background: var(--tertiary-color);
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
		margin-top: 2rem;
	}
	
	.cta-section h2 {
		color: var(--heading-color);
		margin-bottom: 1rem;
	}
	
	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 1.5rem;
	}
	
	.sidebar {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	
	.widget {
		background: white;
		padding: 1.5rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.widget h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.trend-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem 0;
		border-bottom: 1px solid var(--tertiary-color);
	}
	
	.trend-item:last-child {
		border-bottom: none;
	}
	
	.trend-label {
		color: var(--text-color);
	}
	
	.trend-value {
		font-weight: 700;
	}
	
	.trend-value.positive {
		color: var(--success-green);
	}
	
	.trend-value.negative {
		color: #ff6b6b;
	}
	
	.quick-stat {
		text-align: center;
		padding: 1rem 0;
		border-bottom: 1px solid var(--tertiary-color);
	}
	
	.quick-stat:last-child {
		border-bottom: none;
	}
	
	.stat-number {
		font-size: 2rem;
		font-weight: 700;
		color: var(--accent-color);
		margin-bottom: 0.25rem;
	}
	
	.stat-label {
		font-size: 0.9rem;
		color: var(--text-color);
	}
	
	.related-posts {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	.related-post {
		text-decoration: none;
		color: inherit;
		padding: 1rem;
		background: var(--warm-cream);
		border-radius: 8px;
		transition: transform 0.3s ease;
	}
	
	.related-post:hover {
		transform: translateY(-2px);
	}
	
	.related-post h4 {
		font-size: 1rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.related-post p {
		font-size: 0.9rem;
		color: var(--text-color);
		margin: 0;
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
		
		.content-grid {
			grid-template-columns: 1fr;
		}
		
		.market-stats {
			grid-template-columns: repeat(2, 1fr);
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
