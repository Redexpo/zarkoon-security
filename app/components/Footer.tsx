import logoImage from "figma:asset/c13cca16d7f41b2233e632ec5f799ebb98dc1e40.png";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/zarkoon-security-limited" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/zarkoonsecurity" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/zarkoonsecurity" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0A1929] to-[#050F1A] text-white py-20 font-['Outfit']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300">
                <img
                  src={logoImage}
                  alt="Zarkoon Security Limited"
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
              When it comes to protecting your business and ensuring peace of mind, look no further than Zarkoon Security Limited.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide border-b border-[#1E5A8E] pb-3 uppercase">Our Services</h3>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li><Link to="/manned-guarding" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Manned Guarding</Link></li>
              <li><Link to="/event-security" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Event Security</Link></li>
              <li><Link to="/key-holding" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Key Holding &amp; Alarm Response</Link></li>
              <li><Link to="/security-reception" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Security Reception</Link></li>
              <li><Link to="/mobile-patrols" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Mobile Patrols</Link></li>
            </ul>
          </div>

          {/* Our Sectors */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide border-b border-[#1E5A8E] pb-3 uppercase">Our Sectors</h3>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li><Link to="/construction-guarding" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Construction &amp; Estate Guarding</Link></li>
              <li><Link to="/events-festivals" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Events &amp; Festivals</Link></li>
              <li><Link to="/retail-security" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Retail Security</Link></li>
              <li><Link to="/accreditations" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Accreditations</Link></li>
              <li><Link to="/policies" className="hover:text-[#5DADE2] hover:pl-2 inline-block transition-all duration-300">Policies</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide border-b border-[#1E5A8E] pb-3 uppercase">Contact</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 text-[#5DADE2] flex-shrink-0 mt-1 transition-transform group-hover:scale-110" />
                <div className="text-sm font-light">
                  <p className="text-gray-400">Phone: <a href="tel:+447466493229" className="hover:text-[#5DADE2] transition-colors font-medium">07466493229</a></p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 text-[#5DADE2] flex-shrink-0 mt-1 transition-transform group-hover:scale-110" />
                <div className="text-sm font-light">
                  <p className="text-gray-400">Email: <a href="mailto:info@zarkoonsecurity.co.uk" className="hover:text-[#5DADE2] transition-colors font-medium">info@zarkoonsecurity.co.uk</a></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#5DADE2] flex-shrink-0 mt-1" />
                <p className="text-sm font-light text-gray-400">Address: Halsway Road, Hayes, UB3 3JT</p>
              </div>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#FDFDFF] text-[#0A1929] rounded-xl flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#FDFDFF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_15px_-3px_rgba(212,175,55,0.4)] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] group"
                  aria-label={`Follow us on ${social.name} | Zarkoon Security Limited`}
                >
                  <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-sm font-light text-gray-500">
              Copyrights @ 2025. ZARKOON SECURITY LIMITED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
