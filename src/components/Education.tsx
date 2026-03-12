import { motion } from "motion/react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Post ADP Mathematics",
      institution: "Bahauddin Zakariya University, Multan",
      department: "Mathematics Department – CASPAM",
      period: "2024 - Present",
      status: "3rd Semester",
      description: "Focusing on advanced mathematical modeling, linear algebra, and statistical theory.",
    },
    {
      degree: "Associate Degree Program (ADP)",
      institution: "Bahauddin Zakariya University, Multan",
      department: "Mathematics & Physics",
      period: "2022 - 2024",
      status: "Completed",
      description: "Foundational studies in pure and applied mathematics with a focus on problem-solving.",
    },
  ];

  return (
    <section id="education" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">Academic Journey</h2>
          <h3 className="text-4xl font-display font-bold">Education <span className="gradient-text">Background</span></h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0 border-l border-white/10"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950" />
              
              <div className="p-8 rounded-3xl glass border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-display font-bold text-slate-100 mb-1">{item.degree}</h4>
                    <p className="text-emerald-400 font-medium">{item.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-xs font-bold text-slate-400 border border-white/10">
                    <Calendar size={14} /> {item.period}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-slate-300 mb-4">
                  <Award size={18} className="text-blue-400" />
                  <span className="text-sm font-semibold uppercase tracking-wider">{item.status}</span>
                </div>
                
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                  <GraduationCap size={16} />
                  <span>{item.department}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
