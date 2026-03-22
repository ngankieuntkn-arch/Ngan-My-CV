import { motion } from "motion/react";
import { CheckCircle2, Globe, Laptop, BarChart3, Users } from "lucide-react";

const skillCategories = [
  {
    title: "English",
    icon: <Globe className="text-blue-600" />,
    skills: ["Fluent in Writing", "Speaking quite well", "TOEIC 840"]
  },
  {
    title: "Microsoft Office",
    icon: <Laptop className="text-blue-600" />,
    skills: ["Proficient in Excel", "Word", "PowerPoint"]
  },
  {
    title: "Data & Analysis",
    icon: <BarChart3 className="text-blue-600" />,
    skills: ["Power BI (Basic)", "Self-learning", "Data Management"]
  },
  {
    title: "Soft Skills",
    icon: <Users className="text-blue-600" />,
    skills: ["Communication", "Supplier Coordination", "Problem Solving"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-900">Professional Skills</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-blue-50 w-fit rounded-lg">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-slate-600 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
