import { motion } from "motion/react";
import { Mail, Phone, MapPin, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-20 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 transform translate-x-1/2 z-0 hidden md:block" />
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl z-10"
      >
        <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Available for new opportunities</span>
        <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mt-4 leading-tight">
          NGUYEN THI <br /> KIEU NGAN
        </h1>
        <h2 className="text-2xl text-navy-700 font-medium mt-4">
          Purchasing Executive | Import - Export Specialist
        </h2>
        
        <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-lg">
          Detail-oriented and proactive professional with experience in purchasing and import/export operations. 
          Skilled in supplier coordination, document handling, and supply chain optimization.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a 
            href="mailto:ngankieu.ntkn@gmail.com"
            className="bg-navy-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-navy-900/20"
          >
            <Mail size={18} />
            Contact Me
          </a>
          <button 
            className="border-2 border-navy-900 text-navy-900 px-8 py-3 rounded-lg font-medium hover:bg-navy-50 transition-colors flex items-center gap-2"
          >
            <Download size={18} />
            Download CV
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-slate-500">
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-blue-600" />
            <span>0972927137</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-blue-600" />
            <span>Thuan An, Binh Duong</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 md:mt-0 z-10 relative"
      >
        <div className="absolute -inset-4 border-2 border-blue-100 rounded-2xl -z-10 transform rotate-3" />
        <img
          src="/profile.jpg"
          alt="Nguyen Thi Kieu Ngan"
          className="w-64 h-80 md:w-80 md:h-[450px] object-cover rounded-2xl shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
