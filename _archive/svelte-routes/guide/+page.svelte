<script>
import { generateFAQSchema, NAP } from '$lib/schema.js';
import FAQSection from '$lib/components/FAQSection.svelte';
import { guideFAQs } from '$lib/faqs.js';
// Neighborhood guide data
const neighborhoodInfo = {
  bestStreets: [
    {
      name: 'Mountain Ridge Dr',
      description: 'Premium location with mountain views and larger lots',
      avgPrice: 950000,
      lotSize: '0.35+ acres',
      features: ['Mountain views', 'Corner lots available', 'Larger homes'],
    },
    {
      name: 'Desert View Ln',
      description: 'Great value with updated homes and good resale potential',
      avgPrice: 750000,
      lotSize: '0.20-0.25 acres',
      features: ['Updated kitchens', 'Pool-friendly lots', 'Family-friendly'],
    },
    {
      name: 'Canyon Heights Blvd',
      description: 'Quiet cul-de-sac location perfect for families',
      avgPrice: 680000,
      lotSize: '0.15-0.20 acres',
      features: ['Cul-de-sac', 'Low traffic', 'Starter homes'],
    },
  ],
  schools: [
    {
      name: 'Lone Mountain Elementary',
      rating: 9,
      distance: '0.5 miles',
      grades: 'K-5',
    },
    {
      name: 'Desert Ridge Middle School',
      rating: 8,
      distance: '1.2 miles',
      grades: '6-8',
    },
    {
      name: 'Shadow Ridge High School',
      rating: 9,
      distance: '2.1 miles',
      grades: '9-12',
    },
  ],
  commuteTimes: {
    strip: '25 minutes',
    downtown: '20 minutes',
    henderson: '15 minutes',
    airport: '30 minutes',
  },
  amenities: [
    {
      name: 'Lone Mountain Park',
      type: 'Recreation',
      distance: '0.3 miles',
      features: ['Playground', 'Walking trails', 'Picnic areas'],
    },
    {
      name: 'Desert Ridge Marketplace',
      type: 'Shopping',
      distance: '1.5 miles',
      features: ['Target', 'Whole Foods', 'Restaurants'],
    },
    {
      name: 'Sun City Summerlin',
      type: 'Golf',
      distance: '2.0 miles',
      features: ['Golf course', 'Country club', 'Dining'],
    },
  ],
};
</script>

<svelte:head>
	<title>Living in Lone Mountain Heights | Neighborhood Guide | Dr. Jan Duffy</title>
	<meta name="description" content="Complete guide to living in Lone Mountain Heights, Las Vegas. Best streets, schools, amenities, and commute times from Dr. Jan Duffy." />
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(guideFAQs))}
	</script>
</svelte:head>

<main class="guide-page">
	<div class="page-header">
		<div class="container">
			<h1>Living in Lone Mountain Heights</h1>
			<p>Your complete neighborhood guide from Dr. Jan Duffy</p>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<!-- Best Streets Section -->
			<section class="guide-section">
				<h2>Best Streets in Lone Mountain Heights</h2>
				<p>Dr. Jan's insider knowledge of the most desirable streets</p>
				
				<div class="streets-grid">
					{#each neighborhoodInfo.bestStreets as street}
						<div class="street-card">
							<h3>{street.name}</h3>
							<p class="street-description">{street.description}</p>
							<div class="street-stats">
								<span class="stat">Avg Price: ${street.avgPrice.toLocaleString()}</span>
								<span class="stat">Lot Size: {street.lotSize}</span>
							</div>
							<div class="street-features">
								{#each street.features as feature}
									<span class="feature-tag">{feature}</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- Schools Section -->
			<section class="guide-section">
				<h2>School Information</h2>
				<p>Excellent schools serving the Lone Mountain Heights area</p>
				
				<div class="schools-grid">
					{#each neighborhoodInfo.schools as school}
						<div class="school-card">
							<h3>{school.name}</h3>
							<div class="school-rating">
								<span class="stars">★★★★★</span>
								<span class="rating">{school.rating}/10</span>
							</div>
							<div class="school-details">
								<span class="detail">Grades: {school.grades}</span>
								<span class="detail">Distance: {school.distance}</span>
							</div>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- Commute Times Section -->
			<section class="guide-section">
				<h2>Commute Times</h2>
				<p>Convenient access to major Las Vegas destinations</p>
				
				<div class="commute-grid">
					<div class="commute-item">
						<span class="destination">Las Vegas Strip</span>
						<span class="time">{neighborhoodInfo.commuteTimes.strip}</span>
					</div>
					<div class="commute-item">
						<span class="destination">Downtown Las Vegas</span>
						<span class="time">{neighborhoodInfo.commuteTimes.downtown}</span>
					</div>
					<div class="commute-item">
						<span class="destination">Henderson</span>
						<span class="time">{neighborhoodInfo.commuteTimes.henderson}</span>
					</div>
					<div class="commute-item">
						<span class="destination">McCarran Airport</span>
						<span class="time">{neighborhoodInfo.commuteTimes.airport}</span>
					</div>
				</div>
			</section>
			
			<!-- Local Amenities Section -->
			<section class="guide-section">
				<h2>Local Amenities</h2>
				<p>Everything you need within minutes of your home</p>
				
				<div class="amenities-grid">
					{#each neighborhoodInfo.amenities as amenity}
						<div class="amenity-card">
							<h3>{amenity.name}</h3>
							<span class="amenity-type">{amenity.type}</span>
							<span class="amenity-distance">{amenity.distance} away</span>
							<div class="amenity-features">
								{#each amenity.features as feature}
									<span class="feature-tag">{feature}</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- FAQ Section - AEO -->
			<FAQSection faqs={guideFAQs} title="Living in Lone Mountain Heights — FAQs" />

			<!-- CTA Section -->
			<section class="cta-section">
				<h2>Ready to Call Lone Mountain Heights Home?</h2>
				<p>Dr. Jan Duffy can help you find the perfect home in the perfect location</p>
				<div class="cta-buttons">
					<a href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Search All Homes in Lone Mountain Heights</a>
					<a href={NAP.telHref} class="btn btn-secondary">Call {NAP.telDisplay}</a>
					<a href="/homes" class="btn btn-secondary">Browse Listings</a>
				</div>
			</section>
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
	
	.guide-section {
		background: white;
		margin-bottom: 2rem;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.guide-section h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.guide-section p {
		color: var(--text-light);
		margin: 0 0 2rem 0;
		font-size: 1.1rem;
	}
	
	.streets-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}
	
	.street-card {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid var(--accent-color);
	}
	
	.street-card h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.street-description {
		color: var(--text-color);
		margin: 0 0 1rem 0;
		line-height: 1.5;
	}
	
	.street-stats {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	
	.stat {
		background: var(--accent-color);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 600;
	}
	
	.street-features {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	
	.feature-tag {
		background: var(--tertiary-color);
		color: var(--text-color);
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 0.8rem;
		font-weight: 500;
	}
	
	.schools-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}
	
	.school-card {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}
	
	.school-card h3 {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.school-rating {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
	
	.stars {
		color: var(--warning-orange);
		font-size: 1.2rem;
	}
	
	.rating {
		font-weight: 700;
		color: var(--accent-color);
		font-size: 1.1rem;
	}
	
	.school-details {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	
	.detail {
		color: var(--text-color);
		font-size: 0.9rem;
	}
	
	.commute-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
	
	.commute-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--warm-cream);
		padding: 1rem 1.5rem;
		border-radius: 8px;
	}
	
	.destination {
		font-weight: 600;
		color: var(--heading-color);
	}
	
	.time {
		font-weight: 700;
		color: var(--accent-color);
		font-size: 1.1rem;
	}
	
	.amenities-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}
	
	.amenity-card {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
	}
	
	.amenity-card h3 {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.amenity-type {
		background: var(--accent-color);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 0.8rem;
		font-weight: 600;
		margin-right: 0.5rem;
	}
	
	.amenity-distance {
		color: var(--text-light);
		font-size: 0.9rem;
	}
	
	.amenity-features {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
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
		
		.guide-section {
			padding: 1.5rem;
		}
		
		.streets-grid,
		.schools-grid,
		.amenities-grid {
			grid-template-columns: 1fr;
		}
		
		.commute-grid {
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
