import React, { useState, useRef } from 'react';
import { CreditCard, User, BookOpen, Calendar, Hash, Printer, Download, School2, Phone } from 'lucide-react';

interface StudentData {
  name: string;
  fatherName: string;
  course: string;
  admissionDate: string;
  studentId: string;
  rollNo: string;
  dob: string;
  phone: string;
  address: string;
  feeAmount: string;
  feePaid: string;
  feeDate: string;
  feeMode: string;
  receiptNo: string;
}

const COURSES = [
  'Electrician Trade (ITI)', 'Wireman Trade (ITI)', 'COPA – Computer Operator & Programming',
  'MSCIT – MS Computer IT', 'Tally ERP 9 / Prime (GST)', 'DTP – Desktop Publishing',
  'Hardware & Networking Technician', 'Beautician & Cosmetology',
  'Fashion Design & Garment Making', 'Web Design & Digital Marketing',
];

const FEE_MODES = ['Cash', 'Online (UPI)', 'Cheque', 'NEFT/RTGS', 'DD'];

const generateId = () => 'ATI-STU-' + Math.floor(100000 + Math.random() * 900000);
const generateReceipt = () => 'RCT-' + new Date().getFullYear() + '-' + Math.floor(10000 + Math.random() * 90000);
const today = () => new Date().toISOString().split('T')[0];

const EMPTY: StudentData = {
  name: '', fatherName: '', course: COURSES[0],
  admissionDate: today(), studentId: generateId(), rollNo: '',
  dob: '', phone: '', address: '',
  feeAmount: '', feePaid: '', feeDate: today(),
  feeMode: 'Cash', receiptNo: generateReceipt(),
};

const StudentIdCard: React.FC<{ data: StudentData }> = ({ data }) => (
  <div
    id="id-card"
    style={{
      width: '85mm', minHeight: '54mm', fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg,#1e293b 0%,#0f172a 60%,#ea580c 100%)',
      borderRadius: '10px', padding: '14px', color: 'white', position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div style={{ position: 'absolute', top: -20, right: -20, width: 90, height: 90, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 10, marginBottom: 10 }}>
      <img src="https://image1.jdomni.in/defaultogimages/v2/A/T/AT.png" alt="Logo" style={{ width: 36, height: 36, borderRadius: 6, background: 'white', padding: 2 }} />
      <div>
        <div style={{ fontSize: 11, fontWeight: 'bold', letterSpacing: 0.5 }}>Abhinav Technical Institute</div>
        <div style={{ fontSize: 8, color: '#fca98a', letterSpacing: 1 }}>INDUSTRIAL TRAINING • JALGAON</div>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
      <div style={{ width: 44, height: 52, background: 'rgba(255,255,255,0.1)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>
        {data.name?.[0] || '?'}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 'bold', marginBottom: 2 }}>{data.name || 'Student Name'}</div>
        <div style={{ fontSize: 8, color: '#94a3b8', marginBottom: 6 }}>F/O: {data.fatherName || '—'}</div>
        <div style={{ fontSize: 8, background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 4, display: 'inline-block', marginBottom: 4 }}>
          {data.course || 'Course'}
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
          <div>
            <div style={{ fontSize: 7, color: '#94a3b8' }}>STUDENT ID</div>
            <div style={{ fontSize: 9, fontWeight: 'bold', fontFamily: 'monospace' }}>{data.studentId}</div>
          </div>
          {data.rollNo && (
            <div>
              <div style={{ fontSize: 7, color: '#94a3b8' }}>ROLL NO.</div>
              <div style={{ fontSize: 9, fontWeight: 'bold' }}>{data.rollNo}</div>
            </div>
          )}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 8, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6, display: 'flex', justifyContent: 'space-between', fontSize: 7, color: '#94a3b8' }}>
      <span>Admitted: {data.admissionDate}</span>
      <span>Ph: +91 9423488174</span>
    </div>
  </div>
);

const FeeReceipt: React.FC<{ data: StudentData }> = ({ data }) => (
  <div
    id="fee-receipt"
    style={{
      width: '148mm', fontFamily: 'Arial, sans-serif', background: 'white',
      padding: '20px 24px', border: '2px solid #1e293b', borderRadius: 8,
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #ea580c', paddingBottom: 12, marginBottom: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src="https://image1.jdomni.in/defaultogimages/v2/A/T/AT.png" alt="Logo" style={{ width: 44, height: 44, borderRadius: 6 }} />
        <div>
          <div style={{ fontSize: 14, fontWeight: 'bold', color: '#1e293b' }}>Abhinav Technical Institute</div>
          <div style={{ fontSize: 9, color: '#64748b' }}>Industrial Training & Skill Development • Jalgaon, Maharashtra</div>
          <div style={{ fontSize: 9, color: '#64748b' }}>Ph: +91 9423488174 | Navi Peth Jalgaon 425001</div>
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 14, fontWeight: 'bold', color: '#ea580c', letterSpacing: 1 }}>FEE RECEIPT</div>
        <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>No: <strong style={{ fontFamily: 'monospace', color: '#1e293b' }}>{data.receiptNo}</strong></div>
        <div style={{ fontSize: 10, color: '#64748b' }}>Date: {data.feeDate}</div>
      </div>
    </div>
    <table style={{ width: '100%', fontSize: 11, borderCollapse: 'collapse', marginBottom: 14 }}>
      <tbody>
        {[
          ['Student Name', data.name || '—', 'Father\'s Name', data.fatherName || '—'],
          ['Student ID', data.studentId, 'Roll No.', data.rollNo || '—'],
          ['Course / Trade', data.course, 'Admission Date', data.admissionDate],
          ['Phone', data.phone || '—', 'Address', data.address || '—'],
        ].map((row, i) => (
          <tr key={i} style={{ background: i % 2 === 0 ? '#f8fafc' : 'white' }}>
            <td style={{ padding: '5px 8px', fontWeight: 'bold', color: '#64748b', width: '22%', fontSize: 10 }}>{row[0]}</td>
            <td style={{ padding: '5px 8px', color: '#1e293b', width: '28%' }}>{row[1]}</td>
            <td style={{ padding: '5px 8px', fontWeight: 'bold', color: '#64748b', width: '22%', fontSize: 10 }}>{row[2]}</td>
            <td style={{ padding: '5px 8px', color: '#1e293b', width: '28%' }}>{row[3]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div style={{ background: '#1e293b', color: 'white', borderRadius: 6, padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: 9, color: '#94a3b8', letterSpacing: 1 }}>AMOUNT PAID</div>
        <div style={{ fontSize: 22, fontWeight: 'bold', marginTop: 2 }}>₹ {Number(data.feePaid || 0).toLocaleString('en-IN')}</div>
        <div style={{ fontSize: 9, color: '#94a3b8', marginTop: 2 }}>Mode: {data.feeMode}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 9, color: '#94a3b8' }}>Total Course Fee</div>
        <div style={{ fontSize: 14, fontWeight: 'bold', color: '#fca98a' }}>₹ {Number(data.feeAmount || 0).toLocaleString('en-IN')}</div>
        <div style={{ fontSize: 9, color: '#94a3b8', marginTop: 4 }}>Balance</div>
        <div style={{ fontSize: 12, fontWeight: 'bold', color: data.feeAmount && data.feePaid && Number(data.feeAmount) > Number(data.feePaid) ? '#f87171' : '#86efac' }}>
          ₹ {Math.max(0, Number(data.feeAmount || 0) - Number(data.feePaid || 0)).toLocaleString('en-IN')}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 12, borderTop: '1px solid #e2e8f0' }}>
      <div style={{ fontSize: 9, color: '#94a3b8' }}>
        <div>This is a computer-generated receipt.</div>
        <div>© Abhinav Technical Institute, Jalgaon</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: 4, width: 120, fontSize: 9, color: '#64748b' }}>
          Authorized Signatory
        </div>
      </div>
    </div>
  </div>
);

const FeeReceiptIdCard: React.FC = () => {
  const [data, setData] = useState<StudentData>({ ...EMPTY });
  const [tab, setTab] = useState<'receipt' | 'id'>('receipt');
  const previewRef = useRef<HTMLDivElement>(null);

  const set = (k: keyof StudentData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setData(prev => ({ ...prev, [k]: e.target.value }));
  };

  const handlePrint = () => {
    const el = document.getElementById(tab === 'receipt' ? 'fee-receipt' : 'id-card');
    if (!el) return;
    const w = window.open('', '_blank');
    if (!w) return;
    w.document.write(`<html><head><style>@media print{body{margin:0}}</style></head><body>${el.outerHTML}</body></html>`);
    w.document.close();
    w.focus();
    setTimeout(() => { w.print(); w.close(); }, 300);
  };

  const inputCls = "w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-900";
  const labelCls = "text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5";

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10 bg-orange-100 rounded-xl flex items-center justify-center">
          <CreditCard className="h-5 w-5 text-orangeAccent" />
        </div>
        <div>
          <h3 className="font-bold text-slate-900 text-lg">Fee Receipt & Student ID Card Generator</h3>
          <p className="text-xs text-slate-500">Fill student details and print instantly</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Form Panel */}
        <div className="space-y-4">
          {/* Student Info */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <User className="h-3.5 w-3.5" /> Student Information
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className={labelCls}>Full Name *</label>
                <input className={inputCls} value={data.name} onChange={set('name')} placeholder="Student's full name" />
              </div>
              <div className="col-span-2">
                <label className={labelCls}>Father's Name *</label>
                <input className={inputCls} value={data.fatherName} onChange={set('fatherName')} placeholder="Father's name" />
              </div>
              <div>
                <label className={labelCls}>Date of Birth</label>
                <input type="date" className={inputCls} value={data.dob} onChange={set('dob')} />
              </div>
              <div>
                <label className={labelCls}>Phone No.</label>
                <input className={inputCls} value={data.phone} onChange={set('phone')} placeholder="+91 XXXXXXXXXX" />
              </div>
              <div className="col-span-2">
                <label className={labelCls}>Address</label>
                <input className={inputCls} value={data.address} onChange={set('address')} placeholder="Full address" />
              </div>
            </div>
          </div>

          {/* Admission Info */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <School2 className="h-3.5 w-3.5" /> Admission Details
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className={labelCls}>Course / Trade *</label>
                <select className={inputCls} value={data.course} onChange={set('course')}>
                  {COURSES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Student ID</label>
                <input className={inputCls} value={data.studentId} onChange={set('studentId')} />
              </div>
              <div>
                <label className={labelCls}>Roll No.</label>
                <input className={inputCls} value={data.rollNo} onChange={set('rollNo')} placeholder="e.g. 01" />
              </div>
              <div className="col-span-2">
                <label className={labelCls}>Admission Date</label>
                <input type="date" className={inputCls} value={data.admissionDate} onChange={set('admissionDate')} />
              </div>
            </div>
          </div>

          {/* Fee Info */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Hash className="h-3.5 w-3.5" /> Fee Details
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Total Course Fee (₹)</label>
                <input type="number" className={inputCls} value={data.feeAmount} onChange={set('feeAmount')} placeholder="e.g. 15000" />
              </div>
              <div>
                <label className={labelCls}>Amount Paid (₹)</label>
                <input type="number" className={inputCls} value={data.feePaid} onChange={set('feePaid')} placeholder="e.g. 8000" />
              </div>
              <div>
                <label className={labelCls}>Payment Mode</label>
                <select className={inputCls} value={data.feeMode} onChange={set('feeMode')}>
                  {FEE_MODES.map(m => <option key={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Payment Date</label>
                <input type="date" className={inputCls} value={data.feeDate} onChange={set('feeDate')} />
              </div>
              <div className="col-span-2">
                <label className={labelCls}>Receipt No.</label>
                <input className={inputCls} value={data.receiptNo} onChange={set('receiptNo')} />
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div>
          {/* Tab toggle */}
          <div className="flex rounded-xl overflow-hidden border border-slate-200 mb-4">
            {(['receipt', 'id'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2.5 text-xs font-bold transition-all ${tab === t ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:text-slate-800'}`}
              >
                {t === 'receipt' ? '📄 Fee Receipt' : '🪪 Student ID Card'}
              </button>
            ))}
          </div>

          <div ref={previewRef} className="overflow-x-auto pb-2">
            {tab === 'receipt' ? (
              <FeeReceipt data={data} />
            ) : (
              <StudentIdCard data={data} />
            )}
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={handlePrint}
              className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <Printer className="h-4 w-4" />
              Print {tab === 'receipt' ? 'Receipt' : 'ID Card'}
            </button>
            <button
              onClick={() => setData({ ...EMPTY, studentId: generateId(), receiptNo: generateReceipt() })}
              className="py-3 px-4 bg-white hover:bg-slate-50 text-slate-600 font-bold text-sm rounded-xl border border-slate-200 transition-all"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeReceiptIdCard;
