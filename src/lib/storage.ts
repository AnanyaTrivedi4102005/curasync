import { User, Appointment, MedicalRecord } from '../types';

const STORAGE_KEYS = {
  USERS: 'curasync_users',
  APPOINTMENTS: 'curasync_appointments',
  MEDICAL_RECORDS: 'curasync_medical_records',
  DOCTOR_AVAILABILITY: 'curasync_doctor_availability',
  CURRENT_USER: 'curasync_current_user',
  INITIALIZED: 'curasync_initialized'
};

// Demo data with 10 users
const DEMO_USERS: User[] = [
  {
    id: '1',
    email: 'admin@curasync.com',
    password: 'admin123',
    role: 'admin',
    firstName: 'Sarah',
    lastName: 'Administrator',
    phone: '+1-555-0100'
  },
  {
    id: '2',
    email: 'dr.smith@curasync.com',
    password: 'doctor123',
    role: 'doctor',
    firstName: 'John',
    lastName: 'Smith',
    phone: '+1-555-0101',
    specialization: 'Cardiology'
  },
  {
    id: '3',
    email: 'dr.johnson@curasync.com',
    password: 'doctor123',
    role: 'doctor',
    firstName: 'Emily',
    lastName: 'Johnson',
    phone: '+1-555-0102',
    specialization: 'Pediatrics'
  },
  {
    id: '4',
    email: 'dr.williams@curasync.com',
    password: 'doctor123',
    role: 'doctor',
    firstName: 'Michael',
    lastName: 'Williams',
    phone: '+1-555-0103',
    specialization: 'Neurology'
  },
  {
    id: '5',
    email: 'nurse.davis@curasync.com',
    password: 'nurse123',
    role: 'nurse',
    firstName: 'Jennifer',
    lastName: 'Davis',
    phone: '+1-555-0104',
    department: 'Emergency'
  },
  {
    id: '6',
    email: 'robert.brown@gmail.com',
    password: 'patient123',
    role: 'patient',
    firstName: 'Robert',
    lastName: 'Brown',
    phone: '+1-555-0105',
    bloodType: 'O+',
    emergencyContact: '+1-555-0999',
    dateOfBirth: '1985-06-15'
  },
  {
    id: '7',
    email: 'maria.garcia@yahoo.com',
    password: 'patient123',
    role: 'patient',
    firstName: 'Maria',
    lastName: 'Garcia',
    phone: '+1-555-0106',
    bloodType: 'A+',
    emergencyContact: '+1-555-0998',
    dateOfBirth: '1992-03-22'
  },
  {
    id: '8',
    email: 'dr.chen@curasync.com',
    password: 'doctor123',
    role: 'doctor',
    firstName: 'David',
    lastName: 'Chen',
    phone: '+1-555-0107',
    specialization: 'Orthopedics'
  },
  {
    id: '9',
    email: 'nurse.wilson@curasync.com',
    password: 'nurse123',
    role: 'nurse',
    firstName: 'Amanda',
    lastName: 'Wilson',
    phone: '+1-555-0108',
    department: 'Pediatrics'
  },
  {
    id: '10',
    email: 'james.anderson@outlook.com',
    password: 'patient123',
    role: 'patient',
    firstName: 'James',
    lastName: 'Anderson',
    phone: '+1-555-0109',
    bloodType: 'B+',
    emergencyContact: '+1-555-0997',
    dateOfBirth: '1978-11-30'
  }
];

const DEMO_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt1',
    patientId: '6',
    doctorId: '2',
    date: '2025-11-15',
    time: '10:00',
    status: 'scheduled',
    reason: 'Regular checkup'
  },
  {
    id: 'apt2',
    patientId: '7',
    doctorId: '3',
    date: '2025-11-16',
    time: '14:00',
    status: 'scheduled',
    reason: 'Follow-up consultation'
  },
  {
    id: 'apt3',
    patientId: '6',
    doctorId: '2',
    date: '2025-10-15',
    time: '09:00',
    status: 'completed',
    reason: 'Annual physical'
  },
  {
    id: 'apt4',
    patientId: '10',
    doctorId: '8',
    date: '2025-11-18',
    time: '11:00',
    status: 'scheduled',
    reason: 'Knee pain assessment'
  },
  {
    id: 'apt5',
    patientId: '7',
    doctorId: '4',
    date: '2025-11-20',
    time: '15:30',
    status: 'scheduled',
    reason: 'Headache consultation'
  }
];

const DEMO_MEDICAL_RECORDS: MedicalRecord[] = [
  {
    id: 'rec1',
    patientId: '6',
    doctorId: '2',
    date: '2025-10-15',
    diagnosis: 'Hypertension - Stage 1',
    prescription: 'Lisinopril 10mg once daily, Monitor blood pressure regularly',
    labResults: 'BP: 142/88, Cholesterol: 195 mg/dL, Glucose: 98 mg/dL',
    notes: 'Patient advised to reduce salt intake and increase physical activity'
  },
  {
    id: 'rec2',
    patientId: '7',
    doctorId: '3',
    date: '2025-10-20',
    diagnosis: 'Acute Bronchitis',
    prescription: 'Amoxicillin 500mg three times daily for 7 days, Rest and hydration',
    labResults: 'Chest X-ray: Clear, No signs of pneumonia',
    notes: 'Patient should return if symptoms persist beyond 7 days'
  },
  {
    id: 'rec3',
    patientId: '10',
    doctorId: '8',
    date: '2025-09-10',
    diagnosis: 'Osteoarthritis - Right Knee',
    prescription: 'Ibuprofen 400mg as needed, Physical therapy recommended',
    labResults: 'X-ray: Mild degenerative changes in right knee joint',
    notes: 'Patient referred to physical therapy, follow-up in 6 weeks'
  },
  {
    id: 'rec4',
    patientId: '6',
    doctorId: '2',
    date: '2025-08-05',
    diagnosis: 'Routine Physical Examination',
    prescription: 'Continue current medications, Vitamin D supplement',
    labResults: 'All vitals within normal range, Cholesterol slightly elevated',
    notes: 'Patient in good health overall, recommended annual checkup'
  }
];

const DEMO_DOCTOR_AVAILABILITY: Record<string, any> = {
  '2': {
    leaveDates: ['2025-11-25', '2025-11-26'],
    slots: [
      { dayOfWeek: 1, startTime: '09:00', endTime: '12:00' },
      { dayOfWeek: 1, startTime: '14:00', endTime: '17:00' },
      { dayOfWeek: 3, startTime: '09:00', endTime: '12:00' },
      { dayOfWeek: 3, startTime: '14:00', endTime: '17:00' },
      { dayOfWeek: 5, startTime: '09:00', endTime: '12:00' }
    ]
  },
  '3': {
    leaveDates: [],
    slots: [
      { dayOfWeek: 2, startTime: '10:00', endTime: '13:00' },
      { dayOfWeek: 2, startTime: '14:00', endTime: '18:00' },
      { dayOfWeek: 4, startTime: '10:00', endTime: '13:00' },
      { dayOfWeek: 4, startTime: '14:00', endTime: '18:00' }
    ]
  },
  '4': {
    leaveDates: ['2025-11-22'],
    slots: [
      { dayOfWeek: 1, startTime: '08:00', endTime: '11:00' },
      { dayOfWeek: 2, startTime: '08:00', endTime: '11:00' },
      { dayOfWeek: 4, startTime: '08:00', endTime: '11:00' },
      { dayOfWeek: 5, startTime: '13:00', endTime: '16:00' }
    ]
  },
  '8': {
    leaveDates: [],
    slots: [
      { dayOfWeek: 1, startTime: '09:00', endTime: '12:00' },
      { dayOfWeek: 3, startTime: '09:00', endTime: '12:00' },
      { dayOfWeek: 3, startTime: '14:00', endTime: '17:00' },
      { dayOfWeek: 5, startTime: '09:00', endTime: '12:00' },
      { dayOfWeek: 5, startTime: '14:00', endTime: '17:00' }
    ]
  }
};

// Demo data for demonstration purposes

// Initialize storage with demo data for demonstration
export const initializeStorage = () => {
  const initialized = localStorage.getItem(STORAGE_KEYS.INITIALIZED);

  if (!initialized) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(DEMO_USERS));
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(DEMO_APPOINTMENTS));
    localStorage.setItem(STORAGE_KEYS.MEDICAL_RECORDS, JSON.stringify(DEMO_MEDICAL_RECORDS));
    localStorage.setItem(STORAGE_KEYS.DOCTOR_AVAILABILITY, JSON.stringify({
      '2': {
        leaveDates: [],
        slots: [
          { dayOfWeek: 1, startTime: '09:00', endTime: '12:00' },
          { dayOfWeek: 3, startTime: '09:00', endTime: '12:00' },
          { dayOfWeek: 5, startTime: '09:00', endTime: '12:00' }
        ]
      }
    }));
    localStorage.setItem(STORAGE_KEYS.INITIALIZED, 'true');
    console.log('CuraSync initialized with demo data');
  }
};

// ==================== USER OPERATIONS ====================

export const getUsers = (): User[] => {
  const usersJson = localStorage.getItem(STORAGE_KEYS.USERS);
  return usersJson ? JSON.parse(usersJson) : [];
};

export const addUser = (user: User): void => {
  const users = getUsers();
  
  // Check if email already exists
  if (users.some(u => u.email === user.email)) {
    throw new Error('Email already exists');
  }
  
  users.push(user);
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
};

export const updateUser = (userId: string, updates: Partial<User>): void => {
  const users = getUsers();
  const index = users.findIndex(u => u.id === userId);
  
  if (index === -1) {
    throw new Error('User not found');
  }
  
  users[index] = { ...users[index], ...updates };
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
};

export const deleteUser = (userId: string): void => {
  const users = getUsers();
  const filteredUsers = users.filter(u => u.id !== userId);
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(filteredUsers));
};

export const loginUser = (email: string, password: string): User => {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('Invalid email or password');
  }
  
  return user;
};

// Current user (stored in localStorage for session management)
export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  return user ? JSON.parse(user) : null;
};

export const setCurrentUser = (user: User | null) => {
  if (user) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }
};

// ==================== APPOINTMENT OPERATIONS ====================

export const getAppointments = (): Appointment[] => {
  const appointmentsJson = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
  return appointmentsJson ? JSON.parse(appointmentsJson) : [];
};

export const addAppointment = (appointment: Appointment): void => {
  const appointments = getAppointments();
  appointments.push(appointment);
  localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
};

export const updateAppointment = (appointmentId: string, updates: Partial<Appointment>): void => {
  const appointments = getAppointments();
  const index = appointments.findIndex(a => a.id === appointmentId);
  
  if (index === -1) {
    throw new Error('Appointment not found');
  }
  
  appointments[index] = { ...appointments[index], ...updates };
  localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
};

export const deleteAppointment = (appointmentId: string): void => {
  const appointments = getAppointments();
  const filteredAppointments = appointments.filter(a => a.id !== appointmentId);
  localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(filteredAppointments));
};

// ==================== MEDICAL RECORD OPERATIONS ====================

export const getMedicalRecords = (): MedicalRecord[] => {
  const recordsJson = localStorage.getItem(STORAGE_KEYS.MEDICAL_RECORDS);
  return recordsJson ? JSON.parse(recordsJson) : [];
};

export const addMedicalRecord = (record: MedicalRecord): void => {
  const records = getMedicalRecords();
  records.push(record);
  localStorage.setItem(STORAGE_KEYS.MEDICAL_RECORDS, JSON.stringify(records));
};

export const updateMedicalRecord = (recordId: string, updates: Partial<MedicalRecord>): void => {
  const records = getMedicalRecords();
  const index = records.findIndex(r => r.id === recordId);
  
  if (index === -1) {
    throw new Error('Medical record not found');
  }
  
  records[index] = { ...records[index], ...updates };
  localStorage.setItem(STORAGE_KEYS.MEDICAL_RECORDS, JSON.stringify(records));
};

export const deleteMedicalRecord = (recordId: string): void => {
  const records = getMedicalRecords();
  const filteredRecords = records.filter(r => r.id !== recordId);
  localStorage.setItem(STORAGE_KEYS.MEDICAL_RECORDS, JSON.stringify(filteredRecords));
};

// ==================== DOCTOR AVAILABILITY OPERATIONS ====================

export const getDoctorAvailability = (): Record<string, any> => {
  const availabilityJson = localStorage.getItem(STORAGE_KEYS.DOCTOR_AVAILABILITY);
  return availabilityJson ? JSON.parse(availabilityJson) : {};
};

export const updateDoctorAvailability = (doctorId: string, availability: any): void => {
  const allAvailability = getDoctorAvailability();
  allAvailability[doctorId] = availability;
  localStorage.setItem(STORAGE_KEYS.DOCTOR_AVAILABILITY, JSON.stringify(allAvailability));
};
