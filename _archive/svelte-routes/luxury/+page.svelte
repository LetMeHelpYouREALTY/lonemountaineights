<script>
  import { onMount } from 'svelte';
  import { generateFAQSchema, NAP } from '$lib/schema.js';
  import FAQSection from '$lib/components/FAQSection.svelte';
  import OptimizedImage from '$lib/components/OptimizedImage.svelte';
  import { luxuryFAQs } from '$lib/faqs.js';
  
  let luxuryHomes = [];
  let loading = true;

  onMount(() => {
    // Simulate loading luxury homes data
    setTimeout(() => {
      luxuryHomes = [
        {
          id: 1,
          address: "1234 Mountain View Dr",
          price: 1250000,
          beds: 5,
          baths: 4,
          sqft: 4200,
          image: "/images/photos/home-featured-1.jpg",
          features: ["Mountain Views", "Pool", "Gourmet Kitchen", "Master Suite"]
        },
        {
          id: 2,
          address: "5678 Desert Vista Way",
          price: 980000,
          beds: 4,
          baths: 3,
          sqft: 3800,
          image: "/images/photos/home-featured-2.jpg",
          features: ["Golf Course", "Gated Community", "Updated Kitchen", "Garage"]
        },
        {
          id: 3,
          address: "9012 Sunset Ridge",
          price: 1450000,
          beds: 6,
          baths: 5,
          sqft: 4800,
          image: "/images/photos/home-featured-3.jpg",
          features: ["City Views", "Wine Cellar", "Home Theater", "Pool"]
        }
      ];
      loading = false;
    }, 1000);
  });
</script>

<svelte:head>
  <title>Luxury Homes in Lone Mountain Heights | Dr. Jan Duffy</title>
  <meta name="description" content="Discover luxury homes in Lone Mountain Heights with Dr. Jan Duffy. Premium properties with mountain views, pools, and high-end amenities." />
  <script type="application/ld+json">
    {JSON.stringify(generateFAQSchema(luxuryFAQs))}
  </script>
</svelte:head>

<div class="luxury-page">
  <div class="hero-section">
    <div class="hero-content">
      <h1>Luxury Homes in Lone Mountain Heights</h1>
      <p>Discover premium properties with breathtaking mountain views, high-end amenities, and exceptional quality in Las Vegas's most desirable community.</p>
    </div>
  </div>

  <div class="container">
    <div class="luxury-stats">
      <div class="stat">
        <h3>$1.2M</h3>
        <p>Average Luxury Home Price</p>
      </div>
      <div class="stat">
        <h3>4,200</h3>
        <p>Average Square Feet</p>
      </div>
      <div class="stat">
        <h3>98%</h3>
        <p>Luxury Market Retention</p>
      </div>
    </div>

    {#if loading}
      <div class="loading">
        <div class="spinner"></div>
        <p>Loading luxury homes...</p>
      </div>
    {:else}
      <div class="luxury-homes">
        {#each luxuryHomes as home}
          <div class="luxury-home-card">
            <div class="home-image">
              <OptimizedImage src={home.image} alt={home.address} width={640} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" widths={[320, 640, 1024]} />
              <div class="price-badge">${home.price.toLocaleString()}</div>
            </div>
            <div class="home-details">
              <h3>{home.address}</h3>
              <div class="home-specs">
                <span>{home.beds} bed</span>
                <span>{home.baths} bath</span>
                <span>{home.sqft.toLocaleString()} sqft</span>
              </div>
              <div class="home-features">
                {#each home.features as feature}
                  <span class="feature-tag">{feature}</span>
                {/each}
              </div>
              <button class="view-details-btn">View Details</button>
            </div>
          </div>
        {/each}
      </div>
    {/if}

    <!-- FAQ Section - AEO -->
    <div class="luxury-faq-wrapper">
      <FAQSection faqs={luxuryFAQs} title="Luxury Homes in Lone Mountain Heights — FAQs" />
    </div>

    <!-- Luxury Listings Widget -->
    <div class="luxury-listings-widget">
      <h2>Current Luxury Listings</h2>
      <p>Browse our latest luxury homes for sale in Lone Mountain Heights</p>
      <div class="realscout-listings-widget">
        <realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF,TC" minPrice="1000000" maxPrice="5000000"></realscout-office-listings>
      </div>
    </div>

    <div class="luxury-cta">
      <h2>Ready to Find Your Luxury Home?</h2>
      <p>Let Dr. Jan Duffy help you discover the perfect luxury property in Lone Mountain Heights.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn-primary">Schedule Consultation</a>
        <a href={NAP.telHref} class="btn-secondary">Call {NAP.telDisplay}</a>
      </div>
    </div>
  </div>
</div>

<style>
  .luxury-page {
    min-height: 100vh;
  }

  .hero-section {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #ffd700, #ffed4e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-content p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.9;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .luxury-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin: 4rem 0;
    text-align: center;
  }

  .stat h3 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
  }

  .stat p {
    color: #666;
    font-weight: 500;
  }

  .loading {
    text-align: center;
    padding: 4rem 0;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--accent-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .luxury-homes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin: 4rem 0;
  }

  .luxury-home-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .luxury-home-card:hover {
    transform: translateY(-5px);
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
  }

  .price-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--accent-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .home-details {
    padding: 1.5rem;
  }

  .home-details h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
  }

  .home-specs {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    color: #666;
    font-size: 0.9rem;
  }

  .home-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .feature-tag {
    background: #f8f9fa;
    color: #666;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .view-details-btn {
    width: 100%;
    background: var(--accent-color);
    color: white;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .view-details-btn:hover {
    background: var(--accent-light);
  }

  .luxury-cta {
    background: #f8f9fa;
    padding: 4rem 2rem;
    text-align: center;
    border-radius: 12px;
    margin: 4rem 0;
  }

  .luxury-cta h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #333;
  }

  .luxury-cta p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-primary, .btn-secondary {
    padding: 1rem 2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .btn-primary {
    background: var(--accent-color);
    color: white;
  }

  .btn-primary:hover {
    background: var(--accent-light);
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: white;
    color: var(--accent-color);
    border: 2px solid var(--accent-color);
  }

  .btn-secondary:hover {
    background: var(--accent-color);
    color: white;
  }

  .luxury-faq-wrapper {
    padding: 2rem 0;
  }

  /* Luxury Listings Widget */
  .luxury-listings-widget {
    background: #f8f9fa;
    padding: 4rem 0;
    margin: 2rem 0;
    text-align: center;
  }

  .luxury-listings-widget h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a365d;
    margin: 0 0 1rem 0;
  }

  .luxury-listings-widget p {
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
    .hero-content h1 {
      font-size: 2rem;
    }

    .luxury-homes {
      grid-template-columns: 1fr;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .btn-primary, .btn-secondary {
      width: 100%;
      max-width: 300px;
    }
  }
</style>
