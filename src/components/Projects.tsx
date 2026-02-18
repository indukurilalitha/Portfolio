import { Database, Brain, Container, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Student Course Enrollment System',
      period: 'Sept 2024 – Jan 2025',
      description: 'A comprehensive Java-based application for managing students, courses, and enrollments with secure database interactions.',
      technologies: ['Java', 'MySQL', 'JDBC'],
      highlights: [
        'Designed normalized relational database schema with many-to-many relationships',
        'Implemented CRUD operations using PreparedStatement for security',
        'Executed SQL JOIN queries for complex relational data retrieval',
        'Structured with layered architecture following SDLC practices',
      ],
      gradient: 'from-blue-500 to-teal-500',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Phishing Email Detection Using ML',
      period: '2026',
      description: 'Machine learning application to classify phishing and legitimate emails using advanced text processing and feature extraction.',
      technologies: ['Python', 'Machine Learning', 'NLP'],
      highlights: [
        'Performed text preprocessing and feature extraction',
        'Implemented classification models with iterative experimentation',
        'Improved model accuracy through systematic debugging',
        'Applied ML best practices for email security',
      ],
      gradient: 'from-teal-500 to-green-500',
    },
    {
      icon: <Container className="w-8 h-8" />,
      title: 'Flask Application Deployment',
      period: '2025',
      description: 'Modern web application deployment using containerization and orchestration technologies.',
      technologies: ['Flask', 'Docker', 'Kubernetes'],
      highlights: [
        'Designed modular Flask web application',
        'Containerized application using Docker best practices',
        'Deployed on Kubernetes (Minikube) cluster',
        'Practiced version control and basic CI/CD concepts',
      ],
      gradient: 'from-green-500 to-blue-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Real-world applications showcasing technical expertise and problem-solving skills
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <span className="text-gray-500 font-medium">{project.period}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/indukurilalitha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all hover:scale-105 shadow-lg"
          >
            <Github size={20} />
            View More Projects on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
