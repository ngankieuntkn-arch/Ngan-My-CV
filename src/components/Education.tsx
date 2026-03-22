import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-20 bg-slate-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-600 text-white rounded-lg">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-bold text-navy-900">Education</h2>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-navy-900 leading-tight">
              HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY AND EDUCATION
            </h3>
            <p className="text-blue-600 font-medium mt-2">Logistics and Supply Chain Management</p>
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-50">
              <span className="text-slate-500 text-sm">August 2018 - August 2022</span>
              <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
                GPA: 3.3/4
              </span>
            </div>
          </div>
        </motion.div>

        {/* Certifications & Honors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-navy-900 text-white rounded-lg">
              <Award size={24} />
            </div>
            <h2 className="text-3xl font-bold text-navy-900">Certifications & Honors</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <Award className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy-900">TOEIC Certificate - Score 840</h4>
                <p className="text-slate-500 text-sm">IIG Vietnam | June 2023</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                <Award className="text-emerald-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy-900">Academic Scholarship</h4>
                <p className="text-slate-500 text-sm">1st Semester 2018-2019</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
