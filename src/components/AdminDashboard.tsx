import React, { useState, useEffect } from 'react';
import { Lock, Eye, Trash2, Download, X, Copy, Check, Megaphone, ToggleLeft, ToggleRight, ListTodo } from 'lucide-react';
import type { Inquiry } from './Contact';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Dashboard Tabs
  const [activeTab, setActiveTab] = useState<'leads' | 'notice' | 'courses'>('leads');
  
  // Notice State
  const [noticeText, setNoticeText] = useState('');
  
  // Course Status State
  const [admissions, setAdmissions] = useState<Record<string, boolean>>({});

  const coursesList = [
    'Colleges / Higher Education',
    'Institutes & Academy',
    'Online Computer Training',
    'Technical Institutes Trade',
    'Electrician Trade Training',
    'Vocational Training Centres',
    'Consultancy Services',
    'Technical Installation',
    'Doorstep Delivery',
    'Annual Maintenance (AMC)',
  ];

  // Load state when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      // Load Leads
      const data = JSON.parse(localStorage.getItem('abhinav_inquiries') || '[]');
      setInquiries(data);
      
      // Load Notice
      const savedNotice = localStorage.getItem('abhinav_notice') || 
        'Welcome to Abhinav Technical Institute! Admissions are now open for the new academic batch. Contact us for details.';
      setNoticeText(savedNotice);
      
      // Load Admissions statuses
      const savedAdmissions = JSON.parse(localStorage.getItem('abhinav_admissions') || '{}');
      const initialAdmissions: Record<string, boolean> = {};
      coursesList.forEach(course => {
        initialAdmissions[course] = savedAdmissions[course] !== false; // default to true (Open)
      });
      setAdmissions(initialAdmissions);
    }
  }, [isAuthenticated]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '9423488174' || password === '9822725265' || password === 'admin') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      const updated = inquiries.filter(item => item.id !== id);
      setInquiries(updated);
      localStorage.setItem('abhinav_inquiries', JSON.stringify(updated));
    }
  };

  const handleClearAll = () => {
    if (window.confirm('CRITICAL: Are you sure you want to delete ALL inquiries? This action cannot be undone.')) {
      setInquiries([]);
      localStorage.setItem('abhinav_inquiries', '[]');
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadCSV = () => {
    if (inquiries.length === 0) return;

    const headers = ['Date', 'Name', 'Phone', 'Email', 'Service/Trade', 'Message'];
    const rows = inquiries.map(item => [
      item.date,
      item.name,
      item.phone,
      item.email,
      item.service,
      item.message.replace(/"/g, '""')
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `abhinav_inquiries_${Date.now()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveNotice = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('abhinav_notice', noticeText);
    alert('Notice Board announcement updated successfully!');
    // Trigger scroll marquee re-sync across app
    window.dispatchEvent(new Event('storage'));
  };

  const toggleAdmission = (course: string) => {
    const updated = { ...admissions, [course]: !admissions[course] };
    setAdmissions(updated);
    localStorage.setItem('abhinav_admissions', JSON.stringify(updated));
    // Trigger re-sync across app
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden border border-slate-100 h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-2">
            <Lock className="h-5 w-5 text-orangeAccent" />
            <h3 className="font-bold text-lg font-serif">Client Admin Portal</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content body */}
        <div className="flex-grow overflow-y-auto p-6">
          {!isAuthenticated ? (
            /* Login Screen */
            <div className="max-w-md mx-auto py-12 text-center space-y-6">
              <div className="h-16 w-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orangeAccent mx-auto">
                <Lock className="h-8 w-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-xl font-serif">Administrative Authentication</h4>
                <p className="text-xs text-slate-500">Enter your administration password to view and manage application status.</p>
              </div>

              {error && <p className="text-xs text-red-500 font-semibold bg-red-50 py-2 rounded-lg">{error}</p>}

              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password (e.g. 9423488174)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-orangeAccent focus:ring-1 focus:ring-orangeAccent outline-none text-sm text-center"
                />
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-orangeAccent hover:bg-orangeAccent-dark text-white rounded-xl font-semibold shadow-sm hover:shadow text-sm transition-all"
                >
                  Verify Credentials
                </button>
              </form>
            </div>
          ) : (
            /* Dashboard Screen with Tabs */
            <div className="space-y-6 h-full flex flex-col">
              
              {/* Tab Navigation */}
              <div className="flex border-b border-slate-200 shrink-0">
                <button
                  onClick={() => setActiveTab('leads')}
                  className={`flex items-center space-x-2 py-3 px-6 border-b-2 font-semibold text-sm transition-all ${
                    activeTab === 'leads'
                      ? 'border-orangeAccent text-orangeAccent'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <ListTodo className="h-4 w-4" />
                  <span>Leads & Inquiries ({inquiries.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('notice')}
                  className={`flex items-center space-x-2 py-3 px-6 border-b-2 font-semibold text-sm transition-all ${
                    activeTab === 'notice'
                      ? 'border-orangeAccent text-orangeAccent'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Megaphone className="h-4 w-4" />
                  <span>Notice Board Announcement</span>
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`flex items-center space-x-2 py-3 px-6 border-b-2 font-semibold text-sm transition-all ${
                    activeTab === 'courses'
                      ? 'border-orangeAccent text-orangeAccent'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <ToggleLeft className="h-4 w-4" />
                  <span>Course Admissions</span>
                </button>
              </div>

              {/* Tab Panels */}
              <div className="flex-grow overflow-y-auto pt-2">
                
                {/* 1. Leads Panel */}
                {activeTab === 'leads' && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div>
                        <h4 className="font-bold text-slate-900">Total Captured Leads</h4>
                        <p className="text-xs text-slate-500 mt-0.5">Currently tracking {inquiries.length} inquiries.</p>
                      </div>
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        {inquiries.length > 0 && (
                          <>
                            <button
                              onClick={downloadCSV}
                              className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm transition-all w-full sm:w-auto"
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Download CSV
                            </button>
                            <button
                              onClick={handleClearAll}
                              className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-sm transition-all w-full sm:w-auto"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Clear All
                            </button>
                          </>
                        )}
                        <button
                          onClick={handleLogout}
                          className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl transition-all w-full sm:w-auto"
                        >
                          Logout
                        </button>
                      </div>
                    </div>

                    {inquiries.length === 0 ? (
                      <div className="text-center py-20 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                        <Eye className="h-12 w-12 text-slate-400 mx-auto mb-3" />
                        <p className="font-semibold text-slate-600 text-sm">No inquiries recorded yet</p>
                        <p className="text-xs text-slate-500 mt-1">Lead queries submitted through the contact form will appear here.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {inquiries.map((item) => (
                          <div
                            key={item.id}
                            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-orangeAccent bg-orange-50 px-2 py-0.5 rounded">
                                  {item.service}
                                </span>
                                <h5 className="font-bold text-slate-900 mt-1">{item.name}</h5>
                                <span className="text-[10px] text-slate-400 block mt-0.5">{item.date}</span>
                              </div>
                              <button
                                onClick={() => handleDelete(item.id)}
                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              <div>
                                <span className="text-slate-400 block">Phone</span>
                                <a href={`tel:${item.phone}`} className="font-medium text-slate-950 hover:underline">{item.phone}</a>
                              </div>
                              <div>
                                <span className="text-slate-400 block">Email</span>
                                {item.email ? (
                                  <a href={`mailto:${item.email}`} className="font-medium text-slate-950 hover:underline">{item.email}</a>
                                ) : (
                                  <span className="text-slate-400 italic">None provided</span>
                                )}
                              </div>
                            </div>

                            <div className="bg-slate-50 p-4 rounded-xl relative group">
                              <span className="text-[10px] text-slate-400 block mb-1">Message</span>
                              <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed">
                                {item.message}
                              </p>
                              
                              <button
                                onClick={() => copyToClipboard(`Name: ${item.name}\nPhone: ${item.phone}\nService: ${item.service}\nMessage: ${item.message}`, item.id)}
                                className="absolute right-3 top-3 p-1.5 bg-white border border-slate-200 text-slate-500 hover:text-slate-900 rounded-md shadow-sm transition-colors"
                                title="Copy details to clipboard"
                              >
                                {copiedId === item.id ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 2. Notice Board Panel */}
                {activeTab === 'notice' && (
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg font-serif">Notice Board Scrolling Ticker</h4>
                      <p className="text-xs text-slate-500 mt-1">This text scrolls across the very top of the website. Update it to announce events, new batches, or holidays.</p>
                    </div>

                    <form onSubmit={handleSaveNotice} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Notice Message</label>
                        <textarea
                          rows={4}
                          value={noticeText}
                          onChange={(e) => setNoticeText(e.target.value)}
                          placeholder="Enter announcement text..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-orangeAccent focus:ring-1 focus:ring-orangeAccent outline-none text-sm resize-none"
                        />
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="px-4 py-2 border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-xl transition-all"
                        >
                          Logout
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-orangeAccent hover:bg-orangeAccent-dark text-white text-xs font-semibold rounded-xl shadow-sm hover:shadow transition-all"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* 3. Manage Courses Panel */}
                {activeTab === 'courses' && (
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg font-serif">Toggle Course Admission Availability</h4>
                      <p className="text-xs text-slate-500 mt-1">Toggling a course updates the status badge ("Admissions Open" or "Admissions Closed") in real-time on the homepage.</p>
                    </div>

                    <div className="divide-y divide-slate-100">
                      {coursesList.map((course) => {
                        const isOpen = admissions[course] !== false;
                        return (
                          <div key={course} className="flex justify-between items-center py-4">
                            <div>
                              <span className="font-semibold text-slate-800 text-sm">{course}</span>
                              <span className={`block text-[10px] font-bold uppercase mt-1 ${
                                isOpen ? 'text-emerald-600' : 'text-red-500'
                              }`}>
                                {isOpen ? 'Admissions Open' : 'Admissions Closed'}
                              </span>
                            </div>
                            
                            <button
                              onClick={() => toggleAdmission(course)}
                              className="focus:outline-none transition-colors"
                              title={isOpen ? 'Click to close admissions' : 'Click to open admissions'}
                            >
                              {isOpen ? (
                                <ToggleRight className="h-9 w-9 text-orangeAccent" />
                              ) : (
                                <ToggleLeft className="h-9 w-9 text-slate-300" />
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="flex justify-start pt-4 border-t border-slate-100">
                      <button
                        onClick={handleLogout}
                        className="px-4 py-2 border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-xl transition-all"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}

              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
