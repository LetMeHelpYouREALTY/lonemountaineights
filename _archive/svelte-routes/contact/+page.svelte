<script>
import { generateBreadcrumbSchema, generateFAQSchema, CALENDLY_URL, GBP_URLS, NAP } from '$lib/schema.js';
import CalendlyLink from '$lib/CalendlyLink.svelte';
import FAQSection from '$lib/components/FAQSection.svelte';
import { contactFAQs } from '$lib/faqs.js';

// Calendly script loaded globally in app.html (deferred for performance)

// Generate breadcrumb schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://lonemountainheights.com' },
  { name: 'Contact', url: 'https://lonemountainheights.com/contact' },
]);
</script>

<svelte:head>
	<title>Contact Dr. Jan Duffy | Lone Mountain Heights Expert | Las Vegas 89129</title>
	<meta name="description" content={`Contact Dr. Jan Duffy for expert real estate services in Lone Mountain Heights, Las Vegas 89129. Call ${NAP.telDisplay} or schedule a consultation.`} />
	
	<!-- ContactPage Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ContactPage",
			"name": "Contact Dr. Jan Duffy - Lone Mountain Heights Real Estate Expert",
			"description": "Contact Dr. Jan Duffy for expert real estate services in Lone Mountain Heights, Las Vegas 89129. Call 702-222-1964 or schedule a consultation.",
			"url": "https://www.lonemountainheights.com/contact",
			"mainEntity": {
				"@type": "RealEstateAgent",
				"name": "Dr. Jan Duffy",
				"telephone": "702-222-1964",
				"email": "jan@lonemountainheights.com",
				"license": "S.0197614.LLC",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Lone Mountain Heights",
					"addressLocality": "Las Vegas",
					"addressRegion": "NV",
					"postalCode": "89129",
					"addressCountry": "US"
				},
				"memberOf": {
					"@type": "Organization",
					"name": "Berkshire Hathaway HomeServices Nevada Properties"
				},
				"areaServed": {
					"@type": "City",
					"name": "Las Vegas"
				},
				"openingHours": "Mo-Su 00:00-23:59",
				"hasMap": "https://www.google.com/maps/place/Lone+Mountain+Heights,+Las+Vegas,+NV+89129"
			}
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
					"name": "Contact",
					"item": "https://www.lonemountainheights.com/contact"
				}
			]
		}
	</script>

	<!-- FAQ Schema - AEO -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(contactFAQs))}
	</script>
</svelte:head>

<main class="contact-page">
	<div class="page-header">
		<div class="container">
			<h1>Contact Dr. Jan Duffy | Lone Mountain Heights Expert</h1>
			<p>Ready to buy or sell in Lone Mountain Heights, Las Vegas 89129? Let's talk!</p>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<div class="contact-grid">
				<!-- Contact Information -->
				<div class="contact-info">
					<h2>Get in Touch</h2>
					<p>Dr. Jan Duffy is here to help you with all your Lone Mountain Heights real estate needs.</p>
					
					<div class="contact-buttons-gbp">
						<CalendlyLink text="Schedule time with me" classNames="btn btn-primary" />
						<a href={NAP.telHref} class="btn btn-primary">Call {NAP.telDisplay}</a>
						<a href={GBP_URLS.directions} class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Directions</a>
						<a href={GBP_URLS.reviews} class="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Google Reviews</a>
					</div>
					
					<div class="contact-methods">
						<div class="contact-method">
							<div class="method-icon">📞</div>
							<div class="method-content">
								<h3>Call or Text</h3>
								<p><a href={NAP.telHref}>{NAP.telDisplay}</a></p>
								<span class="method-note">Available 7 days a week</span>
							</div>
						</div>
						
						<div class="contact-method">
							<div class="method-icon">✉️</div>
							<div class="method-content">
								<h3>Email</h3>
								<p><a href={`mailto:${NAP.email}`}>{NAP.email}</a></p>
								<span class="method-note">Response within 2 hours</span>
							</div>
						</div>
						
						<div class="contact-method">
							<div class="method-icon">📍</div>
							<div class="method-content">
								<h3>Location</h3>
								<p>{NAP.fullAddress}</p>
								<span class="method-note">Service area: All Lone Mountain Heights micro-neighborhoods</span>
							</div>
						</div>
					</div>
					
					<div class="expertise-highlights">
						<h3>Why Choose Dr. Jan?</h3>
						<ul>
							<li>500+ Las Vegas transactions</li>
							<li>Deep Lone Mountain Heights expertise</li>
							<li>Knows every street and subdivision</li>
							<li>Personalized market analysis</li>
							<li>Proven track record of success</li>
						</ul>
					</div>
				</div>
				
				<!-- Calendly scheduling widget -->
				<div class="calendly-section">
					<h2>Schedule a Consultation</h2>
					<p>Book a time that works for you — Dr. Jan will call or meet to discuss your Lone Mountain Heights goals.</p>
					<div
						class="calendly-inline-widget"
						data-url={CALENDLY_URL}
						data-resize="true"
						style="min-width:320px;height:700px;"
						aria-label="Schedule a call with Dr. Jan Duffy"
					></div>
				</div>
			</div>
			
			<!-- Google Map embed with pin -->
			<div class="map-section">
				<h2>Find Us</h2>
				<p>Lone Mountain Heights service area — {NAP.name}, Berkshire Hathaway HomeServices Nevada Properties</p>
				<div class="map-embed">
					<iframe
						title="Lone Mountain Heights, Las Vegas NV - Dr. Jan Duffy Real Estate"
						src={GBP_URLS.mapEmbed}
						width="100%"
						height="400"
						style="border:0;"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
			
			<!-- Featured Listings Section -->
			<div class="featured-listings">
				<h2>Current Lone Mountain Heights Listings</h2>
				<p>Browse our latest homes for sale while you're here</p>
				<div class="realscout-listings-widget">
					<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF,TC" minPrice="700000" maxPrice="1500000"></realscout-office-listings>
				</div>
			</div>
			
			<!-- FAQ Section - AEO -->
			<FAQSection faqs={contactFAQs} title="Contact Dr. Jan Duffy — Frequently Asked Questions" />

			<!-- Quick Contact CTA -->
			<div class="quick-contact-cta">
				<h2>Need Immediate Assistance?</h2>
				<p>For urgent real estate questions or to schedule a showing, call Dr. Jan directly.</p>
				<div class="cta-buttons">
					<CalendlyLink text="Schedule time with me" classNames="btn btn-primary" />
					<a href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Search All Homes in Lone Mountain Heights</a>
					<a href={NAP.telHref} class="btn btn-secondary">Call {NAP.telDisplay}</a>
					<a href="/homes" class="btn btn-secondary">Browse Listings</a>
					<a href="/valuation" class="btn btn-secondary">Get Home Valuation</a>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.contact-page {
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
	
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-bottom: 3rem;
	}
	
	.contact-info,
	.calendly-section {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.contact-buttons-gbp {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 2rem;
	}
	
	.contact-buttons-gbp .btn {
		padding: 0.75rem 1.25rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
		transition: all 0.3s ease;
	}
	
	.contact-buttons-gbp .btn-primary {
		background: var(--accent-color);
		color: white;
		border: 2px solid var(--accent-color);
	}
	
	.contact-buttons-gbp .btn-secondary {
		background: transparent;
		color: var(--accent-color);
		border: 2px solid var(--accent-color);
	}
	
	.map-section {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		margin-bottom: 2rem;
	}
	
	.map-section h2 {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.map-section p {
		color: var(--text-light);
		margin: 0 0 1.5rem 0;
	}
	
	.map-embed {
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}
	
	.contact-info h2,
	.calendly-section h2 {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.contact-info p,
	.calendly-section p {
		color: var(--text-light);
		margin: 0 0 2rem 0;
		line-height: 1.6;
	}
	
	.contact-methods {
		margin-bottom: 2rem;
	}
	
	.contact-method {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 1.5rem;
		padding: 1rem;
		background: var(--warm-cream);
		border-radius: 8px;
	}
	
	.method-icon {
		font-size: 1.5rem;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--accent-color);
		color: white;
		border-radius: 50%;
		flex-shrink: 0;
	}
	
	.method-content h3 {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.method-content p {
		margin: 0 0 0.25rem 0;
		font-size: 1rem;
	}
	
	.method-content a {
		color: var(--accent-color);
		text-decoration: none;
		font-weight: 600;
	}
	
	.method-content a:hover {
		text-decoration: underline;
	}
	
	.method-note {
		font-size: 0.9rem;
		color: var(--text-light);
		font-style: italic;
	}
	
	.expertise-highlights {
		background: var(--tertiary-color);
		padding: 1.5rem;
		border-radius: 8px;
	}
	
	.expertise-highlights h3 {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.expertise-highlights ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.expertise-highlights li {
		padding: 0.5rem 0;
		color: var(--text-color);
		position: relative;
		padding-left: 1.5rem;
	}
	
	.expertise-highlights li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--success-green);
		font-weight: 700;
	}
	
	.calendly-inline-widget {
		border-radius: 8px;
		overflow: hidden;
		min-height: 700px;
	}

	.quick-contact-cta {
		background: white;
		padding: 3rem 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		text-align: center;
	}
	
	.quick-contact-cta h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.quick-contact-cta p {
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
		
		.contact-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		
		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}
		
		.btn {
			min-width: 200px;
		}
		
		.contact-info,
		.calendly-section {
			padding: 1.5rem;
		}
	}

	/* Featured Listings Section */
	.featured-listings {
		background: #f8f9fa;
		padding: 4rem 0;
		margin: 2rem 0;
		text-align: center;
	}

	.featured-listings h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a365d;
		margin: 0 0 1rem 0;
	}

	.featured-listings p {
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
</style>
