import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Shield, Calendar, Music, Building2, CheckCircle, Info } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";

const heroImage = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHNlY3VyaXR5JTIwY29uY2VydHxlbnwxfHx8fDE3NzI3ODQzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function EventSecurity() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        postCode: "",
        service: "",
        address: "",
        message: "",
    });

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^[0-9+]*$/.test(value)) {
            setFormData({ ...formData, phone: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Quote requested:", formData);
        alert("Thank you for your Event Security request! We will provide a quote shortly.");
        setFormData({ name: "", email: "", phone: "", postCode: "", service: "", address: "", message: "" });
    };

    const services = [
        {
            title: "Festival Security",
            description: "Crowd management and site protection for large-scale outdoor festivals and cultural events.",
            icon: Music,
        },
        {
            title: "Corporate Event Security",
            description: "Discreet and professional security for high-profile business gatherings and conferences.",
            icon: Building2,
        },
        {
            title: "Music Festival Security",
            description: "Specialized safety protocols for concerts and tours, ensuring performer and fan safety.",
            icon: Calendar,
        }
    ];

    return (
        <div className="min-h-screen font-['Outfit'] bg-white">
            {/* Unique Hero Banner */}
            <section
                className="relative h-[550px] flex items-center justify-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-[#0A1929]/80 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center px-6">
                    <p className="text-[#5DADE2] text-sm font-bold uppercase tracking-[0.4em] mb-6">Expert Event Protection</p>
                    <h1 className="text-white text-6xl md:text-8xl font-bold mb-8 tracking-tighter">
                        Event <span className="text-[#5DADE2]">Security</span>
                    </h1>
                    <p className="text-gray-300 text-xl max-w-2xl mx-auto font-light mb-12 leading-relaxed">
                        Setting the standard for safe, professionally managed events across the UK. Protecting your vision, your guests, and your peace of mind.
                    </p>
                    <Link to="/contact-us">
                        <Button className="bg-[#1E5A8E] hover:bg-[#5DADE2] text-white px-12 py-7 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 uppercase tracking-widest border-2 border-white/10">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Service Overview - Unique Grid Layout */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
                    {services.map((service, idx) => (
                        <div key={idx} className="group p-12 bg-[#F4F8FB] rounded-[50px] border-2 border-transparent hover:border-[#5DADE2]/30 transition-all duration-500 hover:shadow-2xl">
                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-[#1E5A8E] transition-colors duration-500">
                                <service.icon className="w-10 h-10 text-[#1E5A8E] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-[#0A1929] text-3xl font-bold mb-6">{service.title}</h3>
                            <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <Link to="/contact-us" className="text-[#1E5A8E] text-lg font-bold flex items-center gap-3 group-hover:gap-5 transition-all duration-300">
                                Get Started <CheckCircle className="w-5 h-5" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Transition Block: How much does security cost? */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                    <div className="lg:col-span-6">
                        <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-4 border-[#1E5A8E]/10">
                            <img
                                src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxldmVudCUyMHNlY3VyaXR5JTIwY3Jvd2R9ZW58MXx8fHwxNzc1NjM5MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Event Security Crowd"
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] to-transparent opacity-60"></div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 bg-[#0A1929] p-16 rounded-[60px] text-white shadow-3xl border border-[#1E88E5]/20 transform lg:-translate-x-12 relative z-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-[#1E5A8E] rounded-2xl">
                                <Info className="w-8 h-8 text-[#5DADE2]" />
                            </div>
                            <h2 className="text-4xl font-bold leading-tight">How much does security <br /><span className="text-[#5DADE2]">cost for a festival?</span></h2>
                        </div>
                        <p className="text-gray-300 text-lg font-light leading-relaxed mb-10">
                            Event security pricing is dynamic and depends heavily on the risk profile of your gathering. Factors include crowd size, high-profile attendance, alcoholic beverage availability, and the duration of the event. At Zarkoon, we provide transparent, competitive rates based on SIA-licensed personnel requirements.
                        </p>
                        <div className="space-y-6">
                            {[
                                "Custom Risk Assessments",
                                "SIA Licensed Stewarding",
                                "Emergency Response Teams",
                                "Transparent Hourly Rates"
                            ].map((point, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-2 h-2 bg-[#5DADE2] rounded-full group-hover:scale-150 transition-transform"></div>
                                    <span className="text-gray-200 font-medium tracking-wide">{point}</span>
                                </div>
                            ))}
                        </div>
                        <Link to="/contact-us" className="mt-12 inline-block">
                            <Button className="bg-[#5DADE2] text-[#0A1929] hover:bg-white px-10 py-5 rounded-2xl font-black uppercase tracking-tighter transition-all">
                                Request Precise Pricing
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Form & Specific Info Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                    {/* Left: Content Block */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="bg-[#F4F8FB] p-16 rounded-[60px] border border-gray-100 shadow-xl">
                            <h2 className="text-[#0A1929] text-4xl font-bold mb-8">Securing the Moment</h2>
                            <p className="text-gray-600 font-light leading-relaxed mb-10 text-xl">
                                Managing event security requires more than just physical presence. It demands advanced crowd dynamics analysis, risk assessment at every entry point, and seamless communication.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-[#1E5A8E] rounded-xl flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-[#0A1929]">Entry Control</h4>
                                    <p className="text-gray-500">Strict ticket verification and prohibited items checks to maintain a controlled perimeter.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-[#1E5A8E] rounded-xl flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-[#0A1929]">Elite Stewarding</h4>
                                    <p className="text-gray-500">Friendly yet firm presence to guide your guests safely through the venue.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Enhanced Quote Form */}
                    <div className="lg:col-span-5 transform lg:-translate-y-20">
                        <div className="bg-[#0A1929] rounded-[60px] shadow-3xl overflow-hidden border-2 border-[#1E88E5]/40">
                            <div className="p-12 border-b border-[#1E88E5]/20 bg-gradient-to-br from-[#1E5A8E]/10 to-transparent">
                                <h3 className="text-white text-4xl font-bold mb-3 tracking-tighter">Get A Quote</h3>
                                <div className="w-16 h-1.5 bg-[#5DADE2] rounded-full"></div>
                                <p className="text-gray-400 text-sm mt-4 font-light uppercase tracking-widest">Rapid response within 1 hour</p>
                            </div>
                            <form onSubmit={handleSubmit} className="p-12 space-y-8">
                                <div className="space-y-3">
                                    <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Full Name</label>
                                    <Input
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        placeholder="E.g. John Doe"
                                        className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] text-lg rounded-2xl"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Email</label>
                                        <Input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            placeholder="john@example.com"
                                            className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] rounded-2xl"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Phone</label>
                                        <Input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                            required
                                            placeholder="+44"
                                            className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Post Code</label>
                                        <Input
                                            type="number"
                                            value={formData.postCode}
                                            onChange={(e) => setFormData({ ...formData, postCode: e.target.value })}
                                            required
                                            placeholder="XXXXX"
                                            className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] rounded-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-auto [&::-webkit-inner-spin-button]:appearance-auto"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Select</label>
                                        <Select
                                            value={formData.service}
                                            onValueChange={(value) => setFormData({ ...formData, service: value })}
                                        >
                                            <SelectTrigger className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] text-base rounded-2xl">
                                                <SelectValue placeholder="Security Selection" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white border-gray-200">
                                                <SelectItem value="manned-guarding">Manned Guarding</SelectItem>
                                                <SelectItem value="cctv-monitoring">CCTV Monitoring</SelectItem>
                                                <SelectItem value="door-supervision">Door Supervision</SelectItem>
                                                <SelectItem value="mobile-patrols">Mobile Patrols</SelectItem>
                                                <SelectItem value="dog-handlers">Dog Handlers</SelectItem>
                                                <SelectItem value="concierge-security">Concierge Security</SelectItem>
                                                <SelectItem value="key-holding">Key Holding & Alarm Response Count</SelectItem>
                                                <SelectItem value="fire-marshal">Fire Marshal</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Site Address</label>
                                    <Input
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        required
                                        placeholder="Full Event Location"
                                        className="bg-white border-2 border-[#0A1929]/50 h-14 focus:border-[#5DADE2] text-[#0A1929] rounded-2xl"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-sm font-black text-[#5DADE2] uppercase tracking-widest">Message</label>
                                    <Textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        placeholder="Describe your event security needs..."
                                        className="bg-white border-2 border-[#0A1929]/50 focus:border-[#5DADE2] text-[#0A1929] min-h-[120px] rounded-2xl"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-[#1E5A8E] hover:bg-[#5DADE2] text-white h-16 rounded-2xl font-black text-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-2 uppercase tracking-widest border-b-4 border-black/20"
                                >
                                    Get A Quote
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

