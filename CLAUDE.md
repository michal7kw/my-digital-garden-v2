---
created: 2025-11-01
updated: 2025-11-01
---
# CLAUDE.md - digitalgarden_template

## Overview
This directory contains a customized digital garden template for publishing medical knowledge content from Obsidian to the web. It's built on Eleventy (11ty) and designed specifically for health and medical knowledge sharing.

## Key Components

### Core Template System
- **Eleventy Configuration** - Static site generator setup for medical content
- **Custom Styling** (`src/styles/`) - Medical knowledge-focused design system
- **Note Processing** - Automated processing of Obsidian markdown files
- **Graph Integration** - Knowledge graph visualization in web format

### Publishing Features (`src/site/`)
- **Note Publishing** (`notes/`) - Automated publishing of selected Obsidian notes
- **Personal Health Dashboard** - Web-accessible health tracking interface
- **Lab Tests Integration** - Display and analysis of laboratory results
- **Daily Metrics** - Health metrics tracking and visualization
- **Search Functionality** - Full-text search across published content

### API Integration (`api/`)
- **Note Submission** (`submit-note.js`) - API endpoint for dynamic note publishing
- **Serverless Functions** - Vercel-compatible API functions
- **Real-time Updates** - Live content updates from Obsidian

### Custom Helpers (`src/helpers/`)
- **File Tree Utils** - Navigation structure generation
- **Link Utils** - Cross-reference and backlink processing  
- **User Utils** - User-specific content filtering
- **Constants** - Configuration and constant definitions

## Development Commands

### Prerequisites
- **Node.js 18+** (required for Eleventy)
- **npm or yarn** (package manager)
- **Obsidian vault** (with content to publish)

### Setup and Development
```bash
# Navigate to digital garden directory from repository root
cd digitalgarden_template

# Install dependencies (first-time setup)
npm install

# Start development server (default: http://localhost:8080)
npm run dev

# Build for production (output: _site/ directory)
npm run build

# Preview production build locally
npm run serve

# Deploy to Vercel (requires Vercel CLI)
npm run deploy
```

### Content Management
```bash
# Process new notes from Obsidian vault
npm run process-notes

# Update full-text search index
npm run update-search

# Clean and rebuild entire site
npm run clean && npm run build

# Validate links and cross-references
npm run validate-links
```

### Development Workflow
```bash
# Watch for changes during development
npm run dev

# Build with specific environment
NODE_ENV=production npm run build

# Run linting
npm run lint

# Check for broken links
npm run check-links
```

## Template Features

### Health-Focused Design
- **Medical Theme** - Professional styling appropriate for health content
- **Accessibility** - WCAG-compliant design for medical information
- **Mobile Responsive** - Optimized for mobile health tracking
- **Dark/Light Modes** - User preference support

### Content Processing
- **Markdown Processing** - Advanced markdown rendering with medical extensions
- **Graph Visualization** - Interactive knowledge graph display
- **Image Optimization** - Medical diagram and chart optimization
- **Cross-Referencing** - Automatic linking between related health concepts

### Special Pages
- **Personal Health Dashboard** - Central health metrics overview
- **Lab Tests Page** - Laboratory results visualization
- **Daily Metrics** - Health tracking and trends
- **Feature Documentation** - Template usage guides

## Integration with MKG Platform

### Data Sources
- **Obsidian Vault** - Direct integration with personal health notes
- **Triple Knowledge Graph** - Display of related medical entities from:
  - Curated Personal KG (user health data)
  - PrimeKG (100,000+ biomedical entities)
  - DrugBank (14,000+ pharmaceutical entities)
- **Biomarker Data** - Integration with health analytics via FastAPI backend
- **Recommendation Engine** - Display of personalized health insights

### Publishing Pipeline
1. **Note Selection** - Automated detection of publishable notes
2. **Content Processing** - Markdown processing and enhancement
3. **Graph Integration** - Addition of knowledge graph context
4. **Site Generation** - Static site creation with Eleventy
5. **Deployment** - Automated deployment to web platform

## Configuration

### Site Configuration (`src/_data/`)
```javascript
// Site metadata and configuration
{
  "title": "Personal Health Knowledge Garden",
  "description": "Personalized medical knowledge and health insights",
  "author": "Health Knowledge Platform",
  "baseUrl": "your-domain.com"
}
```

### Publishing Settings
- **Note Filtering** - Control which notes are published
- **Privacy Settings** - Sensitive information filtering
- **Update Frequency** - Automated publishing schedule
- **Access Control** - Public/private content management

## Styling and Themes (`src/styles/`)

### Custom SCSS Structure
- **Base Styles** (`digital-garden-base.scss`) - Foundation styling
- **Obsidian Integration** (`obsidian-base.scss`) - Obsidian-compatible styling
- **Custom Overrides** (`custom-style.scss`) - Project-specific customizations
- **Responsive Design** - Mobile-first responsive framework

### Medical Content Styling
- **Entity Highlighting** - Visual distinction for medical entities
- **Relationship Visualization** - Styled relationship indicators
- **Data Visualization** - Chart and graph styling
- **Alert Styling** - Medical alerts and warnings

## Deployment

### Vercel Integration
- **Configuration** (`vercel.json`) - Deployment configuration
- **API Routes** - Serverless function setup
- **Environment Variables** - Secure configuration management
- **Custom Domains** - Professional domain setup

### Security Features
- **Content Sanitization** - Prevention of XSS attacks  
- **Privacy Protection** - Automatic redaction of sensitive data
- **HTTPS Enforcement** - Secure content delivery
- **Rate Limiting** - API abuse prevention

## Documentation
- `Docs/` - Template usage and customization guides
- `feature-docs/` - Feature-specific documentation
- `DEVELOPMENT_SETUP.md` - Developer setup instructions
