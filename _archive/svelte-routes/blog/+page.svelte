<script>
import { generateBreadcrumbSchema, generateFAQSchema } from '$lib/schema.js';
import FAQSection from '$lib/components/FAQSection.svelte';
import OptimizedImage from '$lib/components/OptimizedImage.svelte';
import { blogFAQs } from '$lib/faqs.js';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://www.lonemountainheights.com' },
  { name: 'Blog', url: 'https://www.lonemountainheights.com/blog' },
]);

// Blog categories
const categories = [
  {
    id: 'this-week',
    name: 'This Week in Lone Mountain Heights',
    description: 'Recent sales, market updates, and neighborhood news',
    icon: '📊',
    color: 'var(--accent-color)',
  },
  {
    id: 'neighborhood-spotlight',
    name: 'Neighborhood Spotlight',
    description:
      'Local amenities, schools, restaurants, and community features',
    icon: '🏘️',
    color: 'var(--primary-color)',
  },
  {
    id: 'market-analysis',
    name: 'Market Analysis',
    description: 'Pricing trends, inventory levels, and market insights',
    icon: '📈',
    color: 'var(--success-green)',
  },
  {
    id: 'homeowner-tips',
    name: 'Homeowner Tips',
    description: 'Maintenance, staging, selling advice, and home improvement',
    icon: '🏠',
    color: 'var(--tertiary-color)',
  },
];

// Recent blog posts (in a real app, this would come from a CMS)
const recentPosts = [
  {
    id: 'weekly-market-update-dec-2024',
    title: 'This Week in Lone Mountain Heights: December 2024 Market Update',
    excerpt:
      'Lone Mountain Heights sees strong end-of-year activity with 12 new listings and 8 sales closed this week. Average home price remains steady at $850,000.',
    category: 'this-week',
    date: '2024-12-19',
    readTime: '3 min read',
    featured: true,
  },
  {
    id: 'canyon-gate-country-club-spotlight',
    title: 'Neighborhood Spotlight: Canyon Gate Country Club Living',
    excerpt:
      'Discover the exclusive lifestyle at Canyon Gate Country Club, featuring championship golf, luxury amenities, and stunning mountain views.',
    category: 'neighborhood-spotlight',
    date: '2024-12-15',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 'winter-home-staging-tips',
    title: 'Homeowner Tips: Winter Staging Strategies for Maximum Appeal',
    excerpt:
      'Learn how to make your Lone Mountain Heights home shine during the winter months with these expert staging tips from Dr. Jan Duffy.',
    category: 'homeowner-tips',
    date: '2024-12-12',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 'november-market-analysis',
    title: 'Market Analysis: November 2024 Lone Mountain Heights Report',
    excerpt:
      'Deep dive into November market trends, including inventory levels, price movements, and what to expect in the coming months.',
    category: 'market-analysis',
    date: '2024-12-08',
    readTime: '6 min read',
    featured: false,
  },
];

// Featured content
const featuredContent = {
  title: 'Complete Guide to Living in Lone Mountain Heights',
  description:
    'Everything you need to know about this premier Las Vegas community',
  url: '/blog/complete-guide-living-lone-mountain-heights',
  image:
    '/images/photos/las-vegas-neighborhood.jpg',
};
</script>

<svelte:head>
	<title>Lone Mountain Heights Real Estate Blog | Las Vegas 89129 | Dr. Jan Duffy</title>
	<meta name="description" content="Stay updated with the latest Lone Mountain Heights real estate news, market insights, and neighborhood spotlights from Dr. Jan Duffy, your local expert." />
	
	<!-- Blog Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Blog",
			"name": "Lone Mountain Heights Real Estate Blog",
			"description": "Real estate insights, market updates, and neighborhood information for Lone Mountain Heights, Las Vegas 89129",
			"url": "https://www.lonemountainheights.com/blog",
			"publisher": {
				"@type": "Person",
				"name": "Dr. Jan Duffy",
				"url": "https://www.lonemountainheights.com/about"
			},
			"inLanguage": "en-US",
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

	<!-- FAQ Schema - AEO -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(blogFAQs))}
	</script>
</svelte:head>

<main class="blog-page">
	<div class="page-header">
		<div class="container">
			<h1>Lone Mountain Heights Real Estate Blog</h1>
			<p>Stay updated with market insights, neighborhood news, and expert advice from Dr. Jan Duffy</p>
		</div>
	</div>
	
	<div class="page-content">
		<div class="container">
			<!-- Featured Content -->
			<section class="featured-content">
				<div class="featured-card">
					<div class="featured-image">
						<OptimizedImage src={featuredContent.image} alt={featuredContent.title} width={800} height={450} sizes="(max-width: 768px) 100vw, 66vw" widths={[320, 640, 1024]} />
					</div>
					<div class="featured-content-text">
						<h2>{featuredContent.title}</h2>
						<p>{featuredContent.description}</p>
						<a href={featuredContent.url} class="btn btn-primary">Read Complete Guide</a>
					</div>
				</div>
			</section>
			
			<!-- Blog Categories -->
			<section class="categories-section">
				<h2>Browse by Category</h2>
				<div class="categories-grid">
					{#each categories as category}
						<div class="category-card" style="--category-color: {category.color}">
							<div class="category-icon">{category.icon}</div>
							<h3>{category.name}</h3>
							<p>{category.description}</p>
							<a href="/blog/category/{category.id}" class="category-link">View Posts</a>
						</div>
					{/each}
				</div>
			</section>
			
			<!-- Recent Posts -->
			<section class="recent-posts">
				<h2>Latest Posts</h2>
				<div class="posts-grid">
					{#each recentPosts as post}
						<article class="post-card">
							<div class="post-meta">
								<span class="post-category">{categories.find(c => c.id === post.category)?.name}</span>
								<span class="post-date">{new Date(post.date).toLocaleDateString()}</span>
								<span class="post-read-time">{post.readTime}</span>
							</div>
							<h3 class="post-title">{post.title}</h3>
							<p class="post-excerpt">{post.excerpt}</p>
							<a href="/blog/{post.id}" class="post-link">Read More</a>
						</article>
					{/each}
				</div>
			</section>
			
			<!-- FAQ Section - AEO -->
			<FAQSection faqs={blogFAQs} title="Lone Mountain Heights Blog & News — FAQs" />

			<!-- Lone Mountain Heights Search CTA -->
			<section class="lone-mountain-cta-section">
				<div class="lone-mountain-cta-card">
					<h2>🔍 Ready to Search for Your Dream Home?</h2>
					<p>Access our complete MLS database with advanced search filters and real-time updates</p>
					<a href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx" 
					   class="btn btn-primary lone-mountain-btn" 
					   target="_blank" 
					   rel="noopener noreferrer">
						<span class="btn-icon">🏠</span>
						<span class="btn-text">Search All Homes in Lone Mountain Heights</span>
						<span class="btn-arrow">→</span>
					</a>
				</div>
			</section>
			
			<!-- Newsletter Signup -->
			<section class="newsletter-section">
				<div class="newsletter-card">
					<h2>Stay Updated with Lone Mountain Heights</h2>
					<p>Get weekly market updates, neighborhood news, and exclusive insights delivered to your inbox.</p>
					<form class="newsletter-form">
						<input type="email" placeholder="Enter your email address" required />
						<button type="submit" class="btn btn-primary">Subscribe</button>
					</form>
					<p class="newsletter-note">No spam, unsubscribe at any time.</p>
				</div>
			</section>
		</div>
	</div>
</main>

<style>
	.blog-page {
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
	
	.featured-content,
	.categories-section,
	.recent-posts,
	.newsletter-section {
		background: white;
		margin-bottom: 2rem;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.featured-card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: center;
	}
	
	.featured-image :global(img) {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 12px;
	}
	
	.featured-content-text h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.featured-content-text p {
		font-size: 1.1rem;
		color: var(--text-color);
		margin-bottom: 2rem;
		line-height: 1.6;
	}
	
	.categories-section h2,
	.recent-posts h2,
	.newsletter-section h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 2rem 0;
		text-align: center;
	}
	
	.categories-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}
	
	.category-card {
		background: var(--warm-cream);
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
		transition: transform 0.3s ease;
		border-top: 4px solid var(--category-color);
	}
	
	.category-card:hover {
		transform: translateY(-4px);
	}
	
	.category-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}
	
	.category-card h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.category-card p {
		color: var(--text-color);
		margin-bottom: 1.5rem;
		line-height: 1.5;
	}
	
	.category-link {
		color: var(--category-color);
		text-decoration: none;
		font-weight: 600;
	}
	
	.category-link:hover {
		text-decoration: underline;
	}
	
	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}
	
	.post-card {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 12px;
		transition: transform 0.3s ease;
	}
	
	.post-card:hover {
		transform: translateY(-2px);
	}
	
	.post-meta {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
		font-size: 0.9rem;
		color: var(--text-light);
	}
	
	.post-category {
		font-weight: 600;
		color: var(--accent-color);
	}
	
	.post-title {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
		line-height: 1.3;
	}
	
	.post-excerpt {
		color: var(--text-color);
		margin-bottom: 1.5rem;
		line-height: 1.5;
	}
	
	.post-link {
		color: var(--accent-color);
		text-decoration: none;
		font-weight: 600;
	}
	
	.post-link:hover {
		text-decoration: underline;
	}
	
	.lone-mountain-cta-section {
		margin: 3rem 0;
	}

	.lone-mountain-cta-card {
		text-align: center;
		background: var(--accent-color);
		color: white;
		padding: 3rem 2rem;
		border-radius: 12px;
		box-shadow: 0 8px 25px rgba(30, 58, 138, 0.2);
	}

	.lone-mountain-cta-card h2 {
		font-size: 1.8rem;
		margin: 0 0 0.5rem 0;
		font-weight: 700;
	}

	.lone-mountain-cta-card p {
		font-size: 1.1rem;
		margin: 0 0 1.5rem 0;
		opacity: 0.9;
	}

	.lone-mountain-btn {
		background: white;
		color: var(--accent-color);
		padding: 1rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		font-size: 1.1rem;
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.lone-mountain-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
		background: var(--warm-cream);
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
	
	.newsletter-card {
		text-align: center;
		background: var(--tertiary-color);
		padding: 3rem 2rem;
		border-radius: 12px;
	}
	
	.newsletter-card h2 {
		color: var(--heading-color);
		margin-bottom: 1rem;
	}
	
	.newsletter-card p {
		font-size: 1.1rem;
		color: var(--text-light);
		margin-bottom: 2rem;
	}
	
	.newsletter-form {
		display: flex;
		gap: 1rem;
		max-width: 500px;
		margin: 0 auto 1rem auto;
	}
	
	.newsletter-form input {
		flex: 1;
		padding: 1rem;
		border: 2px solid var(--tertiary-color);
		border-radius: 8px;
		font-size: 1rem;
	}
	
	.newsletter-form input:focus {
		outline: none;
		border-color: var(--accent-color);
	}
	
	.newsletter-note {
		font-size: 0.9rem;
		color: var(--text-light);
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
		border: none;
		cursor: pointer;
	}
	
	.btn-primary {
		background: var(--accent-color);
		color: white;
	}
	
	.btn-primary:hover {
		background: var(--accent-light);
		transform: translateY(-2px);
	}
	
	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2rem;
		}
		
		.featured-card {
			grid-template-columns: 1fr;
		}
		
		.categories-grid {
			grid-template-columns: 1fr;
		}
		
		.posts-grid {
			grid-template-columns: 1fr;
		}
		
		.newsletter-form {
			flex-direction: column;
		}
	}
</style>
