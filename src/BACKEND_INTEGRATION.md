# CuraSync Backend Integration

## Overview

CuraSync now uses a complete backend integration with **Supabase** and **PostgreSQL** for persistent data storage. All data is stored in a database and accessed via REST API endpoints.

## Architecture

```
Frontend (React + TypeScript)
    ↓
API Layer (/lib/api.ts)
    ↓
Backend Server (Supabase Edge Function)
    ↓
Database (PostgreSQL via KV Store)
```

## Backend Components

### 1. Server (`/supabase/functions/server/index.tsx`)
- Built with **Hono** web framework
- Runs as a Supabase Edge Function
- Provides REST API endpoints for all CRUD operations
- Automatically initializes demo data on first run

### 2. API Client (`/lib/api.ts`)
- TypeScript client for making API requests
- Handles authentication headers
- Provides typed methods for all operations
- Error handling and logging

### 3. Storage Layer (`/lib/storage.ts`)
- Updated to use API calls instead of localStorage
- Maintains backward compatibility with existing components
- Async functions for all operations

## API Endpoints

All endpoints are prefixed with `/make-server-7c63519c`

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /login` - User login
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Appointments
- `GET /appointments` - Get all appointments
- `GET /appointments/:id` - Get appointment by ID
- `POST /appointments` - Create appointment
- `PUT /appointments/:id` - Update appointment
- `DELETE /appointments/:id` - Delete appointment

### Medical Records
- `GET /medical-records` - Get all medical records
- `GET /medical-records/:id` - Get record by ID
- `POST /medical-records` - Create medical record
- `PUT /medical-records/:id` - Update medical record
- `DELETE /medical-records/:id` - Delete medical record

### Doctor Availability
- `GET /doctor-availability` - Get all doctor availability
- `GET /doctor-availability/:doctorId` - Get doctor availability by ID
- `PUT /doctor-availability/:doctorId` - Update doctor availability

### Health Check
- `GET /health` - Server health status

## Database Structure

Data is stored using a key-value pattern in PostgreSQL:

- `user:{id}` - Individual user records
- `user:email:{email}` - Email to user ID mapping
- `appointment:{id}` - Appointment records
- `medical_record:{id}` - Medical record documents
- `doctor_availability:{doctorId}` - Doctor availability schedules
- `initialized` - Flag for demo data initialization

## Demo Data

The server automatically initializes with demo data including:
- 7 users (1 admin, 3 doctors, 1 nurse, 2 patients)
- 3 sample appointments
- 2 sample medical records
- Doctor availability schedules

## Key Features

✅ **Persistent Storage** - All data persists across sessions
✅ **Real Database** - PostgreSQL backend via Supabase
✅ **RESTful API** - Standard HTTP methods
✅ **Type Safety** - Full TypeScript support
✅ **Error Handling** - Comprehensive error handling and logging
✅ **Email Validation** - Staff requires @curasync.com, patients can use any email
✅ **Auto-initialization** - Demo data loads automatically

## Authentication

- Session management via localStorage (frontend)
- API authentication via Supabase public anon key
- No authentication required for this prototype (educational purposes)

## Migration from localStorage

All components have been updated to use async/await patterns:
- `getUsers()` → `await getUsers()`
- `addUser(user)` → `await addUser(user)`
- `updateUser(id, data)` → `await updateUser(id, data)`
- `deleteUser(id)` → `await deleteUser(id)`

Same pattern applies to appointments, medical records, and availability.

## Error Handling

All API calls include try-catch blocks with user-friendly toast notifications:
```typescript
try {
  await addUser(user);
  toast.success('User added successfully');
} catch (error) {
  toast.error('Failed to add user');
}
```

## Development

The backend runs automatically via Supabase. No additional setup required.

To test the backend:
1. Login with any demo account
2. Create/update/delete data
3. Refresh the page - data persists!

## Security Notes

⚠️ **Important**: This is a prototype/demo application
- Passwords are stored in plain text
- No encryption
- No role-based access control at API level
- Not suitable for production use with real patient data
- Educational purposes only

## Future Enhancements

Potential improvements for production:
- Password hashing (bcrypt)
- JWT authentication
- Row-level security
- API rate limiting
- Input validation/sanitization
- HIPAA compliance measures
- Audit logging
- File upload for PDF reports (Supabase Storage)
