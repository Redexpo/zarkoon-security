import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Clock, ShieldCheck, Mail } from "lucide-react";

export function Vacancies() {
  const jobs = [
    {
      id: "door-supervisor",
      title: "Door Supervisor",
      location: "London (Various Venues)",
      shift: "Nights & Weekends",
      requirements: "Valid SIA Door Supervisor License, excellent communication skills.",
      description: "We are seeking professional and vigilant Door Supervisors for premium venues across London. You will be the first point of contact, ensuring the safety of patrons while maintaining a welcoming atmosphere.",
    },
    {
      id: "static-guard",
      title: "Static Security Guard",
      location: "Surrey (Corporate Site)",
      shift: "4 On / 4 Off (12-hour shifts)",
      requirements: "SIA Security Guard License, previous corporate experience preferred.",
      description: "Join our dedicated team securing a high-profile corporate estate in Surrey. Duties include access control, CCTV monitoring, and regular patrols to maintain a secure environment.",
    },
    {
      id: "mobile-patrol",
      title: "Mobile Patrol Officer",
      location: "Greater London Area",
      shift: "Night Shifts",
      requirements: "Valid SIA License, full clean UK Driving License.",
      description: "We require an experienced Mobile Patrol Officer to conduct scheduled external and internal patrols across multiple client sites, responding rapidly to alarm activations and incidents.",
    }
  ];

  return (
    <div className="min-h-screen font-['Outfit'] bg-[#F4F6F9]">
      {/* ── Hero / Title Banner ─────────────────────────────────────────── */}
      <section className="relative bg-[#0A1929] overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-40 bg-[#1E5A8E]/40 rounded-br-[80px]" />
        <div className="absolute bottom-0 right-0 w-48 h-32 bg-[#1E5A8E]/30 rounded-tl-[60px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-widest font-bold mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-gray-400">Careers</span>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white">Vacancies</span>
          </div>

          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
            Join Our Professional<br />Security Team
          </h1>

          <div className="inline-block bg-[#1E5A8E] text-white text-sm font-bold uppercase tracking-widest px-5 py-2 mb-8">
            Zarkoon Security Careers
          </div>

          <p className="text-white/70 text-lg max-w-2xl font-light leading-relaxed">
            At Zarkoon Security, we believe our people are our greatest asset.
            We offer robust opportunities for professional growth in a reliable, supportive environment.
            Build a rewarding career protecting what matters.
          </p>
        </div>
      </section>

      {/* ── Job Grid Section ────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-[#0A1929] text-3xl font-bold uppercase tracking-wide">Current Opportunities</h2>
            <div className="w-24 h-1 mt-4 bg-[#1E5A8E] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
              >
                <h3 className="text-[#0A1929] text-2xl font-bold mb-4">{job.title}</h3>

                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#5DADE2] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-medium">{job.location}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#5DADE2] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-medium">{job.shift}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#1E5A8E] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm font-semibold">{job.requirements}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-50">
                    {job.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a
                    href={`mailto:info@zarkoonsecurity.co.uk?subject=Application for ${encodeURIComponent(job.title)} - ${encodeURIComponent(job.location)}`}
                    className="flex justify-center items-center gap-2 w-full bg-[#1E5A8E] text-white py-3 rounded-lg font-bold tracking-wider hover:bg-[#5DADE2] transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* General Application Note */}
          <div className="mt-20 bg-white p-10 rounded-2xl border-l-4 border-[#5DADE2] shadow-sm">
            <h3 className="textxl font-bold text-[#0A1929] mb-3">Don't see a perfect fit?</h3>
            <p className="text-gray-600 font-light mb-6">
              We are constantly growing and always looking for dedicated SIA-licensed professionals. Send us your CV on spec, and we'll keep you informed of upcoming roles.
            </p>
            <a
              href="mailto:info@zarkoonsecurity.co.uk?subject=General Employment Inquiry & CV"
              className="inline-block text-[#1E5A8E] font-bold hover:text-[#5DADE2] transition-colors border-b-2 border-transparent hover:border-[#5DADE2]"
            >
              Submit General Application →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
