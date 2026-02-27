import logoImage from "figma:asset/c13cca16d7f41b2233e632ec5f799ebb98dc1e40.png";
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      {/* Top Row - Official Zarkoon Logo Centered */}
      <div className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <img 
            src={logoImage} 
            alt="Zarkoon Security Services" 
            className="h-24 w-auto"
          />
        </div>
      </div>

      {/* Second Row - Navigation Menu (Clearly Below Logo) */}
      <nav className="bg-gradient-to-r from-gray-100 to-gray-50 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-0">
            <a 
              href="#home" 
              className="bg-[#1E5A8E] text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#163D5E] transition-all duration-300"
            >
              Home
            </a>
            <a 
              href="#services" 
              className="text-[#2C3E50] px-8 py-4 text-sm font-medium tracking-wide hover:bg-white transition-all duration-300 flex items-center gap-1.5"
            >
              Services <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a 
              href="#sectors" 
              className="text-[#2C3E50] px-8 py-4 text-sm font-medium tracking-wide hover:bg-white transition-all duration-300 flex items-center gap-1.5"
            >
              Sectors <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a 
              href="#accreditations" 
              className="text-[#2C3E50] px-8 py-4 text-sm font-medium tracking-wide hover:bg-white transition-all duration-300"
            >
              Accreditations
            </a>
            <a 
              href="#about" 
              className="text-[#2C3E50] px-8 py-4 text-sm font-medium tracking-wide hover:bg-white transition-all duration-300"
            >
              About Us
            </a>
            <a 
              href="#gallery" 
              className="text-[#2C3E50] px-8 py-4 text-sm font-medium tracking-wide hover:bg-white transition-all duration-300"
            >
              Gallery
            </a>
            <a 
              href="#career" 
              className="text-[#2C3E50] px-8 py-4 text-sm font-medium tracking-wide hover:bg-white transition-all duration-300 flex items-center gap-1.5"
            >
              Career <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a 
              href="#contact" 
              className="text-[#2C3E50] px-8 py-4 text-sm font-medium tracking-wide hover:bg-white transition-all duration-300"
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
