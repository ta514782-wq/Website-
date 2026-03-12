import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-6 border border-emerald-500/20"
          >
            Available for new opportunities
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Hi, I'm <span className="gradient-text">Tayyab Ali</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-display text-slate-400 mb-8">
            AI & Mathematics Enthusiast
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
            Bridging the gap between complex mathematics and cutting-edge artificial intelligence to build the next generation of intelligent systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold flex items-center gap-2 hover:bg-emerald-400 transition-colors"
            >
              Contact Me <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl glass font-bold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              View Projects
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-slate-500">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tayyab-ali-670785385" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ta514782@gmail.com" className="hover:text-emerald-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://wa.me/923480639755" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              <MessageSquare size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-white/10 glass p-4">
            <img
              src="https://picsum.photos/seed/ai-tech/800/800"
              alt="AI Visualization"
              className="w-full h-full object-cover rounded-2xl opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl border border-emerald-500/30 z-20"
          >
            <div className="text-emerald-400 font-bold text-xl">3rd Sem</div>
            <div className="text-slate-400 text-xs uppercase tracking-wider">Post ADP Math</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl border border-blue-500/30 z-20"
          >
            <div className="text-blue-400 font-bold text-xl">ML & AI</div>
            <div className="text-slate-400 text-xs uppercase tracking-wider">Specialization</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
