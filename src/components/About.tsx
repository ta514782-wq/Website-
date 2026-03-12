import { motion } from "motion/react";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 glass relative z-10">
              <img
                src="https://picsum.photos/seed/mathematics/800/600"
                alt="Mathematics and AI"
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-3xl font-display font-bold mb-4">Mathematics + Programming</h3>
                  <p className="text-slate-300">The perfect formula for intelligent systems.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">About Me</h2>
            <h3 className="text-4xl font-display font-bold mb-8">Passionate Student & Aspiring Data Scientist</h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              I am Tayyab Ali, a dedicated mathematics student currently in my 3rd semester of Post ADP at the 
              <span className="text-slate-200"> Mathematics Department – CASPAM, Bahauddin Zakariya University Multan</span>.
            </p>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              My journey is fueled by a deep interest in Machine Learning, Generative AI, Deep Learning, and Business Intelligence. 
              I believe that the foundation of AI lies in mathematics, and I strive to combine these two worlds to build 
              analytical tools and data-driven solutions that solve real-world problems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl glass border border-white/5">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">Education</h4>
                  <p className="text-sm text-slate-400">Post ADP Mathematics</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl glass border border-white/5">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">Location</h4>
                  <p className="text-sm text-slate-400">Multan, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
