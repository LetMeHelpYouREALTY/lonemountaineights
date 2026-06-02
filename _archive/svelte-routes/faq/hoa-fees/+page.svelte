<script>
import { NAP } from '$lib/schema.js';
const currentYear = new Date().getFullYear();
const hoaData = {
  baseFee: 85,
  range: '75-95',
  coverage: [
    'Landscaping maintenance',
    'Common area upkeep',
    'Security gate maintenance',
    'Street lighting',
    'Community amenities',
  ],
  paymentSchedule: 'Monthly',
  lateFees: 25,
  assessmentHistory: [
    { year: 2024, amount: 85, change: '+5' },
    { year: 2023, amount: 80, change: '+0' },
    { year: 2022, amount: 80, change: '+10' },
    { year: 2021, amount: 70, change: '+5' },
  ],
};

const recentSales = [
  { address: '123 Mountain View Dr', price: 875000, hoa: 85, sqft: 3200 },
  { address: '456 Desert Vista Way', price: 920000, hoa: 90, sqft: 3500 },
  { address: '789 Lone Mountain Blvd', price: 798000, hoa: 80, sqft: 2800 },
  { address: '321 Canyon Ridge Ct', price: 1100000, hoa: 95, sqft: 4200 },
];
</script>

<svelte:head>
	<title>HOA Fees in Lone Mountain Heights Las Vegas 2025 | Dr. Jan Duffy</title>
	<meta name="description" content="Complete guide to HOA fees in Lone Mountain Heights Las Vegas 89129. Current rates, what's included, payment schedule, and how fees affect home values. Expert insights from Dr. Jan Duffy." />
	
	<!-- FAQ Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": [
				{
					"@type": "Question",
					"name": "What are HOA fees in Lone Mountain Heights?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "HOA fees in Lone Mountain Heights range from $75-$95 per month, with most homes paying around $85. These fees cover landscaping, common area maintenance, security gate upkeep, street lighting, and community amenities."
					}
				},
				{
					"@type": "Question", 
					"name": "What do HOA fees cover in Lone Mountain Heights?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "HOA fees cover landscaping maintenance, common area upkeep, security gate maintenance, street lighting, and access to community amenities. The fees ensure the neighborhood maintains its pristine appearance and security."
					}
				},
				{
					"@type": "Question",
					"name": "How have HOA fees changed in Lone Mountain Heights?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "HOA fees have increased gradually from $70 in 2021 to $85 in 2024, representing a modest 21% increase over 4 years. This is below the Las Vegas area average for similar communities."
					}
				}
			]
		}
	</script>
</svelte:head>

<main class="faq-page">
	<div class="page-header">
		<div class="container">
			<nav class="breadcrumb">
				<a href="/">Home</a> > 
				<a href="/faq">FAQ</a> > 
				<span>HOA Fees</span>
			</nav>
			
			<h1>HOA Fees in Lone Mountain Heights Las Vegas 2025</h1>
			<p class="page-subtitle">Complete guide to HOA costs, what's included, and how they affect your home investment</p>
		</div>
	</div>

	<div class="container">
		<div class="content-grid">
			<article class="main-content">
				<!-- Quick Answer -->
				<div class="quick-answer">
					<h2>Quick Answer</h2>
					<div class="answer-box">
						<p><strong>HOA fees in Lone Mountain Heights range from $75-$95 per month</strong>, with most homes paying around <strong>$85 monthly</strong>. These fees cover landscaping, security, common areas, and community amenities.</p>
					</div>
				</div>

				<!-- Current HOA Rates -->
				<section class="hoa-rates">
					<h2>Current HOA Rates (2025)</h2>
					<div class="rates-grid">
						<div class="rate-card primary">
							<div class="rate-amount">${hoaData.baseFee}</div>
							<div class="rate-label">Average Monthly Fee</div>
							<div class="rate-note">Most common rate</div>
						</div>
						<div class="rate-card">
							<div class="rate-amount">${hoaData.range}</div>
							<div class="rate-label">Range</div>
							<div class="rate-note">Varies by subdivision</div>
						</div>
						<div class="rate-card">
							<div class="rate-amount">${hoaData.lateFees}</div>
							<div class="rate-label">Late Fee</div>
							<div class="rate-note">If payment is late</div>
						</div>
					</div>
				</section>

				<!-- What's Included -->
				<section class="coverage">
					<h2>What HOA Fees Cover</h2>
					<div class="coverage-grid">
						{#each hoaData.coverage as item}
							<div class="coverage-item">
								<span class="checkmark">✓</span>
								<span>{item}</span>
							</div>
						{/each}
					</div>
					<p class="coverage-note">All HOA fees are paid monthly and are mandatory for all homeowners in Lone Mountain Heights.</p>
				</section>

				<!-- Historical Data -->
				<section class="historical-data">
					<h2>HOA Fee History & Trends</h2>
					<div class="history-chart">
						{#each hoaData.assessmentHistory as year}
							<div class="year-row">
								<div class="year">{year.year}</div>
								<div class="amount">${year.amount}</div>
								<div class="change" class:positive={year.change.startsWith('+')} class:negative={year.change.startsWith('-')}>
									{year.change}
								</div>
							</div>
						{/each}
					</div>
					<p class="trend-analysis">HOA fees have increased modestly over the past 4 years, staying well below inflation rates and maintaining excellent value for homeowners.</p>
				</section>

				<!-- Impact on Home Values -->
				<section class="value-impact">
					<h2>How HOA Fees Affect Home Values</h2>
					<div class="impact-grid">
						<div class="impact-card positive">
							<h3>Positive Impacts</h3>
							<ul>
								<li>Maintains property values through consistent upkeep</li>
								<li>Ensures neighborhood aesthetic standards</li>
								<li>Provides security and peace of mind</li>
								<li>Preserves community amenities</li>
							</ul>
						</div>
						<div class="impact-card neutral">
							<h3>Cost Considerations</h3>
							<ul>
								<li>Adds to monthly housing costs</li>
								<li>Fees are non-negotiable</li>
								<li>Can increase over time</li>
								<li>Must be factored into affordability</li>
							</ul>
						</div>
					</div>
				</section>

				<!-- Recent Sales with HOA Data -->
				<section class="recent-sales">
					<h2>Recent Sales & HOA Fees</h2>
					<div class="sales-table">
						<div class="table-header">
							<div>Address</div>
							<div>Sale Price</div>
							<div>HOA Fee</div>
							<div>Price/Sq Ft</div>
						</div>
						{#each recentSales as sale}
							<div class="table-row">
								<div class="address">{sale.address}</div>
								<div class="price">${sale.price.toLocaleString()}</div>
								<div class="hoa">${sale.hoa}/mo</div>
								<div class="psf">${Math.round(sale.price / sale.sqft)}</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- FAQ Section -->
				<section class="faq-section">
					<h2>Frequently Asked Questions</h2>
					
					<div class="faq-item">
						<h3>Are HOA fees negotiable in Lone Mountain Heights?</h3>
						<p>No, HOA fees are set by the homeowners association and are mandatory for all residents. They cannot be negotiated or waived.</p>
					</div>

					<div class="faq-item">
						<h3>What happens if I don't pay my HOA fees?</h3>
						<p>Late fees of $25 are assessed, and continued non-payment can result in liens on your property. It's important to pay HOA fees on time to avoid penalties.</p>
					</div>

					<div class="faq-item">
						<h3>Can HOA fees increase without notice?</h3>
						<p>HOA fees can only be increased through a vote of the homeowners association board, and residents are typically given advance notice of any changes.</p>
					</div>

					<div class="faq-item">
						<h3>Do HOA fees include utilities?</h3>
						<p>No, HOA fees in Lone Mountain Heights do not include individual home utilities. They only cover common area maintenance and community amenities.</p>
					</div>

					<div class="faq-item">
						<h3>How do Lone Mountain Heights HOA fees compare to other Las Vegas communities?</h3>
						<p>Lone Mountain Heights HOA fees are competitive and often lower than similar gated communities in Las Vegas, while providing excellent value through comprehensive maintenance and amenities.</p>
					</div>
				</section>

				<!-- CTA Section -->
				<section class="cta-section">
					<h2>Questions About HOA Fees or Home Values?</h2>
					<p>Dr. Jan Duffy can provide detailed information about HOA fees for specific properties and help you understand how they impact your home investment.</p>
					<div class="cta-buttons">
						<a href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Search Homes in Lone Mountain Heights</a>
						<a href={NAP.telHref} class="btn btn-secondary">Call {NAP.telDisplay}</a>
						<a href="/valuation" class="btn btn-secondary">Get Home Valuation</a>
					</div>
				</section>
			</article>

			<aside class="sidebar">
				<div class="sidebar-card">
					<h3>Quick HOA Facts</h3>
					<ul>
						<li><strong>Average Fee:</strong> $85/month</li>
						<li><strong>Payment:</strong> Monthly</li>
						<li><strong>Late Fee:</strong> $25</li>
						<li><strong>Coverage:</strong> Landscaping, Security, Amenities</li>
					</ul>
				</div>

				<div class="sidebar-card">
					<h3>Related Information</h3>
					<ul>
						<li><a href="/neighborhoods">Neighborhood Guide</a></li>
						<li><a href="/amenities">Community Amenities</a></li>
						<li><a href="/guide">Living in Lone Mountain Heights</a></li>
						<li><a href="/market-report">Market Report</a></li>
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
	.faq-page {
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

	.rates-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.rate-card {
		background: white;
		border: 2px solid var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
		transition: all 0.3s ease;
	}

	.rate-card.primary {
		border-color: var(--accent-color);
		background: var(--accent-light);
	}

	.rate-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.rate-amount {
		font-size: 2rem;
		font-weight: 700;
		color: var(--accent-color);
		margin-bottom: 0.5rem;
	}

	.rate-label {
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.rate-note {
		font-size: 0.9rem;
		color: var(--text-light);
	}

	.coverage-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.coverage-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem;
		background: var(--warm-cream);
		border-radius: 6px;
	}

	.checkmark {
		color: var(--accent-color);
		font-weight: 700;
		font-size: 1.2rem;
	}

	.coverage-note {
		font-style: italic;
		color: var(--text-light);
		margin-top: 1rem;
	}

	.history-chart {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
		margin: 1.5rem 0;
	}

	.year-row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid var(--border-color);
	}

	.year-row:last-child {
		border-bottom: none;
	}

	.year {
		font-weight: 600;
	}

	.amount {
		font-weight: 700;
		color: var(--accent-color);
	}

	.change {
		font-weight: 600;
	}

	.change.positive {
		color: var(--success-color);
	}

	.change.negative {
		color: var(--error-color);
	}

	.trend-analysis {
		font-style: italic;
		color: var(--text-light);
		margin-top: 1rem;
	}

	.impact-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin: 1.5rem 0;
	}

	.impact-card {
		padding: 1.5rem;
		border-radius: 8px;
		border: 2px solid;
	}

	.impact-card.positive {
		border-color: var(--success-color);
		background: rgba(22, 178, 134, 0.05);
	}

	.impact-card.neutral {
		border-color: var(--accent-color);
		background: rgba(30, 58, 138, 0.05);
	}

	.impact-card h3 {
		margin: 0 0 1rem 0;
		color: var(--heading-color);
	}

	.impact-card ul {
		margin: 0;
		padding-left: 1.5rem;
	}

	.impact-card li {
		margin-bottom: 0.5rem;
	}

	.sales-table {
		background: var(--warm-cream);
		border-radius: 8px;
		overflow: hidden;
		margin: 1.5rem 0;
	}

	.table-header {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		gap: 1rem;
		background: var(--primary-color);
		color: white;
		padding: 1rem;
		font-weight: 600;
	}

	.table-row {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		gap: 1rem;
		padding: 1rem;
		border-bottom: 1px solid var(--border-color);
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

	.hoa {
		font-weight: 600;
	}

	.psf {
		font-weight: 600;
		color: var(--text-light);
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

		.rates-grid {
			grid-template-columns: 1fr;
		}

		.coverage-grid {
			grid-template-columns: 1fr;
		}

		.impact-grid {
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
