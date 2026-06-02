<script>
import { generateBreadcrumbSchema, generateFAQSchema, NAP } from '$lib/schema.js';
import FAQSection from '$lib/components/FAQSection.svelte';
import { schoolsFAQs } from '$lib/faqs.js';

// School data for Lone Mountain Heights/Summerlin area
const schools = {
  elementary: [
    {
      name: 'William G. Geer Elementary School',
      rating: 8,
      grade: 'K-5',
      distance: '1.5 miles',
      address: '1234 Lone Mountain Rd, Las Vegas, NV 89134',
      phone: '(702) 799-8880',
      website: 'https://geeres.ccsd.net',
      highlights: ['STEM Program', 'Gifted & Talented', 'After School Care'],
      description:
        'Excellent elementary school serving the Lone Mountain Heights area with strong academic programs and dedicated teachers.',
      boundary:
        'Serves the Lone Mountain Heights neighborhood and surrounding Summerlin area',
    },
  ],
  middle: [
    {
      name: 'Sig Rogich Middle School',
      rating: 8,
      grade: '6-8',
      distance: '2.0 miles',
      address: '5678 Sig Rogich Dr, Las Vegas, NV 89134',
      phone: '(702) 799-8881',
      website: 'https://rogichms.ccsd.net',
      highlights: ['Advanced Math', 'Science Fair', 'Sports Programs'],
      description:
        'Comprehensive middle school serving the Lone Mountain Heights vicinity with strong academic and extracurricular programs.',
      boundary:
        'Serves the Lone Mountain Heights area and surrounding Summerlin neighborhoods',
    },
  ],
  high: [
    {
      name: 'Liberty High School',
      rating: 8,
      grade: '9-12',
      distance: '3.0 miles',
      address: '9012 Liberty High Dr, Las Vegas, NV 89134',
      phone: '(702) 799-8882',
      website: 'https://libertyhs.ccsd.net',
      highlights: ['AP Programs', 'Honors Society', 'Sports Excellence'],
      description:
        'Large, comprehensive high school serving the broader Summerlin area including Lone Mountain Heights with diverse academic and athletic programs.',
      boundary:
        'Serves the broader Summerlin area including Lone Mountain Heights',
    },
  ],
};

// Private school options
const privateSchools = [
  {
    name: 'The Meadows School',
    type: 'Private K-12',
    rating: 10,
    distance: '4.0 miles',
    address: '8601 Scholar Ln, Las Vegas, NV 89128',
    phone: '(702) 255-1610',
    website: 'https://www.themeadowsschool.org',
    highlights: [
      'College Prep',
      'Small Class Sizes',
      'Individual Attention',
      'Arts Program',
    ],
    description:
      'Premier private school in Las Vegas offering K-12 education with small class sizes and personalized education.',
    tuition: '$25,000/year',
  },
];

// School district information
const districtInfo = {
  name: 'Clark County School District',
  website: 'https://ccsd.net',
  phone: '(702) 799-5000',
  description:
    'The fifth-largest school district in the nation, serving over 300,000 students.',
  highlights: [
    'Largest school district in Nevada',
    'Diverse student population',
    'Strong academic programs',
    'Extensive extracurricular activities',
    'Modern facilities and technology',
  ],
};

// School boundary information
const boundaryInfo = {
  title: 'School Boundaries & Zoning',
  description:
    'School boundaries can change, so always verify with the school district.',
  important:
    'Contact Dr. Jan Duffy for the most current school boundary information and to verify which schools serve specific addresses.',
  verification:
    'School boundaries are determined by the Clark County School District and can be verified at ccsd.net or by calling individual schools.',
};

// Generate breadcrumb schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://lonemountainheights.com' },
  { name: 'Schools', url: 'https://lonemountainheights.com/schools' },
]);

function getStars(rating) {
  const validRating = Math.max(0, Math.min(10, rating || 0));
  const filledStars = Math.floor(validRating / 2);
  const emptyStars = 5 - filledStars;
  return '★'.repeat(filledStars) + '☆'.repeat(Math.max(0, emptyStars));
}
</script>

<svelte:head>
	<title>Lone Mountain Heights Schools | Las Vegas 89129 | Dr. Jan Duffy</title>
	<meta name="description" content="Top-rated schools serving Lone Mountain Heights, Las Vegas 89129. William G. Geer Elementary, Sig Rogich Middle, and Liberty High School information from Dr. Jan Duffy." />
	
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
					"name": "Schools",
					"item": "https://www.lonemountainheights.com/schools"
				}
			]
		}
	</script>

	<!-- FAQ Schema - AEO -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(schoolsFAQs))}
	</script>
</svelte:head>

<main class="schools-page">
	<div class="page-header">
		<div class="container">
			<h1>Lone Mountain Heights Schools</h1>
			<p>Excellent education options for families in our Summerlin community</p>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<!-- School District Overview -->
			<section class="district-overview">
				<h2>Clark County School District</h2>
				<p>{districtInfo.description}</p>
				<div class="district-highlights">
					{#each districtInfo.highlights as highlight}
						<span class="highlight-tag">{highlight}</span>
					{/each}
				</div>
				<div class="district-contact">
					<p><strong>Website:</strong> <a href={districtInfo.website} target="_blank" rel="noopener">{districtInfo.website}</a></p>
					<p><strong>Phone:</strong> <a href="tel:{districtInfo.phone}">{districtInfo.phone}</a></p>
				</div>
			</section>
			
			<!-- Elementary Schools -->
			<section class="schools-section">
				<h2>Elementary Schools (K-5)</h2>
				<div class="schools-grid">
					{#each schools.elementary as school}
						<div class="school-card">
							<div class="school-header">
								<h3>{school.name}</h3>
								<div class="school-rating">
									<span class="stars">{getStars(school.rating)}</span>
									<span class="rating-number">{school.rating}/10</span>
								</div>
							</div>
							<div class="school-details">
								<div class="detail-row">
									<span class="detail-label">Grades:</span>
									<span class="detail-value">{school.grade}</span>
								</div>
								<div class="detail-row">
									<span class="detail-label">Distance:</span>
									<span class="detail-value">{school.distance}</span>
								</div>
								<div class="detail-row">
									<span class="detail-label">Address:</span>
									<span class="detail-value">{school.address}</span>
								</div>
								<div class="detail-row">
									<span class="detail-label">Phone:</span>
									<span class="detail-value"><a href="tel:{school.phone}">{school.phone}</a></span>
								</div>
							</div>
							<div class="school-description">
								<p>{school.description}</p>
							</div>
							<div class="school-highlights">
								<h4>Program Highlights:</h4>
								<ul>
									{#each school.highlights as highlight}
										<li>{highlight}</li>
									{/each}
								</ul>
							</div>
							<div class="school-boundary">
								<h4>Boundary Information:</h4>
								<p>{school.boundary}</p>
							</div>
							<div class="school-actions">
								<a href={school.website} target="_blank" rel="noopener" class="btn btn-secondary">Visit Website</a>
								<a href="tel:{school.phone}" class="btn btn-primary">Call School</a>
							</div>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- Middle Schools -->
			<section class="schools-section">
				<h2>Middle Schools (6-8)</h2>
				<div class="schools-grid">
					{#each schools.middle as school}
						<div class="school-card">
							<div class="school-header">
								<h3>{school.name}</h3>
								<div class="school-rating">
									<span class="stars">{getStars(school.rating)}</span>
									<span class="rating-number">{school.rating}/10</span>
								</div>
							</div>
							<div class="school-details">
								<div class="detail-row">
									<span class="detail-label">Grades:</span>
									<span class="detail-value">{school.grade}</span>
								</div>
								<div class="detail-row">
									<span class="detail-label">Distance:</span>
									<span class="detail-value">{school.distance}</span>
								</div>
								<div class="detail-row">
									<span class="detail-label">Address:</span>
									<span class="detail-value">{school.address}</span>
								</div>
								<div class="detail-row">
									<span class="detail-label">Phone:</span>
									<span class="detail-value"><a href="tel:{school.phone}">{school.phone}</a></span>
								</div>
							</div>
							<div class="school-description">
								<p>{school.description}</p>
							</div>
							<div class="school-highlights">
								<h4>Program Highlights:</h4>
								<ul>
									{#each school.highlights as highlight}
										<li>{highlight}</li>
									{/each}
								</ul>
							</div>
							<div class="school-boundary">
								<h4>Boundary Information:</h4>
								<p>{school.boundary}</p>
							</div>
							<div class="school-actions">
								<a href={school.website} target="_blank" rel="noopener" class="btn btn-secondary">Visit Website</a>
								<a href="tel:{school.phone}" class="btn btn-primary">Call School</a>
							</div>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- High Schools -->
			<section class="schools-section">
				<h2>High Schools (9-12)</h2>
				<div class="schools-grid">
					{#each schools.high as school}
						<div class="school-card">
							<div class="school-header">
								<h3>{school.name}</h3>
								<div class="school-rating">
									<span class="stars">{getStars(school.rating)}</span>
									<span class="rating-number">{school.rating}/10</span>
								</div>
							</div>
							<div class="school-details">
								<div class="detail-row">
									<span class="detail-label">Grades:</span>
									<span class="detail-value">{school.grade}</span>
								</div>
								<div class="detail-row">
									<span class="detail-label">Distance:</span>
									<span class="detail-value">{school.distance}</span>
								</div>
								<div class="detail-row">
									<span class="detail-label">Address:</span>
									<span class="detail-value">{school.address}</span>
								</div>
								<div class="detail-row">
									<span class="detail-label">Phone:</span>
									<span class="detail-value"><a href="tel:{school.phone}">{school.phone}</a></span>
								</div>
							</div>
							<div class="school-description">
								<p>{school.description}</p>
							</div>
							<div class="school-highlights">
								<h4>Program Highlights:</h4>
								<ul>
									{#each school.highlights as highlight}
										<li>{highlight}</li>
									{/each}
								</ul>
							</div>
							<div class="school-boundary">
								<h4>Boundary Information:</h4>
								<p>{school.boundary}</p>
							</div>
							<div class="school-actions">
								<a href={school.website} target="_blank" rel="noopener" class="btn btn-secondary">Visit Website</a>
								<a href="tel:{school.phone}" class="btn btn-primary">Call School</a>
							</div>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- Private Schools -->
			<section class="schools-section">
				<h2>Private School Options</h2>
				<div class="schools-grid">
					{#each privateSchools as school}
						<div class="school-card private">
							<div class="school-header">
								<h3>{school.name}</h3>
								<div class="school-rating">
									<span class="stars">{getStars(school.rating)}</span>
									<span class="rating-number">{school.rating}/10</span>
								</div>
							</div>
							<div class="school-details">
								<div class="detail-row">
									<span class="detail-label">Type:</span>
									<span class="detail-value">{school.type}</span>
								</div>
								<div class="detail-row">
									<span class="detail-label">Distance:</span>
									<span class="detail-value">{school.distance}</span>
								</div>
								<div class="detail-row">
									<span class="detail-label">Address:</span>
									<span class="detail-value">{school.address}</span>
								</div>
								<div class="detail-row">
									<span class="detail-label">Phone:</span>
									<span class="detail-value"><a href="tel:{school.phone}">{school.phone}</a></span>
								</div>
								<div class="detail-row">
									<span class="detail-label">Tuition:</span>
									<span class="detail-value">{school.tuition}</span>
								</div>
							</div>
							<div class="school-description">
								<p>{school.description}</p>
							</div>
							<div class="school-highlights">
								<h4>Program Highlights:</h4>
								<ul>
									{#each school.highlights as highlight}
										<li>{highlight}</li>
									{/each}
								</ul>
							</div>
							<div class="school-actions">
								<a href={school.website} target="_blank" rel="noopener" class="btn btn-secondary">Visit Website</a>
								<a href="tel:{school.phone}" class="btn btn-primary">Call School</a>
							</div>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- School Boundaries -->
			<section class="boundary-section">
				<h2>School Boundaries & Important Information</h2>
				<div class="boundary-info">
					<p><strong>{boundaryInfo.title}</strong></p>
					<p>{boundaryInfo.description}</p>
					<div class="important-notice">
						<p><strong>Important:</strong> {boundaryInfo.important}</p>
					</div>
					<p><strong>Verification:</strong> {boundaryInfo.verification}</p>
				</div>
			</section>
			
			<!-- FAQ Section - AEO -->
			<FAQSection faqs={schoolsFAQs} title="Lone Mountain Heights Schools — FAQs" />

			<!-- CTA Section -->
			<section class="cta-section">
				<h2>Questions About Schools?</h2>
				<p>Dr. Jan Duffy can help you understand school boundaries and find the perfect home in the right school zone.</p>
				<div class="cta-buttons">
					<a href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Search All Homes in Lone Mountain Heights</a>
					<a href={NAP.telHref} class="btn btn-secondary">Call {NAP.telDisplay}</a>
					<a href="/contact" class="btn btn-secondary">Contact Dr. Jan</a>
					<a href="/homes" class="btn btn-secondary">Browse Listings</a>
				</div>
			</section>
		</div>
	</div>
</main>

<style>
	.schools-page {
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
	
	.district-overview,
	.schools-section,
	.boundary-section {
		background: white;
		margin-bottom: 2rem;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.district-overview h2,
	.schools-section h2,
	.boundary-section h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.district-overview p {
		color: var(--text-color);
		margin: 0 0 1.5rem 0;
		line-height: 1.6;
	}
	
	.district-highlights {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}
	
	.highlight-tag {
		background: var(--accent-color);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 600;
	}
	
	.district-contact p {
		margin: 0.5rem 0;
		color: var(--text-color);
	}
	
	.district-contact a {
		color: var(--accent-color);
		text-decoration: none;
		font-weight: 600;
	}
	
	.district-contact a:hover {
		text-decoration: underline;
	}
	
	.schools-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 1.5rem;
	}
	
	.school-card {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 12px;
		border-left: 4px solid var(--accent-color);
	}
	
	.school-card.private {
		border-left-color: var(--warning-orange);
		background: linear-gradient(135deg, var(--warm-cream), var(--tertiary-color));
	}
	
	.school-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
	}
	
	.school-header h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0;
		flex: 1;
	}
	
	.school-rating {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.25rem;
	}
	
	.stars {
		color: var(--warning-orange);
		font-size: 1.1rem;
	}
	
	.rating-number {
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--accent-color);
	}
	
	.school-details {
		margin-bottom: 1rem;
	}
	
	.detail-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	
	.detail-row:last-child {
		border-bottom: none;
	}
	
	.detail-label {
		font-weight: 600;
		color: var(--heading-color);
		font-size: 0.9rem;
	}
	
	.detail-value {
		color: var(--text-color);
		font-size: 0.9rem;
		text-align: right;
	}
	
	.detail-value a {
		color: var(--accent-color);
		text-decoration: none;
		font-weight: 600;
	}
	
	.detail-value a:hover {
		text-decoration: underline;
	}
	
	.school-description {
		margin-bottom: 1rem;
	}
	
	.school-description p {
		color: var(--text-color);
		line-height: 1.5;
		margin: 0;
	}
	
	.school-highlights {
		margin-bottom: 1rem;
	}
	
	.school-highlights h4 {
		font-size: 1rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.school-highlights ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.school-highlights li {
		padding: 0.25rem 0;
		color: var(--text-color);
		position: relative;
		padding-left: 1.5rem;
		font-size: 0.9rem;
	}
	
	.school-highlights li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--success-green);
		font-weight: 700;
	}
	
	.school-boundary {
		margin-bottom: 1.5rem;
		padding: 1rem;
		background: rgba(0, 0, 0, 0.05);
		border-radius: 8px;
	}
	
	.school-boundary h4 {
		font-size: 1rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.school-boundary p {
		color: var(--text-color);
		font-size: 0.9rem;
		line-height: 1.4;
		margin: 0;
	}
	
	.school-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}
	
	.btn {
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9rem;
		transition: all 0.3s ease;
		display: inline-block;
		text-align: center;
		flex: 1;
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
	
	.boundary-info {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
	}
	
	.boundary-info p {
		color: var(--text-color);
		line-height: 1.6;
		margin: 0 0 1rem 0;
	}
	
	.boundary-info p:last-child {
		margin-bottom: 0;
	}
	
	.important-notice {
		background: var(--warning-orange);
		color: white;
		padding: 1rem;
		border-radius: 8px;
		margin: 1rem 0;
	}
	
	.important-notice p {
		margin: 0;
		font-weight: 600;
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
	
	.cta-buttons .btn {
		padding: 1rem 2rem;
		font-size: 1rem;
		min-width: 150px;
	}
	
	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2rem;
		}
		
		.schools-grid {
			grid-template-columns: 1fr;
		}
		
		.school-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
		
		.school-rating {
			align-items: flex-start;
		}
		
		.school-actions {
			flex-direction: column;
		}
		
		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}
		
		.cta-buttons .btn {
			min-width: 200px;
		}
	}
</style>
