<script>
	import CloudflareGallery from '$lib/components/CloudflareGallery.svelte';
	import FAQSection from '$lib/components/FAQSection.svelte';
	import { generateFAQSchema } from '$lib/schema.js';

	const galleryFAQs = [
		{
			question: "Are these real photos of Lone Mountain Heights?",
			answer: "Yes! Every photo in our gallery showcases the real beauty of Lone Mountain Heights and the surrounding Las Vegas 89129 community — homes, streetscapes, mountain views, and local amenities."
		},
		{
			question: "How often is the gallery updated?",
			answer: "Our gallery updates automatically. When new photos are added to our Cloudflare media library, they appear here within minutes — no manual updates needed."
		},
		{
			question: "Can I use these photos?",
			answer: "These photos are owned by Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties. Please contact us for permission before using any images."
		},
		{
			question: "Do you have photos of specific properties?",
			answer: "For listing-specific photos, visit our Homes for Sale page or contact Dr. Jan Duffy directly. She'll share detailed photos and virtual tours of any property you're interested in."
		}
	];
</script>

<svelte:head>
	<title>Photo Gallery | Lone Mountain Heights Las Vegas 89129 | Dr. Jan Duffy</title>
	<meta name="description" content="Browse photos of Lone Mountain Heights homes, streets, mountain views, and local amenities in Las Vegas 89129. Updated automatically with the latest community images." />
	<meta property="og:title" content="Lone Mountain Heights Photo Gallery" />
	<meta property="og:description" content="Explore the beauty of Lone Mountain Heights through our dynamic photo gallery featuring homes, community views, and local amenities." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.lonemountainheights.com/gallery" />

	<!-- FAQ Schema - AEO -->
	<script type="application/ld+json">
		{JSON.stringify(generateFAQSchema(galleryFAQs))}
	</script>
</svelte:head>

<main class="gallery-page">
	<!-- Hero Section -->
	<section class="gallery-hero">
		<div class="hero-content">
			<h1>Lone Mountain Heights Photo Gallery</h1>
			<p class="hero-subtitle">Explore the beauty of our community — updated automatically with the latest photos</p>
		</div>
	</section>

	<!-- Main Gallery: All Photos -->
	<CloudflareGallery
		prefix="photos"
		heading="Community Photos"
		subheading="Homes, streetscapes, and mountain views from Lone Mountain Heights"
		columns={3}
		variant="card"
		fullVariant="desktop"
	/>

	<!-- Agents Gallery -->
	<CloudflareGallery
		prefix="agents"
		heading="Our Team"
		subheading="Meet the real estate experts of Lone Mountain Heights"
		columns={4}
		variant="card"
		fullVariant="desktop"
	/>

	<!-- Hero / Scenic Images -->
	<CloudflareGallery
		prefix="hero"
		heading="Scenic Views"
		subheading="Stunning Las Vegas and Lone Mountain panoramas"
		columns={2}
		variant="card"
		fullVariant="heroxl"
	/>

	<!-- How it works callout -->
	<section class="auto-update-callout">
		<div class="callout-content">
			<h2>Always Up to Date</h2>
			<p>
				This gallery updates automatically from our cloud media library.
				When new photos are added, they appear here within minutes — no manual updates needed.
				It's the freshest view of Lone Mountain Heights you'll find online.
			</p>
		</div>
	</section>

	<!-- FAQ Section -->
	<div class="faq-wrapper">
		<FAQSection faqs={galleryFAQs} title="Gallery FAQ" />
	</div>

	<!-- CTA Section -->
	<section class="gallery-cta">
		<div class="cta-content">
			<h2>Want to See More?</h2>
			<p>Schedule a personal tour of Lone Mountain Heights with Dr. Jan Duffy and see these homes in person.</p>
			<div class="cta-buttons">
				<a href="/contact" class="cta-primary">Contact Dr. Jan</a>
				<a href="/homes" class="cta-secondary">Browse Listings</a>
			</div>
		</div>
	</section>
</main>

<style>
	.gallery-page {
		background: #fafbfc;
	}

	/* ── Hero ── */
	.gallery-hero {
		background: linear-gradient(135deg, #1a365d 0%, #2d5a8e 100%);
		color: white;
		text-align: center;
		padding: 4rem 1rem 3rem;
	}

	.hero-content h1 {
		font-size: 2.75rem;
		font-weight: 700;
		margin: 0 0 0.75rem;
		letter-spacing: -0.5px;
	}

	.hero-subtitle {
		font-size: 1.15rem;
		opacity: 0.9;
		margin: 0;
		max-width: 600px;
		margin: 0 auto;
	}

	/* ── Auto-update callout ── */
	.auto-update-callout {
		background: linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 100%);
		border-left: 4px solid #0069ff;
		margin: 2rem auto;
		max-width: 1200px;
		border-radius: 0 12px 12px 0;
		padding: 2rem 2.5rem;
	}

	.callout-content h2 {
		font-size: 1.5rem;
		color: #1a365d;
		margin: 0 0 0.75rem;
	}

	.callout-content p {
		color: #4a5568;
		line-height: 1.7;
		margin: 0;
		font-size: 1rem;
	}

	/* ── FAQ wrapper ── */
	.faq-wrapper {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	/* ── CTA ── */
	.gallery-cta {
		background: linear-gradient(135deg, #1a365d 0%, #2d5a8e 100%);
		color: white;
		text-align: center;
		padding: 4rem 1rem;
		margin-top: 2rem;
	}

	.cta-content h2 {
		font-size: 2rem;
		font-weight: 700;
		margin: 0 0 0.75rem;
	}

	.cta-content p {
		font-size: 1.1rem;
		opacity: 0.9;
		margin: 0 0 2rem;
		max-width: 500px;
		margin: 0 auto 2rem;
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.cta-primary {
		background: white;
		color: #1a365d;
		padding: 0.85rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		transition: all 0.2s ease;
	}

	.cta-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	}

	.cta-secondary {
		background: transparent;
		color: white;
		padding: 0.85rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		border: 2px solid rgba(255, 255, 255, 0.5);
		transition: all 0.2s ease;
	}

	.cta-secondary:hover {
		border-color: white;
		background: rgba(255, 255, 255, 0.1);
	}

	/* ── Responsive ── */
	@media (max-width: 768px) {
		.gallery-hero {
			padding: 3rem 1rem 2rem;
		}

		.hero-content h1 {
			font-size: 1.75rem;
		}

		.hero-subtitle {
			font-size: 1rem;
		}

		.auto-update-callout {
			margin: 1.5rem 1rem;
			padding: 1.5rem;
		}

		.gallery-cta {
			padding: 3rem 1rem;
		}

		.cta-content h2 {
			font-size: 1.5rem;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
