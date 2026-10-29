<script>
import { NAP } from '$lib/schema.js';
import OptimizedImage from '$lib/components/OptimizedImage.svelte';
// Quiz state
let currentStep = 0;
let answers = {};
let isComplete = false;
let recommendations = [];
let showResults = false;

// Quiz questions
const questions = [
  {
    id: 'budget',
    question: "What's your budget range?",
    options: [
      {
        value: 'under-500k',
        label: 'Under $500,000',
        description: 'Starter homes and condos',
      },
      {
        value: '500k-700k',
        label: '$500,000 - $700,000',
        description: 'Family homes and townhouses',
      },
      {
        value: '700k-900k',
        label: '$700,000 - $900,000',
        description: 'Luxury single-family homes',
      },
      {
        value: '900k-plus',
        label: '$900,000+',
        description: 'Executive and custom homes',
      },
    ],
  },
  {
    id: 'bedrooms',
    question: 'How many bedrooms do you need?',
    options: [
      {
        value: '2',
        label: '2 Bedrooms',
        description: 'Perfect for couples or small families',
      },
      {
        value: '3',
        label: '3 Bedrooms',
        description: 'Ideal for move-up buyers',
      },
      {
        value: '4',
        label: '4 Bedrooms',
        description: 'Great for larger families',
      },
      {
        value: '5-plus',
        label: '5+ Bedrooms',
        description: 'Spacious luxury homes',
      },
    ],
  },
  {
    id: 'lifestyle',
    question: 'What describes your lifestyle best?',
    options: [
      {
        value: 'active',
        label: 'Active & Outdoor',
        description: 'Love hiking, golf, and outdoor activities',
      },
      {
        value: 'family',
        label: 'Family-Focused',
        description: 'Need nearby public schools and family amenities',
      },
      {
        value: 'luxury',
        label: 'Luxury Living',
        description: 'Want premium finishes and exclusive features',
      },
      {
        value: 'low-maintenance',
        label: 'Low Maintenance',
        description: 'Prefer easy-care living',
      },
    ],
  },
  {
    id: 'amenities',
    question: 'Which amenities are most important?',
    options: [
      {
        value: 'pool',
        label: 'Swimming Pool',
        description: 'Private or community pool access',
      },
      {
        value: 'golf',
        label: 'Golf Course',
        description: 'Golf course views or membership',
      },
      {
        value: 'mountain-views',
        label: 'Mountain Views',
        description: 'Stunning Lone Mountain vistas',
      },
      {
        value: 'privacy',
        label: 'Privacy & Space',
        description: 'Large lots and quiet streets',
      },
    ],
  },
  {
    id: 'timeline',
    question: 'When are you looking to move?',
    options: [
      {
        value: 'immediately',
        label: 'Immediately',
        description: 'Ready to buy now',
      },
      {
        value: '3-months',
        label: 'Within 3 months',
        description: 'Actively searching',
      },
      {
        value: '6-months',
        label: 'Within 6 months',
        description: 'Planning ahead',
      },
      {
        value: 'flexible',
        label: 'Flexible timeline',
        description: 'Waiting for the right home',
      },
    ],
  },
];

// Neighborhood recommendations based on answers
const neighborhoodData = {
  'lone-mountain-ranch': {
    name: 'Lone Mountain Ranch',
    priceRange: '$700,000 - $1,200,000',
    description: 'Gated community with golf course access and luxury amenities',
    features: [
      'Golf Course Views',
      'Gated Security',
      'Luxury Finishes',
      'Mountain Views',
    ],
    bestFor: ['luxury', 'golf', 'privacy'],
    image: '/images/photos/home-featured-1.jpg',
  },
  'desert-vista-estates': {
    name: 'Desert Vista Estates',
    priceRange: '$500,000 - $800,000',
    description: 'Community with parks and nearby public schools',
    features: [
      'Nearby Public Schools',
      'Community Pool',
      'Parks & Trails',
      'Family Amenities',
    ],
    bestFor: ['family', 'active', 'low-maintenance'],
    image: '/images/photos/las-vegas-neighborhood.jpg',
  },
  'mountain-view-heights': {
    name: 'Mountain View Heights',
    priceRange: '$600,000 - $900,000',
    description:
      'Stunning mountain views with modern homes and great amenities',
    features: [
      'Mountain Views',
      'Modern Design',
      'Community Center',
      'Walking Trails',
    ],
    bestFor: ['mountain-views', 'luxury', 'active'],
    image: '/images/photos/home-featured-2.jpg',
  },
  'sunset-ridge': {
    name: 'Sunset Ridge',
    priceRange: '$400,000 - $700,000',
    description: 'Affordable luxury with great value and community feel',
    features: [
      'Great Value',
      'Community Pool',
      'Low HOA Fees',
      'Community Amenities',
    ],
    bestFor: ['low-maintenance', 'family', 'pool'],
    image: '/images/photos/home-featured-3.jpg',
  },
};

// Answer question
function answerQuestion(questionId, answer) {
  answers[questionId] = answer;

  if (currentStep < questions.length - 1) {
    currentStep++;
  } else {
    completeQuiz();
  }
}

// Complete quiz and generate recommendations
function completeQuiz() {
  isComplete = true;
  generateRecommendations();
  showResults = true;
}

// Generate personalized recommendations
function generateRecommendations() {
  const scoredNeighborhoods = Object.entries(neighborhoodData).map(
    ([key, neighborhood]) => {
      let score = 0;

      // Score based on budget
      const budget = answers.budget;
      if (
        budget === 'under-500k' &&
        neighborhood.priceRange.includes('400,000')
      )
        score += 3;
      else if (
        budget === '500k-700k' &&
        neighborhood.priceRange.includes('500,000')
      )
        score += 3;
      else if (
        budget === '700k-900k' &&
        neighborhood.priceRange.includes('700,000')
      )
        score += 3;
      else if (
        budget === '900k-plus' &&
        neighborhood.priceRange.includes('1,200,000')
      )
        score += 3;

      // Score based on lifestyle
      const lifestyle = answers.lifestyle;
      if (neighborhood.bestFor.includes(lifestyle)) score += 2;

      // Score based on amenities
      const amenities = answers.amenities;
      if (neighborhood.bestFor.includes(amenities)) score += 2;

      // Score based on bedrooms (general match)
      const bedrooms = answers.bedrooms;
      if (bedrooms === '2' && neighborhood.name.includes('Sunset')) score += 1;
      else if (bedrooms === '3' && neighborhood.name.includes('Desert'))
        score += 1;
      else if (bedrooms === '4' && neighborhood.name.includes('Mountain'))
        score += 1;
      else if (bedrooms === '5-plus' && neighborhood.name.includes('Ranch'))
        score += 1;

      return { key, ...neighborhood, score };
    },
  );

  // Sort by score and take top 3
  recommendations = scoredNeighborhoods
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

// Restart quiz
function restartQuiz() {
  currentStep = 0;
  answers = {};
  isComplete = false;
  recommendations = [];
  showResults = false;
}

// Go to previous question
function previousQuestion() {
  if (currentStep > 0) {
    currentStep--;
  }
}

// Get progress percentage
$: progress = ((currentStep + 1) / questions.length) * 100;
</script>

<div class="home-finder-quiz">
	<div class="quiz-header">
		<h3>Find Your Perfect Home in Lone Mountain Heights</h3>
		<p>Answer 5 quick questions to get personalized neighborhood recommendations</p>
	</div>
	
	{#if !showResults}
		<div class="quiz-progress">
			<div class="progress-bar">
				<div class="progress-fill" style="width: {progress}%"></div>
			</div>
			<div class="progress-text">
				Question {currentStep + 1} of {questions.length}
			</div>
		</div>
		
		<div class="quiz-content">
			<div class="question-card">
				<h4>{questions[currentStep].question}</h4>
				<div class="options-grid">
					{#each questions[currentStep].options as option}
						<button 
							class="option-button"
							on:click={() => answerQuestion(questions[currentStep].id, option.value)}
						>
							<div class="option-content">
								<div class="option-label">{option.label}</div>
								<div class="option-description">{option.description}</div>
							</div>
						</button>
					{/each}
				</div>
				
				{#if currentStep > 0}
					<button class="back-button" on:click={previousQuestion}>
						← Previous Question
					</button>
				{/if}
			</div>
		</div>
	{:else}
		<div class="quiz-results">
			<div class="results-header">
				<h4>Your Perfect Home Matches</h4>
				<p>Based on your preferences, here are the best neighborhoods for you:</p>
				<button class="restart-button" on:click={restartQuiz}>
					Take Quiz Again
				</button>
			</div>
			
			<div class="recommendations">
				{#each recommendations as neighborhood, index}
					<div class="recommendation-card">
					<div class="recommendation-image">
						<OptimizedImage 
							src={neighborhood.image || '/images/photos/placeholder.jpg'} 
							alt={(neighborhood.name || 'Neighborhood') + ' neighborhood in Lone Mountain Heights'}
							width={640}
							height={400}
							sizes="(max-width: 768px) 100vw, 50vw"
							widths={[320, 640, 1024]}
						/>
						</div>
						<div class="recommendation-content">
							<div class="recommendation-header">
								<h5>{neighborhood.name}</h5>
								<div class="recommendation-price">{neighborhood.priceRange}</div>
							</div>
							<p class="recommendation-description">{neighborhood.description}</p>
							<div class="recommendation-features">
								{#each neighborhood.features as feature}
									<span class="feature-tag">{feature}</span>
								{/each}
							</div>
							<div class="recommendation-actions">
								<a href="/homes?neighborhood={neighborhood.name.toLowerCase().replace(/\s+/g, '-')}" 
								   class="btn btn-primary">
									View Homes
								</a>
								<a href="/contact" class="btn btn-secondary">
									Get More Info
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
			
			<div class="quiz-cta">
				<h5>Ready to Start Your Home Search?</h5>
				<p>Let Dr. Jan Duffy help you find the perfect home in Lone Mountain Heights</p>
				<div class="cta-buttons">
					<a href={NAP.telHref} class="btn btn-primary">Call {NAP.telDisplay}</a>
					<a href="/contact" class="btn btn-secondary">Schedule Consultation</a>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.home-finder-quiz {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		margin-bottom: 2rem;
	}
	
	.quiz-header {
		text-align: center;
		margin-bottom: 2rem;
	}
	
	.quiz-header h3 {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.quiz-header p {
		color: var(--text-color);
		margin: 0;
	}
	
	.quiz-progress {
		margin-bottom: 2rem;
	}
	
	.progress-bar {
		width: 100%;
		height: 8px;
		background: #e5e7eb;
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 0.5rem;
	}
	
	.progress-fill {
		height: 100%;
		background: var(--accent-color);
		transition: width 0.3s ease;
	}
	
	.progress-text {
		text-align: center;
		font-size: 0.9rem;
		color: var(--text-light);
		font-weight: 600;
	}
	
	.question-card {
		background: var(--warm-cream);
		padding: 2rem;
		border-radius: 12px;
	}
	
	.question-card h4 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 2rem 0;
		text-align: center;
	}
	
	.options-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem;
	}
	
	.option-button {
		background: white;
		border: 2px solid #e5e7eb;
		border-radius: 12px;
		padding: 1.5rem;
		cursor: pointer;
		transition: all 0.3s ease;
		text-align: left;
	}
	
	.option-button:hover {
		border-color: var(--accent-color);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
	}
	
	.option-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	
	.option-label {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--heading-color);
	}
	
	.option-description {
		font-size: 0.9rem;
		color: var(--text-color);
	}
	
	.back-button {
		background: none;
		border: 2px solid var(--accent-color);
		color: var(--accent-color);
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		cursor: pointer;
		font-weight: 600;
		transition: all 0.3s ease;
	}
	
	.back-button:hover {
		background: var(--accent-color);
		color: white;
	}
	
	.quiz-results {
		text-align: center;
	}
	
	.results-header {
		margin-bottom: 2rem;
		position: relative;
	}
	
	.results-header h4 {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.results-header p {
		color: var(--text-color);
		margin: 0 0 1rem 0;
	}
	
	.restart-button {
		position: absolute;
		top: 0;
		right: 0;
		background: none;
		border: 2px solid var(--accent-color);
		color: var(--accent-color);
		padding: 0.5rem 1rem;
		border-radius: 6px;
		cursor: pointer;
		font-weight: 600;
		transition: all 0.3s ease;
	}
	
	.restart-button:hover {
		background: var(--accent-color);
		color: white;
	}
	
	.recommendations {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}
	
	.recommendation-card {
		background: white;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
	}
	
	.recommendation-card:hover {
		transform: translateY(-4px);
	}
	
	.recommendation-image {
		width: 100%;
		height: 200px;
		overflow: hidden;
	}
	
	.recommendation-image :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.recommendation-content {
		padding: 1.5rem;
	}
	
	.recommendation-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
	}
	
	.recommendation-header h5 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0;
	}
	
	.recommendation-price {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--accent-color);
	}
	
	.recommendation-description {
		color: var(--text-color);
		margin: 0 0 1rem 0;
		line-height: 1.5;
	}
	
	.recommendation-features {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}
	
	.feature-tag {
		background: var(--warm-cream);
		color: var(--heading-color);
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
	}
	
	.recommendation-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}
	
	.quiz-cta {
		background: var(--tertiary-color);
		padding: 2rem;
		border-radius: 12px;
	}
	
	.quiz-cta h5 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.quiz-cta p {
		color: var(--text-light);
		margin: 0 0 1.5rem 0;
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
		min-width: 150px;
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
		.options-grid {
			grid-template-columns: 1fr;
		}
		
		.recommendations {
			grid-template-columns: 1fr;
		}
		
		.recommendation-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
		
		.recommendation-actions {
			flex-direction: column;
		}
		
		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}
		
		.btn {
			min-width: 200px;
		}
		
		.restart-button {
			position: static;
			margin-top: 1rem;
		}
	}
</style>
