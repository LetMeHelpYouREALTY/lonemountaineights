<script>
  import { onMount } from 'svelte';
  import { generateFAQSchema, NAP } from '$lib/schema.js';
  import FAQSection from '$lib/components/FAQSection.svelte';
  import { careersFAQs } from '$lib/faqs.js';
  
  let jobOpenings = [];
  let loading = true;
  
  onMount(() => {
    // Simulate loading job openings data
    setTimeout(() => {
      jobOpenings = [
        {
          id: 1,
          title: "Real Estate Agent",
          location: "Las Vegas, NV",
          type: "Full-time",
          experience: "2+ years",
          description: "Join our team as a licensed real estate agent specializing in Lone Mountain Heights and surrounding areas.",
          requirements: [
            "Nevada Real Estate License",
            "2+ years experience",
            "Strong local market knowledge",
            "Excellent communication skills"
          ],
          benefits: [
            "Competitive commission structure",
            "Marketing support",
            "Professional development",
            "Flexible schedule"
          ]
        },
        {
          id: 2,
          title: "Marketing Coordinator",
          location: "Las Vegas, NV",
          type: "Full-time",
          experience: "1+ years",
          description: "Support our marketing efforts with digital campaigns, social media, and client outreach.",
          requirements: [
            "Bachelor's degree in Marketing or related field",
            "1+ years marketing experience",
            "Social media expertise",
            "Creative thinking"
          ],
          benefits: [
            "Health insurance",
            "401k matching",
            "Paid time off",
            "Growth opportunities"
          ]
        },
        {
          id: 3,
          title: "Client Relations Specialist",
          location: "Las Vegas, NV",
          type: "Part-time",
          experience: "Entry level",
          description: "Provide exceptional customer service and support to our clients throughout their real estate journey.",
          requirements: [
            "High school diploma",
            "Customer service experience preferred",
            "Professional demeanor",
            "Detail-oriented"
          ],
          benefits: [
            "Flexible hours",
            "Commission bonuses",
            "Training provided",
            "Team environment"
          ]
        }
      ];
      loading = false;
    }, 1000);
  });
</script>

<svelte:head>
  <title>Careers at Lone Mountain Heights | Dr. Jan Duffy Real Estate</title>
  <meta name="description" content="Join our team at Dr. Jan Duffy Real Estate. Explore career opportunities in real estate, marketing, and client relations in Las Vegas." />
  <script type="application/ld+json">
    {JSON.stringify(generateFAQSchema(careersFAQs))}
  </script>
</svelte:head>

<div class="careers-page">
  <div class="hero-section">
    <div class="hero-content">
      <h1>Join Our Team</h1>
      <p>Build your career with Dr. Jan Duffy Real Estate and help families find their perfect home in Lone Mountain Heights.</p>
    </div>
  </div>

  <div class="container">
    <div class="why-work-with-us">
      <h2>Why Work With Us?</h2>
      <div class="benefits-grid">
        <div class="benefit">
          <div class="benefit-icon">🏆</div>
          <h3>Top Producer</h3>
          <p>Join the #1 real estate team in Lone Mountain Heights with proven success and recognition.</p>
        </div>
        <div class="benefit">
          <div class="benefit-icon">📈</div>
          <h3>Growth Opportunities</h3>
          <p>Advance your career with ongoing training, mentorship, and professional development.</p>
        </div>
        <div class="benefit">
          <div class="benefit-icon">🤝</div>
          <h3>Team Environment</h3>
          <p>Work with supportive colleagues who share your passion for helping clients achieve their goals.</p>
        </div>
        <div class="benefit">
          <div class="benefit-icon">💰</div>
          <h3>Competitive Compensation</h3>
          <p>Enjoy competitive commission structures and performance-based bonuses.</p>
        </div>
      </div>
    </div>

    <div class="job-openings">
      <h2>Current Openings</h2>
      
      {#if loading}
        <div class="loading">
          <div class="spinner"></div>
          <p>Loading job openings...</p>
        </div>
      {:else}
        <div class="jobs-list">
          {#each jobOpenings as job}
            <div class="job-card">
              <div class="job-header">
                <h3>{job.title}</h3>
                <div class="job-meta">
                  <span class="job-location">📍 {job.location}</span>
                  <span class="job-type">{job.type}</span>
                  <span class="job-experience">{job.experience}</span>
                </div>
              </div>
              <div class="job-content">
                <p class="job-description">{job.description}</p>
                
                <div class="job-details">
                  <div class="requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {#each job.requirements as requirement}
                        <li>{requirement}</li>
                      {/each}
                    </ul>
                  </div>
                  
                  <div class="benefits">
                    <h4>Benefits:</h4>
                    <ul>
                      {#each job.benefits as benefit}
                        <li>{benefit}</li>
                      {/each}
                    </ul>
                  </div>
                </div>
                
                <button class="apply-btn">Apply Now</button>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>

    <div class="application-process">
      <h2>Application Process</h2>
      <div class="process-steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Submit Application</h3>
          <p>Complete our online application form with your resume and cover letter.</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Initial Interview</h3>
          <p>We'll review your application and schedule a phone or video interview.</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>In-Person Meeting</h3>
          <p>Meet with our team to discuss the role and your career goals.</p>
        </div>
        <div class="step">
          <div class="step-number">4</div>
          <h3>Background Check</h3>
          <p>Complete background verification and reference checks.</p>
        </div>
      </div>
    </div>

    <FAQSection faqs={careersFAQs} title="Careers with Dr. Jan Duffy — FAQs" />

    <div class="contact-cta">
      <h2>Ready to Apply?</h2>
      <p>Don't see a position that fits? We're always looking for talented individuals to join our team.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn-primary">Contact Us</a>
        <a href={NAP.telHref} class="btn-secondary">Call {NAP.telDisplay}</a>
      </div>
    </div>
  </div>
</div>

<style>
  .careers-page {
    min-height: 100vh;
  }

  .hero-section {
    background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
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

  .why-work-with-us {
    padding: 4rem 0;
  }

  .why-work-with-us h2 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: #1a365d;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .benefit {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .benefit:hover {
    transform: translateY(-5px);
  }

  .benefit-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .benefit h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1a365d;
  }

  .benefit p {
    color: #666;
    line-height: 1.6;
  }

  .job-openings {
    padding: 4rem 0;
    background: #f8f9fa;
  }

  .job-openings h2 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: #1a365d;
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

  .jobs-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .job-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .job-card:hover {
    transform: translateY(-2px);
  }

  .job-header {
    padding: 2rem 2rem 1rem;
    border-bottom: 1px solid #e2e8f0;
  }

  .job-header h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1a365d;
  }

  .job-meta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .job-meta span {
    background: #e2e8f0;
    color: #4a5568;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .job-content {
    padding: 2rem;
  }

  .job-description {
    font-size: 1.1rem;
    color: #4a5568;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .job-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .requirements h4,
  .benefits h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #1a365d;
  }

  .requirements ul,
  .benefits ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .requirements li,
  .benefits li {
    padding: 0.25rem 0;
    color: #4a5568;
    position: relative;
    padding-left: 1.5rem;
  }

  .requirements li::before,
  .benefits li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
  }

  .apply-btn {
    background: var(--accent-color);
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .apply-btn:hover {
    background: var(--accent-light);
  }

  .application-process {
    padding: 4rem 0;
  }

  .application-process h2 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: #1a365d;
  }

  .process-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .step {
    text-align: center;
    padding: 2rem;
  }

  .step-number {
    width: 60px;
    height: 60px;
    background: var(--accent-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 auto 1rem;
  }

  .step h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1a365d;
  }

  .step p {
    color: #666;
    line-height: 1.6;
  }

  .contact-cta {
    background: #1a365d;
    color: white;
    padding: 4rem 2rem;
    text-align: center;
    border-radius: 12px;
    margin: 4rem 0;
  }

  .contact-cta h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .contact-cta p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
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
    background: white;
    color: #1a365d;
  }

  .btn-primary:hover {
    background: #f7fafc;
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }

  .btn-secondary:hover {
    background: white;
    color: #1a365d;
  }

  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2rem;
    }

    .job-details {
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
