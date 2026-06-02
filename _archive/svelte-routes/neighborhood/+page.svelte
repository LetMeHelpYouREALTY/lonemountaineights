<script>
	import NeighborhoodMap from '$lib/components/NeighborhoodMap.svelte';
	import StagingGallery from '$lib/components/StagingGallery.svelte';
	import OptimizedCTA from '$lib/components/OptimizedCTA.svelte';
</script>

<svelte:head>
	<title>Lone Mountain Heights Neighborhood Guide | Map, Amenities & Lifestyle | Dr. Jan Duffy</title>
	<meta name="description" content="Explore Lone Mountain Heights neighborhood: interactive map, local amenities, schools, lifestyle features, and community highlights. Your complete neighborhood guide." />
	
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
					"name": "Neighborhood",
					"item": "https://www.lonemountainheights.com/neighborhood"
				}
			]
		}
	</script>
</svelte:head>

<main>
	<div class="hero-section">
		<div class="container">
			<h1>Lone Mountain Heights Neighborhood</h1>
			<p class="hero-subtitle">Discover the premier residential community in Las Vegas with luxury homes, excellent schools, and mountain views</p>
		</div>
	</div>

	<div class="neighborhood-container">
		<div class="container">
			<section class="map-section">
				<h2>Interactive Neighborhood Map</h2>
				<p>Explore Lone Mountain Heights with our interactive map showing homes, amenities, and points of interest</p>
				<NeighborhoodMap />
			</section>

			<section class="amenities-section">
				<h2>Local Amenities & Lifestyle</h2>
				<div class="amenities-grid">
					<div class="amenity-card">
						<div class="amenity-icon">🏫</div>
						<h3>Top-Rated Schools</h3>
						<p>William G. Geer Elementary, Sig Rogich Middle School, and Liberty High School - all highly-rated schools in the Clark County School District.</p>
					</div>
					
					<div class="amenity-card">
						<div class="amenity-icon">⛳</div>
						<h3>Golf Course Access</h3>
						<p>Canyon Gate Country Club offers championship golf and country club amenities for residents.</p>
					</div>
					
					<div class="amenity-card">
						<div class="amenity-icon">🛍️</div>
						<h3>Shopping & Dining</h3>
						<p>Convenient access to Summerlin shopping centers, restaurants, and entertainment venues.</p>
					</div>
					
					<div class="amenity-card">
						<div class="amenity-icon">🏔️</div>
						<h3>Mountain Views</h3>
						<p>Stunning views of the Spring Mountains and Red Rock Canyon from many homes in the community.</p>
					</div>
					
					<div class="amenity-card">
						<div class="amenity-icon">🚗</div>
						<h3>Easy Commute</h3>
						<p>Convenient access to major Las Vegas employers and the Las Vegas Strip via I-215 and US-95.</p>
					</div>
					
					<div class="amenity-card">
						<div class="amenity-icon">🏠</div>
						<h3>Luxury Homes</h3>
						<p>Spacious single-family homes ranging from 2,000 to 6,000+ square feet with premium finishes.</p>
					</div>
				</div>
			</section>

			<section class="gallery-section">
				<h2>Neighborhood Showcase</h2>
				<p>See the beauty and lifestyle of Lone Mountain Heights through our photo gallery</p>
				<StagingGallery />
			</section>

			<div class="cta-section">
				<h2>Ready to Call Lone Mountain Heights Home?</h2>
				<p>Let Dr. Jan Duffy help you find the perfect home in this exceptional community</p>
				<OptimizedCTA variant="primary" size="large" showPhone={true} showEmail={true} showText={true} showForm={true} />
			</div>
		</div>
	</div>
</main>

<style>
	.hero-section {
		background: linear-gradient(135deg, #F7F9FC 0%, #F4F1EB 100%);
		padding: 4rem 0;
		text-align: center;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 3rem;
		font-weight: 700;
		color: #1A202C;
		margin: 0 0 1rem 0;
		line-height: 1.1;
	}

	.hero-subtitle {
		font-size: 1.25rem;
		color: #4A5568;
		margin: 0;
		max-width: 600px;
		margin: 0 auto;
	}

	.neighborhood-container {
		padding: 4rem 0;
		background: #fff;
	}

	section {
		margin-bottom: 4rem;
		padding: 2rem;
		background: #F7F9FC;
		border-radius: 12px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
	}

	section h2 {
		font-size: 2rem;
		font-weight: 600;
		color: #1A202C;
		margin: 0 0 1rem 0;
		text-align: center;
	}

	section p {
		color: #4A5568;
		margin: 0 0 2rem 0;
		text-align: center;
		font-size: 1.125rem;
		line-height: 1.6;
	}

	.amenities-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.amenity-card {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.amenity-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
	}

	.amenity-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.amenity-card h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1A202C;
		margin: 0 0 1rem 0;
	}

	.amenity-card p {
		color: #4A5568;
		margin: 0;
		text-align: left;
		line-height: 1.6;
	}

	.cta-section {
		text-align: center;
		padding: 3rem 2rem;
		background: linear-gradient(135deg, #3A8DDE 0%, #5BA0E8 100%);
		border-radius: 12px;
		color: white;
	}

	.cta-section h2 {
		color: white;
		font-size: 2.5rem;
		margin: 0 0 1rem 0;
	}

	.cta-section p {
		color: #E2E8F0;
		font-size: 1.25rem;
		margin: 0 0 2rem 0;
	}

	@media (max-width: 768px) {
		.container {
			padding: 0 1rem;
		}

		h1 {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.125rem;
		}

		section {
			padding: 1.5rem;
			margin-bottom: 2rem;
		}

		section h2 {
			font-size: 1.75rem;
		}

		.amenities-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.amenity-card {
			padding: 1.5rem;
		}

		.cta-section h2 {
			font-size: 2rem;
		}

		.cta-section p {
			font-size: 1.125rem;
		}
	}
</style>
