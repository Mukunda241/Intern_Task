# Frontend Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Start Development Server
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## Project Structure

```
frontend/
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── components/
│   │   ├── Header.js        # Navigation header
│   │   ├── Hero.js          # Hero section
│   │   ├── About.js         # About section
│   │   ├── Projects.js      # Projects showcase
│   │   ├── Skills.js        # Skills section
│   │   ├── Contact.js       # Contact form
│   │   └── Footer.js        # Footer
│   ├── App.js               # Main component
│   ├── App.css              # Global styles
│   ├── index.js             # Entry point
│   ├── index.css            # Global CSS
│   └── package.json
└── README.md
```

## Component Documentation

### Header Component
- Fixed navigation bar
- Smooth scroll to sections
- Mobile hamburger menu
- Scroll effect styling

### Hero Section
- Large headline with gradient text
- Call-to-action buttons
- Animated background blobs
- Scroll indicator
- Responsive layout

### About Section
- Personal introduction
- Statistics cards
- Highlight cards with emojis
- Professional background info

### Projects Section
- Project cards grid
- Technology tags
- Project descriptions
- Hover animations
- Link to project details

### Skills Section
- Skill categories
- Proficiency bars
- Animated progress
- Professional categorization

### Contact Section
- Contact form with validation
- Contact information cards
- Social media links
- Success message feedback

### Footer
- Quick links
- Social links
- Copyright info
- Responsive layout

## Styling

### Colors
```css
--primary: #00d4ff    /* Cyan */
--secondary: #0f0f23  /* Dark Navy */
--accent: #ff6b6b     /* Red */
--text: #e0e0e0       /* Light Gray */
--text-secondary: #a0a0a0 /* Gray */
```

### Fonts
- Primary: Inter (sans-serif)
- Fallback: System fonts

## Customization

### Change Portfolio Name
1. Update in `src/components/Header.js`
2. Update in `src/components/Hero.js`
3. Update in `src/components/Footer.js`

### Update Projects
Edit `src/components/Projects.js` - modify the `projects` array:
```javascript
const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Description",
    tags: ["React", "Node.js"],
    image: "🎯"
  }
];
```

### Change Color Scheme
Edit `src/index.css` and individual component CSS files:
- Replace `#00d4ff` with your primary color
- Replace `#0f0f23` with your secondary color

### Update Contact Info
Edit `src/components/Contact.js`:
- Email address
- Phone number
- Location
- Social media links

### Modify About Section
Edit `src/components/About.js`:
- Update bio text
- Change statistics
- Modify highlight cards

## Available Scripts

```bash
npm start     # Start dev server on port 3000
npm build     # Build for production
npm test      # Run tests
npm eject     # Eject from create-react-app (irreversible)
```

## Responsive Design

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

All components are fully responsive.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- CSS is inline (no external stylesheets)
- Images are emoji-based (no HTTP requests)
- Smooth scroll behavior
- Optimized animations
- Lazy loading ready

## Production Build

```bash
npm build
```

Creates optimized production build in `build/` folder.

Deploy to:
- **Vercel**: `vercel deploy`
- **Netlify**: Connect GitHub repo
- **GitHub Pages**: Follow platform instructions

## Connecting to Backend

Update API calls in components:

```javascript
// In Contact.js, Projects.js, etc.
const API_URL = 'http://localhost:5000/api';

// Or set environment variable
const API_URL = process.env.REACT_APP_API_URL;
```

## Environment Variables

Create `.env` file:
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_TITLE=My Portfolio
```

## Troubleshooting

### Port 3000 Already in Use
```bash
PORT=3001 npm start
```

### Dependencies Installation Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
npm cache clean --force
npm install
npm build
```

## Next Steps

1. Customize content with your information
2. Connect backend API
3. Add your projects
4. Deploy to production
5. Add analytics
6. Setup email notifications
