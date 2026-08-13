import React, { useState, useEffect } from 'react';
import { GraduationCap, School, Laptop, Cpu, Zap, Wrench, ShieldCheck, Settings, Truck, ClipboardCheck, FileDown, CheckCircle2, XCircle } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  category: string;
}

const Services: React.FC = () => {
  const [admissions, setAdmissions] = useState<Record<string, boolean>>({});

  // Sync admissions status
  useEffect(() => {
    const loadAdmissions = () => {
      const saved = JSON.parse(localStorage.getItem('abhinav_admissions') || '{}');
      setAdmissions(saved);
    };

    loadAdmissions();
    window.addEventListener('storage', loadAdmissions);
    return () => window.removeEventListener('storage', loadAdmissions);
  }, []);

  const services: ServiceItem[] = [
    {
      title: 'Colleges / Higher Education',
      description: 'We are committed to excellence in academic knowledge, guiding student admissions and professional curriculum pathways.',
      imgSrc: 'https://image3.jdomni.in/library/47/A3/A8/1B8D1518D826F5505A202DAC0B_1496774183519_cropped_450X450.jpeg',
      icon: <GraduationCap className="h-5 w-5" />,
      category: 'Education'
    },
    {
      title: 'Institutes & Academy',
      description: 'Our structured courses and programs simplify complex subjects and support active vocational learning methods.',
      imgSrc: 'https://image1.jdomni.in/library/8E/8D/98/DA3FC68BBAB35DEB1490EDB82D_1496334972139_cropped_450X450.jpeg',
      icon: <School className="h-5 w-5" />,
      category: 'Education'
    },
    {
      title: 'Online Computer Training',
      description: 'Acquire modern IT skills and digital competencies remotely. Expert modules focused on direct online job training.',
      imgSrc: 'https://image2.jdomni.in/library/F2/90/E5/685006672E759B06DC1C855957_1496248176970_cropped_450X450.jpeg',
      icon: <Laptop className="h-5 w-5" />,
      category: 'Computer'
    },
    {
      title: 'Technical Institutes Trade',
      description: 'Offering uniquely structured, hands-on, job-oriented technical programs designed for instant career success.',
      imgSrc: 'https://image3.jdomni.in/library/B5/F1/92/3FB68317B2E13CA8D7F81671B5_1496334292191_cropped_450X450.jpeg',
      icon: <Cpu className="h-5 w-5" />,
      category: 'Technical'
    },
    {
      title: 'Electrician Trade Training',
      description: 'Professional-led technical training to master wiring, electrical safety, installation, maintenance, and trade tools.',
      imgSrc: 'https://image1.jdomni.in/library/52/56/5D/ECC0BDA74F37E2F9D85C9F3EA6_1496335418217_cropped_450X450.jpeg',
      icon: <Zap className="h-5 w-5" />,
      category: 'Technical'
    },
    {
      title: 'Vocational Training Centres',
      description: 'Expert faculty-led practical workshops for mechanical, electrical, and commercial vocational courses.',
      imgSrc: 'https://image2.jdomni.in/library/CA/C9/0B/06D6B25EC6D62E5DD8473F6EC7_1496936449094_cropped_450X450.jpeg',
      icon: <Wrench className="h-5 w-5" />,
      category: 'Technical'
    },
    {
      title: 'Consultancy Services',
      description: 'Proactive and detailed industrial consultation tailored to corporate requirements, project planning, and operations.',
      imgSrc: 'https://image3.jdomni.in/banner/13102022/CB/16/C1/27D33CC0F3529B05F1103E44B3_1665645521497.jpg',
      icon: <ShieldCheck className="h-5 w-5" />,
      category: 'Services'
    },
    {
      title: 'Technical Installation',
      description: 'Reliable and affordable setup, wiring, and machinery installation services for institutional and industrial assets.',
      imgSrc: 'https://image3.jdomni.in/banner/13102022/A3/55/06/D7C0ADE95CBFA5E5EA5AEA3D75_1665645551046.jpg',
      icon: <Settings className="h-5 w-5" />,
      category: 'Services'
    },
    {
      title: 'Doorstep Delivery',
      description: 'On-time delivery of study materials, toolsets, and student-support services at your convenience.',
      imgSrc: 'https://image2.jdomni.in/banner/13102022/B8/99/C2/8336BF5BE824E4F1BEE27B92FC_1665645558412.png',
      icon: <Truck className="h-5 w-5" />,
      category: 'Services'
    },
    {
      title: 'Annual Maintenance (AMC)',
      description: 'Skillful support and maintenance packages for machinery, computers, and wiring setups at client sites.',
      imgSrc: 'https://image3.jdomni.in/banner/13102022/C8/C0/07/72CFBAFA1062B9CDB2E4568834_1665645572048.jpg',
      icon: <ClipboardCheck className="h-5 w-5" />,
      category: 'Services'
    }
  ];

  const getDuration = (title: string) => {
    if (title.includes('Electrician')) return '2 Years';
    if (title.includes('Computer')) return '3 to 6 Months';
    if (title.includes('Consultancy') || title.includes('Installation') || title.includes('Delivery') || title.includes('Maintenance')) return 'On Call / Contract';
    return '1 Year';
  };

  const getEligibility = (title: string) => {
    if (title.includes('Colleges')) return '12th Pass (HSC)';
    if (title.includes('Electrician') || title.includes('Technical Institutes')) return '10th Pass (SSC)';
    return '8th Pass or Above';
  };

  const getModules = (title: string) => {
    if (title.includes('Electrician')) {
      return [
        { name: 'Electrical Theory & Safety', desc: 'Understanding voltage, currents, and safety earthing.' },
        { name: 'House & Commercial Wiring', desc: 'Practical circuit setups, switches, and layouts.' },
        { name: 'Electrical Machines & Motors', desc: 'Motor winding, testing, and troubleshooting.' },
        { name: 'Panel Boards & Control Wiring', desc: 'Industrial panels, relays, and safety controls.' }
      ];
    }
    if (title.includes('Computer')) {
      return [
        { name: 'Office Automation Tools', desc: 'Microsoft Word, Excel, and PowerPoint practices.' },
        { name: 'Digital Typing Mastery', desc: 'English & regional language typing speed improvement.' },
        { name: 'Tally Prime & Accounting', desc: 'Ledgers, accounting inputs, and GST calculations.' },
        { name: 'Internet & Database Skills', desc: 'Safe browsing, database administration, and online inputs.' }
      ];
    }
    return [
      { name: 'Practical Trade Theory', desc: 'Core parameters and conceptual frameworks.' },
      { name: 'Hands-on Workshop Practices', desc: 'Tools handling, wire splicing, assembly, and diagnostics.' },
      { name: 'Industrial Safety Standards', desc: 'Protocols for safe setups and machinery controls.' },
      { name: 'Client Support & AMC', desc: 'Routine checks and technical installation troubleshooting.' }
    ];
  };

  const generateSyllabusPDF = (title: string) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Pop-up blocker is preventing syllabus download. Please enable pop-ups.');
      return;
    }

    const duration = getDuration(title);
    const eligibility = getEligibility(title);
    const modules = getModules(title);

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Syllabus - ${title}</title>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; color: #333; line-height: 1.6; }
            .header { border-bottom: 3px solid #ff8c00; padding-bottom: 20px; margin-bottom: 30px; text-align: center; }
            .logo { max-height: 70px; margin-bottom: 10px; }
            h1 { color: #1e293b; font-size: 26px; margin: 5px 0; }
            .subtitle { color: #ff8c00; font-size: 13px; margin: 0; text-transform: uppercase; font-weight: bold; letter-spacing: 1.5px; }
            .content-title { border-left: 5px solid #ff8c00; padding-left: 12px; color: #0f172a; font-size: 20px; margin-top: 30px; font-weight: bold; }
            .details { background: #fdf8f5; border: 1px solid #ffd8bf; padding: 20px; border-radius: 16px; margin: 25px 0; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .details-item { display: flex; flex-direction: column; }
            .label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: bold; letter-spacing: 0.5px; }
            .val { font-size: 15px; color: #1e293b; font-weight: 600; margin-top: 4px; }
            .module-list { list-style: none; padding: 0; margin: 20px 0; }
            .module-item { border-bottom: 1px solid #f1f5f9; padding: 12px 0; }
            .module-title { font-weight: bold; color: #0f172a; font-size: 15px; }
            .module-desc { font-size: 13px; color: #475569; margin-top: 4px; }
            .banner { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 15px; font-size: 12px; color: #475569; margin: 25px 0; }
            .footer { text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; margin-top: 60px; padding-top: 20px; }
          </style>
        </head>
        <body>
          <div class="header">
            <img class="logo" src="https://image1.jdomni.in/defaultogimages/v2/A/T/AT.png" alt="Abhinav Logo" />
            <h1>Abhinav Technical Institute</h1>
            <p class="subtitle">Industrial Training & Skill Development Education, Jalgaon</p>
          </div>

          <div class="content-title">Course Syllabus: ${title}</div>
          
          <div class="details">
            <div class="details-item">
              <span class="label">Course Name</span>
              <span class="val">${title}</span>
            </div>
            <div class="details-item">
              <span class="label">Duration</span>
              <span class="val">${duration}</span>
            </div>
            <div class="details-item">
              <span class="label">Eligibility</span>
              <span class="val">${eligibility}</span>
            </div>
            <div class="details-item">
              <span class="label">Trade Certification</span>
              <span class="val">Govt. Recognized Curriculum</span>
            </div>
          </div>

          <div class="content-title">Core Training Modules</div>
          <div class="module-list">
            ${modules.map((m, idx) => `
              <div class="module-item">
                <div class="module-title">Module ${idx + 1}: ${m.name}</div>
                <div class="module-desc">${m.desc}</div>
              </div>
            `).join('')}
          </div>

          <div class="content-title">Infrastructure & Lab Environment</div>
          <div class="banner">
            This syllabus is delivered through 100% practical lab assignments. Trainees get hands-on access to electrical test rigs, motor winding set-ups, domestic wiring layouts, and computer workstations under certified instructor guidance. 
          </div>

          <div class="footer">
            <p>Mansingh Market, Near Railway Station / Near Ramnivas Hotel, Z P Road, Navi Peth Jalgaon, Maharashtra 425001</p>
            <p>Call: +91 94234 88174 / 0257-2220036 | Email: abhinav.prp@gmail.com</p>
          </div>

          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() { window.close(); }, 500);
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const handleEnquire = (courseName: string) => {
    window.location.hash = `#contact?subject=${encodeURIComponent(courseName)}`;
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-orangeAccent">Our Offerings</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif">
            Comprehensive Training & Services
          </h2>
          <div className="h-1 w-12 bg-orangeAccent mx-auto rounded-full" />
          <p className="text-slate-600 text-base">
            Abhinav Technical Institute offers structured academic training, specialized trades, and institutional services to power careers and industrial setups.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            // Check if course admission is closed
            const isOpen = admissions[service.title] !== false;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col justify-between hover-lift group"
              >
                {/* Image & Category */}
                <div className="relative h-48 bg-slate-100 overflow-hidden shrink-0">
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-orangeAccent shadow-sm">
                    {service.category}
                  </div>
                  
                  {/* Admissions Status Badge */}
                  <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase shadow-sm inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm ${
                    isOpen ? 'text-emerald-600' : 'text-red-500'
                  }`}>
                    {isOpen ? (
                      <>
                        <CheckCircle2 className="h-3 w-3" />
                        <span>Admissions Open</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-3 w-3" />
                        <span>Full / Closed</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Text & Details */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-orangeAccent">
                      <div className="p-2 bg-orange-50 rounded-lg shrink-0">
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-orangeAccent transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => handleEnquire(service.title)}
                      className="inline-flex items-center text-sm font-semibold text-orangeAccent hover:text-orangeAccent-dark transition-colors"
                    >
                      Enquire Now &rarr;
                    </button>
                    
                    <button
                      onClick={() => generateSyllabusPDF(service.title)}
                      className="inline-flex items-center text-xs font-semibold text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-100 transition-colors"
                      title="Download Syllabus as PDF"
                    >
                      <FileDown className="h-3.5 w-3.5 mr-1" />
                      Syllabus
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
