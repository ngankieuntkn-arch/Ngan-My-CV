import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "IMPORT - EXPORT OFFICER",
    company: "FINECS VIETNAM CO., LTD",
    period: "October 2022 - Present",
    responsibilities: [
      "Receive purchasing requests from Production Department and contact Suppliers for quotations.",
      "Create Purchase Orders and submit to Director for approval.",
      "Manage import documentation from FWDs/suppliers and coordinate with customs declaration department.",
      "Coordinate with forwarders to secure bookings and arrange shipment insurance.",
      "Prepare documents for export clearance and monitor delivery schedules.",
      "Check debit notes from forwarders and insurance parties for payment processing.",
      "Maintain and track comprehensive import/export shipment data."
    ]
  },
  {
    title: "LOGISTICS INTERN",
    company: "AVERY DENNISON RIS VIETNAM CO., LTD",
    period: "March 2022 - August 2022",
    responsibilities: [
      "Prepared documentation for local export clearance.",
      "Collaborated with Sales and CS to analyze shipment schedules and document requirements.",
      "Resolved customs clearance and delivery issues with customers.",
      "Managed import documents from forwarders for customs procedures.",
      "Prepared tax payment documentation for the State Budget."
    ]
  },
  {
    title: "PLANNING INTERN",
    company: "DELTA GALIL VIETNAM CO., LTD",
    period: "November 2021 - December 2021",
    responsibilities: [
      "Supported daily output reporting for knitting, dyeing, and sewing stages.",
      "Verified practical output against established production plans.",
      "Created detailed information forms (GCOC, QA File) for related departments."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-navy-900 text-white rounded-lg">
            <Briefcase size={24} />
          </div>
          <h2 className="text-3xl font-bold text-navy-900">Work Experience</h2>
        </div>

        <div className="space-y-12 border-l-2 border-slate-100 ml-6 pl-10 relative">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[51px] top-1.5 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
              
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-navy-900">{exp.title}</h3>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-navy-700 font-semibold mb-6">{exp.company}</p>
                
                <ul className="space-y-3">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
