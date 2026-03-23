import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Placeholders based on reference
const heroImage = "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1920"; // Concert/Festival
const sideImageLarge = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1080"; // Event security back
const sideImageSmall = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600"; // People at event

export function EventsFestivals() {
    return (
        <div className="min-h-screen font-['Outfit'] bg-white">
            <Helmet>
                <title>Safe Events & Festival Security Solutions | Zarkoon Security Limited</title>
                <meta name="description" content="Comprehensive safety solutions and crowd management for events and festivals. Ensuring a safe, secure, and memorable experience for all attendees across the UK." />
            </Helmet>
            {/* Hero Section */}
            <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Events and Festivals Security Hero"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-[#0A1929]/75 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center px-6 max-w-4xl mt-16">
                    <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
                        Events & Festivals <br className="hidden md:block" /> Security
                    </h1>

                    {/* Breadcrumbs */}
                    <div className="flex items-center justify-center space-x-2 text-sm text-[#5DADE2] uppercase tracking-widest font-bold mb-10">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-white/50" />
                        <span className="text-white/80">Sectors</span>
                        <ChevronRight className="w-4 h-4 text-white/50" />
                        <span className="text-white">Events & Festivals</span>
                    </div>

                    <Link to="/contact-us">
                        <Button className="bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-12 py-7 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 uppercase tracking-widest border-2 border-white/10">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Service-Specific Paragraph Section */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-[#0A1929] text-xl md:text-2xl font-light leading-relaxed">
                        Zarkoon Security specializes in providing comprehensive safety solutions for events of all scales, from local festivals to major corporate gatherings. Our SIA-licensed team excels in crowd management, access control, and rapid emergency response, ensuring a safe and memorable experience for every attendee.
                    </p>
                </div>
            </section>

            {/* Visual Split Block Section (Replicating reference layout) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Overlapping Images */}
                        <div className="relative h-[500px] md:h-[600px] w-full">
                            {/* Main large image */}
                            <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-lg overflow-hidden shadow-2xl z-10">
                                <img
                                    src={sideImageLarge}
                                    alt="Security Guard at Event"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/80 to-transparent flex items-end justify-center pb-10">
                                    <h3 className="text-white text-5xl font-black tracking-widest uppercase">SECURITY</h3>
                                </div>
                            </div>
                            {/* Smaller overlapping image bottom left */}
                            <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-white p-2 md:p-4 rounded-lg shadow-xl z-20">
                                <div className="w-full h-full rounded overflow-hidden">
                                    <img
                                        src={sideImageSmall}
                                        alt="Event Attendees"
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
                                Event security and <br />
                                Festival Security <br />
                                Services Ensuring <br />
                                Safe and Memorable <br />
                                events
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
