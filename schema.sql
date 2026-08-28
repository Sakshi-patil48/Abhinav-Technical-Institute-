-- Cloudflare D1 Database Schema for Abhinav Technical Institute
-- Run using: npx wrangler d1 execute abhinav_db --file=./schema.sql

-- 1. Site Content & CMS Table
CREATE TABLE IF NOT EXISTS site_content (
  key TEXT PRIMARY KEY,
  json_data TEXT NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Certificates Table
CREATE TABLE IF NOT EXISTS certificates (
  reg_number TEXT PRIMARY KEY,
  student_name TEXT NOT NULL,
  course_name TEXT NOT NULL,
  grade TEXT,
  percentage TEXT,
  issue_date TEXT,
  valid_until TEXT DEFAULT 'Lifetime Valid',
  status TEXT DEFAULT 'Valid',
  institute_center TEXT DEFAULT 'Abhinav Technical Institute, Main Campus Jalgaon',
  remarks TEXT,
  raw_json TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Student Inquiries / Leads Table
CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  course TEXT NOT NULL,
  qualification TEXT,
  message TEXT,
  status TEXT DEFAULT 'New',
  date TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Announcements Table
CREATE TABLE IF NOT EXISTS announcements (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  title_mr TEXT,
  description TEXT,
  tag TEXT DEFAULT 'Notice',
  date TEXT,
  raw_json TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for lightning fast lookups
CREATE INDEX IF NOT EXISTS idx_cert_student ON certificates(student_name);
CREATE INDEX IF NOT EXISTS idx_inquiry_phone ON inquiries(phone);
CREATE INDEX IF NOT EXISTS idx_inquiry_status ON inquiries(status);
