import { motion } from "motion/react";
import { ExternalLink, Github, Calculator, BarChart3, Brain, Database, FunctionSquare } from "lucide-react";

interface ProjectCardProps {
  project: any;
  index: number;
  key?: any;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="group relative rounded-3xl overflow-hidden glass border border-white/5"
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
    </div>
    
    <div className="p-8 relative">
      <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
        {project.icon}
      </div>
      <h4 className="text-2xl font-display font-bold mb-3 text-slate-100">{project.title}</h4>
      <p className="text-slate-400 mb-6 text-sm leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400 border border-white/10">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
          <Github size={18} /> Code
        </a>
        <a href="#" className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
          <ExternalLink size={18} /> Demo
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "AI Scientific Calculator",
      description: "A smart calculator that uses NLP to solve complex mathematical expressions and provides step-by-step solutions.",
      image: "https://picsum.photos/seed/calc/600/400",
      icon: <Calculator size={24} />,
      tags: ["Python", "NLP", "Math"],
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard built with Python and Streamlit for visualizing complex datasets and business intelligence metrics.",
      image: "https://picsum.photos/seed/dashboard/600/400",
      icon: <BarChart3 size={24} />,
      tags: ["Python", "Pandas", "Streamlit"],
    },
    {
      title: "ML Predictive Models",
      description: "A collection of machine learning models for predicting market trends and analyzing statistical probabilities.",
      image: "https://picsum.photos/seed/ml/600/400",
      icon: <Brain size={24} />,
      tags: ["Scikit-Learn", "Python", "Statistics"],
    },
    {
      title: "Actuarial Analysis Tool",
      description: "Specialized tool for actuarial science, focusing on risk assessment and statistical modeling for insurance data.",
      image: "https://picsum.photos/seed/actuary/600/400",
      icon: <FunctionSquare size={24} />,
      tags: ["MATLAB", "Statistics", "Risk"],
    },
    {
      title: "Deep Learning Vision",
      description: "Computer vision project utilizing convolutional neural networks for image classification and pattern recognition.",
      image: "https://picsum.photos/seed/vision/600/400",
      icon: <Database size={24} />,
      tags: ["TensorFlow", "Keras", "AI"],
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Featured <span className="gradient-text">Projects</span></h3>
          </div>
          <p className="text-slate-400 max-w-md">
            A selection of my work combining mathematical theory with practical programming implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
