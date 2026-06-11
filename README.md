# 🎯 Professional Portfolio Website

A full-stack personal portfolio website built with **React**, **Node.js/Express**, and **MySQL**. Features a modern, professional corporate design with smooth animations and responsive layout.

## ✨ Features

- **Modern UI/UX**: Professional corporate design with beautiful gradients and animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Sections**:
  - Hero Section with CTA buttons
  - About Me with stats
  - Featured Projects showcase
  - Technical Skills with proficiency bars
  - Contact Form with validation
  - Social Links
  - Footer

- **Backend API**:
  - Contact form submission & management
  - Projects CRUD operations
  - Database integration with MySQL
  - RESTful API endpoints

- **Professional Design**:
  - Color scheme: Dark navy with cyan accents (#00d4ff)
  - Smooth scroll behavior
  - Animated components
  - Professional typography

## 📁 Project Structure

```
Portfolio_Task-1/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js & Header.css
│   │   │   ├── Hero.js & Hero.css
│   │   │   ├── About.js & About.css
│   │   │   ├── Projects.js & Projects.css
│   │   │   ├── Skills.js & Skills.css
│   │   │   ├── Contact.js & Contact.css
│   │   │   └── Footer.js & Footer.css
│   │   ├── App.js & App.css
│   │   ├── index.js & index.css
│   └── package.json
│
└── backend/
    ├── config/
    │   ├── database.js
    │   └── schema.sql
    ├── routes/
    │   ├── contactRoutes.js
    │   └── projectRoutes.js
    ├── controllers/
    │   ├── contactController.js
    │   └── projectController.js
    ├── models/
    │   ├── Contact.js
    │   └── Project.js
    ├── utils/
    │   └── validation.js
    ├── server.js
    ├── package.json
    ├── .env.example
    └── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14+)
- **npm** or **yarn**
- **MySQL** (v5.7+)
- **Git**

### Installation

#### 1. Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your database credentials
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=your_password
# DB_NAME=portfolio_db
```

#### 2. Database Setup

```bash
# Open MySQL and run the schema
mysql -u root -p < config/schema.sql

# Or copy-paste the SQL commands from config/schema.sql in MySQL Workbench
```

#### 3. Start Backend Server

```bash
# From backend folder
npm run dev

# Server runs on http://localhost:5000
```

#### 4. Frontend Setup

```bash
# Open new terminal, navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm start

# Frontend runs on http://localhost:3000
```

## 📡 API Endpoints

### Contact Routes
```
POST   /api/contact                 - Submit contact form
GET    /api/contact                 - Get all messages (admin)
GET    /api/contact/:id             - Get specific message
DELETE /api/contact/:id             - Delete message
```

### Project Routes
```
GET    /api/projects                - Get all projects
POST   /api/projects                - Create new project
GET    /api/projects/:id            - Get specific project
PUT    /api/projects/:id            - Update project
DELETE /api/projects/:id            - Delete project
```

### Health Check
```
GET    /api/health                  - Server status
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Cyan (#00d4ff)
- **Secondary**: Deep Navy (#0f0f23)
- **Accent**: Red (#ff6b6b)
- **Text**: Light Gray (#e0e0e0)

### Typography
- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, Segoe UI
- **Weights**: 300, 400, 500, 600, 700

### Animations
- Floating blobs background
- Smooth scroll behavior
- Hover effects on buttons and cards
- Animated progress bars
- Pulsing glow effects

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Available Scripts

### Frontend
```bash
npm start          # Start development server
npm build          # Build for production
npm test           # Run tests
```

### Backend
```bash
npm start          # Start production server
npm run dev        # Start with nodemon (development)
```

## 🌐 Deployment

### Vercel (Frontend)
1. Push code to GitHub
2. Go to vercel.com and connect your repository
3. Deploy with one click
4. Update API endpoint in frontend to your backend URL

### Heroku (Backend)
1. Create Heroku account and install CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables: `heroku config:set DB_HOST=...`
5. Deploy: `git push heroku main`

### Alternative Options
- **Frontend**: Netlify (similar to Vercel)
- **Backend**: Railway, Render, or AWS EC2
- **Database**: AWS RDS, PlanetScale, or Heroku Postgres

## 🔐 Security Notes

- Never commit `.env` file to repository
- Use strong database passwords
- Enable CORS only for your frontend domain
- Validate all user inputs on backend
- Use HTTPS in production
- Consider adding rate limiting for contact form

## 📝 Customization Guide

### Change Name
1. Update in `frontend/src/components/Header.js`
2. Update in `frontend/src/components/Hero.js`
3. Update in `footer/src/components/Footer.js`

### Add New Projects
POST to `/api/projects` with:
```json
{
  "title": "Project Name",
  "description": "Description",
  "tags": ["Tech1", "Tech2"],
  "github_url": "https://...",
  "live_url": "https://..."
}
```

### Change Colors
Edit `frontend/src/index.css` and component CSS files:
- Search for `#00d4ff` (cyan)
- Replace with your preferred color

### Update Contact Info
Edit `frontend/src/components/Contact.js`:
- Email
- Phone
- Location
- Social links

## 🐛 Troubleshooting

### Database Connection Error
- Ensure MySQL is running
- Check credentials in `.env`
- Verify database exists

### CORS Error
- Add frontend URL to CORS whitelist in `backend/server.js`
- Check frontend and backend are running on correct ports

### Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000
# Kill process
kill -9 <PID>
```

## 📚 Technologies Used

**Frontend:**
- React 18
- CSS3 with animations
- Axios for API calls
- React Scroll

**Backend:**
- Node.js
- Express.js
- MySQL2
- Joi for validation
- CORS
- dotenv

**Database:**
- MySQL

**Made with ♥ by Naga Veera Mukunda S**
