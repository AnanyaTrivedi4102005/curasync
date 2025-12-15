# CuraSync Storage Information

## Current Storage Technology

**Your CuraSync app uses: Browser localStorage**

All data is stored locally in your browser and persists across page reloads.

## Storage Files
- **Storage Layer:** `/lib/storage.ts` (handles all data operations)
- **Type Definitions:** `/types/index.ts`

## Database Contents

**10 Demo Users Pre-loaded:**

### Staff Users (@curasync.com):
1. **Admin:** admin@curasync.com / admin123
   - Sarah Administrator
   
2. **Doctor:** dr.smith@curasync.com / doctor123
   - John Smith (Cardiology)
   
3. **Doctor:** dr.johnson@curasync.com / doctor123
   - Emily Johnson (Pediatrics)
   
4. **Doctor:** dr.williams@curasync.com / doctor123
   - Michael Williams (Neurology)
   
5. **Doctor:** dr.chen@curasync.com / doctor123
   - David Chen (Orthopedics)
   
6. **Nurse:** nurse.davis@curasync.com / nurse123
   - Jennifer Davis (Emergency)
   
7. **Nurse:** nurse.wilson@curasync.com / nurse123
   - Amanda Wilson (Pediatrics)

### Patient Users (can use any email):
8. **Patient:** robert.brown@gmail.com / patient123
   - Robert Brown, Blood Type: O+, DOB: 1985-06-15
   
9. **Patient:** maria.garcia@yahoo.com / patient123
   - Maria Garcia, Blood Type: A+, DOB: 1992-03-22
   
10. **Patient:** james.anderson@outlook.com / patient123
    - James Anderson, Blood Type: B+, DOB: 1978-11-30

## Demo Data Included

### Appointments (5 total)
- Multiple scheduled and completed appointments
- Linked to patients and doctors
- Dates ranging from October to November 2025

### Medical Records (4 total)
- Complete patient histories
- Diagnoses, prescriptions, lab results, and notes
- Linked to patients and doctors

### Doctor Availability
- Weekly schedules for all 4 doctors
- Leave dates configured
- Time slots for different days of the week

## Storage Features

✅ **Complete CRUD Operations**
- User management (add, edit, delete)
- Appointment scheduling
- Medical record management
- Doctor availability tracking
- Role-based access control

✅ **Data Persistence**
- All data saved in browser localStorage
- Survives page reloads
- Automatic initialization on first load

✅ **Validation**
- Email validation (@curasync.com for staff)
- Required field checking
- Duplicate email prevention

## About PHP/JSP Backend Request

**PHP and JSP are NOT possible in this environment** due to technical limitations:

❌ **Cannot Run:**
- PHP (requires Apache/nginx with PHP processor)
- JSP (requires Java Tomcat/JBoss server)
- Traditional server infrastructure

✅ **Current Solution:**
- localStorage provides immediate, working data storage
- Perfect for prototyping and demos
- No server setup required
- Works offline

## How Data is Stored

Data is stored in your browser's localStorage with these keys:
- `curasync_users` - All user accounts
- `curasync_appointments` - All appointments
- `curasync_medical_records` - All medical records
- `curasync_doctor_availability` - Doctor schedules
- `curasync_current_user` - Currently logged-in user
- `curasync_initialized` - Initialization flag

## Clearing Data

To reset to demo data:
1. Open browser console (F12)
2. Type: `localStorage.clear()`
3. Refresh the page
4. Demo data will reload automatically

## Production Alternative

For a production system with a real backend:
1. Host your backend externally (AWS, DigitalOcean, etc.)
2. Replace `/lib/storage.ts` with API calls
3. Set up proper database (MySQL, PostgreSQL, etc.)
4. Implement authentication tokens
5. Configure CORS properly

The current localStorage solution is perfect for:
- Prototyping
- Demonstrations
- Testing features
- Development

It provides all EHR functionality without complexity of backend setup.
