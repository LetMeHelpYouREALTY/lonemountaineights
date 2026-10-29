<script>
// Points of interest in Lone Mountain Heights
const pointsOfInterest = [
  {
    id: 'canyon-gate',
    name: 'Canyon Gate Country Club',
    type: 'Golf Course',
    description: 'Championship golf course with stunning mountain views',
    coordinates: { x: 25, y: 30 },
    icon: '⛳',
    color: 'var(--success-green)',
  },
  {
    id: 'william-geer',
    name: 'William G. Geer Elementary',
    type: 'School',
    description: 'Highly-rated elementary school serving the community',
    coordinates: { x: 60, y: 45 },
    icon: '🏫',
    color: 'var(--primary-color)',
  },
  {
    id: 'sig-rogich',
    name: 'Sig Rogich Middle School',
    type: 'School',
    description: 'Excellent middle school with strong academic programs',
    coordinates: { x: 70, y: 35 },
    icon: '🏫',
    color: 'var(--primary-color)',
  },
  {
    id: 'liberty-high',
    name: 'Liberty High School',
    type: 'School',
    description: 'Top-performing high school with college prep programs',
    coordinates: { x: 80, y: 25 },
    icon: '🏫',
    color: 'var(--primary-color)',
  },
  {
    id: 'summerlin-center',
    name: 'Downtown Summerlin',
    type: 'Shopping',
    description: 'Premier shopping and dining destination',
    coordinates: { x: 15, y: 60 },
    icon: '🛍️',
    color: 'var(--accent-color)',
  },
  {
    id: 'red-rock',
    name: 'Red Rock Canyon',
    type: 'Recreation',
    description: 'National Conservation Area with hiking trails',
    coordinates: { x: 5, y: 15 },
    icon: '🏔️',
    color: 'var(--tertiary-color)',
  },
  {
    id: 'community-park',
    name: 'Lone Mountain Community Park',
    type: 'Park',
    description: 'Community park with playgrounds and walking trails',
    coordinates: { x: 45, y: 55 },
    icon: '🌳',
    color: 'var(--success-green)',
  },
  {
    id: 'medical-center',
    name: 'Summerlin Medical Center',
    type: 'Healthcare',
    description: 'Full-service medical facility and emergency care',
    coordinates: { x: 30, y: 70 },
    icon: '🏥',
    color: '#ff6b6b',
  },
];

// Neighborhood boundaries
const neighborhoods = [
  {
    name: 'Lone Mountain Ranch',
    coordinates: { x: 20, y: 20, width: 30, height: 25 },
    color: 'rgba(34, 197, 94, 0.2)',
    borderColor: 'var(--success-green)',
  },
  {
    name: 'Desert Vista Estates',
    coordinates: { x: 50, y: 40, width: 25, height: 20 },
    color: 'rgba(59, 130, 246, 0.2)',
    borderColor: 'var(--primary-color)',
  },
  {
    name: 'Canyon Gate Country Club',
    coordinates: { x: 15, y: 25, width: 20, height: 15 },
    color: 'rgba(168, 85, 247, 0.2)',
    borderColor: 'var(--accent-color)',
  },
  {
    name: 'Mountain Crest',
    coordinates: { x: 60, y: 25, width: 20, height: 15 },
    color: 'rgba(245, 158, 11, 0.2)',
    borderColor: 'var(--tertiary-color)',
  },
];

let selectedPoint = null;

function selectPoint(point) {
  selectedPoint = point;
}

function closeDetails() {
  selectedPoint = null;
}
</script>

<div class="neighborhood-map-container">
	<div class="map-header">
		<h3>Lone Mountain Heights Points of Interest</h3>
		<p>Explore the amenities, schools, and attractions that make this community special</p>
	</div>
	
	<div class="map-wrapper">
		<div class="map-svg">
			<svg viewBox="0 0 100 100" class="neighborhood-map">
				<!-- Neighborhood boundaries -->
				{#each neighborhoods as neighborhood}
					<rect
						x={neighborhood.coordinates.x}
						y={neighborhood.coordinates.y}
						width={neighborhood.coordinates.width}
						height={neighborhood.coordinates.height}
						fill={neighborhood.color}
						stroke={neighborhood.borderColor}
						stroke-width="0.5"
						class="neighborhood-boundary"
					/>
					<text
						x={neighborhood.coordinates.x + neighborhood.coordinates.width / 2}
						y={neighborhood.coordinates.y + neighborhood.coordinates.height / 2}
						text-anchor="middle"
						class="neighborhood-label"
						font-size="2"
						fill="var(--heading-color)"
					>
						{neighborhood.name}
					</text>
				{/each}
				
				<!-- Points of interest -->
				{#each pointsOfInterest as point}
          <g class="point-of-interest" on:click={() => selectPoint(point)} on:keydown={(e) => e.key === 'Enter' && selectPoint(point)} tabindex="0" role="button" aria-label="View details for {point.name}">
						<circle
							cx={point.coordinates.x}
							cy={point.coordinates.y}
							r="2"
							fill={point.color}
							stroke="white"
							stroke-width="0.5"
							class="poi-circle"
						/>
						<text
							x={point.coordinates.x}
							y={point.coordinates.y - 3}
							text-anchor="middle"
							font-size="3"
							class="poi-icon"
						>
							{point.icon}
						</text>
					</g>
				{/each}
				
				<!-- Main roads -->
				<line x1="0" y1="50" x2="100" y2="50" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="1,1" />
				<line x1="50" y1="0" x2="50" y2="100" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="1,1" />
			</svg>
		</div>
		
		<!-- Legend -->
		<div class="map-legend">
			<h4>Legend</h4>
			<div class="legend-items">
				<div class="legend-item">
					<span class="legend-icon">⛳</span>
					<span>Golf Course</span>
				</div>
				<div class="legend-item">
					<span class="legend-icon">🏫</span>
					<span>Schools</span>
				</div>
				<div class="legend-item">
					<span class="legend-icon">🛍️</span>
					<span>Shopping</span>
				</div>
				<div class="legend-item">
					<span class="legend-icon">🏔️</span>
					<span>Recreation</span>
				</div>
				<div class="legend-item">
					<span class="legend-icon">🌳</span>
					<span>Parks</span>
				</div>
				<div class="legend-item">
					<span class="legend-icon">🏥</span>
					<span>Healthcare</span>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Point details modal -->
	{#if selectedPoint}
    <div class="point-details-modal" on:click={closeDetails} on:keydown={(e) => e.key === 'Escape' && closeDetails()}>
      <div class="point-details-content" on:click|stopPropagation on:keydown|stopPropagation>
				<button class="close-button" on:click={closeDetails}>×</button>
				<div class="point-details-header">
					<span class="point-icon">{selectedPoint.icon}</span>
					<div class="point-info">
						<h4>{selectedPoint.name}</h4>
						<span class="point-type">{selectedPoint.type}</span>
					</div>
				</div>
				<p class="point-description">{selectedPoint.description}</p>
				<div class="point-actions">
					<a href="/contact" class="btn btn-primary">Get Directions</a>
					<a href="/neighborhoods" class="btn btn-secondary">Learn More</a>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.neighborhood-map-container {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		margin-bottom: 2rem;
	}
	
	.map-header {
		text-align: center;
		margin-bottom: 2rem;
	}
	
	.map-header h3 {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.5rem 0;
	}
	
	.map-header p {
		color: var(--text-color);
		margin: 0;
	}
	
	.map-wrapper {
		display: grid;
		grid-template-columns: 1fr 200px;
		gap: 2rem;
		align-items: start;
	}
	
	.map-svg {
		background: #f8fafc;
		border-radius: 8px;
		padding: 1rem;
		border: 2px solid #e2e8f0;
	}
	
	.neighborhood-map {
		width: 100%;
		height: 400px;
	}
	
	.neighborhood-boundary {
		cursor: pointer;
		transition: fill 0.3s ease;
	}
	
	.neighborhood-boundary:hover {
		fill-opacity: 0.3;
	}
	
	.neighborhood-label {
		font-weight: 600;
		pointer-events: none;
	}
	
	.point-of-interest {
		cursor: pointer;
		transition: transform 0.3s ease;
	}
	
	.point-of-interest:hover {
		transform: scale(1.2);
	}
	
	.poi-circle {
		transition: r 0.3s ease;
	}
	
	.point-of-interest:hover .poi-circle {
		r: 2.5;
	}
	
	.poi-icon {
		pointer-events: none;
	}
	
	.map-legend {
		background: var(--warm-cream);
		padding: 1.5rem;
		border-radius: 8px;
	}
	
	.map-legend h4 {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 1rem 0;
	}
	
	.legend-items {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	
	.legend-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: var(--text-color);
	}
	
	.legend-icon {
		font-size: 1.2rem;
		width: 20px;
		text-align: center;
	}
	
	.point-details-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 2rem;
	}
	
	.point-details-content {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		max-width: 500px;
		width: 100%;
		position: relative;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}
	
	.close-button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		color: var(--text-light);
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: background-color 0.3s ease;
	}
	
	.close-button:hover {
		background: var(--tertiary-color);
	}
	
	.point-details-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	
	.point-icon {
		font-size: 2rem;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--warm-cream);
		border-radius: 50%;
	}
	
	.point-info h4 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--heading-color);
		margin: 0 0 0.25rem 0;
	}
	
	.point-type {
		font-size: 0.9rem;
		color: var(--accent-color);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	.point-description {
		color: var(--text-color);
		margin-bottom: 1.5rem;
		line-height: 1.5;
	}
	
	.point-actions {
		display: flex;
		gap: 1rem;
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
		.map-wrapper {
			grid-template-columns: 1fr;
		}
		
		.map-legend {
			order: -1;
		}
		
		.legend-items {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 0.5rem;
		}
		
		.point-actions {
			flex-direction: column;
		}
		
		.btn {
			width: 100%;
		}
	}
</style>
