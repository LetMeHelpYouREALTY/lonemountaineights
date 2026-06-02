<script>
import { generateBreadcrumbSchema, NAP } from '$lib/schema.js';
import OptimizedImage from '$lib/components/OptimizedImage.svelte';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://www.lonemountainheights.com' },
  { name: 'Blog', url: 'https://www.lonemountainheights.com/blog' },
  {
    name: 'Complete Guide to Living in Lone Mountain Heights',
    url: 'https://www.lonemountainheights.com/blog/complete-guide-living-lone-mountain-heights',
  },
]);

// Table of contents
const tableOfContents = [
  { id: 'overview', title: 'Community Overview', anchor: '#overview' },
  {
    id: 'neighborhoods',
    title: 'Neighborhoods & Subdivisions',
    anchor: '#neighborhoods',
  },
  { id: 'schools', title: 'Schools & Education', anchor: '#schools' },
  { id: 'amenities', title: 'Amenities & Recreation', anchor: '#amenities' },
  { id: 'shopping', title: 'Shopping & Dining', anchor: '#shopping' },
  {
    id: 'transportation',
    title: 'Transportation & Commuting',
    anchor: '#transportation',
  },
  { id: 'real-estate', title: 'Real Estate Market', anchor: '#real-estate' },
  { id: 'cost-of-living', title: 'Cost of Living', anchor: '#cost-of-living' },
  { id: 'pros-cons', title: 'Pros & Cons', anchor: '#pros-cons' },
  {
    id: 'moving-guide',
    title: 'Moving to Lone Mountain Heights',
    anchor: '#moving-guide',
  },
];

// Neighborhood data
const neighborhoods = [
  {
    name: 'Lone Mountain Ranch',
    description: 'Gated community with golf course access and luxury homes',
    priceRange: '$650,000 - $1,200,000',
    features: [
      'Gated Community',
      'Golf Course Views',
      'Luxury Homes',
      'Mountain Views',
    ],
    image:
      '/images/photos/las-vegas-neighborhood.jpg',
  },
  {
    name: 'Desert Vista Estates',
    description: 'Family-friendly community with desert landscaping',
    priceRange: '$550,000 - $950,000',
    features: [
      'Family-Friendly',
      'Desert Landscaping',
      'Community Pool',
      'Walking Trails',
    ],
    image:
      '/images/photos/las-vegas-neighborhood.jpg',
  },
  {
    name: 'Canyon Gate Country Club',
    description: 'Exclusive golf course community with luxury amenities',
    priceRange: '$800,000 - $2,500,000',
    features: [
      'Golf Course',
      'Country Club',
      'Luxury Amenities',
      'Exclusive Access',
    ],
    image:
      '/images/photos/las-vegas-neighborhood.jpg',
  },
];

// School data
const schools = [
  {
    name: 'William G. Geer Elementary',
    type: 'Elementary',
    rating: '9/10',
    description: 'Highly-rated elementary school serving Lone Mountain Heights',
    features: [
      'High Academic Performance',
      'Small Class Sizes',
      'Extracurricular Activities',
    ],
  },
  {
    name: 'Sig Rogich Middle School',
    type: 'Middle School',
    rating: '8/10',
    description: 'Excellent middle school with strong academic programs',
    features: ['STEM Programs', 'Sports Teams', 'Music & Arts'],
  },
  {
    name: 'Liberty High School',
    type: 'High School',
    rating: '8/10',
    description: 'Top-performing high school with college prep programs',
    features: ['AP Courses', 'Honors Programs', 'College Preparation'],
  },
];

// Amenities data
const amenities = [
  {
    category: 'Recreation',
    items: [
      'Canyon Gate Country Club Golf Course',
      'Community Swimming Pools',
      'Walking & Jogging Trails',
      'Parks & Playgrounds',
      'Tennis Courts',
      'Fitness Centers',
    ],
  },
  {
    category: 'Shopping',
    items: [
      'Summerlin Shopping Centers',
      'Downtown Summerlin',
      'Red Rock Resort & Casino',
      'Whole Foods Market',
      'Target & Walmart',
      'Boutique Shops',
    ],
  },
  {
    category: 'Dining',
    items: [
      'Fine Dining Restaurants',
      'Casual Family Restaurants',
      'Coffee Shops & Cafes',
      'Fast Food Options',
      'Food Trucks',
      'Grocery Stores',
    ],
  },
];
</script>

<svelte:head>
	<title>Complete Guide to Living in Lone Mountain Heights | Las Vegas 89129 | Dr. Jan Duffy</title>
	<meta name="description" content="Everything you need to know about living in Lone Mountain Heights, Las Vegas 89129. Complete guide to neighborhoods, schools, amenities, and real estate from Dr. Jan Duffy." />
	
	<!-- Article Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Article",
			"headline": "Complete Guide to Living in Lone Mountain Heights",
			"description": "Comprehensive guide to living in Lone Mountain Heights, Las Vegas 89129",
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
			"mainEntityOfPage": "https://www.lonemountainheights.com/blog/complete-guide-living-lone-mountain-heights",
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

<main class="guide-page">
	<div class="page-header">
		<div class="container">
			<div class="post-meta">
				<span class="post-category">Complete Guide</span>
				<span class="post-date">December 19, 2024</span>
				<span class="post-read-time">15 min read</span>
			</div>
			<h1>Complete Guide to Living in Lone Mountain Heights</h1>
			<p>Everything you need to know about this premier Las Vegas community</p>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<div class="content-grid">
				<!-- Table of Contents -->
				<aside class="table-of-contents">
					<h3>Table of Contents</h3>
					<nav>
						<ul>
							{#each tableOfContents as item}
								<li><a href={item.anchor}>{item.title}</a></li>
							{/each}
						</ul>
					</nav>
				</aside>
				
				<!-- Main Content -->
				<article class="main-content">
					<!-- Community Overview -->
					<section id="overview">
						<h2>Community Overview</h2>
						<p>Lone Mountain Heights is a premier residential community located in the heart of Summerlin, Las Vegas's most desirable master-planned community. This exclusive neighborhood offers a perfect blend of luxury living, natural beauty, and urban convenience, making it one of the most sought-after places to live in Southern Nevada.</p>
						
						<p>Established in the early 2000s, Lone Mountain Heights has evolved into a mature, well-established community with tree-lined streets, manicured landscapes, and a strong sense of community. The area is known for its stunning mountain views, proximity to Red Rock Canyon, and access to world-class amenities.</p>
						
						<div class="highlight-box">
							<h3>Key Facts</h3>
							<ul>
								<li><strong>Location:</strong> Summerlin, Las Vegas, NV 89129</li>
								<li><strong>Established:</strong> Early 2000s</li>
								<li><strong>Population:</strong> Approximately 15,000 residents</li>
								<li><strong>Home Count:</strong> 5,000+ single-family homes</li>
								<li><strong>Average Home Price:</strong> $850,000</li>
								<li><strong>Property Types:</strong> Single-family homes, luxury estates</li>
							</ul>
						</div>
					</section>
					
					<!-- Neighborhoods & Subdivisions -->
					<section id="neighborhoods">
						<h2>Neighborhoods & Subdivisions</h2>
						<p>Lone Mountain Heights is comprised of several distinct neighborhoods, each offering its own unique character and amenities. Here's a breakdown of the main subdivisions:</p>
						
						<div class="neighborhoods-grid">
							{#each neighborhoods as neighborhood}
								<div class="neighborhood-card">
									<div class="neighborhood-image">
										<OptimizedImage src={neighborhood.image} alt={neighborhood.name} width={640} height={400} sizes="(max-width: 768px) 100vw, 50vw" widths={[320, 640, 1024]} />
									</div>
									<div class="neighborhood-content">
										<h3>{neighborhood.name}</h3>
										<p>{neighborhood.description}</p>
										<div class="price-range">{neighborhood.priceRange}</div>
										<div class="features">
											{#each neighborhood.features as feature}
												<span class="feature-tag">{feature}</span>
											{/each}
										</div>
									</div>
								</div>
							{/each}
						</div>
					</section>
					
					<!-- Schools & Education -->
					<section id="schools">
						<h2>Schools & Education</h2>
						<p>Lone Mountain Heights is served by the highly-rated Clark County School District, with several excellent schools in the area. The community is known for its strong educational opportunities and family-friendly environment.</p>
						
						<div class="schools-grid">
							{#each schools as school}
								<div class="school-card">
									<div class="school-header">
										<h3>{school.name}</h3>
										<span class="school-type">{school.type}</span>
										<div class="school-rating">{school.rating}</div>
									</div>
									<p>{school.description}</p>
									<div class="school-features">
										{#each school.features as feature}
											<span class="feature-item">✓ {feature}</span>
										{/each}
									</div>
								</div>
							{/each}
						</div>
						
						<div class="education-note">
							<h3>Education Resources</h3>
							<p>In addition to public schools, Lone Mountain Heights residents have access to several private school options, including:</p>
							<ul>
								<li>Bishop Gorman High School (Catholic, K-12)</li>
								<li>Meadows School (Private, K-12)</li>
								<li>Alexander Dawson School (Private, K-12)</li>
								<li>Several preschool and daycare options</li>
							</ul>
						</div>
					</section>
					
					<!-- Amenities & Recreation -->
					<section id="amenities">
						<h2>Amenities & Recreation</h2>
						<p>Lone Mountain Heights offers an abundance of recreational opportunities and amenities that cater to residents of all ages and interests.</p>
						
						<div class="amenities-grid">
							{#each amenities as category}
								<div class="amenity-category">
									<h3>{category.category}</h3>
									<ul>
										{#each category.items as item}
											<li>{item}</li>
										{/each}
									</ul>
								</div>
							{/each}
						</div>
					</section>
					
					<!-- Shopping & Dining -->
					<section id="shopping">
						<h2>Shopping & Dining</h2>
						<p>Lone Mountain Heights residents enjoy convenient access to some of Las Vegas's best shopping and dining options, all within a short drive from home.</p>
						
						<div class="shopping-dining">
							<div class="shopping-section">
								<h3>Shopping Centers</h3>
								<ul>
									<li><strong>Downtown Summerlin:</strong> Open-air shopping center with 125+ stores and restaurants</li>
									<li><strong>Red Rock Resort & Casino:</strong> Upscale shopping and dining destination</li>
									<li><strong>Summerlin Centre:</strong> Convenient shopping with major retailers</li>
									<li><strong>Trailwood Shopping Center:</strong> Local shopping and services</li>
								</ul>
							</div>
							
							<div class="dining-section">
								<h3>Dining Options</h3>
								<ul>
									<li><strong>Fine Dining:</strong> Multiple upscale restaurants in Downtown Summerlin</li>
									<li><strong>Casual Dining:</strong> Family-friendly restaurants and cafes</li>
									<li><strong>Quick Service:</strong> Fast food and quick-service options</li>
									<li><strong>Grocery Stores:</strong> Whole Foods, Smith's, and other major chains</li>
								</ul>
							</div>
						</div>
					</section>
					
					<!-- Transportation & Commuting -->
					<section id="transportation">
						<h2>Transportation & Commuting</h2>
						<p>Lone Mountain Heights offers excellent connectivity to the rest of Las Vegas and beyond, with convenient access to major highways and transportation options.</p>
						
						<div class="transportation-info">
							<div class="highway-access">
								<h3>Highway Access</h3>
								<ul>
									<li><strong>I-215 Beltway:</strong> 5 minutes - connects to entire Las Vegas Valley</li>
									<li><strong>US-95:</strong> 10 minutes - direct access to downtown Las Vegas</li>
									<li><strong>I-15:</strong> 15 minutes - connects to Los Angeles and Salt Lake City</li>
									<li><strong>Las Vegas Strip:</strong> 20 minutes - world-famous entertainment district</li>
								</ul>
							</div>
							
							<div class="commute-times">
								<h3>Average Commute Times</h3>
								<ul>
									<li><strong>Downtown Las Vegas:</strong> 25 minutes</li>
									<li><strong>Las Vegas Strip:</strong> 20 minutes</li>
									<li><strong>McCarran International Airport:</strong> 30 minutes</li>
									<li><strong>Henderson:</strong> 35 minutes</li>
									<li><strong>North Las Vegas:</strong> 40 minutes</li>
								</ul>
							</div>
						</div>
					</section>
					
					<!-- Real Estate Market -->
					<section id="real-estate">
						<h2>Real Estate Market</h2>
						<p>Lone Mountain Heights has consistently been one of Las Vegas's most stable and desirable real estate markets, with strong appreciation and steady demand.</p>
						
						<div class="market-stats">
							<div class="stat-card">
								<div class="stat-value">$850,000</div>
								<div class="stat-label">Average Home Price</div>
							</div>
							<div class="stat-card">
								<div class="stat-value">+5.2%</div>
								<div class="stat-label">Year-over-Year Appreciation</div>
							</div>
							<div class="stat-card">
								<div class="stat-value">28</div>
								<div class="stat-label">Days on Market</div>
							</div>
							<div class="stat-card">
								<div class="stat-value">45</div>
								<div class="stat-label">Active Listings</div>
							</div>
						</div>
						
						<div class="market-insights">
							<h3>Market Insights</h3>
							<ul>
								<li>Strong demand from both local and out-of-state buyers</li>
								<li>Limited inventory driving competitive market conditions</li>
								<li>Luxury segment ($1M+) showing strong growth</li>
								<li>New construction limited, focusing on existing home sales</li>
								<li>Investment properties showing strong rental yields</li>
							</ul>
						</div>
					</section>
					
					<!-- Cost of Living -->
					<section id="cost-of-living">
						<h2>Cost of Living</h2>
						<p>While Lone Mountain Heights represents a premium lifestyle, the cost of living is competitive compared to other luxury communities in Las Vegas and offers excellent value for the amenities and location.</p>
						
						<div class="cost-breakdown">
							<div class="cost-category">
								<h3>Housing Costs</h3>
								<ul>
									<li><strong>Average Home Price:</strong> $850,000</li>
									<li><strong>Property Taxes:</strong> ~$8,500/year (1% of assessed value)</li>
									<li><strong>HOA Fees:</strong> $50-200/month (varies by subdivision)</li>
									<li><strong>Home Insurance:</strong> $1,200-2,000/year</li>
								</ul>
							</div>
							
							<div class="cost-category">
								<h3>Other Expenses</h3>
								<ul>
									<li><strong>Utilities:</strong> $200-400/month (varies by home size)</li>
									<li><strong>Groceries:</strong> Similar to national average</li>
									<li><strong>Transportation:</strong> Lower than major cities (no state income tax)</li>
									<li><strong>Entertainment:</strong> Wide range of options and prices</li>
								</ul>
							</div>
						</div>
					</section>
					
					<!-- Pros & Cons -->
					<section id="pros-cons">
						<h2>Pros & Cons of Living in Lone Mountain Heights</h2>
						
						<div class="pros-cons-grid">
							<div class="pros">
								<h3>Pros</h3>
								<ul>
									<li>Excellent schools and family-friendly environment</li>
									<li>Beautiful natural setting with mountain views</li>
									<li>Access to world-class amenities and recreation</li>
									<li>Strong community spirit and neighborhood events</li>
									<li>Convenient location with easy highway access</li>
									<li>Stable and appreciating real estate market</li>
									<li>Low crime rate and safe neighborhoods</li>
									<li>No state income tax in Nevada</li>
								</ul>
							</div>
							
							<div class="cons">
								<h3>Cons</h3>
								<ul>
									<li>Higher cost of living compared to other Las Vegas areas</li>
									<li>Limited public transportation options</li>
									<li>Hot summers (though dry heat is more manageable)</li>
									<li>Distance from downtown Las Vegas (20+ minutes)</li>
									<li>Limited nightlife options in immediate area</li>
									<li>HOA fees and restrictions in some subdivisions</li>
									<li>Competitive real estate market with limited inventory</li>
								</ul>
							</div>
						</div>
					</section>
					
					<!-- Moving Guide -->
					<section id="moving-guide">
						<h2>Moving to Lone Mountain Heights</h2>
						<p>If you're considering a move to Lone Mountain Heights, here's a step-by-step guide to help you through the process:</p>
						
						<div class="moving-steps">
							<div class="step">
								<div class="step-number">1</div>
								<div class="step-content">
									<h3>Research & Planning</h3>
									<p>Research neighborhoods, schools, and amenities. Consider your budget, lifestyle needs, and commute requirements.</p>
								</div>
							</div>
							
							<div class="step">
								<div class="step-number">2</div>
								<div class="step-content">
									<h3>Find a Real Estate Agent</h3>
									<p>Work with a local expert like Dr. Jan Duffy who knows the area intimately and can guide you through the process.</p>
								</div>
							</div>
							
							<div class="step">
								<div class="step-number">3</div>
								<div class="step-content">
									<h3>Home Search & Viewing</h3>
									<p>Tour homes in your preferred neighborhoods and price range. Consider both current needs and future growth.</p>
								</div>
							</div>
							
							<div class="step">
								<div class="step-number">4</div>
								<div class="step-content">
									<h3>Make an Offer</h3>
									<p>In a competitive market, be prepared to move quickly with a strong offer and pre-approval letter.</p>
								</div>
							</div>
							
							<div class="step">
								<div class="step-number">5</div>
								<div class="step-content">
									<h3>Closing & Moving</h3>
									<p>Complete the closing process and plan your move. Consider hiring local movers familiar with the area.</p>
								</div>
							</div>
						</div>
						
						<div class="moving-resources">
							<h3>Helpful Resources</h3>
							<ul>
								<li><strong>School Information:</strong> <a href="https://www.ccsd.net">Clark County School District</a></li>
								<li><strong>Utilities:</strong> <a href="https://www.nvenergy.com">NV Energy</a>, <a href="https://www.southernnevada.vegas">Las Vegas Valley Water District</a></li>
								<li><strong>DMV:</strong> <a href="https://dmv.nv.gov">Nevada DMV</a></li>
								<li><strong>Voter Registration:</strong> <a href="https://www.nvsos.gov">Nevada Secretary of State</a></li>
								<li><strong>Local Government:</strong> <a href="https://www.clarkcountynv.gov">Clark County</a></li>
							</ul>
						</div>
					</section>
					
					<!-- Call to Action -->
					<section class="cta-section">
						<h2>Ready to Make Lone Mountain Heights Your Home?</h2>
						<p>Dr. Jan Duffy has helped hundreds of families find their perfect home in Lone Mountain Heights. With deep local knowledge and 500+ successful transactions, she can guide you through every step of the process.</p>
						<div class="cta-buttons">
							<a href={NAP.telHref} class="btn btn-primary">Call {NAP.telDisplay}</a>
							<a href="/homes" class="btn btn-secondary">View Available Homes</a>
							<a href="/contact" class="btn btn-secondary">Schedule Consultation</a>
						</div>
					</section>
				</article>
			</div>
		</div>
	</div>
</main>

<style>
	.guide-page {
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
		grid-template-columns: 1fr 3fr;
		gap: 3rem;
	}
	
	.table-of-contents {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		height: fit-content;
		position: sticky;
		top: 2rem;
	}
	
	.table-of-contents h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.table-of-contents ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.table-of-contents li {
		margin-bottom: 0.5rem;
	}
	
	.table-of-contents a {
		color: var(--text-color);
		text-decoration: none;
		font-size: 0.9rem;
		line-height: 1.4;
		display: block;
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--tertiary-color);
		transition: color 0.3s ease;
	}
	
	.table-of-contents a:hover {
		color: var(--accent-color);
	}
	
	.main-content {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.main-content h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1.5rem 0;
		padding-top: 2rem;
		border-top: 2px solid var(--tertiary-color);
	}
	
	.main-content h2:first-child {
		padding-top: 0;
		border-top: none;
	}
	
	.main-content p {
		font-size: 1.1rem;
		line-height: 1.6;
		color: var(--text-color);
		margin-bottom: 1.5rem;
	}
	
	.highlight-box {
		background: var(--warm-cream);
		padding: 2rem;
		border-radius: 12px;
		margin: 2rem 0;
		border-left: 4px solid var(--accent-color);
	}
	
	.highlight-box h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.highlight-box ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.highlight-box li {
		padding: 0.5rem 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	
	.highlight-box li:last-child {
		border-bottom: none;
	}
	
	.neighborhoods-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin: 2rem 0;
	}
	
	.neighborhood-card {
		background: var(--warm-cream);
		border-radius: 12px;
		overflow: hidden;
		transition: transform 0.3s ease;
	}
	
	.neighborhood-card:hover {
		transform: translateY(-4px);
	}
	
	.neighborhood-image :global(img) {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}
	
	.neighborhood-content {
		padding: 1.5rem;
	}
	
	.neighborhood-content h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.neighborhood-content p {
		color: var(--text-color);
		margin-bottom: 1rem;
		font-size: 1rem;
	}
	
	.price-range {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--accent-color);
		margin-bottom: 1rem;
	}
	
	.features {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	
	.feature-tag {
		background: var(--accent-color);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
	}
	
	.schools-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin: 2rem 0;
	}
	
	.school-card {
		background: var(--warm-cream);
		padding: 2rem;
		border-radius: 12px;
		border-left: 4px solid var(--primary-color);
	}
	
	.school-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}
	
	.school-header h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0;
	}
	
	.school-type {
		background: var(--primary-color);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
	}
	
	.school-rating {
		background: var(--success-green);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 700;
	}
	
	.school-features {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 1rem;
	}
	
	.feature-item {
		font-size: 0.9rem;
		color: var(--text-color);
	}
	
	.education-note {
		background: var(--tertiary-color);
		padding: 2rem;
		border-radius: 12px;
		margin: 2rem 0;
	}
	
	.education-note h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.amenities-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin: 2rem 0;
	}
	
	.amenity-category {
		background: var(--warm-cream);
		padding: 2rem;
		border-radius: 12px;
	}
	
	.amenity-category h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.amenity-category ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.amenity-category li {
		padding: 0.5rem 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		position: relative;
		padding-left: 1.5rem;
	}
	
	.amenity-category li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--success-green);
		font-weight: 700;
	}
	
	.shopping-dining {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 2rem 0;
	}
	
	.shopping-section,
	.dining-section {
		background: var(--warm-cream);
		padding: 2rem;
		border-radius: 12px;
	}
	
	.shopping-section h3,
	.dining-section h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.transportation-info {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 2rem 0;
	}
	
	.highway-access,
	.commute-times {
		background: var(--warm-cream);
		padding: 2rem;
		border-radius: 12px;
	}
	
	.highway-access h3,
	.commute-times h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
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
	}
	
	.market-insights {
		background: var(--tertiary-color);
		padding: 2rem;
		border-radius: 12px;
		margin: 2rem 0;
	}
	
	.market-insights h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.cost-breakdown {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 2rem 0;
	}
	
	.cost-category {
		background: var(--warm-cream);
		padding: 2rem;
		border-radius: 12px;
	}
	
	.cost-category h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.pros-cons-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 2rem 0;
	}
	
	.pros,
	.cons {
		background: var(--warm-cream);
		padding: 2rem;
		border-radius: 12px;
	}
	
	.pros h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--success-green);
		margin: 0 0 1rem 0;
	}
	
	.cons h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: #ff6b6b;
		margin: 0 0 1rem 0;
	}
	
	.moving-steps {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin: 2rem 0;
	}
	
	.step {
		display: flex;
		gap: 1.5rem;
		align-items: flex-start;
	}
	
	.step-number {
		background: var(--accent-color);
		color: white;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1.2rem;
		flex-shrink: 0;
	}
	
	.step-content h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.step-content p {
		color: var(--text-color);
		margin: 0;
	}
	
	.moving-resources {
		background: var(--tertiary-color);
		padding: 2rem;
		border-radius: 12px;
		margin: 2rem 0;
	}
	
	.moving-resources h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.moving-resources a {
		color: var(--accent-color);
		text-decoration: none;
	}
	
	.moving-resources a:hover {
		text-decoration: underline;
	}
	
	.cta-section {
		background: var(--tertiary-color);
		padding: 3rem 2rem;
		border-radius: 12px;
		text-align: center;
		margin-top: 3rem;
	}
	
	.cta-section h2 {
		color: var(--heading-color);
		margin-bottom: 1rem;
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
		
		.content-grid {
			grid-template-columns: 1fr;
		}
		
		.table-of-contents {
			position: static;
			order: -1;
		}
		
		.neighborhoods-grid,
		.schools-grid,
		.amenities-grid {
			grid-template-columns: 1fr;
		}
		
		.shopping-dining,
		.transportation-info,
		.cost-breakdown,
		.pros-cons-grid {
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
