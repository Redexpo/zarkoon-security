import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ChevronRight,
  Mail,
  UserCheck,
  ShieldCheck,
  Briefcase
} from "lucide-react";

export function Careers() {
  return (
    <div className="min-h-screen font-['Outfit'] bg-[#F4F6F9] pb-20">
      <Helmet>
        <title>Careers | Zarkoon Security Limited</title>
        <meta name="description" content="Join the Zarkoon Security Limited team. Learn how to apply for our professional security roles." />
      </Helmet>

      {/* ── Hero Section ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "400px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929]/90 via-[#0A1929]/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pt-20" style={{ minHeight: "400px" }}>
          <div className="flex items-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-[0.2em] font-bold mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white">Careers</span>
          </div>

          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6 uppercase">
            Join Our <span className="text-[#D4AF37]">Team</span>
          </h1>

          <p className="text-white/80 text-lg max-w-2xl font-light leading-relaxed">
            Take the next step in your professional security career. At Zarkoon Security Limited, 
            we value reliability, excellence, and professional growth.
          </p>
        </div>
      </section>

      {/* ── Instructional Box Section ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col relative">
            {/* Top Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-[#1E5A8E] to-[#D4AF37]" />
            
            <div className="p-10 md:p-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#1E5A8E]/10 rounded-2xl flex items-center justify-center">
                  <UserCheck className="w-7 h-7 text-[#1E5A8E]" />
                </div>
                <h2 className="text-[#0A1929] text-3xl font-bold tracking-tight uppercase">
                  Join Our Team
                </h2>
              </div>

              <div className="space-y-6 text-[#4A5568] leading-relaxed text-lg font-light">
                <p>
                  At <span className="text-[#1E5A8E] font-bold">Zarkoon Security Limited</span>, we are always looking for dedicated professionals to join our elite teams across the UK.
                </p>
                
                <div className="bg-[#F8FAFC] border-l-4 border-[#D4AF37] p-8 rounded-r-2xl my-10">
                  <p className="text-[#0A1929] font-medium mb-4 italic">
                    "To apply for a position, please send your CV and a cover letter to our recruitment team at:"
                  </p>
                  <a 
                    href="mailto:info@zarkoonsecurity.co.uk" 
                    className="group flex items-center gap-3 text-[#1E5A8E] text-2xl font-bold hover:text-[#D4AF37] transition-colors break-all"
                  >
                    <Mail className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    info@zarkoonsecurity.co.uk
                  </a>
                </div>

                <div className="flex items-start gap-4 pt-6 border-t border-gray-100">
                  <ShieldCheck className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <p className="text-sm font-semibold text-[#0A1929]">
                    Please ensure you have a valid SIA license for all operational roles.
                  </p>
                </div>
              </div>

              {/* Recruitment Standards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-50 shadow-sm">
                  <div className="w-10 h-10 bg-[#5DADE2]/10 rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[#5DADE2]" />
                  </div>
                  <span className="text-sm font-bold text-[#0A1929] uppercase tracking-wider">Professional Growth</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-50 shadow-sm">
                  <div className="w-10 h-10 bg-[#FFD700]/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-sm font-bold text-[#0A1929] uppercase tracking-wider">Site Safety Elite</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-gray-400 text-sm italic">
            Zarkoon Security Limited is an equal opportunity employer. 
            All applications are treated with strict confidentiality.
          </div>
        </div>
      </section>
    </div>
  );
}

