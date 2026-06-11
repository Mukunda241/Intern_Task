# Backend API Documentation

## Overview

The backend API provides endpoints for managing portfolio data including projects, contact messages, and other portfolio information.

## Base URL

```
http://localhost:5000/api
```

## Authentication

Currently, the API doesn't require authentication for public endpoints. Admin endpoints should be protected with authentication (to be implemented).

## Endpoints

### 1. Contact Messages

#### Create Contact Message
- **POST** `/contact`
- **Description**: Submit a new contact form message
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I'd like to discuss a potential project..."
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Message received successfully!",
    "id": 1
  }
  ```

#### Get All Messages
- **GET** `/contact`
- **Description**: Retrieve all contact messages (admin only)
- **Response**:
  ```json
  {
    "success": true,
    "count": 5,
    "data": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "subject": "Project Inquiry",
        "message": "...",
        "status": "new",
        "created_at": "2024-01-15T10:30:00Z"
      }
    ]
  }
  ```

#### Get Message by ID
- **GET** `/contact/:id`
- **Description**: Get a specific contact message (marks as read)
- **Response**:
  ```json
  {
    "success": true,
    "data": { /* message object */ }
  }
  ```

#### Delete Message
- **DELETE** `/contact/:id`
- **Description**: Delete a contact message
- **Response**:
  ```json
  {
    "success": true,
    "message": "Message deleted successfully"
  }
  ```

### 2. Projects

#### Get All Projects
- **GET** `/projects`
- **Description**: Retrieve all portfolio projects
- **Response**:
  ```json
  {
    "success": true,
    "count": 4,
    "data": [
      {
        "id": 1,
        "title": "E-Commerce Platform",
        "description": "Full-stack e-commerce solution...",
        "tags": ["React", "Node.js", "MySQL"],
        "github_url": "https://github.com/...",
        "live_url": "https://example.com",
        "created_at": "2024-01-01T00:00:00Z"
      }
    ]
  }
  ```

#### Create Project
- **POST** `/projects`
- **Description**: Add a new project to portfolio
- **Request Body**:
  ```json
  {
    "title": "New Project",
    "description": "Detailed description of the project...",
    "image_url": "https://...",
    "tags": ["React", "Node.js"],
    "github_url": "https://github.com/...",
    "live_url": "https://example.com"
  }
  ```

#### Get Project by ID
- **GET** `/projects/:id`
- **Description**: Get a specific project
- **Response**:
  ```json
  {
    "success": true,
    "data": { /* project object */ }
  }
  ```

#### Update Project
- **PUT** `/projects/:id`
- **Description**: Update project details
- **Request Body**: Same as Create Project

#### Delete Project
- **DELETE** `/projects/:id`
- **Description**: Remove a project from portfolio
- **Response**:
  ```json
  {
    "success": true,
    "message": "Project deleted successfully"
  }
  ```

### 3. Health Check

#### Server Status
- **GET** `/health`
- **Description**: Check if server is running
- **Response**:
  ```json
  {
    "status": "Server is running",
    "timestamp": "2024-01-15T10:30:00Z"
  }
  ```

## Error Responses

All errors follow this format:

```json
{
  "error": "Error message describing what went wrong"
}
```

### Common Error Codes

- **400 Bad Request**: Invalid input data
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server error

## Rate Limiting

Currently not implemented. Should be added for production use.

## CORS

Currently allows all origins. In production, configure to allow only your frontend domain:

```javascript
app.use(cors({
  origin: 'https://yourportfolio.com',
  credentials: true
}));
```

## Testing with cURL

### Create Contact Message
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "This is a test message"
  }'
```

### Get All Projects
```bash
curl http://localhost:5000/api/projects
```

### Get Health Status
```bash
curl http://localhost:5000/api/health
```

## Database Schema

### contact_messages
- id (INT, Primary Key)
- name (VARCHAR 255)
- email (VARCHAR 255)
- subject (VARCHAR 255)
- message (TEXT)
- status (ENUM: new, read, responded)
- ip_address (VARCHAR 45)
- created_at (TIMESTAMP)

### projects
- id (INT, Primary Key)
- title (VARCHAR 255)
- description (TEXT)
- image_url (VARCHAR 500)
- tags (JSON)
- github_url (VARCHAR 500)
- live_url (VARCHAR 500)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

## Future Enhancements

- [ ] JWT authentication
- [ ] Rate limiting
- [ ] Email notifications for new messages
- [ ] File upload for project images
- [ ] Pagination for list endpoints
- [ ] Search and filtering
- [ ] User authentication system
- [ ] Admin dashboard
