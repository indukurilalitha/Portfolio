import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & <span className="text-blue-600">Education</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600 rounded-lg text-white">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Intel Unnati Industrial Training Program
                    </h3>
                    <p className="text-blue-600 font-medium">Internship</p>
                  </div>
                  <span className="text-gray-500 font-medium">2024</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Gained hands-on exposure to <strong>Public Key Infrastructure (PKI)</strong> and digital certificate management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Generated RSA private keys, Certificate Signing Requests (CSRs), and self-signed certificates using <strong>OpenSSL</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Implemented <strong>SHA-384 hashing</strong> for certificate signing and verification workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Collaborated with peers to understand secure systems and applied <strong>cybersecurity best practices</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-600 rounded-lg text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      B.Tech in Computer Science Engineering (Cyber Security)
                    </h3>
                    <p className="text-teal-600 font-medium">GITAM University</p>
                  </div>
                  <span className="text-gray-500 font-medium">Dec 2025</span>
                </div>
                <div className="text-gray-700">
                  <p className="text-lg">
                    <strong>CGPA:</strong> <span className="text-teal-600 font-bold">8.02</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-700 rounded-lg text-white">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Leadership & Activities
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Executive Board Member</strong>, Entrepreneurship Club</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>College Ambassador</strong>, Institution's Innovation Council (IIC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Organized and supported technical and non-technical student events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
