import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              Associate Software Engineer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Lalitha Devi <span className="text-blue-600">Indukuri</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Building robust backend solutions with Java, Python & Cloud Technologies
          </p>

          <p className="text-lg text-gray-500 mb-8 flex items-center justify-center gap-2">
            <MapPin size={20} className="text-blue-600" />
            Hyderabad | Open to Relocation
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href="mailto:lalithav025@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              Get in Touch
            </a>
            <a
              href="https://github.com/indukurilalitha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all hover:scale-105 shadow-lg"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/lalitha-devi-552a6426b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/indukurilalitha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="mailto:lalithav025@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        <div className="mt-20 animate-bounce">
          <a href="#about" className="inline-block text-gray-400 hover:text-blue-600 transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
