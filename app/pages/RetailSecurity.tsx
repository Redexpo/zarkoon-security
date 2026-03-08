import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ChevronRight } from "lucide-react";
import sideImageLarge from "../../assets/25e965_2f72110096454ad6ab8d1f9df53a99a2~mv2.avif";

// Placeholders based on reference
const heroImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1920"; // Retail interior
const sideImageSmall = "https://images.unsplash.com/photo-1514782831304-632d84503f6f?auto=format&fit=crop&q=80&w=600"; // Officers interacting

export function RetailSecurity() {

    return (
        <div className="min-h-screen font-['Outfit'] bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Retail Security Services Hero"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-[#0A1929]/75 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center px-6 max-w-4xl mt-16">
                    <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
                        Retail Security <br className="hidden md:block" /> Services
                    </h1>

                    {/* Breadcrumbs */}
                    <div className="flex items-center justify-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-widest font-bold mb-10">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-white/50" />
                        <span className="text-white/80">Sectors</span>
                        <ChevronRight className="w-4 h-4 text-white/50" />
                        <span className="text-white">Retail Security</span>
                    </div>

                    <Link to="/contact-us">
                        <Button className="bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-12 py-7 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 uppercase tracking-widest border-2 border-white/10">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Service Description Section */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-[#0A1929] text-xl md:text-2xl font-light leading-relaxed">
                        Zarkoon Security provides bespoke retail security solutions designed to minimize stock loss and ensure a safe shopping environment. Our SIA-licensed retail officers are experts in loss prevention, conflict management, and civil recovery, protecting your brand's reputation while providing a welcoming presence for your customers.
                    </p>
                </div>
            </section>

            {/* Visual Split Block Section (Overlapping Images) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Overlapping Images */}
                        <div className="relative h-[500px] md:h-[600px] w-full">
                            {/* Main large image */}
                            <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-lg overflow-hidden shadow-2xl z-10">
                                <img
                                    src={sideImageLarge}
                                    alt="Retail Security Guard"
                                    className="w-full h-full object-cover brightness-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-[#0A1929]/20 to-transparent opacity-80"></div>
                            </div>
                            {/* Smaller overlapping image bottom left */}
                            <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-white p-2 md:p-4 rounded-lg shadow-xl z-20">
                                <div className="w-full h-full rounded overflow-hidden">
                                    <img
                                        src={sideImageSmall}
                                        alt="Security Interaction"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right: Text Block */}
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="inline-block bg-[#5DADE2] text-white text-sm font-black uppercase tracking-widest px-4 py-1.5 rounded-sm w-max mb-2">
                                SECURITY
                            </div>
                            <h2 className="text-[#0A1929] text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]">
                                Retail Security <br />
                                Guarding
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Paragraph Section */}
            <section className="py-20 pb-28 bg-white">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p
                        className="text-[#1a1a2e] text-xl md:text-2xl font-light leading-relaxed mb-10"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        Zarkoon Security offers specialized retail protection services designed to mitigate risks and prevent stock loss. Our SIA-licensed retail security officers provide a professional and welcoming presence, ensuring a safe shopping experience for your customers while actively deterring theft and anti-social behavior.
                    </p>
                    <Link to="/contact-us">
                        <Button
                            className="bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-12 py-6 rounded-full font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-widest border-2 border-white/10"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </section>

        </div>
    );
}
