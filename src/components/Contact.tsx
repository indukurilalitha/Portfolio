import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'lalithav025@gmail.com',
      link: 'mailto:lalithav025@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 8522854585',
      link: 'tel:+918522854585',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://linkedin.com/in/lalitha-devi-552a6426b',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'View GitHub Profile',
      link: 'https://github.com/indukurilalitha',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Hyderabad (Open to Relocation)',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-blue-200">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a tech conversation.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all hover:scale-105">
              {item.link ? (
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="p-3 bg-white/20 rounded-lg">{item.icon}</div>
                  <div>
                    <p className="text-sm text-blue-100 mb-1">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-white/20 rounded-lg">{item.icon}</div>
                  <div>
                    <p className="text-sm text-blue-100 mb-1">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:lalithav025@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg font-semibold"
          >
            <Send size={20} />
            Send me an Email
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-blue-100">
            Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="text-blue-200 font-semibold mt-2">
            © 2025 Lalitha Devi Indukuri. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
