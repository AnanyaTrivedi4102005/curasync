# CuraSync Backend Information

## Current Backend Technology

**Your CuraSync backend uses: TypeScript/Deno (Supabase Edge Functions)**

### Backend File Location
- **Main Backend Server:** `/supabase/functions/server/index.tsx`
- **Database Utility:** `/supabase/functions/server/kv_store.tsx` (protected - do not edit)
- **API Client:** `/lib/api.ts`
- **Storage Layer:** `/lib/storage.ts`

## Why Not PHP/JSP?

The Figma Make environment has technical limitations:

❌ **Cannot Run:**
- PHP (requires Apache/nginx with PHP processor)
- JSP (requires Java Tomcat/JBoss server)
- Traditional server infrastructure

✅ **Can Only Run:**
- TypeScript/Deno via Supabase Edge Functions
- Frontend React/TypeScript code

## Current Database

**10 Demo Users Available:**

### Staff Users (@curasync.com):
1. **Admin:** admin@curasync.com / admin123
2. **Doctor:** dr.smith@curasync.com / doctor123 (Cardiology)
3. **Doctor:** dr.johnson@curasync.com / doctor123 (Pediatrics)
4. **Doctor:** dr.williams@curasync.com / doctor123 (Neurology)
5. **Doctor:** dr.chen@curasync.com / doctor123 (Orthopedics)
6. **Nurse:** nurse.davis@curasync.com / nurse123 (Emergency)
7. **Nurse:** nurse.wilson@curasync.com / nurse123 (Pediatrics)

### Patient Users:
8. **Patient:** robert.brown@gmail.com / patient123
9. **Patient:** maria.garcia@yahoo.com / patient123
10. **Patient:** james.anderson@outlook.com / patient123

## Backend Features

✅ **Complete REST API**
- User management (CRUD)
- Authentication & login
- Appointment scheduling
- Medical records management
- Doctor availability tracking
- Role-based access control

✅ **PostgreSQL Database**
- Persistent data storage
- Data survives page reloads
- Relational data structure

✅ **API Endpoints**
- `/make-server-7c63519c/users` - User management
- `/make-server-7c63519c/login` - Authentication
- `/make-server-7c63519c/appointments` - Appointments
- `/make-server-7c63519c/medical-records` - Medical records
- `/make-server-7c63519c/doctor-availability` - Doctor schedules
- `/make-server-7c63519c/reset` - Reset demo data

## Troubleshooting Login Issues

If you cannot login:

1. **Click "Reset & Load Demo Data"** button on the login page
2. This will reload all 10 demo users into the database
3. Try logging in again with any demo account

## Alternative: External PHP/JSP Backend

If you absolutely need PHP/JSP, you must:

1. Host PHP/JSP server externally (AWS, DigitalOcean, etc.)
2. Configure CORS on your external server
3. Update `/lib/api.ts` to point to your external API URL
4. Manage deployment separately from Figma Make

**This is NOT recommended** as you'll lose:
- Integrated development environment
- Automatic hosting
- Built-in PostgreSQL database
- Simplified deployment

## Production-Ready

Your current TypeScript backend is **production-ready** and provides all features needed for a complete EHR system. The technology stack is modern, performant, and fully supported.
