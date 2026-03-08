export function AffiliationsSection() {
  const accreditations = [
    { name: "SIA", label: "Security Industry Authority" },
    { name: "CHAS", label: "CHAS Accredited" },
    { name: "ICO.", label: "Information Commissioner's Office" },
    { name: "Social Value", label: "Quality Management" },
    { name: "NASDU", label: "NASDU Member" },
    { name: "SafeContractor", label: "Health & Safety" }
  ];

  return (
    <section id="accreditations" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-[#0A1929] text-3xl font-bold mb-4 tracking-tight">
          Affiliations and <span className="text-[#1E5A8E]">Accreditations</span>
        </h2>
        <div className="w-20 h-1 bg-[#5DADE2] mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {accreditations.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center w-full h-32 p-6 rounded-2xl bg-[#0A1929]/5 border border-transparent hover:border-[#5DADE2]/30 transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              <div className="text-[#0A1929] font-black text-2xl tracking-tighter opacity-40 group-hover:opacity-100 group-hover:text-[#1E5A8E] transition-all duration-300">
                {item.name}
              </div>
              <p className="mt-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

