import { Code, Database, Cloud, Wrench, Brain, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'C', 'SQL'],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Databases',
      skills: ['MySQL', 'SQL (Relational Database Design)'],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, IAM)', 'Docker', 'Kubernetes (Minikube)'],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Google Colab', 'ChatGPT', 'Claude', 'GitHub Copilot'],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Software Engineering',
      skills: ['Object-Oriented Programming', 'SDLC', 'Debugging', 'Unit Testing', 'Version Control', 'Data Structures'],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI & ML Exposure',
      skills: ['Introductory Machine Learning', 'NLP Basics', 'Generative AI', 'Prompt Engineering', 'Vibe Coding'],
    },
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner',
    'Introduction to Cybersecurity - Cisco',
    'AI for Everyone - Coursera',
    'Generative AI Mastermind - Outskill',
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Equipped with foundational and emerging technologies, ready to learn and grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-blue-600 mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
