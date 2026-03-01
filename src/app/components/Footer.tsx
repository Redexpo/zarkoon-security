import logoImage from "../../assets/c13cca16d7f41b2233e632ec5f799ebb98dc1e40.png";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A1929] to-[#050F1A] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src={logoImage} 
                alt="Zarkoon Security Services" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
              When it comes to protecting what matters most, trust Zarkoon Security Services for all your security needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#5DADE2] flex-shrink-0 mt-1" />
                <div className="text-sm font-light">
                  <p className="font-semibold text-white">07444470509</p>
                  <p className="text-gray-400">07490612005</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#5DADE2] flex-shrink-0 mt-1" />
                <p className="text-sm font-light text-gray-400">info@zarkoonsecurity.co.uk</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#5DADE2] flex-shrink-0 mt-1" />
                <p className="text-sm font-light text-gray-400">Holloway Road, Hayes, UB3 3JT</p>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide border-b border-[#1E5A8E] pb-3">Our Services</h3>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li><a href="#" className="hover:text-[#5DADE2] transition-colors hover:pl-2 inline-block transition-all duration-300">Manned Guarding</a></li>
              <li><a href="#" className="hover:text-[#5DADE2] transition-colors hover:pl-2 inline-block transition-all duration-300">Event Security</a></li>
              <li><a href="#" className="hover:text-[#5DADE2] transition-colors hover:pl-2 inline-block transition-all duration-300">CCTV & Alarm Response</a></li>
              <li><a href="#" className="hover:text-[#5DADE2] transition-colors hover:pl-2 inline-block transition-all duration-300">Security Reception</a></li>
              <li><a href="#" className="hover:text-[#5DADE2] transition-colors hover:pl-2 inline-block transition-all duration-300">Mobile Patrols</a></li>
            </ul>
          </div>

          {/* Our Sectors */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide border-b border-[#1E5A8E] pb-3">Our Sectors</h3>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li><a href="#" className="hover:text-[#5DADE2] transition-colors hover:pl-2 inline-block transition-all duration-300">Construction & Estate Guarding</a></li>
              <li><a href="#" className="hover:text-[#5DADE2] transition-colors hover:pl-2 inline-block transition-all duration-300">Events & Festivals</a></li>
              <li><a href="#" className="hover:text-[#5DADE2] transition-colors hover:pl-2 inline-block transition-all duration-300">Retail</a></li>
              <li><a href="#" className="hover:text-[#5DADE2] transition-colors hover:pl-2 inline-block transition-all duration-300">Facilities</a></li>
              <li><a href="#" className="hover:text-[#5DADE2] transition-colors hover:pl-2 inline-block transition-all duration-300">Corporate</a></li>
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide border-b border-[#1E5A8E] pb-3">Connect With Us</h3>
            <p className="text-sm font-light text-gray-400 mb-6">
              SIA License Key-Issue Report 2025 - 2029
            </p>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 bg-[#1E5A8E] rounded-lg flex items-center justify-center hover:bg-[#5DADE2] transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1E5A8E] rounded-lg flex items-center justify-center hover:bg-[#5DADE2] transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1E5A8E] rounded-lg flex items-center justify-center hover:bg-[#5DADE2] transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1E5A8E] rounded-lg flex items-center justify-center hover:bg-[#5DADE2] transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-light text-gray-500">
              © 2025 ZARKOON SECURITY SERVICES LIMITED. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm font-light text-gray-500">
              <a href="#" className="hover:text-[#5DADE2] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#5DADE2] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#5DADE2] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
