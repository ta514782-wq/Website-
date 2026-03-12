import { motion } from "motion/react";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay: number;
  key?: any;
}

const SkillBar = ({ name, percentage, delay }: SkillBarProps) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-slate-300 font-medium">{name}</span>
      <span className="text-emerald-400 font-bold">{percentage}%</span>
    </div>
    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
      />
    </div>
  </div>
);

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 75 },
        { name: "MATLAB", level: 80 },
      ],
    },
    {
      title: "Mathematics",
      skills: [
        { name: "Linear Algebra", level: 95 },
        { name: "Probability Theory", level: 85 },
        { name: "Calculus", level: 90 },
        { name: "Statistics", level: 88 },
      ],
    },
    {
      title: "AI & Data",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Generative AI", level: 80 },
        { name: "Data Visualization", level: 90 },
        { name: "Deep Learning", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4"
          >
            My Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Skills & <span className="gradient-text">Competencies</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.2 }}
              className="p-8 rounded-3xl glass border border-white/5"
            >
              <h4 className="text-2xl font-display font-bold mb-8 text-slate-100">{group.title}</h4>
              {group.skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.level}
                  delay={groupIndex * 0.2 + index * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
