export interface Program {
  id: string;
  category: 'primary' | 'middle' | 'high' | 'global';
  categoryLabel: string;
  title: string;
  subtitle: string;
  targetGrade: string;
  summary: string;
  highlights: string[];
  duration: string;
  classSize: string;
  mentor: string;
  syllabus: {
    week: string;
    topic: string;
    outcome: string;
  }[];
}

export interface Facility {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  capacity: string;
  hours: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  department: string;
  education: string;
  quote: string;
  courses: string[];
}

export interface StudentStory {
  id: string;
  studentName: string;
  classYear: string;
  currentPath: string;
  title: string;
  story: string;
  keyProject: string;
}

export interface AdmissionStep {
  step: string;
  title: string;
  period: string;
  description: string;
  requirements: string[];
}

export interface ConsultationBooking {
  parentName: string;
  studentName: string;
  studentGrade: string;
  phone: string;
  email: string;
  track: string;
  visitDate: string;
  visitTime: string;
  memo?: string;
  bookingCode?: string;
}
