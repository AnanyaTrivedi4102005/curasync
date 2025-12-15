
# CuraSync EHR - Electronic Health Record System

## Overview
CuraSync EHR is a modern, web-based Electronic Health Record System built with React, TypeScript, and Vite. The system is designed to digitize patient records and simplify hospital data management. It helps healthcare professionals store, update, and access patient information efficiently through an intuitive interface.

## Features
- **Role-Based Access Control**: Separate dashboards and permissions for Admin, Doctor, Nurse, and Patient roles
- **Patient Management**: Complete patient registration and profile management
- **Medical Records**: Store diagnoses, prescriptions, lab results, and medical notes
- **Appointment Scheduling**: Schedule and manage patient appointments
- **Real-time Notifications**: Toast notifications for user actions
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Modern UI Components**: Built with Radix UI primitives for accessibility

## Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Form Handling**: React Hook Form
- **State Management**: React Hooks (useState, useEffect)

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Setup
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Electronic-Health-Record-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000` (or next available port)

4. **Build for production**
   ```bash
   npm run build
   ```

### Project Structure
```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components (buttons, dialogs, etc.)
│   ├── AdminDashboard.tsx
│   ├── DoctorDashboard.tsx
│   ├── NurseDashboard.tsx
│   ├── PatientDashboard.tsx
│   └── LoginPage.tsx
├── lib/                 # Utility functions and storage
├── types/               # TypeScript type definitions
├── styles/              # Global CSS styles
└── main.tsx            # Application entry point
```

## Usage

### User Roles
1. **Admin**: System administration and user management
2. **Doctor**: Patient care, medical records, and appointment management
3. **Nurse**: Patient support, medical record entry, and availability management
4. **Patient**: View personal medical records and appointments

### Key Features by Role
- **Patient Registration**: Add new patients with complete details
- **Medical Record Management**: Create, view, and update medical records
- **Appointment Scheduling**: Schedule and manage patient appointments
- **Availability Management**: Healthcare providers can manage their schedules
- **Search & Filter**: Quick patient and record search functionality

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Component Architecture
The application uses a modular component architecture with:
- **UI Components**: Reusable components built with Radix UI
- **Feature Components**: Role-specific dashboard components
- **Shared Components**: Common components like Header, Footer, Loading

### Styling
- Tailwind CSS for utility-first styling
- Custom CSS variables for theme management
- Responsive design patterns

## Recent Updates
- ✅ Fixed all import resolution errors in Vite build
- ✅ Updated UI component imports to use standard Node resolution
- ✅ Resolved white screen issues by fixing dependency imports
- ✅ Ensured zero Vite pre-transform and import-analysis errors

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing
1. Follow the existing code style and patterns
2. Use TypeScript for all new components
3. Ensure imports use standard Node resolution (no version numbers)
4. Test thoroughly before submitting changes

## License
This project is licensed under the MIT License.
