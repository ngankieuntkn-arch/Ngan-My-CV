import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="bg-navy-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:ngankieu.ntkn@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email me at</p>
                  <p className="font-medium">ngankieu.ntkn@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Call me</p>
                  <p className="font-medium">0972927137</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="font-medium">Thuan An, Binh Duong</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-8">Quick Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              ></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/20">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2026 Nguyen Thi Kieu Ngan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
