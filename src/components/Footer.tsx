import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#" className="text-2xl font-display font-bold gradient-text">TA.</a>
          <p className="text-slate-500 mt-2 text-sm">© {new Date().getFullYear()} Tayyab Ali. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/tayyab-ali-670785385" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:ta514782@gmail.com" className="hover:text-emerald-400 transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://wa.me/923480639755" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
            <MessageSquare size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
