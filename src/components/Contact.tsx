import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Let's <span className="gradient-text">Connect</span></h3>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
              Have a project in mind or just want to discuss mathematics and AI? 
              Feel free to reach out through any of the platforms below.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:ta514782@gmail.com"
                className="flex items-center gap-6 p-6 rounded-2xl glass border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">Email Me</h4>
                  <p className="text-slate-400">ta514782@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/923480639755"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 p-6 rounded-2xl glass border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="p-4 rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-slate-950 transition-colors">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">WhatsApp</h4>
                  <p className="text-slate-400">03480639755</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/tayyab-ali-670785385"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 p-6 rounded-2xl glass border border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className="p-4 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-slate-950 transition-colors">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">LinkedIn</h4>
                  <p className="text-slate-400">Tayyab Ali</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 md:p-12 rounded-3xl glass border border-white/5"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-colors text-slate-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-colors text-slate-200"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-colors text-slate-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-colors text-slate-200 resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
