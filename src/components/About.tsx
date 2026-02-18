import { Code2, Database, Cloud, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Tech Skills',
      description: 'Java, Python, React, SQL & Cloud fundamentals',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Soft Skills',
      description: 'Communication, teamwork, analytical thinking',
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'AI Tools',
      description: 'ChatGPT, Claude, GitHub Copilot proficiency',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Quick Learner',
      description: 'Adaptable to new technologies',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm an <span className="font-semibold text-blue-600">Associate Software Engineer</span> with a passion for creating
              robust and scalable backend solutions. My journey in technology has been driven by curiosity and
              a commitment to continuous learning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With hands-on experience in designing, developing, testing, and deploying software applications,
              I bring a comprehensive understanding of the <span className="font-semibold">Software Development Life Cycle</span>.
              My technical expertise spans across Java, Python, database design, and cloud fundamentals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I combine strong technical skills with excellent soft skills like communication and collaboration. I leverage
              <span className="font-semibold"> AI tools</span> like ChatGPT and Claude to enhance productivity and solve complex problems efficiently.
              I'm a <span className="font-semibold text-blue-600">quick learner</span> with strong analytical thinking and thrive in
              collaborative environments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond coding, I actively contribute to the tech community as an <span className="font-semibold">Executive Board Member</span> of
              the Entrepreneurship Club and <span className="font-semibold">College Ambassador</span> for the Institution's Innovation Council.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="text-blue-600 mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
