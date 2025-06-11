import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-white to-[#F1F8E9] opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#1B1B1B] leading-tight">
                  Hi, I'm <span className="text-[#4CAF50]">Wesley Omoke</span>
                </h1>
                <p className="text-xl text-[#666666] leading-relaxed">
                  Aspiring Data Analyst passionate about uncovering insights and building impactful solutions.
                  Seeking an entry-level role to contribute to data-driven innovation.
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50] to-[#388E3C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-secondary group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E8F5E9] to-[#F1F8E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50] to-[#388E3C] rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative">
                <div className="w-72 h-72 mx-auto rounded-full overflow-hidden border-4 border-[#4CAF50] shadow-xl">
                  <Image
                    src="/images/Wes.jpg"
                    alt="Wesley Omoke"
                    width={288}
                    height={288}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-light py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-8 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[#666666] leading-relaxed">
                I am a passionate data analyst based in Nairobi, Kenya. I enjoy building web applications and learning new technologies.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="btn-primary"
                >
                  Get in Touch
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-secondary flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E8F5E9]">
                <h3 className="text-xl font-semibold text-[#4CAF50] mb-2">Location</h3>
                <p className="text-[#666666]">Nairobi, Kenya</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E8F5E9]">
                <h3 className="text-xl font-semibold text-[#4CAF50] mb-2">Languages</h3>
                <p className="text-[#666666]">English, Swahili</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-light py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-white to-[#F1F8E9] opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Excel */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                  <img src="/svg/excel-svgrepo-com.svg" alt="Excel" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Excel</h3>
                  <p className="text-[#666666]">Data analysis and spreadsheet management</p>
                </div>
              </div>
            </div>

            {/* SQL Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#336791] to-[#1B4B6F] rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg className="w-12 h-12 text-[#336791] mb-4 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">SQL</h3>
                <p className="text-[#666666]">Database Management</p>
              </div>
            </div>

            {/* Python */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                  <img src="/svg/python-svgrepo-com.svg" alt="Python" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Python</h3>
                  <p className="text-[#666666]">Data analysis and automation</p>
                </div>
              </div>
            </div>

            {/* Tableau */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                  <img src="/svg/tableau-svgrepo-com (1).svg" alt="Tableau" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Tableau</h3>
                  <p className="text-[#666666]">Data visualization and business intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="section-light py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-white to-[#F1F8E9] opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-12 text-center">
            Work Experience
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4CAF50] opacity-20"></div>
            
            <div className="space-y-12">
              {/* ICT Intern */}
              <div className="group relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4CAF50] border-4 border-white shadow-lg"></div>
                <div className="ml-8 md:ml-0 md:pl-16">
                  <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-[#1B1B1B]">ICT Intern</h3>
                        <p className="text-[#4CAF50] font-medium">Warehouse Receipt System Council</p>
                      </div>
                      <div className="text-[#666666]">
                        <p>May 2024 - Aug 2024</p>
                        <p>Nairobi, Kenya</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-[#666666]">
                      <li>Demonstrated technical skills and administrative abilities</li>
                      <li>Carried out maintenance research and prepared reports</li>
                      <li>Provided timely technical support and resolved queries</li>
                      <li>Actively participated in project development</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Loan Officer */}
              <div className="group relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4CAF50] border-4 border-white shadow-lg"></div>
                <div className="ml-8 md:ml-0 md:pl-16">
                  <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-[#1B1B1B]">Loan Officer</h3>
                        <p className="text-[#4CAF50] font-medium">Mboleko Limited</p>
                      </div>
                      <div className="text-[#666666]">
                        <p>Nov 2022 - Mar 2023</p>
                        <p>Nairobi, Kenya</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-[#666666]">
                      <li>Analyzed credit scores of loan applicants</li>
                      <li>Analyzed loan disbursements</li>
                      <li>Maintained client records</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Volunteer Researcher */}
              <div className="group relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4CAF50] border-4 border-white shadow-lg"></div>
                <div className="ml-8 md:ml-0 md:pl-16">
                  <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-[#1B1B1B]">Volunteer Researcher</h3>
                        <p className="text-[#4CAF50] font-medium">Fintech Frontiers</p>
                      </div>
                      <div className="text-[#666666]">
                        <p>Jun 2022 - Aug 2022</p>
                        <p>Nairobi, Kenya</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-[#666666]">
                      <li>Collected data and participated in its analysis</li>
                      <li>Supported Fintech Frontiers' initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-light py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-white to-[#F1F8E9] opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-12 text-center">
            Education
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4CAF50] opacity-20"></div>
            
            <div className="space-y-12">
              {/* BSc Computer Technology */}
              <div className="group relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4CAF50] border-4 border-white shadow-lg"></div>
                <div className="ml-8 md:ml-0 md:pl-16">
                  <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-[#1B1B1B]">BSc Computer Technology</h3>
                        <p className="text-[#4CAF50] font-medium">Jomo Kenyatta University of Agriculture and Technology</p>
                      </div>
                      <div className="text-[#666666]">
                        <p>2021 - 2025</p>
                        <p>Nairobi, Kenya</p>
                      </div>
                    </div>
                    <div className="text-[#666666]">
                      <p>Bachelor's Degree in Computer Technology</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applied Data Science */}
              <div className="group relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4CAF50] border-4 border-white shadow-lg"></div>
                <div className="ml-8 md:ml-0 md:pl-16">
                  <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-[#1B1B1B]">Applied Data Science</h3>
                        <p className="text-[#4CAF50] font-medium">WorldQuant University</p>
                      </div>
                      <div className="text-[#666666]">
                        <p>August 2024 - September 2024</p>
                      </div>
                    </div>
                    <div className="text-[#666666]">
                      <p>Professional Certificate in Applied Data Science</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Data Analytics */}
              <div className="group relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4CAF50] border-4 border-white shadow-lg"></div>
                <div className="ml-8 md:ml-0 md:pl-16">
                  <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-[#1B1B1B]">Google Data Analytics</h3>
                        <p className="text-[#4CAF50] font-medium">Google - Coursera</p>
                      </div>
                      <div className="text-[#666666]">
                        <p>September 2024 - November 2024</p>
                      </div>
                    </div>
                    <div className="text-[#666666]">
                      <p>Professional Certificate in Data Analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section-light py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-white to-[#F1F8E9] opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-12 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Applied Data Science */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Applied Data Science</h3>
                  <p className="text-[#4CAF50] font-medium mb-2">WorldQuant University</p>
                  <p className="text-[#666666]">Professional certification in applied data science concepts and methodologies</p>
                </div>
              </div>
            </div>

            {/* Machine Learning Fundamentals */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Machine Learning Fundamentals</h3>
                  <p className="text-[#4CAF50] font-medium mb-2">Alteryx</p>
                  <p className="text-[#666666]">Comprehensive training in machine learning principles and applications</p>
                </div>
              </div>
            </div>

            {/* Introduction to Data Science */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                  <img src="/svg/cisco-svgrepo-com.svg" alt="Cisco" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Introduction to Data Science</h3>
                  <p className="text-[#4CAF50] font-medium mb-2">Cisco</p>
                  <p className="text-[#666666]">Industry-recognized certification in data science fundamentals</p>
                </div>
              </div>
            </div>

            {/* Google Data Analytics */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                  <img src="/svg/google-color-svgrepo-com.svg" alt="Google" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Google Data Analytics</h3>
                  <p className="text-[#4CAF50] font-medium mb-2">Google - Coursera</p>
                  <p className="text-[#666666]">Professional Certificate in Data Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-12 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bike Store Analysis */}
            <a href="https://github.com/omoke664/Bike-Store-Analysis-SQL-" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                {/* Image placeholder - replace src with your image later */}
                <div className="absolute inset-0 bg-[#4CAF50]/10 flex items-center justify-center">
                  <span className="text-[#4CAF50] text-lg font-medium">SQL Analysis</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Bike Store Analysis</h3>
                <p className="text-[#666666] mb-4">Comprehensive SQL analysis of bike sales data, including customer insights, sales performance, and inventory management.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">SQL</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Data Analysis</span>
                </div>
              </div>
            </a>

            {/* Danny's Diner */}
            <a href="https://github.com/omoke664/Danny-s-Diner-SQL-Case-Study" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 bg-[#4CAF50]/10 flex items-center justify-center">
                  <span className="text-[#4CAF50] text-lg font-medium">SQL Case Study</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Danny's Diner SQL Case Study</h3>
                <p className="text-[#666666] mb-4">Interactive case study analyzing customer behavior, menu preferences, and loyalty program impact using SQL.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">SQL</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Business Analysis</span>
                </div>
              </div>
            </a>

            {/* British Airways Review */}
            <a href="https://github.com/omoke664/British_Airways_Review_Tableau_Visualization" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 bg-[#4CAF50]/10 flex items-center justify-center">
                  <span className="text-[#4CAF50] text-lg font-medium">Tableau</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">British Airways Review</h3>
                <p className="text-[#666666] mb-4">Data visualization project analyzing customer reviews and feedback for British Airways using Tableau.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Tableau</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Data Visualization</span>
                </div>
              </div>
            </a>

            {/* Linear Regression */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 bg-[#4CAF50]/10 flex items-center justify-center">
                  <span className="text-[#4CAF50] text-lg font-medium">Python</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Linear Regression Analysis</h3>
                <p className="text-[#666666] mb-4">E-commerce dataset analysis using Python's linear regression for predictive modeling and insights.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Machine Learning</span>
                </div>
              </div>
            </a>

            {/* London Bike Store */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 bg-[#4CAF50]/10 flex items-center justify-center">
                  <span className="text-[#4CAF50] text-lg font-medium">Excel</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">London Bike Store Analysis</h3>
                <p className="text-[#666666] mb-4">Comprehensive analysis of London bike store data using Excel for business intelligence and insights.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Excel</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Business Intelligence</span>
                </div>
              </div>
            </a>

            {/* Coffee Consumption */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 bg-[#4CAF50]/10 flex items-center justify-center">
                  <span className="text-[#4CAF50] text-lg font-medium">SQL</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Coffee Consumption Analysis</h3>
                <p className="text-[#666666] mb-4">Analysis of coffee consumption patterns in India using SQL for data extraction and insights.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">SQL</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Data Analysis</span>
                </div>
              </div>
            </a>

            {/* Psychology Analysis */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 bg-[#4CAF50]/10 flex items-center justify-center">
                  <span className="text-[#4CAF50] text-lg font-medium">Python</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Psychology Analysis</h3>
                <p className="text-[#666666] mb-4">Data analysis of psychological patterns using Python and Pandas for statistical insights.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Pandas</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-light py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-white to-[#F1F8E9] opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-12 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email */}
            <a href="mailto:omokeleywes@gmail.com" className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                  <img src="/svg/gmail-svgrepo-com.svg" alt="Email" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Email</h3>
                  <p className="text-[#666666]">omokeleywes@gmail.com</p>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/wesley-omoke-271954231/" target="_blank" rel="noopener noreferrer" className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                  <img src="/svg/linkedin-icon-svgrepo-com.svg" alt="LinkedIn" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">LinkedIn</h3>
                  <p className="text-[#666666]">wesley-omoke-271954231</p>
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/omoke664" target="_blank" rel="noopener noreferrer" className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                  <img src="/svg/github-142-svgrepo-com.svg" alt="GitHub" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">GitHub</h3>
                  <p className="text-[#666666]">omoke664</p>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/25797340467" target="_blank" rel="noopener noreferrer" className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                  <img src="/svg/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">WhatsApp</h3>
                  <p className="text-[#666666]">+257 973 404 67</p>
                </div>
              </div>
            </a>

            {/* Credly */}
            <a href="https://www.credly.com/users/wesley-omoke.ccffc8e6" target="_blank" rel="noopener noreferrer" className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                  <img src="/svg/credly-svgrepo-com.svg" alt="Credly" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Credly</h3>
                  <p className="text-[#666666]">View my certifications</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
