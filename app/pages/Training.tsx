import { Link } from "react-router-dom";
import { ChevronRight, ShieldAlert, FileKey, ExternalLink, Lock } from "lucide-react";

export function Training() {
  return (
    <div className="min-h-screen font-['Outfit'] bg-[#F4F6F9]">
      {/* ── Hero / Title Banner ─────────────────────────────────────────── */}
      <section className="relative bg-[#1A2332] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1E5A8E]/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-widest font-bold mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-gray-400">Careers</span>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white">Training Portal</span>
          </div>

          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
            Staff Training &<br />Compliance Portal
          </h1>

          <div className="inline-block bg-[#5DADE2] text-[#0A1929] text-sm font-black uppercase tracking-widest px-5 py-2 mb-8">
            Internal Staff Only
          </div>

          <p className="text-white/70 text-lg max-w-2xl font-light leading-relaxed">
            Welcome to the Zarkoon Security staff portal. Access your mandatory training modules, health & safety protocols, and industry compliance guidelines here.
          </p>
        </div>
      </section>

      {/* ── Content Portals Grid ────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

            {/* Health & Safety */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4F6F9] rounded-bl-full -z-10"></div>
              <div className="w-14 h-14 bg-[#1E5A8E]/10 rounded-xl flex justify-center items-center mb-6">
                <ShieldAlert className="w-7 h-7 text-[#1E5A8E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1929] mb-3">Health & Safety</h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm mb-6 flex-grow">
                Review core safety protocols, dynamic risk assessment methodologies, and comprehensive incident reporting policies critical for all deployments.
              </p>
              <button disabled className="mt-auto flex items-center gap-2 text-gray-400 font-medium cursor-not-allowed">
                <Lock className="w-4 h-4" /> Login Required
              </button>
            </div>

            {/* SIA Standards text */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4F6F9] rounded-bl-full -z-10"></div>
              <div className="w-14 h-14 bg-[#1E5A8E]/10 rounded-xl flex justify-center items-center mb-6">
                <FileKey className="w-7 h-7 text-[#1E5A8E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1929] mb-3">SIA Standards</h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm mb-6 flex-grow">
                Critical updates and compliance requirements for maintaining valid Security Industry Authority (SIA) licensing and adhering to the Approved Contractor Scheme (ACS) standards.
              </p>
              <button disabled className="mt-auto flex items-center gap-2 text-gray-400 font-medium cursor-not-allowed">
                <Lock className="w-4 h-4" /> Login Required
              </button>
            </div>

            {/* Terrorism Awareness */}
            <div className="bg-gradient-to-br from-[#1E5A8E] to-[#0A1929] p-8 rounded-2xl shadow-xl flex flex-col items-start border border-[#1E88E5]/30">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex justify-center items-center mb-6">
                <ShieldAlert className="w-7 h-7 text-[#5DADE2]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Terrorism Awareness</h3>
              <p className="text-white/80 font-light leading-relaxed text-sm mb-6 flex-grow">
                Action Counters Terrorism (ACT). All Zarkoon personnel are required to complete the mandatory ACT Awareness and ACT Security e-Learning modules.
              </p>
              <a
                href="https://www.protectuk.police.uk/catalogue"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-2 text-[#5DADE2] font-bold hover:text-white transition-colors"
              >
                Go to ProtectUK <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* ── Certifications / Compliance Visals ── */}
          <div className="bg-white rounded-3xl p-12 border border-blue-50 shadow-sm">
            <div className="text-center mb-10">
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 inline-block">Mandatory Training Requirements Supported By</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
              <div className="text-center space-y-4">
                <div className="h-28 flex items-center justify-center">
                  <img src="/assets/certifications/IOSH_Managing_Safely.pdf" alt="IOSH Certificate" className="h-full object-cotain opacity-60 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500 hidden" />
                  <span className="text-[#1E5A8E] font-black text-4xl">IOSH</span>
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Managing Safely</p>
              </div>
              <div className="text-center space-y-4">
                <div className="h-28 flex items-center justify-center">
                  <span className="text-[#0A1929] font-black text-5xl">ACT</span>
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Action Counters Terrorism</p>
              </div>
            </div>
          </div>

          {/* Main Login CTA */}
          <div className="mt-16 flex justify-center">
            <button className="bg-[#5DADE2] text-[#0A1929] px-12 py-5 rounded-full font-black text-lg tracking-widest uppercase hover:bg-[#1E5A8E] hover:text-white transition-all duration-300 shadow-xl flex items-center gap-3">
              <Lock className="w-5 h-5" /> Staff Login Portal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
