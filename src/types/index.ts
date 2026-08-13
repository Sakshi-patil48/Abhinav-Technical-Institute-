export interface Syllabus {
  id: string;
  courseTitle: string;
  courseCode: string;
  category: string;
  duration: string;
  eligibility: string;
  description: string;
  modules: string[];
  practicalRatio: string;
  fileData?: string; // base64 or link
  fileName?: string;
  fileSize?: string;
  downloadUrl?: string;
  updatedAt: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
  date: string;
  status?: 'New' | 'Contacted' | 'In Progress' | 'Enrolled' | 'Closed';
  notes?: string;
}

export interface Certificate {
  id: string;
  studentName: string;
  fatherName: string;
  course: string;
  grade: string;
  startDate: string;
  endDate: string;
  issueDate: string;
  isValid: boolean;
  remarks?: string;
}

export interface CourseSetting {
  id: string;
  title: string;
  category: string;
  duration: string;
  fee: string;
  seats: number;
  isOpen: boolean;
  batchTiming: string;
}
