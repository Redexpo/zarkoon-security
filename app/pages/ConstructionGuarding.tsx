import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import heroImage from "../../assets/construction-site-security-scaled.jpg";

export function ConstructionGuarding() {

    return (
        <div className="min-h-screen font-['Outfit'] bg-white">
            <Helmet>
                <title>Construction Guarding | Zarkoon Security Limited</title>
                <meta name="description" content="Specialized construction and estate guarding services providing a robust physical deterrent to ensure your assets and property remain secure 24/7." />
            </Helmet>
            {/* Hero Section */}
            <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Construction Guarding Hero"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center px-6 max-w-4xl mt-16">
                    <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
                        Construction & <br className="block md:hidden" /> Estate Guarding
                    </h1>

                    {/* Breadcrumbs */}
                    <div className="flex items-center justify-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-widest font-bold mb-10">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-white/50" />
                        <span className="text-white/80">Sectors</span>
                        <ChevronRight className="w-4 h-4 text-white/50" />
                        <span className="text-white">Construction & Estate Guarding</span>
                    </div>

                    <Link to="/contact-us">
                        <Button className="bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-12 py-7 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 uppercase tracking-widest border-2 border-white/10">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="bg-[#0A1929] py-16 md:py-24 border-b border-[#1E88E5]/20 relative overflow-hidden">
                {/* Subtle Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E5A8E]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5DADE2]/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-snug">
                        Construction & Estate Guarding <br className="hidden md:block" /> keeping Your assets and property <span className="text-[#5DADE2]">Safe</span>
                    </h2>
                </div>
            </section>

            {/* Service Description Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-[#0A1929] text-xl font-light leading-relaxed mb-10">
                        At Zarkoon Security, we understand that construction sites and residential estates are high-value targets for theft and vandalism. Our specialized guarding services provide a robust physical deterrent, ensuring your assets, machinery, and property remain secure 24/7. From access control and perimeter patrols to out-of-hours monitoring, our SIA-licensed officers are trained to handle the unique challenges of the construction and real estate sectors.
                    </p>
                    <Link to="/contact-us">
                        <Button className="bg-[#1E5A8E] hover:bg-[#0A1929] text-white px-10 py-6 rounded-full font-bold text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-widest border-2 border-transparent hover:border-[#5DADE2]">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
