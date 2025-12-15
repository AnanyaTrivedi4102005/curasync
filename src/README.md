# CuraSync - Healthcare Management System

A comprehensive Electronic Health Record (EHR) Management System built with React, TypeScript, and Tailwind CSS.

## Features

- **Role-Based Access Control**: Support for Admin, Doctor, Nurse, and Patient roles
- **Patient Records Management**: Complete CRUD operations for medical records
- **Appointment Booking**: Book and manage appointments with doctor availability tracking
- **Leave Management**: Doctors and nurses can manage their availability and leave dates
- **PDF Report Uploads**: Support for uploading and viewing medical reports
- **Responsive Design**: Clean, medical-themed UI with teal/blue colors
- **Real-time Updates**: Uses LocalStorage for demo purposes

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository or extract the files

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Demo Accounts

Use these credentials to login and test different roles:

- **Admin**: admin@curasync.com / admin123
- **Doctor**: dr.smith@curasync.com / doctor123
- **Nurse**: nurse.davis@curasync.com / nurse123
- **Patient**: robert.brown@gmail.com / patient123

## User Roles

### Admin
- Manage all users (Create, Read, Update, Delete)
- View all appointments
- System-wide overview and statistics

### Doctor
- View and manage appointments
- Create and update medical records
- Manage availability and leave dates
- View assigned patients

### Nurse
- View all appointments across all doctors
- View and update medical records
- Add new patient records
- Manage own availability

### Patient
- Book appointments with available doctors
- View own medical records
- View appointment history
- Update personal information

## Registration

- **Staff Members** (Admin, Doctor, Nurse): Must use @curasync.com email addresses
- **Patients**: Can use any personal email address (Gmail, Yahoo, etc.)

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Notifications**: Sonner
- **State Management**: React Hooks + LocalStorage
- **Build Tool**: Vite

## Project Structure

```
curasync/
├── components/
│   ├── AdminDashboard.tsx
│   ├── DoctorDashboard.tsx
│   ├── NurseDashboard.tsx
│   ├── PatientDashboard.tsx
│   ├── LoginPage.tsx
│   ├── Header.tsx
│   └── ui/               # Reusable UI components
├── lib/
│   ├── storage.ts        # LocalStorage utilities
│   └── mockData.ts       # Demo data
├── types/
│   └── index.ts          # TypeScript type definitions
├── styles/
│   └── globals.css       # Global styles and Tailwind config
├── App.tsx               # Main app component
└── main.tsx             # App entry point
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Development Notes

- This is a demo application using LocalStorage for data persistence
- In a production environment, replace LocalStorage with a proper backend API
- For production use, implement proper authentication and authorization
- Add proper security measures for handling sensitive medical data
- Ensure HIPAA compliance if deploying in a healthcare setting

## License

This project is for educational and demonstration purposes.

## Support

For issues or questions, please check the documentation or create an issue in the repository.
