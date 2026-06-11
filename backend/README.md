# Backend Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment

Create `.env` file:
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=portfolio_db
NODE_ENV=development
```

### 3. Setup Database

Using MySQL CLI:
```bash
mysql -u root -p
mysql> source config/schema.sql;
```

Or copy-paste schema.sql contents into MySQL Workbench.

### 4. Start Server

```bash
npm run dev
```

Server will run on `http://localhost:5000`

## Project Structure

```
backend/
├── config/
│   ├── database.js          # MySQL connection pool
│   └── schema.sql           # Database schema
├── controllers/
│   ├── contactController.js # Contact message logic
│   └── projectController.js # Project management logic
├── models/
│   ├── Contact.js           # Contact model
│   └── Project.js           # Project model
├── routes/
│   ├── contactRoutes.js     # Contact endpoints
│   └── projectRoutes.js     # Project endpoints
├── utils/
│   └── validation.js        # Input validation
├── server.js                # Main server file
├── package.json
├── .env.example
└── README.md
```

## Database Setup

The `schema.sql` file creates:
- `contact_messages` table
- `projects` table
- `skills` table
- `testimonials` table (optional)
- `experience` table (optional)

With sample data included.

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| PORT | 5000 | Server port |
| DB_HOST | localhost | Database host |
| DB_USER | root | Database user |
| DB_PASSWORD | | Database password |
| DB_NAME | portfolio_db | Database name |
| NODE_ENV | development | Environment |

## API Endpoints

See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for complete API reference.

## Troubleshooting

### MySQL Connection Error
- Check MySQL is running: `mysql -u root -p`
- Verify credentials in `.env`
- Ensure database exists: `mysql> SHOW DATABASES;`

### Port Already in Use
```bash
# Find process on port 5000
lsof -i :5000
# Kill process
kill -9 <PID>
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. Connect frontend to backend API
2. Add authentication (JWT)
3. Add email notifications
4. Deploy to Heroku or similar
5. Add admin dashboard
