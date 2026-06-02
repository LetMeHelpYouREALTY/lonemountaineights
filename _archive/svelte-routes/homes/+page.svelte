<script>
import { generateFAQSchema } from '$lib/schema.js';
import FAQSection from '$lib/components/FAQSection.svelte';
import OptimizedImage from '$lib/components/OptimizedImage.svelte';
import { homesFAQs } from '$lib/faqs.js';
// Mock data - in production this would come from MLS API
const allHomes = [
  {
    id: 1,
    address: '1234 Mountain View Dr',
    price: 875000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2450,
    lotSize: '0.25 acres',
    daysOnMarket: 8,
    image: '/images/photos/home-featured-1.jpg',
    insight:
      'Corner lot with mountain views - premium location in the neighborhood',
    homeStyle: 'Two Story',
    yearBuilt: 2018,
    garage: 2,
    pool: true,
    view: 'Mountain',
    propertyType: 'Single Family',
    isNewListing: true,
    isLuxury: false,
  },
  {
    id: 2,
    address: '5678 Desert Ridge Ln',
    price: 725000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1890,
    lotSize: '0.18 acres',
    daysOnMarket: 15,
    image: '/images/photos/home-featured-2.jpg',
    insight: 'Recently updated kitchen - great value for the area',
    homeStyle: 'Single Story',
    yearBuilt: 2015,
    garage: 2,
    pool: false,
    view: 'Golf Course',
    propertyType: 'Single Family',
    isNewListing: false,
    isLuxury: false,
  },
  {
    id: 3,
    address: '9012 Lone Mountain Blvd',
    price: 950000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,
    lotSize: '0.35 acres',
    daysOnMarket: 3,
    image: '/images/photos/home-featured-3.jpg',
    insight: 'Luxury finishes throughout - one of the best streets in the area',
    propertyType: 'Single Family',
    isNewListing: true,
    isLuxury: true,
    homeStyle: 'Two Story',
    yearBuilt: 2020,
    garage: 3,
    pool: true,
    view: 'Mountain',
  },
  {
    id: 4,
    address: '3456 Canyon Heights Way',
    price: 680000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1750,
    lotSize: '0.15 acres',
    daysOnMarket: 22,
    image: '/images/photos/home-featured-1.jpg',
    insight: 'Great starter home with potential for updates',
    homeStyle: 'Single Story',
    yearBuilt: 2012,
    garage: 2,
    pool: false,
    view: 'Neighborhood',
  },
  {
    id: 5,
    address: '7890 Desert View Ln',
    price: 825000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2200,
    lotSize: '0.22 acres',
    daysOnMarket: 12,
    image: '/images/photos/las-vegas-neighborhood.jpg',
    insight: 'Solar panels included - significant energy savings',
    homeStyle: 'Two Story',
    yearBuilt: 2017,
    garage: 2,
    pool: true,
    view: 'Desert',
  },
  {
    id: 6,
    address: '2345 Mountain Ridge Dr',
    price: 750000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1950,
    lotSize: '0.20 acres',
    daysOnMarket: 18,
    image: '/images/photos/home-featured-2.jpg',
    insight: 'Cul-de-sac location - quiet street with minimal traffic',
    homeStyle: 'Single Story',
    yearBuilt: 2016,
    garage: 2,
    pool: false,
    view: 'Mountain',
    propertyType: 'Single Family',
    isNewListing: false,
    isLuxury: false,
  },
  // Condos and Townhouses
  {
    id: 7,
    address: '4567 Desert Springs Condo #203',
    price: 425000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1250,
    lotSize: 'N/A',
    daysOnMarket: 5,
    image: '/images/photos/home-featured-1.jpg',
    insight:
      'Low-maintenance living with mountain views - perfect for first-time buyers',
    homeStyle: 'Condo',
    yearBuilt: 2019,
    garage: 1,
    pool: true,
    view: 'Mountain',
    propertyType: 'Condo',
    isNewListing: true,
    isLuxury: false,
  },
  {
    id: 8,
    address: '6789 Lone Mountain Townhouse #B',
    price: 485000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1650,
    lotSize: '0.05 acres',
    daysOnMarket: 10,
    image: '/images/photos/las-vegas-neighborhood.jpg',
    insight: 'End-unit townhouse with private patio - great for families',
    homeStyle: 'Townhouse',
    yearBuilt: 2017,
    garage: 2,
    pool: true,
    view: 'Golf Course',
    propertyType: 'Townhouse',
    isNewListing: false,
    isLuxury: false,
  },
  // Luxury Homes
  {
    id: 9,
    address: '1234 Blue Heron Estates',
    price: 1250000,
    bedrooms: 6,
    bathrooms: 5,
    sqft: 4200,
    lotSize: '0.75 acres',
    daysOnMarket: 2,
    image: '/images/photos/home-featured-3.jpg',
    insight: 'Blue Heron mini-estate with custom finishes and panoramic views',
    homeStyle: 'Custom',
    yearBuilt: 2022,
    garage: 3,
    pool: true,
    view: 'Mountain',
    propertyType: 'Single Family',
    isNewListing: true,
    isLuxury: true,
  },
  {
    id: 10,
    address: '5678 Hillside Modern Revival',
    price: 1100000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3800,
    lotSize: '0.60 acres',
    daysOnMarket: 7,
    image: '/images/photos/home-featured-2.jpg',
    insight:
      'William Ramsey designed mid-century modern revival with architectural significance',
    homeStyle: 'Mid-Century Modern',
    yearBuilt: 2021,
    garage: 3,
    pool: true,
    view: 'City',
    propertyType: 'Single Family',
    isNewListing: true,
    isLuxury: true,
  },
  // Homes with Pools
  {
    id: 11,
    address: '9012 Poolside Paradise',
    price: 675000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2100,
    lotSize: '0.30 acres',
    daysOnMarket: 14,
    image: '/images/photos/home-featured-1.jpg',
    insight:
      'Resort-style pool with spa and outdoor kitchen - perfect for entertaining',
    homeStyle: 'Two Story',
    yearBuilt: 2018,
    garage: 2,
    pool: true,
    view: 'Mountain',
    propertyType: 'Single Family',
    isNewListing: false,
    isLuxury: false,
  },
  // Cheap Homes
  {
    id: 12,
    address: '3456 Affordable Living',
    price: 425000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1550,
    lotSize: '0.15 acres',
    daysOnMarket: 25,
    image: '/images/photos/home-featured-2.jpg',
    insight:
      'Great value in Lone Mountain Heights - needs some TLC but solid bones',
    homeStyle: 'Single Story',
    yearBuilt: 2010,
    garage: 2,
    pool: false,
    view: 'Neighborhood',
    propertyType: 'Single Family',
    isNewListing: false,
    isLuxury: false,
  },
  // New Homes
  {
    id: 13,
    address: '7890 Brand New Build',
    price: 825000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    lotSize: '0.25 acres',
    daysOnMarket: 1,
    image: '/images/photos/las-vegas-neighborhood.jpg',
    insight:
      'Brand new construction with modern amenities and energy efficiency',
    homeStyle: 'Two Story',
    yearBuilt: 2024,
    garage: 2,
    pool: true,
    view: 'Mountain',
    propertyType: 'Single Family',
    isNewListing: true,
    isLuxury: false,
  },
  // Single Story Homes
  {
    id: 14,
    address: '2345 Ranch Style Living',
    price: 595000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    lotSize: '0.20 acres',
    daysOnMarket: 12,
    image: '/images/photos/home-featured-2.jpg',
    insight:
      'Single-story ranch perfect for aging in place or accessibility needs',
    homeStyle: 'Ranch',
    yearBuilt: 2014,
    garage: 2,
    pool: false,
    view: 'Golf Course',
    propertyType: 'Single Family',
    isNewListing: false,
    isLuxury: false,
  },
  // Land for Sale
  {
    id: 15,
    address: '5678 Build Your Dream Lot',
    price: 350000,
    bedrooms: 0,
    bathrooms: 0,
    sqft: 0,
    lotSize: '0.50 acres',
    daysOnMarket: 30,
    image: '/images/photos/home-featured-1.jpg',
    insight:
      'Prime lot with mountain views - perfect for custom home construction',
    homeStyle: 'Land',
    yearBuilt: 0,
    garage: 0,
    pool: false,
    view: 'Mountain',
    propertyType: 'Land',
    isNewListing: false,
    isLuxury: false,
  },
];

let filteredHomes = allHomes;
let filters = {
  minPrice: '',
  maxPrice: '',
  bedrooms: '',
  bathrooms: '',
  minSqft: '',
  maxSqft: '',
  homeStyle: '',
  pool: '',
  view: '',
  garage: '',
  propertyType: '',
  isNewListing: false,
  isLuxury: false,
  hasPool: false,
};

let sortBy = 'price';
let viewMode = 'grid'; // 'grid' or 'list'
let showFilters = false;

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function applyFilters() {
  filteredHomes = allHomes.filter((home) => {
    if (filters.minPrice && home.price < parseInt(filters.minPrice, 10))
      return false;
    if (filters.maxPrice && home.price > parseInt(filters.maxPrice, 10))
      return false;
    if (filters.bedrooms && home.bedrooms !== parseInt(filters.bedrooms, 10))
      return false;
    if (filters.bathrooms && home.bathrooms !== parseInt(filters.bathrooms, 10))
      return false;
    if (filters.minSqft && home.sqft < parseInt(filters.minSqft, 10))
      return false;
    if (filters.maxSqft && home.sqft > parseInt(filters.maxSqft, 10))
      return false;
    if (filters.homeStyle && home.homeStyle !== filters.homeStyle) return false;
    if (filters.pool && home.pool !== (filters.pool === 'yes')) return false;
    if (filters.view && home.view !== filters.view) return false;
    if (filters.garage && home.garage !== parseInt(filters.garage, 10))
      return false;
    if (filters.propertyType && home.propertyType !== filters.propertyType)
      return false;
    if (filters.isNewListing && !home.isNewListing) return false;
    if (filters.isLuxury && !home.isLuxury) return false;
    if (filters.hasPool && !home.pool) return false;
    return true;
  });

  // Apply sorting
  filteredHomes.sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'sqft':
        return a.sqft - b.sqft;
      case 'sqft-desc':
        return b.sqft - a.sqft;
      case 'days':
        return a.daysOnMarket - b.daysOnMarket;
      case 'days-desc':
        return b.daysOnMarket - a.daysOnMarket;
      default:
        return 0;
    }
  });
}

function clearFilters() {
  filters = {
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    minSqft: '',
    maxSqft: '',
    homeStyle: '',
    pool: '',
    view: '',
    garage: '',
  };
  applyFilters();
}

$: applyFilters();
</script>

<svelte:head>
	<title>Lone Mountain Heights Homes for Sale | Las Vegas 89129 | Dr. Jan Duffy</title>
	<meta name="description" content="Browse 15+ exclusive homes for sale in Lone Mountain Heights, Las Vegas 89129. Dr. Jan Duffy's expert insights on every listing. Luxury homes, condos, townhouses available." />
	
	<!-- Schema Markup for Real Estate Listings -->
	{#each filteredHomes as property}
		<script type="application/ld+json">
			{JSON.stringify(generatePropertySchema(property))}
		</script>
	{/each}
	
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
					"name": "Homes for Sale",
					"item": "https://www.lonemountainheights.com/homes"
				}
			]
		}
	</script>

	<!-- FAQ Schema - AEO -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(homesFAQs))}
	</script>
</svelte:head>

<main class="homes-page">
	<div class="page-header">
		<div class="container">
			<h1>Lone Mountain Heights Homes for Sale | Las Vegas 89129</h1>
			<p>Exclusive listings hand-picked by Dr. Jan Duffy - Your Complete Real Estate Partner</p>
			
			<!-- Lone Mountain Heights Search CTA -->
			<div class="lone-mountain-cta">
				<div class="lone-mountain-content">
					<h2>🔍 Search All Available Homes</h2>
					<p>Access our complete MLS database with advanced search filters, saved searches, and real-time updates</p>
					<a href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx"
					   class="btn btn-primary lone-mountain-btn"
					   target="_blank"
					   rel="noopener noreferrer">
						<span class="btn-icon">🏠</span>
						<span class="btn-text">Search All Homes in Lone Mountain Heights</span>
						<span class="btn-arrow">→</span>
					</a>
				</div>
			</div>
			
			<div class="results-summary">
				<span class="results-count">{filteredHomes.length} featured homes below</span>
				<div class="view-controls">
					<button class="view-btn" class:active={viewMode === 'grid'} on:click={() => viewMode = 'grid'}>
						Grid View
					</button>
					<button class="view-btn" class:active={viewMode === 'list'} on:click={() => viewMode = 'list'}>
						List View
					</button>
				</div>
			</div>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<div class="content-layout">
				<!-- Filters Sidebar -->
				<aside class="filters-sidebar ranch-filters" class:mobile-open={showFilters}>
					<div class="filters-header">
						<h3>Filter Homes</h3>
						<button class="clear-filters ranch-btn" on:click={clearFilters}>Clear All</button>
					</div>
					
					<div class="filter-group">
						<label for="min-price">Price Range</label>
						<div class="price-inputs">
							<input id="min-price" type="number" placeholder="Min Price" bind:value={filters.minPrice} />
							<span>to</span>
							<input id="max-price" type="number" placeholder="Max Price" bind:value={filters.maxPrice} />
						</div>
					</div>
					
					<div class="filter-group">
						<label for="bedrooms-filter">Bedrooms</label>
						<select id="bedrooms-filter" bind:value={filters.bedrooms}>
							<option value="">Any</option>
							<option value="2">2+</option>
							<option value="3">3+</option>
							<option value="4">4+</option>
							<option value="5">5+</option>
						</select>
					</div>
					
					<div class="filter-group">
						<label for="bathrooms-filter">Bathrooms</label>
						<select id="bathrooms-filter" bind:value={filters.bathrooms}>
							<option value="">Any</option>
							<option value="2">2+</option>
							<option value="3">3+</option>
							<option value="4">4+</option>
						</select>
					</div>
					
					<div class="filter-group">
						<label for="min-sqft">Square Footage</label>
						<div class="sqft-inputs">
							<input id="min-sqft" type="number" placeholder="Min Sq Ft" bind:value={filters.minSqft} />
							<span>to</span>
							<input id="max-sqft" type="number" placeholder="Max Sq Ft" bind:value={filters.maxSqft} />
						</div>
					</div>
					
					<div class="filter-group">
						<label for="home-style-filter">Home Style</label>
						<select id="home-style-filter" bind:value={filters.homeStyle}>
							<option value="">Any</option>
							<option value="Single Story">Single Story</option>
							<option value="Two Story">Two Story</option>
							<option value="Townhome">Townhome</option>
						</select>
					</div>
					
					<div class="filter-group">
						<label for="pool-filter">Pool</label>
						<select id="pool-filter" bind:value={filters.pool}>
							<option value="">Any</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					
					<div class="filter-group">
						<label for="view-filter">View</label>
						<select id="view-filter" bind:value={filters.view}>
							<option value="">Any</option>
							<option value="Mountain">Mountain</option>
							<option value="Golf Course">Golf Course</option>
							<option value="Desert">Desert</option>
							<option value="Neighborhood">Neighborhood</option>
						</select>
					</div>
					
					<div class="filter-group">
						<label for="garage-filter">Garage</label>
						<select id="garage-filter" bind:value={filters.garage}>
							<option value="">Any</option>
							<option value="1">1+</option>
							<option value="2">2+</option>
							<option value="3">3+</option>
						</select>
					</div>
					
					<div class="filter-group">
						<label for="property-type-filter">Property Type</label>
						<select id="property-type-filter" bind:value={filters.propertyType}>
							<option value="">Any</option>
							<option value="Single Family">Single Family</option>
							<option value="Condo">Condo</option>
							<option value="Townhouse">Townhouse</option>
							<option value="Land">Land</option>
						</select>
					</div>
					
					<div class="filter-group">
						<label>
							<input type="checkbox" bind:checked={filters.isNewListing} />
							New Listings Only
						</label>
					</div>
					
					<div class="filter-group">
						<label>
							<input type="checkbox" bind:checked={filters.isLuxury} />
							Luxury Homes Only
						</label>
					</div>
					
					<div class="filter-group">
						<label>
							<input type="checkbox" bind:checked={filters.hasPool} />
							Homes with Pools
						</label>
					</div>
				</aside>
				
				<!-- Main Content -->
				<div class="main-content">
					<div class="content-header">
						<div class="quick-filters">
							<button class="quick-filter-btn ranch-btn" on:click={() => { filters.propertyType = 'Condo'; applyFilters(); }}>Condos</button>
							<button class="quick-filter-btn ranch-btn" on:click={() => { filters.propertyType = 'Townhouse'; applyFilters(); }}>Townhouses</button>
							<button class="quick-filter-btn estate-btn" on:click={() => { filters.isLuxury = true; applyFilters(); }}>Luxury Homes</button>
							<button class="quick-filter-btn ranch-btn" on:click={() => { filters.hasPool = true; applyFilters(); }}>Homes with Pools</button>
							<button class="quick-filter-btn ranch-btn" on:click={() => { filters.isNewListing = true; applyFilters(); }}>New Listings</button>
							<button class="quick-filter-btn ranch-btn" on:click={() => { filters.homeStyle = 'Single Story'; applyFilters(); }}>Single Story</button>
							<button class="quick-filter-btn ranch-btn" on:click={() => { filters.propertyType = 'Land'; applyFilters(); }}>Land for Sale</button>
						</div>
					<div class="sort-controls">
						<label for="sort-select">Sort by:</label>
						<select id="sort-select" bind:value={sortBy}>
								<option value="price">Price: Low to High</option>
								<option value="price-desc">Price: High to Low</option>
								<option value="sqft">Square Footage: Low to High</option>
								<option value="sqft-desc">Square Footage: High to Low</option>
								<option value="days">Days on Market: Low to High</option>
								<option value="days-desc">Days on Market: High to Low</option>
							</select>
						</div>
						
						<button class="mobile-filters-toggle" on:click={() => showFilters = !showFilters}>
							Filters
						</button>
					</div>
					
					<div class="homes-container" class:list-view={viewMode === 'list'}>
						{#each filteredHomes as home}
							<div class="home-card {home.propertyType === 'Luxury' ? 'estate-home-card' : 'ranch-home-card'}">
								<div class="home-image">
									<OptimizedImage src={home.image} alt={home.address} className="{home.propertyType === 'Luxury' ? 'estate-property-image' : 'ranch-property-image'}" width={640} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" widths={[320, 640, 1024]} />
									<div class="home-badges">
										<span class="days-badge">{home.daysOnMarket} days</span>
										{#if home.pool}
											<span class="feature-badge">Pool</span>
										{/if}
									</div>
									<div class="home-price">{formatPrice(home.price)}</div>
								</div>
								
								<div class="home-details {home.propertyType === 'Luxury' ? 'estate-property-details' : 'ranch-property-details'}">
									<h3 class="home-address">{home.address}</h3>
									<div class="home-specs {home.propertyType === 'Luxury' ? 'estate-stats' : 'ranch-stats'}">
										<div class="{home.propertyType === 'Luxury' ? 'estate-stat' : 'ranch-stat'}">
											<span class="value">{home.bedrooms}</span>
											<span class="label">Bedrooms</span>
										</div>
										<div class="{home.propertyType === 'Luxury' ? 'estate-stat' : 'ranch-stat'}">
											<span class="value">{home.bathrooms}</span>
											<span class="label">Bathrooms</span>
										</div>
										<div class="{home.propertyType === 'Luxury' ? 'estate-stat' : 'ranch-stat'}">
											<span class="value">{home.sqft.toLocaleString()}</span>
											<span class="label">Sq Ft</span>
										</div>
										<div class="{home.propertyType === 'Luxury' ? 'estate-stat' : 'ranch-stat'}">
											<span class="value">{home.lotSize}</span>
											<span class="label">Lot Size</span>
										</div>
									</div>
									
									<div class="home-features {home.propertyType === 'Luxury' ? 'estate-features' : 'ranch-features'}">
										<span class="{home.propertyType === 'Luxury' ? 'estate-feature' : 'ranch-feature'}">{home.homeStyle}</span>
										<span class="{home.propertyType === 'Luxury' ? 'estate-feature' : 'ranch-feature'}">{home.yearBuilt}</span>
										<span class="{home.propertyType === 'Luxury' ? 'estate-feature' : 'ranch-feature'}">{home.garage} car garage</span>
										<span class="{home.propertyType === 'Luxury' ? 'estate-feature' : 'ranch-feature'}">{home.view} view</span>
										{#if home.isNewListing}
											<span class="{home.propertyType === 'Luxury' ? 'estate-feature' : 'ranch-feature'}">New Listing</span>
										{/if}
										{#if home.isLuxury}
											<span class="estate-feature">Luxury</span>
										{/if}
									</div>
									
									<div class="dr-jan-insight {home.propertyType === 'Luxury' ? 'estate-insight' : 'ranch-insight'}">
										<div class="insight-header">
											<span class="insight-icon">💡</span>
											<span class="insight-title">Dr. Jan's Insight</span>
										</div>
										<p class="insight-text">{home.insight}</p>
									</div>
									
									<div class="home-actions">
										<button class="btn-details {home.propertyType === 'Luxury' ? 'estate-btn' : 'ranch-btn'}">View Details</button>
										<button class="btn-schedule {home.propertyType === 'Luxury' ? 'estate-btn' : 'ranch-btn'}">Schedule Tour</button>
									</div>
								</div>
							</div>
						{/each}
					</div>
					
					{#if filteredHomes.length === 0}
						<div class="no-results">
							<h3>No homes match your criteria</h3>
							<p>Try adjusting your filters or contact Dr. Jan for off-market opportunities</p>
							<button class="btn btn-primary" on:click={clearFilters}>Clear Filters</button>
						</div>
					{/if}
				</div>
			</div>
		</div>
		
		<!-- FAQ Section - AEO -->
		<div class="faq-wrapper">
			<div class="container">
				<FAQSection faqs={homesFAQs} title="Lone Mountain Heights Homes — Frequently Asked Questions" />
			</div>
		</div>

		<!-- Additional Listings Section -->
		<div class="additional-listings">
			<div class="container">
				<h2>Complete MLS Database</h2>
				<p>Access all available homes for sale in Lone Mountain Heights with real-time updates</p>
				<div class="realscout-listings-widget">
					<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF,TC" minPrice="600000" maxPrice="1200000"></realscout-office-listings>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.homes-page {
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
		margin: 0 0 2rem 0;
		opacity: 0.9;
	}
	
	.lone-mountain-cta {
		background: white;
		color: var(--accent-color);
		padding: 2rem;
		border-radius: 12px;
		margin: 2rem 0;
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
	}

	.lone-mountain-content h2 {
		font-size: 1.8rem;
		margin: 0 0 0.5rem 0;
		font-weight: 700;
		color: var(--accent-color);
	}

	.lone-mountain-content p {
		font-size: 1.1rem;
		margin: 0 0 1.5rem 0;
		color: var(--text-color);
	}

	.lone-mountain-btn {
		background: var(--accent-color);
		color: white;
		padding: 1rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		font-size: 1.1rem;
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(30, 58, 138, 0.2);
	}

	.lone-mountain-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(30, 58, 138, 0.3);
		background: var(--accent-light);
	}

	.btn-icon {
		font-size: 1.2rem;
	}

	.btn-arrow {
		font-size: 1.2rem;
		transition: transform 0.3s ease;
	}

	.lone-mountain-btn:hover .btn-arrow {
		transform: translateX(4px);
	}
	
	.results-summary {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: rgba(255, 255, 255, 0.1);
		padding: 1rem 2rem;
		border-radius: 8px;
		backdrop-filter: blur(10px);
	}
	
	.results-count {
		font-size: 1.1rem;
		font-weight: 600;
	}
	
	.view-controls {
		display: flex;
		gap: 0.5rem;
	}
	
	.view-btn {
		padding: 0.5rem 1rem;
		background: transparent;
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 6px;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: 0.9rem;
	}
	
	.view-btn.active {
		background: white;
		color: var(--accent-color);
		border-color: white;
	}
	
	.page-content {
		padding: 2rem 0;
	}
	
	.content-layout {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 2rem;
	}
	
	.filters-sidebar {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		height: fit-content;
		position: sticky;
		top: 2rem;
	}
	
	.filters-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
	}
	
	.filters-header h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0;
	}
	
	.clear-filters {
		background: none;
		border: none;
		color: var(--accent-color);
		cursor: pointer;
		font-weight: 600;
		text-decoration: underline;
	}
	
	.filter-group {
		margin-bottom: 1.5rem;
	}
	
	.filter-group label {
		display: block;
		font-weight: 600;
		color: var(--heading-color);
		margin-bottom: 0.5rem;
		font-size: 0.9rem;
	}
	
	.filter-group input,
	.filter-group select {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid var(--tertiary-color);
		border-radius: 6px;
		font-size: 0.9rem;
		background: white;
	}
	
	.price-inputs,
	.sqft-inputs {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 0.5rem;
		align-items: center;
	}
	
	.price-inputs span,
	.sqft-inputs span {
		font-size: 0.9rem;
		color: var(--text-light);
		text-align: center;
	}
	
	.main-content {
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}
	
	.content-header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1.5rem 2rem;
		border-bottom: 1px solid var(--tertiary-color);
	}
	
	.quick-filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
	
	.quick-filter-btn {
		padding: 0.5rem 1rem;
		background: var(--warm-cream);
		border: 1px solid var(--tertiary-color);
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--text-color);
		cursor: pointer;
		transition: all 0.3s ease;
	}
	
	.quick-filter-btn:hover {
		background: var(--accent-color);
		color: white;
		border-color: var(--accent-color);
		transform: translateY(-1px);
	}
	
	.sort-controls {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-left: auto;
	}
	
	.sort-controls label {
		font-weight: 600;
		color: var(--heading-color);
	}
	
	.sort-controls select {
		padding: 0.5rem 1rem;
		border: 1px solid var(--tertiary-color);
		border-radius: 6px;
		background: white;
	}
	
	.mobile-filters-toggle {
		display: none;
		background: var(--accent-color);
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		cursor: pointer;
		font-weight: 600;
	}
	
	.homes-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
		padding: 2rem;
	}
	
	.homes-container.list-view {
		grid-template-columns: 1fr;
	}
	
	.home-card {
		background: white;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}
	
	.home-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
	}
	
	.home-image {
		position: relative;
		height: 250px;
		overflow: hidden;
	}
	
	.home-image :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}
	
	.home-card:hover .home-image :global(img) {
		transform: scale(1.05);
	}
	
	.home-badges {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	
	.days-badge {
		background: var(--success-green);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
	}
	
	.feature-badge {
		background: var(--accent-color);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
	}
	
	.home-price {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		background: rgba(0, 0, 0, 0.8);
		color: white;
		padding: 0.75rem 1rem;
		border-radius: 8px;
		font-size: 1.2rem;
		font-weight: 700;
	}
	
	.home-details {
		padding: 1.5rem;
	}
	
	.home-address {
		font-size: 1.3rem;
		font-weight: 600;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.home-specs {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	
	
	.home-features {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
	
	
	.dr-jan-insight {
		background: var(--warm-cream);
		border-left: 4px solid var(--accent-color);
		padding: 1rem;
		margin: 1rem 0;
		border-radius: 0 8px 8px 0;
	}
	
	.insight-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}
	
	.insight-icon {
		font-size: 1.2rem;
	}
	
	.insight-title {
		font-weight: 600;
		color: var(--accent-color);
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	.insight-text {
		margin: 0;
		color: var(--text-color);
		font-size: 0.95rem;
		line-height: 1.5;
	}
	
	.home-actions {
		display: flex;
		gap: 0.75rem;
		margin-top: 1rem;
	}
	
	.btn-details, .btn-schedule {
		flex: 1;
		padding: 0.75rem 1rem;
		border: none;
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: 0.9rem;
	}
	
	.btn-details {
		background: var(--accent-color);
		color: white;
	}
	
	.btn-details:hover {
		background: var(--accent-light);
	}
	
	.btn-schedule {
		background: transparent;
		color: var(--accent-color);
		border: 2px solid var(--accent-color);
	}
	
	.btn-schedule:hover {
		background: var(--accent-color);
		color: white;
	}
	
	.no-results {
		text-align: center;
		padding: 4rem 2rem;
		color: var(--text-light);
	}
	
	.no-results h3 {
		font-size: 1.5rem;
		margin: 0 0 1rem 0;
		color: var(--heading-color);
	}
	
	.btn {
		padding: 1rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		transition: all 0.3s ease;
		display: inline-block;
		border: none;
		cursor: pointer;
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
	
	@media (max-width: 768px) {
		.content-layout {
			grid-template-columns: 1fr;
		}
		
		.filters-sidebar {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1000;
			transform: translateX(-100%);
			transition: transform 0.3s ease;
			overflow-y: auto;
		}
		
		.filters-sidebar.mobile-open {
			transform: translateX(0);
		}
		
		.mobile-filters-toggle {
			display: block;
		}
		
		.page-header h1 {
			font-size: 2rem;
		}
		
		.results-summary {
			flex-direction: column;
			gap: 1rem;
		}
		
		.homes-container {
			grid-template-columns: 1fr;
			padding: 1rem;
		}
		
		.home-specs {
			gap: 0.5rem;
		}
		
	}

	.faq-wrapper {
		padding: 2rem 0;
		background: #f8fafc;
	}

	/* Additional Listings Section */
	.additional-listings {
		background: white;
		padding: 4rem 0;
		margin-top: 2rem;
	}

	.additional-listings .container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.additional-listings h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a365d;
		text-align: center;
		margin: 0 0 1rem 0;
	}

	.additional-listings p {
		font-size: 1.2rem;
		color: #6c757d;
		text-align: center;
		margin: 0 0 2rem 0;
	}

	.realscout-listings-widget {
		width: 100%;
	}

	:global(realscout-office-listings) {
		--rs-listing-divider-color: rgb(101, 141, 172);
		width: 100%;
	}
</style>