<script>
import { NAP } from '$lib/schema.js';
const schools = [
  {
    name: 'Sandy Valley Elementary School',
    grade: 'K-5',
    rating: 8,
    ratingText: 'Great Schools Rating: 8/10',
    distance: '0.8 miles',
    walkTime: '15 minutes',
    highlights: [
      'High academic performance',
      'Strong parent involvement',
      'Excellent teachers',
    ],
    address: '4600 S. Buffalo Dr, Las Vegas, NV 89147',
  },
  {
    name: 'Sandy Valley Middle School',
    grade: '6-8',
    rating: 7,
    ratingText: 'Great Schools Rating: 7/10',
    distance: '0.8 miles',
    walkTime: '15 minutes',
    highlights: ['STEM programs', 'Sports teams', 'Music and arts'],
    address: '4600 S. Buffalo Dr, Las Vegas, NV 89147',
  },
  {
    name: 'Desert Oasis High School',
    grade: '9-12',
    rating: 8,
    ratingText: 'Great Schools Rating: 8/10',
    distance: '2.1 miles',
    driveTime: '5 minutes',
    highlights: ['AP courses', 'Honors programs', 'College prep', 'Sports'],
    address: '5950 W. Desert Oasis Dr, Las Vegas, NV 89147',
  },
  {
    name: 'Sandy Valley High School',
    grade: '9-12',
    rating: 7,
    ratingText: 'Great Schools Rating: 7/10',
    distance: '1.2 miles',
    driveTime: '3 minutes',
    highlights: [
      'Career technical programs',
      'Smaller class sizes',
      'Individual attention',
    ],
    address: '4600 S. Buffalo Dr, Las Vegas, NV 89147',
  },
];

const privateSchools = [
  {
    name: 'The Meadows School',
    grade: 'PreK-12',
    rating: 9,
    ratingText: 'Private, College Prep',
    distance: '3.5 miles',
    driveTime: '8 minutes',
    highlights: [
      'Elite college prep',
      'Small class sizes',
      'Advanced academics',
    ],
    tuition: '$25,000+ annually',
  },
  {
    name: 'Faith Lutheran Middle & High School',
    grade: '6-12',
    rating: 8,
    ratingText: 'Private, Christian',
    distance: '4.2 miles',
    driveTime: '10 minutes',
    highlights: ['Strong academics', 'Christian values', 'Sports programs'],
    tuition: '$15,000+ annually',
  },
];

const schoolBoundaries = {
  elementary: 'Sandy Valley Elementary School',
  middle: 'Sandy Valley Middle School',
  high: 'Desert Oasis High School (primary) / Sandy Valley High School (alternative)',
};
</script>

<svelte:head>
	<title>Best Schools Near Lone Mountain Heights Las Vegas | Dr. Jan Duffy</title>
	<meta name="description" content="Complete guide to the best schools near Lone Mountain Heights Las Vegas 89129. Elementary, middle, and high school ratings, programs, and enrollment information. Expert insights from Dr. Jan Duffy." />
	
	<!-- FAQ Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": [
				{
					"@type": "Question",
					"name": "What are the best schools near Lone Mountain Heights?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "The best schools near Lone Mountain Heights include Sandy Valley Elementary (8/10 rating), Sandy Valley Middle School (7/10), and Desert Oasis High School (8/10). All are within walking or short driving distance."
					}
				},
				{
					"@type": "Question",
					"name": "What school district is Lone Mountain Heights in?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Lone Mountain Heights is in the Clark County School District, with students typically attending Sandy Valley Elementary, Sandy Valley Middle, and Desert Oasis High School."
					}
				},
				{
					"@type": "Question",
					"name": "Are there private schools near Lone Mountain Heights?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Yes, several excellent private schools are nearby including The Meadows School (college prep) and Faith Lutheran Middle & High School, both within 10 minutes drive."
					}
				}
			]
		}
	</script>
</svelte:head>

<main class="schools-page">
	<div class="page-header">
		<div class="container">
			<nav class="breadcrumb">
				<a href="/">Home</a> > 
				<a href="/faq">FAQ</a> > 
				<span>Best Schools</span>
			</nav>
			
			<h1>Best Schools Near Lone Mountain Heights Las Vegas</h1>
			<p class="page-subtitle">Complete guide to top-rated schools serving the Lone Mountain Heights community</p>
		</div>
	</div>

	<div class="container">
		<div class="content-grid">
			<article class="main-content">
				<!-- Quick Answer -->
				<div class="quick-answer">
					<h2>Quick Answer</h2>
					<div class="answer-box">
						<p><strong>Lone Mountain Heights students attend highly-rated schools:</strong> Sandy Valley Elementary (8/10), Sandy Valley Middle (7/10), and Desert Oasis High School (8/10). All schools are within walking distance or a short drive.</p>
					</div>
				</div>

				<!-- School District Info -->
				<section class="district-info">
					<h2>School District Information</h2>
					<div class="district-card">
						<h3>Clark County School District</h3>
						<p>Lone Mountain Heights is served by the Clark County School District (CCSD), the 5th largest school district in the United States, serving over 300,000 students across Las Vegas Valley.</p>
						
						<div class="boundaries">
							<h4>School Boundaries for Lone Mountain Heights:</h4>
							<ul>
								<li><strong>Elementary:</strong> {schoolBoundaries.elementary}</li>
								<li><strong>Middle School:</strong> {schoolBoundaries.middle}</li>
								<li><strong>High School:</strong> {schoolBoundaries.high}</li>
							</ul>
						</div>
					</div>
				</section>

				<!-- Public Schools -->
				<section class="public-schools">
					<h2>Public Schools Serving Lone Mountain Heights</h2>
					<div class="schools-grid">
						{#each schools as school}
							<div class="school-card">
								<div class="school-header">
									<h3>{school.name}</h3>
									<div class="school-grade">{school.grade}</div>
								</div>
								
								<div class="school-rating">
									<div class="rating-stars">
										{#each Array(school.rating) as _}
											<span class="star">★</span>
										{/each}
										{#each Array(10 - school.rating) as _}
											<span class="star empty">☆</span>
										{/each}
									</div>
									<div class="rating-text">{school.ratingText}</div>
								</div>

								<div class="school-details">
									<div class="detail-item">
										<span class="label">Distance:</span>
										<span class="value">{school.distance}</span>
									</div>
									<div class="detail-item">
										<span class="label">Travel Time:</span>
										<span class="value">{school.walkTime || school.driveTime}</span>
									</div>
									<div class="detail-item">
										<span class="label">Address:</span>
										<span class="value">{school.address}</span>
									</div>
								</div>

								<div class="school-highlights">
									<h4>Key Highlights:</h4>
									<ul>
										{#each school.highlights as highlight}
											<li>{highlight}</li>
										{/each}
									</ul>
								</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- Private Schools -->
				<section class="private-schools">
					<h2>Private Schools Near Lone Mountain Heights</h2>
					<div class="schools-grid">
						{#each privateSchools as school}
							<div class="school-card private">
								<div class="school-header">
									<h3>{school.name}</h3>
									<div class="school-grade">{school.grade}</div>
									<div class="private-badge">Private</div>
								</div>
								
								<div class="school-rating">
									<div class="rating-stars">
										{#each Array(school.rating) as _}
											<span class="star">★</span>
										{/each}
										{#each Array(10 - school.rating) as _}
											<span class="star empty">☆</span>
										{/each}
									</div>
									<div class="rating-text">{school.ratingText}</div>
								</div>

								<div class="school-details">
									<div class="detail-item">
										<span class="label">Distance:</span>
										<span class="value">{school.distance}</span>
									</div>
									<div class="detail-item">
										<span class="label">Drive Time:</span>
										<span class="value">{school.driveTime}</span>
									</div>
									<div class="detail-item">
										<span class="label">Tuition:</span>
										<span class="value">{school.tuition}</span>
									</div>
								</div>

								<div class="school-highlights">
									<h4>Key Highlights:</h4>
									<ul>
										{#each school.highlights as highlight}
											<li>{highlight}</li>
										{/each}
									</ul>
								</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- School Performance Data -->
				<section class="performance-data">
					<h2>School Performance & Test Scores</h2>
					<div class="performance-grid">
						<div class="performance-card">
							<h3>Sandy Valley Elementary</h3>
							<div class="score-item">
								<span class="score-label">Math Proficiency:</span>
								<span class="score-value">78%</span>
							</div>
							<div class="score-item">
								<span class="score-label">Reading Proficiency:</span>
								<span class="score-value">82%</span>
							</div>
							<div class="score-item">
								<span class="score-label">Science Proficiency:</span>
								<span class="score-value">85%</span>
							</div>
						</div>

						<div class="performance-card">
							<h3>Desert Oasis High School</h3>
							<div class="score-item">
								<span class="score-label">Graduation Rate:</span>
								<span class="score-value">92%</span>
							</div>
							<div class="score-item">
								<span class="score-label">College Readiness:</span>
								<span class="score-value">68%</span>
							</div>
							<div class="score-item">
								<span class="score-label">AP Participation:</span>
								<span class="score-value">45%</span>
							</div>
						</div>
					</div>
				</section>

				<!-- Transportation -->
				<section class="transportation">
					<h2>School Transportation & Commute</h2>
					<div class="transport-grid">
						<div class="transport-card">
							<h3>Walking Distance</h3>
							<p>Sandy Valley Elementary and Middle School are within walking distance (0.8 miles, 15 minutes) for most Lone Mountain Heights residents.</p>
						</div>
						<div class="transport-card">
							<h3>School Bus Service</h3>
							<p>CCSD provides school bus service for students living more than 1.5 miles from their assigned school. Routes are available for high school students.</p>
						</div>
						<div class="transport-card">
							<h3>Parent Drop-off</h3>
							<p>All schools have designated drop-off and pick-up areas. Desert Oasis High School has ample parking for parent vehicles.</p>
						</div>
					</div>
				</section>

				<!-- FAQ Section -->
				<section class="faq-section">
					<h2>Frequently Asked Questions</h2>
					
					<div class="faq-item">
						<h3>How do I verify which school my child will attend?</h3>
						<p>You can verify school assignments using the CCSD School Zone Locator tool online, or contact the school district directly. Dr. Jan Duffy can also help you determine school boundaries for specific properties.</p>
					</div>

					<div class="faq-item">
						<h3>Are there any charter schools near Lone Mountain Heights?</h3>
						<p>Yes, several charter schools are available in the area, including Somerset Academy and Coral Academy. These schools often have different enrollment processes and may require applications.</p>
					</div>

					<div class="faq-item">
						<h3>What extracurricular activities are available at these schools?</h3>
						<p>Schools offer various activities including sports teams, music programs, art clubs, STEM competitions, and student government. Desert Oasis High School has particularly strong athletic and academic programs.</p>
					</div>

					<div class="faq-item">
						<h3>How do school ratings affect home values in Lone Mountain Heights?</h3>
						<p>High-performing schools typically increase home values and make properties more attractive to families. The strong school ratings in the Lone Mountain Heights area contribute to the community's desirability.</p>
					</div>

					<div class="faq-item">
						<h3>Can students transfer to different schools within the district?</h3>
						<p>CCSD allows intradistrict transfers based on space availability and specific criteria. Parents must apply through the district's transfer process, which typically opens in the spring.</p>
					</div>
				</section>

				<!-- CTA Section -->
				<section class="cta-section">
					<h2>Questions About Schools or Home Values?</h2>
					<p>Dr. Jan Duffy can provide detailed information about school boundaries, ratings, and how they impact home values in Lone Mountain Heights.</p>
					<div class="cta-buttons">
						<a href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Search Homes in Lone Mountain Heights</a>
						<a href={NAP.telHref} class="btn btn-secondary">Call {NAP.telDisplay}</a>
						<a href="/schools" class="btn btn-secondary">School Information</a>
					</div>
				</section>
			</article>

			<aside class="sidebar">
				<div class="sidebar-card">
					<h3>School Quick Facts</h3>
					<ul>
						<li><strong>District:</strong> Clark County School District</li>
						<li><strong>Elementary:</strong> Sandy Valley (8/10)</li>
						<li><strong>Middle:</strong> Sandy Valley (7/10)</li>
						<li><strong>High:</strong> Desert Oasis (8/10)</li>
					</ul>
				</div>

				<div class="sidebar-card">
					<h3>Related Information</h3>
					<ul>
						<li><a href="/schools">Detailed School Guide</a></li>
						<li><a href="/neighborhoods">Neighborhood Information</a></li>
						<li><a href="/guide">Living in Lone Mountain Heights</a></li>
						<li><a href="/amenities">Local Amenities</a></li>
					</ul>
				</div>

				<div class="sidebar-card">
					<h3>School Resources</h3>
					<ul>
						<li><a href="https://ccsd.net" target="_blank" rel="noopener">CCSD Website</a></li>
						<li><a href="https://www.greatschools.org" target="_blank" rel="noopener">Great Schools Ratings</a></li>
						<li><a href="https://www.niche.com" target="_blank" rel="noopener">Niche School Reviews</a></li>
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
	.schools-page {
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

	.district-card {
		background: var(--warm-cream);
		padding: 2rem;
		border-radius: 8px;
		margin: 1.5rem 0;
	}

	.district-card h3 {
		margin: 0 0 1rem 0;
		color: var(--heading-color);
	}

	.boundaries {
		margin-top: 1.5rem;
	}

	.boundaries h4 {
		margin: 0 0 1rem 0;
		color: var(--heading-color);
	}

	.boundaries ul {
		margin: 0;
		padding-left: 1.5rem;
	}

	.boundaries li {
		margin-bottom: 0.5rem;
	}

	.schools-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.school-card {
		background: white;
		border: 2px solid var(--warm-cream);
		border-radius: 12px;
		padding: 1.5rem;
		transition: all 0.3s ease;
	}

	.school-card.private {
		border-color: var(--accent-color);
		background: var(--accent-light);
	}

	.school-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
	}

	.school-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
	}

	.school-header h3 {
		margin: 0;
		color: var(--heading-color);
		font-size: 1.2rem;
	}

	.school-grade {
		background: var(--accent-color);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 600;
	}

	.private-badge {
		background: var(--primary-color);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 600;
		margin-top: 0.5rem;
	}

	.school-rating {
		margin-bottom: 1rem;
	}

	.rating-stars {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	.star {
		color: #ffd700;
	}

	.star.empty {
		color: #ddd;
	}

	.rating-text {
		font-size: 0.9rem;
		color: var(--text-light);
		font-weight: 600;
	}

	.school-details {
		margin-bottom: 1rem;
	}

	.detail-item {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
		padding: 0.25rem 0;
		border-bottom: 1px solid var(--border-color);
	}

	.detail-item:last-child {
		border-bottom: none;
	}

	.label {
		font-weight: 600;
		color: var(--text-light);
	}

	.value {
		font-weight: 500;
		color: var(--heading-color);
	}

	.school-highlights h4 {
		margin: 0 0 0.75rem 0;
		color: var(--heading-color);
		font-size: 1rem;
	}

	.school-highlights ul {
		margin: 0;
		padding-left: 1.5rem;
	}

	.school-highlights li {
		margin-bottom: 0.5rem;
		font-size: 0.9rem;
	}

	.performance-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.performance-card {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
	}

	.performance-card h3 {
		margin: 0 0 1rem 0;
		color: var(--heading-color);
	}

	.score-item {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.75rem;
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--border-color);
	}

	.score-item:last-child {
		border-bottom: none;
	}

	.score-label {
		font-weight: 600;
		color: var(--text-light);
	}

	.score-value {
		font-weight: 700;
		color: var(--accent-color);
		font-size: 1.1rem;
	}

	.transport-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.transport-card {
		background: white;
		border: 2px solid var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.transport-card h3 {
		margin: 0 0 1rem 0;
		color: var(--heading-color);
	}

	.transport-card p {
		margin: 0;
		line-height: 1.6;
		font-size: 0.9rem;
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

		.schools-grid {
			grid-template-columns: 1fr;
		}

		.performance-grid {
			grid-template-columns: 1fr;
		}

		.transport-grid {
			grid-template-columns: 1fr;
		}

		.cta-buttons {
			flex-direction: column;
		}
	}
</style>
