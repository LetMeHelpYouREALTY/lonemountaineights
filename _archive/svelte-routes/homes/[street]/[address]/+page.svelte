<script>
import { page } from '$app/stores';
import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
import OptimizedImage from '$lib/components/OptimizedImage.svelte';
import { getAbsoluteImageUrl } from '$lib/cloudflare-images.js';
import { NAP } from '$lib/schema.js';

// Get route parameters
$: street = $page.params.street;
$: address = $page.params.address;

// Decode URL parameters
$: streetName = decodeURIComponent(street);
$: propertyAddress = decodeURIComponent(address);

// Generate breadcrumbs
$: breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Homes', path: '/homes' },
  { name: streetName, path: `/homes/${street}` },
  { name: propertyAddress, path: `/homes/${street}/${address}` },
];

// Sample property data (in real app, this would come from API)
const propertyData = {
  address: propertyAddress,
  street: streetName,
  price: '$750,000',
  bedrooms: 4,
  bathrooms: 3,
  squareFeet: 2800,
  lotSize: '0.25 acres',
  yearBuilt: 2003,
  description: `Beautiful ${streetName} home in Lone Mountain Heights featuring modern amenities and stunning mountain views.`,
  features: [
    'Mountain Views',
    'Gated Community',
    'Mature Landscaping',
    'Updated Kitchen',
    'Master Suite',
    'Two-Car Garage',
  ],
  images: [
    '/images/photos/home-featured-1.jpg',
    '/images/photos/home-featured-2.jpg',
    '/images/photos/home-featured-3.jpg',
  ],
};

// Build JSON-LD schema as a JS object so Cloudflare image URLs resolve properly
$: listingSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": propertyAddress,
  "description": propertyData.description,
  "url": `https://www.lonemountainheights.com/homes/${street}/${address}`,
  "image": getAbsoluteImageUrl(propertyData.images[0]),
  "address": {
    "@type": "PostalAddress",
    "streetAddress": propertyAddress,
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89129",
    "addressCountry": "US"
  },
  "offers": {
    "@type": "Offer",
    "price": "750000",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "floorSize": {
    "@type": "QuantitativeValue",
    "value": propertyData.squareFeet,
    "unitCode": "SQF"
  },
  "numberOfRooms": propertyData.bedrooms,
  "numberOfBathroomsTotal": propertyData.bathrooms,
  "yearBuilt": propertyData.yearBuilt,
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Lot Size",
      "value": propertyData.lotSize
    }
  ]
};
</script>

<svelte:head>
  <title>{propertyAddress} | {streetName} | Lone Mountain Heights Homes | Dr. Jan Duffy</title>
  <meta name="description" content="View {propertyAddress} on {streetName} in Lone Mountain Heights, Las Vegas 89129. {propertyData.bedrooms} bed, {propertyData.bathrooms} bath home for {propertyData.price}. Contact Dr. Jan Duffy for details." />
  <meta name="keywords" content="{propertyAddress}, {streetName}, Lone Mountain Heights, Las Vegas 89129, {propertyData.bedrooms} bedroom home, real estate, Dr. Jan Duffy" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://www.lonemountainheights.com/homes/{street}/{address}" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="{propertyAddress} | {streetName} | Lone Mountain Heights" />
  <meta property="og:description" content="{propertyData.bedrooms} bed, {propertyData.bathrooms} bath home for {propertyData.price} in Lone Mountain Heights" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.lonemountainheights.com/homes/{street}/{address}" />
  <meta property="og:image" content="{getAbsoluteImageUrl(propertyData.images[0])}" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{propertyAddress} | {streetName} | Lone Mountain Heights" />
  <meta name="twitter:description" content="{propertyData.bedrooms} bed, {propertyData.bathrooms} bath home for {propertyData.price}" />
  <meta name="twitter:image" content="{getAbsoluteImageUrl(propertyData.images[0])}" />
  
  <!-- JSON-LD Schema -->
  <script type="application/ld+json">
    {JSON.stringify(listingSchema)}
  </script>
</svelte:head>

<div class="property-page">
  <Breadcrumbs {breadcrumbs} />
  
  <div class="property-header">
    <div class="container">
      <h1 class="property-title">{propertyAddress}</h1>
      <p class="property-location">{streetName}, Lone Mountain Heights, Las Vegas 89129</p>
      <div class="property-price">{propertyData.price}</div>
    </div>
  </div>
  
  <div class="property-content">
    <div class="container">
      <div class="property-grid">
        <!-- Property Images -->
        <div class="property-images">
          <div class="main-image">
            <OptimizedImage 
              src={propertyData.images[0]} 
              alt="{propertyAddress} - Main view of Lone Mountain Heights home"
              loading="eager"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 66vw"
              widths={[640, 1024, 1920]}
            />
          </div>
          <div class="image-gallery">
            {#each propertyData.images.slice(1) as image, index}
              <OptimizedImage 
                src={image} 
                alt="{propertyAddress} - View {index + 2} of Lone Mountain Heights home"
                width={200}
                height={150}
                sizes="200px"
                widths={[200, 400]}
              />
            {/each}
          </div>
        </div>
        
        <!-- Property Details -->
        <div class="property-details">
          <div class="property-info">
            <h2>Property Details</h2>
            <div class="info-grid">
              <div class="info-item">
                <span class="label">Bedrooms:</span>
                <span class="value">{propertyData.bedrooms}</span>
              </div>
              <div class="info-item">
                <span class="label">Bathrooms:</span>
                <span class="value">{propertyData.bathrooms}</span>
              </div>
              <div class="info-item">
                <span class="label">Square Feet:</span>
                <span class="value">{propertyData.squareFeet}</span>
              </div>
              <div class="info-item">
                <span class="label">Lot Size:</span>
                <span class="value">{propertyData.lotSize}</span>
              </div>
              <div class="info-item">
                <span class="label">Year Built:</span>
                <span class="value">{propertyData.yearBuilt}</span>
              </div>
            </div>
          </div>
          
          <div class="property-features">
            <h3>Features</h3>
            <ul class="features-list">
              {#each propertyData.features as feature}
                <li>{feature}</li>
              {/each}
            </ul>
          </div>
          
          <div class="property-description">
            <h3>Description</h3>
            <p>{propertyData.description}</p>
          </div>
        </div>
      </div>
      
      <!-- CTA Section -->
      <div class="property-cta">
        <h2>Interested in This Property?</h2>
        <p>Contact Dr. Jan Duffy for more information, scheduling a showing, or to make an offer.</p>
        <div class="cta-buttons">
          <a href={NAP.telHref} class="btn btn-primary">
            <span class="btn-icon">📞</span>
            <span class="btn-text">Call Dr. Jan</span>
          </a>
          <a href={`mailto:${NAP.email}`} class="btn btn-secondary">
            <span class="btn-icon">✉️</span>
            <span class="btn-text">Email Dr. Jan</span>
          </a>
          <a href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yOTMx" 
             class="btn btn-outline" 
             target="_blank" 
             rel="noopener noreferrer">
            <span class="btn-icon">🔍</span>
            <span class="btn-text">Search More Homes</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .property-page {
    min-height: 100vh;
    background: var(--warm-cream);
  }
  
  .property-header {
    background: white;
    padding: 2rem 0;
    border-bottom: 1px solid var(--border-color);
  }
  
  .property-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--heading-color);
    margin: 0 0 0.5rem 0;
  }
  
  .property-location {
    font-size: 1.25rem;
    color: var(--text-light);
    margin: 0 0 1rem 0;
  }
  
  .property-price {
    font-size: 3rem;
    font-weight: 700;
    color: var(--accent-color);
  }
  
  .property-content {
    padding: 3rem 0;
  }
  
  .property-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
  }
  
  .property-images {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .main-image {
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--box-shadow-lg);
  }
  
  .main-image :global(img) {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  
  .image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  .image-gallery :global(img) {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: transform var(--transition-normal);
  }
  
  .image-gallery :global(img):hover {
    transform: scale(1.05);
  }
  
  .property-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .info-item {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border-color);
  }
  
  .info-item .label {
    font-weight: 600;
    color: var(--text-color);
  }
  
  .info-item .value {
    color: var(--heading-color);
  }
  
  .features-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .features-list li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border-color);
    position: relative;
    padding-left: 1.5rem;
  }
  
  .features-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--success-color);
    font-weight: bold;
  }
  
  .property-cta {
    background: white;
    padding: 3rem 2rem;
    border-radius: var(--border-radius-lg);
    text-align: center;
    box-shadow: var(--box-shadow);
  }
  
  .property-cta h2 {
    font-size: 2rem;
    color: var(--heading-color);
    margin: 0 0 1rem 0;
  }
  
  .property-cta p {
    font-size: 1.125rem;
    color: var(--text-color);
    margin: 0 0 2rem 0;
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    transition: all var(--transition-normal);
    min-height: 44px;
  }
  
  .btn-primary {
    background: var(--accent-color);
    color: white;
    border: 2px solid var(--accent-color);
  }
  
  .btn-primary:hover {
    background: var(--accent-light);
    transform: translateY(-2px);
    box-shadow: var(--box-shadow-lg);
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
  
  .btn-outline {
    background: transparent;
    color: var(--text-color);
    border: 2px solid var(--border-color);
  }
  
  .btn-outline:hover {
    background: var(--warm-cream);
    border-color: var(--accent-color);
    color: var(--accent-color);
  }
  
  @media (max-width: 768px) {
    .property-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .property-title {
      font-size: 2rem;
    }
    
    .property-price {
      font-size: 2.5rem;
    }
    
    .info-grid {
      grid-template-columns: 1fr;
    }
    
    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .btn {
      width: 100%;
      max-width: 300px;
    }
  }
</style>
