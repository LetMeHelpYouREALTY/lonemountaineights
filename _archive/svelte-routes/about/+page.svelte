<script>
import { generateBreadcrumbSchema, generateFAQSchema, NAP } from '$lib/schema.js';
import FAQSection from '$lib/components/FAQSection.svelte';
import OptimizedImage from '$lib/components/OptimizedImage.svelte';
import { getAbsoluteImageUrl } from '$lib/cloudflare-images.js';
import { aboutFAQs } from '$lib/faqs.js';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://lonemountainheights.com' },
  { name: 'About', url: 'https://lonemountainheights.com/about' },
]);

// Build Person schema with properly resolved Cloudflare image URLs
const agentImageUrl = getAbsoluteImageUrl('/images/agents/dr-jan-duffy.jpg', 400);
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Jan Duffy",
  "jobTitle": "Head of Berkshire Hathaway HomeServices Lone Mountain Heights Team",
  "description": "Your complete real estate partner specializing in Lone Mountain Heights, Las Vegas 89129 with comprehensive local expertise.",
  "url": "https://www.lonemountainheights.com/about",
  "telephone": "702-222-1964",
  "email": "jan@lonemountainheights.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lone Mountain Heights",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89129",
    "addressCountry": "US"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Berkshire Hathaway HomeServices Nevada Properties",
    "url": "https://www.berkshirehathawayhomeservices.com"
  },
  "knowsAbout": [
    "Lone Mountain Heights Real Estate",
    "Las Vegas 89129 Properties",
    "Luxury Home Sales",
    "Market Analysis",
    "Home Valuation",
    "Real Estate Investment",
    "Berkshire Hathaway HomeServices"
  ],
  "hasCredential": [
    "Real Estate License",
    "Berkshire Hathaway HomeServices Certification",
    "Luxury Home Specialist",
    "Market Analysis Expert"
  ],
  "award": "Your Complete Real Estate Partner",
  "image": {
    "@type": "ImageObject",
    "url": agentImageUrl,
    "width": 400,
    "height": 400,
    "caption": "Dr. Jan Duffy - Lone Mountain Heights Real Estate Expert",
    "contentUrl": agentImageUrl
  }
};

const berkshireAdvantages = [
  {
    title: 'Data-Driven Valuations',
    description:
      'Advanced valuation technology provides data-backed home price estimates, trends, and comparable sales in any neighborhood.',
    icon: '📊',
  },
  {
    title: 'Luxury Market Focus',
    description:
      'Access to global luxury reports and resources for affluent buyers and sellers, positioning listings with maximum visibility and prestige.',
    icon: '🏆',
  },
  {
    title: 'Forever Agent Commitment',
    description:
      "Every agent is trained to support clients' long-term real estate needs, emphasizing lifelong service, not just sales.",
    icon: '🤝',
  },
  {
    title: 'Advanced Marketing Tools',
    description:
      'Leverages digital marketing platforms like Zillow Showcase, delivering up to 75% more page views for listings and accelerating the sales process.',
    icon: '📈',
  },
  {
    title: 'Global Network Access',
    description:
      '1,600+ offices across 13 countries and 4 continents, representing over 50,000 real estate professionals with $154.7 billion in sales volume.',
    icon: '🌍',
  },
  {
    title: 'Community Impact',
    description:
      'Involved in charitable initiatives such as supporting young cancer patients, reinforcing a commitment to service within their regions.',
    icon: '❤️',
  },
];

const networkStats = {
  offices: '1,600+',
  countries: '13',
  professionals: '50,000+',
  salesVolume: '$154.7B',
};
</script>

<svelte:head>
	<title>About Dr. Jan Duffy | Lone Mountain Heights Expert | Las Vegas 89129</title>
	<meta name="description" content="Meet Dr. Jan Duffy, your complete real estate partner in Lone Mountain Heights, Las Vegas 89129. Berkshire Hathaway team leader, local market specialist, and your forever agent." />
	
	<!-- Person Schema for Dr. Jan Duffy -->
	<script type="application/ld+json">
		{JSON.stringify(personSchema)}
	</script>

	<!-- Organization Schema for Berkshire Hathaway Team -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Berkshire Hathaway HomeServices Lone Mountain Heights Team",
			"description": "Premier real estate team specializing in Lone Mountain Heights, Las Vegas 89129",
			"url": "https://www.lonemountainheights.com",
			"telephone": "702-222-1964",
			"email": "jan@lonemountainheights.com",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Lone Mountain Heights",
				"addressLocality": "Las Vegas",
				"addressRegion": "NV",
				"postalCode": "89129",
				"addressCountry": "US"
			},
			"parentOrganization": {
				"@type": "Organization",
				"name": "Berkshire Hathaway HomeServices Nevada Properties",
				"url": "https://www.berkshirehathawayhomeservices.com"
			},
			"founder": {
				"@type": "Person",
				"name": "Dr. Jan Duffy"
			},
			"numberOfEmployees": "1",
			"areaServed": {
				"@type": "City",
				"name": "Las Vegas"
			},
			"serviceType": "Real Estate Services"
		}
	</script>

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
					"name": "About",
					"item": "https://www.lonemountainheights.com/about"
				}
			]
		}
	</script>

	<!-- FAQ Schema - AEO positioning Dr. Jan Duffy as expert -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(aboutFAQs))}
	</script>
</svelte:head>

<main class="about-page">
	<div class="page-header">
		<div class="container">
			<div class="brand-badge">
				<span class="berkshire-logo">Berkshire Hathaway</span>
				<span class="homeservices">HomeServices</span>
			</div>
			<div class="team-leadership">
				<span class="team-head">Head of the Berkshire Hathaway HomeServices</span>
				<span class="lone-mountain-team">Lone Mountain Heights Team</span>
			</div>
			<h1>About Dr. Jan Duffy | Lone Mountain Heights Expert</h1>
			<p>Berkshire Hathaway HomeServices Lone Mountain Heights Team Leader</p>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<!-- Agent Profile -->
			<section class="agent-profile">
				<div class="profile-content">
					<div class="profile-text">
						<h2>Meet Your Team Head & Forever Agent</h2>
						<p>Dr. Jan Duffy leads the Berkshire Hathaway HomeServices Lone Mountain Heights Team, serving as your complete real estate partner in the Lone Mountain area. As your dedicated Forever Agent, Dr. Jan is committed to supporting your long-term real estate needs throughout your lifetime, bringing unparalleled local expertise combined with the power of a global network and team resources.</p>
						
						<div class="credentials">
							<h3>Credentials & Expertise</h3>
							<ul>
								<li>Head of Berkshire Hathaway HomeServices Lone Mountain Heights Team</li>
								<li>500+ Lone Mountain Area Transactions</li>
								<li>Lone Mountain Heights Neighborhood Expert</li>
								<li>Team Leadership & Management</li>
								<li>Data-Driven Market Analysis Specialist</li>
								<li>Luxury Real Estate Specialist</li>
								<li>Advanced Valuation Technology Certified</li>
								<li>Global Network Access & Resources</li>
							</ul>
						</div>
					</div>
					
					<div class="profile-image">
						<OptimizedImage src="/images/agents/dr-jan-duffy.jpg" alt="Dr. Jan Duffy - Real Estate Expert" width={400} height={500} sizes="(max-width: 768px) 100vw, 400px" widths={[320, 400, 800]} />
						<div class="contact-card">
							<h4>Contact Dr. Jan</h4>
							<p><a href={NAP.telHref}>📞 {NAP.telDisplay}</a></p>
							<p><a href={`mailto:${NAP.email}`}>✉️ {NAP.email}</a></p>
							<p>Available 7 Days a Week</p>
						</div>
					</div>
				</div>
			</section>
			
			<!-- Berkshire Hathaway Advantages -->
			<section class="advantages-section">
				<h2>Why Choose Berkshire Hathaway HomeServices?</h2>
				<p>Dr. Jan Duffy leverages the power of the world's most trusted real estate network to provide you with unmatched advantages in today's competitive market.</p>
				
				<div class="advantages-grid">
					{#each berkshireAdvantages as advantage}
						<div class="advantage-card">
							<div class="advantage-icon">{advantage.icon}</div>
							<h3>{advantage.title}</h3>
							<p>{advantage.description}</p>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- Network Statistics -->
			<section class="network-stats">
				<h2>Global Network Power</h2>
				<div class="stats-grid">
					<div class="stat-item">
						<div class="stat-number">{networkStats.offices}</div>
						<div class="stat-label">Offices Worldwide</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">{networkStats.countries}</div>
						<div class="stat-label">Countries</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">{networkStats.professionals}</div>
						<div class="stat-label">Real Estate Professionals</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">{networkStats.salesVolume}</div>
						<div class="stat-label">Annual Sales Volume</div>
					</div>
				</div>
			</section>
			
			<!-- Local Expertise -->
			<section class="local-expertise">
				<h2>Lone Mountain Heights Local Expertise</h2>
				<div class="expertise-content">
					<div class="expertise-text">
						<h3>Why Dr. Jan Knows Lone Mountain Heights Best</h3>
						<ul>
							<li><strong>Personal Tracking:</strong> Monitors every sale in Lone Mountain Heights personally</li>
							<li><strong>Street Knowledge:</strong> Knows the best streets for resale value and lifestyle</li>
							<li><strong>Market Cycles:</strong> Understands local market timing and pricing strategies</li>
							<li><strong>Community Connection:</strong> Lives and works in Las Vegas - not a distant corporate agent</li>
							<li><strong>Subdivision Expertise:</strong> Deep knowledge of every micro-neighborhood and subdivision</li>
							<li><strong>Insider Information:</strong> Access to off-market opportunities and coming soon listings</li>
						</ul>
					</div>
					<div class="expertise-image">
						<OptimizedImage src="/images/photos/las-vegas-neighborhood.jpg" alt="Lone Mountain Heights neighborhood" width={640} height={400} sizes="(max-width: 768px) 100vw, 50vw" widths={[320, 640, 1024]} />
					</div>
				</div>
			</section>
			
			<!-- Current Market Activity -->
			<section class="market-activity">
				<h2>Current Lone Mountain Heights Market Activity</h2>
				<p>See what's happening in the market right now with our latest listings</p>
				<div class="realscout-listings-widget">
					<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF,TC" minPrice="800000" maxPrice="2000000"></realscout-office-listings>
				</div>
			</section>
			
			<!-- FAQ Section - AEO -->
			<FAQSection faqs={aboutFAQs} title="About Dr. Jan Duffy — Frequently Asked Questions" />

			<!-- CTA Section -->
			<section class="cta-section">
				<h2>Ready to Work with Your Forever Agent?</h2>
				<p>Experience the difference that comes with working with a Berkshire Hathaway HomeServices Forever Agent who combines local expertise with global network power.</p>
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
	.about-page {
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
	
	.team-leadership {
		display: inline-block;
		background: var(--primary-color);
		color: white;
		padding: 0.4rem 0.8rem;
		border-radius: 4px;
		margin-bottom: 1rem;
		font-size: 0.8rem;
		font-weight: 600;
	}
	
	.team-head {
		display: block;
		font-weight: 700;
		font-size: 0.9rem;
	}
	
	.lone-mountain-team {
		display: block;
		font-size: 0.7rem;
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
	
	.agent-profile,
	.advantages-section,
	.local-expertise,
	.network-stats,
	.cta-section {
		background: white;
		margin-bottom: 2rem;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.agent-profile h2,
	.advantages-section h2,
	.local-expertise h2,
	.network-stats h2,
	.cta-section h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.profile-content {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 2rem;
		align-items: start;
	}
	
	.profile-text p {
		font-size: 1.1rem;
		line-height: 1.6;
		color: var(--text-color);
		margin-bottom: 1.5rem;
	}
	
	.credentials h3 {
		font-size: 1.3rem;
		font-weight: 600;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.credentials ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.credentials li {
		padding: 0.5rem 0;
		color: var(--text-color);
		position: relative;
		padding-left: 1.5rem;
	}
	
	.credentials li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--success-green);
		font-weight: 700;
	}
	
	.profile-image {
		position: relative;
	}
	
	.profile-image :global(img) {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 12px;
		margin-bottom: 1rem;
	}
	
	.contact-card {
		background: var(--accent-color);
		color: white;
		padding: 1.5rem;
		border-radius: 12px;
		text-align: center;
	}
	
	.contact-card h4 {
		margin: 0 0 1rem 0;
		font-size: 1.2rem;
	}
	
	.contact-card p {
		margin: 0.5rem 0;
		font-size: 0.9rem;
	}
	
	.contact-card a {
		color: white;
		text-decoration: none;
		font-weight: 600;
	}
	
	.contact-card a:hover {
		text-decoration: underline;
	}
	
	.advantages-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}
	
	.advantage-card {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 12px;
		text-align: center;
		transition: transform 0.3s ease;
	}
	
	.advantage-card:hover {
		transform: translateY(-4px);
	}
	
	.advantage-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}
	
	.advantage-card h3 {
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.advantage-card p {
		color: var(--text-color);
		line-height: 1.5;
		margin: 0;
	}
	
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}
	
	.stat-item {
		text-align: center;
		padding: 1.5rem;
		background: var(--warm-cream);
		border-radius: 12px;
	}
	
	.stat-number {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--accent-color);
		margin-bottom: 0.5rem;
	}
	
	.stat-label {
		font-size: 1rem;
		color: var(--text-color);
		font-weight: 500;
	}
	
	.expertise-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: center;
		margin-top: 2rem;
	}
	
	.expertise-text h3 {
		font-size: 1.3rem;
		font-weight: 600;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.expertise-text ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.expertise-text li {
		padding: 0.75rem 0;
		color: var(--text-color);
		line-height: 1.5;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	
	.expertise-text li:last-child {
		border-bottom: none;
	}
	
	.expertise-image :global(img) {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 12px;
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

	/* Market Activity Section */
	.market-activity {
		background: #f8f9fa;
		padding: 4rem 0;
		margin: 2rem 0;
		text-align: center;
	}

	.market-activity h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a365d;
		margin: 0 0 1rem 0;
	}

	.market-activity p {
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
		
		.profile-content,
		.expertise-content {
			grid-template-columns: 1fr;
		}
		
		.advantages-grid {
			grid-template-columns: 1fr;
		}
		
		.stats-grid {
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