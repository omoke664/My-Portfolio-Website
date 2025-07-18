"use client";

import Image from "next/image";

// Utility to prefix asset paths with basePath for GitHub Pages compatibility
function getAssetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  return path;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#E8F5E9]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold text-[#4CAF50]">
              Wesley Omoke
            </a>
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-[#666666] hover:text-[#4CAF50] transition-colors duration-300"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                  mobileMenu.classList.toggle('hidden');
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-[#666666] hover:text-[#4CAF50] transition-colors duration-300">
                About
              </a>
              <a href="#skills" className="text-[#666666] hover:text-[#4CAF50] transition-colors duration-300">
                Skills
              </a>
              <a href="#experience" className="text-[#666666] hover:text-[#4CAF50] transition-colors duration-300">
                Experience
              </a>
              <a href="#education" className="text-[#666666] hover:text-[#4CAF50] transition-colors duration-300">
                Education
              </a>
              <a href="#projects" className="text-[#666666] hover:text-[#4CAF50] transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="text-[#666666] hover:text-[#4CAF50] transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
          {/* Mobile menu */}
          <div id="mobile-menu" className="hidden md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-[#666666] hover:text-[#4CAF50] transition-colors duration-300">
                About
              </a>
              <a href="#skills" className="block px-3 py-2 text-[#666666] hover:text-[#4CAF50] transition-colors duration-300">
                Skills
              </a>
              <a href="#experience" className="block px-3 py-2 text-[#666666] hover:text-[#4CAF50] transition-colors duration-300">
                Experience
              </a>
              <a href="#education" className="block px-3 py-2 text-[#666666] hover:text-[#4CAF50] transition-colors duration-300">
                Education
              </a>
              <a href="#projects" className="block px-3 py-2 text-[#666666] hover:text-[#4CAF50] transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="block px-3 py-2 text-[#666666] hover:text-[#4CAF50] transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Add smooth scrolling to the entire page */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Hero Section - Update for better mobile responsiveness */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-white to-[#F1F8E9] opacity-50"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${getAssetPath('/grid.svg')})` }}></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-6xl font-bold text-[#1B1B1B] leading-tight">
                  Hi, I&apos;m <span className="text-[#4CAF50]">Wesley Omoke</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I&apos;m a data analyst with a passion for turning complex data into actionable insights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="btn-primary group relative overflow-hidden w-full sm:w-auto text-center"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50] to-[#388E3C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="/files/Resume_Omoke_Wesley.pdf"
                  download
                  className="btn-secondary group relative overflow-hidden w-full sm:w-auto text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E8F5E9] to-[#F1F8E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50] to-[#388E3C] rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative">
                <div className="w-64 h-64 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-[#4CAF50] shadow-xl">
                  <Image
                    src={getAssetPath('/images/Wes.jpg')}
                    alt="Wes"
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

      {/* Update grid layouts for better mobile responsiveness */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F8F9FA] scroll-mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-12 text-center">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Main Content */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-[#4CAF50] mb-4">My Journey</h3>
                  <p className="text-[#666666] leading-relaxed">
                    My journey into data analysis began unexpectedly during my first role as a loan officer. There, I regularly analyzed clients&#39; credit scores, seeing firsthand how raw data could be transformed into powerful insights that directly informed critical financial decisions. Witnessing this real-world impact ignited a passion within me; I knew then that data analytics was the path I was meant to follow.
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-[#4CAF50] mb-4">Skills & Expertise</h3>
                  <p className="text-[#666666] leading-relaxed">
                    Since that pivotal experience, I&apos;ve immersed myself in the field through intensive self-directed learning and hands-on projects. As a final-year student at JKUAT, I&apos;ve cultivated a robust skill set, including Python (with expertise in its core data libraries), SQL, MySQL, and PostgreSQL. I thrive on leveraging data structures and algorithms to extract meaningful patterns and build scalable solutions.
                  </p>
                </div>
              </div>

              {/* Side Content */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-[#4CAF50] mb-4">My Approach</h3>
                  <p className="text-[#666666] leading-relaxed">
                    My analytical mindset, combined with a commitment to continuous learning, drives me to turn complex data into clear, actionable insights. I&apos;m excited about the potential of data to revolutionize industries and am actively seeking an entry-level Data Analyst opportunity to contribute to impactful projects that harness the power of data to create positive change.
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-[#4CAF50] mb-4">Explore My Work</h3>
                  <p className="text-[#666666] leading-relaxed mb-4">
                    You can explore my work and see my analytical approach in action through the various portfolio projects available on this website.
                  </p>
                  <a href="#projects" className="inline-flex items-center text-[#4CAF50] hover:text-[#388E3C] transition-colors duration-300">
                    View Projects
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-light py-20 relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-white to-[#F1F8E9] opacity-50"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${getAssetPath('/grid.svg')})` }}></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* SQL */}
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                  <Image
                    src={getAssetPath('/svg/sql-svgrepo-com.svg')}
                    alt="SQL"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#1B1B1B] mb-2">SQL</h3>
                <p className="text-[#666666]">Database management and complex query optimization</p>
              </div>
            </div>

            {/* Python */}
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                  <Image
                    src={getAssetPath('/svg/python-svgrepo-com.svg')}
                    alt="Python"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#1B1B1B] mb-2">Python</h3>
                <p className="text-[#666666]">Data analysis, automation, and machine learning</p>
              </div>
            </div>

            {/* Tableau */}
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                  <Image
                    src={getAssetPath('/svg/tableau-svgrepo-com (1).svg')}
                    alt="Tableau"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#1B1B1B] mb-2">Tableau</h3>
                <p className="text-[#666666]">Interactive data visualization and dashboards</p>
              </div>
            </div>

            {/* Excel */}
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                  <Image
                    src={getAssetPath('/svg/excel-svgrepo-com.svg')}
                    alt="Excel"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#1B1B1B] mb-2">Excel</h3>
                <p className="text-[#666666]">Advanced data analysis and financial modeling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="section-light py-20 relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-white to-[#F1F8E9] opacity-50"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${getAssetPath('/grid.svg')})` }}></div>
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
                  <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-4">
                    <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                      <Image
                        src={getAssetPath('/images/wrsc.png')}
                        alt="WRSC"
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-lg object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-[#1B1B1B]">ICT Intern</h3>
                          <p className="text-[#4CAF50] font-medium">Warehouse Receipt System Council</p>
                        </div>
                        <div className="text-[#666666] text-right">
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
                      <div className="text-[#666666] text-right">
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
                  <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-4">
                    <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                      <Image
                        src={getAssetPath('/images/fintech.png')}
                        alt="Fintech Frontiers"
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-lg object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-[#1B1B1B]">Volunteer Researcher</h3>
                          <p className="text-[#4CAF50] font-medium">Fintech Frontiers</p>
                        </div>
                        <div className="text-[#666666] text-right">
                          <p>Jun 2022 - Aug 2022</p>
                          <p>Nairobi, Kenya</p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-[#666666]">
                        <li>Collected data and participated in its analysis</li>
                        <li>Supported Fintech Frontiers&apos; initiatives</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-light py-20 relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-white to-[#F1F8E9] opacity-50"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${getAssetPath('/grid.svg')})` }}></div>
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
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={getAssetPath('/images/jkuat.png')}
                        alt="JKUAT Logo"
                        width={48}
                        height={48}
                        className="rounded object-contain"
                      />
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
                        <div>
                          <h3 className="text-2xl font-semibold text-[#1B1B1B]">BSc Computer Technology</h3>
                          <p className="text-[#4CAF50] font-medium">Jomo Kenyatta University of Agriculture and Technology</p>
                        </div>
                        <div className="text-[#666666] text-right ml-auto">
                          <p>2021 - 2025</p>
                          <p>Nairobi, Kenya</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-[#666666]">
                      <p>Bachelor&#39;s Degree in Computer Technology</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ALX Data Science */}
              <div className="group relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4CAF50] border-4 border-white shadow-lg"></div>
                <div className="ml-8 md:ml-0 md:pl-16">
                  <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={getAssetPath('/images/alx.png')}
                        alt="ALX Africa Logo"
                        width={48}
                        height={48}
                        className="rounded object-contain"
                      />
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
                        <div>
                          <h3 className="text-2xl font-semibold text-[#1B1B1B]">ALX Data Science</h3>
                          <p className="text-[#4CAF50] font-medium">ALX Africa</p>
                        </div>
                        <div className="text-[#666666] text-right ml-auto">
                          <p>June 2025 - September 2026</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-[#666666]">
                      <p>Data Science Program</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applied Data Science */}
              <div className="group relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4CAF50] border-4 border-white shadow-lg"></div>
                <div className="ml-8 md:ml-0 md:pl-16">
                  <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={getAssetPath('/images/applied_ds.png')}
                        alt="Applied Data Science Logo"
                        width={48}
                        height={48}
                        className="rounded object-contain"
                      />
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
                        <div>
                          <h3 className="text-2xl font-semibold text-[#1B1B1B]">Applied Data Science</h3>
                          <p className="text-[#4CAF50] font-medium">WorldQuant University</p>
                        </div>
                        <div className="text-[#666666] text-right ml-auto">
                          <p>August 2024 - September 2024</p>
                        </div>
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
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={getAssetPath('/images/google_analytics.png')}
                        alt="Google Data Analytics Logo"
                        width={48}
                        height={48}
                        className="rounded object-contain"
                      />
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
                        <div>
                          <h3 className="text-2xl font-semibold text-[#1B1B1B]">Google Data Analytics</h3>
                          <p className="text-[#4CAF50] font-medium">Google - Coursera</p>
                        </div>
                        <div className="text-[#666666] text-right ml-auto">
                          <p>September 2024 - November 2024</p>
                        </div>
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
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${getAssetPath('/grid.svg')})` }}></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-12 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Applied Data Science */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                  <Image
                    src={getAssetPath('/images/applied_ds.png')}
                    alt="Applied Data Science Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">
                    <a href="https://www.credly.com/badges/6493c4dc-7c83-4709-ad4c-99bd26db4988/public_url" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#4CAF50]">Applied Data Science</a>
                  </h3>
                  <p className="text-[#4CAF50] font-medium mb-2">WorldQuant University</p>
                  <p className="text-[#666666]">Professional certification in applied data science concepts and methodologies</p>
                </div>
              </div>
            </div>

            {/* Machine Learning Fundamentals */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                  <Image
                    src={getAssetPath('/images/alteryx_ml.png')}
                    alt="Alteryx Machine Learning Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">
                    <a href="https://www.credly.com/badges/a2bcf605-76d6-4a17-b0e5-14029688da93/public_url" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#4CAF50]">Machine Learning Fundamentals</a>
                  </h3>
                  <p className="text-[#4CAF50] font-medium mb-2">Alteryx</p>
                  <p className="text-[#666666]">Industry-recognized certification in machine learning fundamentals.</p>
                </div>
              </div>
            </div>

            {/* Introduction to Data Science */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                  <Image
                    src={getAssetPath('/images/ds_cisco.png')}
                    alt="Cisco Data Science Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">
                    <a href="https://www.credly.com/badges/4170e4bd-d99d-49fe-89bf-92c9d1946258/public_url" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#4CAF50]">Introduction to Data Science</a>
                  </h3>
                  <p className="text-[#4CAF50] font-medium mb-2">Cisco</p>
                  <p className="text-[#666666]">Industry-recognized certification in data science fundamentals</p>
                </div>
              </div>
            </div>

            {/* Google Data Analytics */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                  <Image
                    src={getAssetPath('/images/google_analytics.png')}
                    alt="Google Data Analytics Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">
                    <a href="https://www.credly.com/badges/1406a15f-913d-46bc-b05a-5a203d0f4c32/public_url" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#4CAF50]">Google Data Analytics</a>
                  </h3>
                  <p className="text-[#4CAF50] font-medium mb-2">Google - Coursera</p>
                  <p className="text-[#666666]">Professional Certificate in Data Analytics</p>
                </div>
              </div>
            </div>

            {/* AWS Educate Introduction to Generative AI */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                  <Image
                    src={getAssetPath('/images/aws_educate.png')}
                    alt="AWS Educate Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">
                    <a href="https://www.credly.com/badges/c34caeaf-8b96-4476-ba26-69fd7f73810c/public_url" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#4CAF50]">AWS Educate Introduction to Generative AI</a>
                  </h3>
                  <p className="text-[#4CAF50] font-medium mb-2">Amazon Web Services Training and Certification</p>
                  <p className="text-[#666666]">Credential for foundational knowledge in Generative AI</p>
                </div>
              </div>
            </div>

            {/* Enterprise Design Thinking Practitioner */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                  <Image
                    src={getAssetPath('/images/enterprise.png')}
                    alt="Enterprise Design Thinking Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">
                    <a href="https://www.credly.com/badges/18c2b06f-de71-4fc1-b9dc-b23952026c4e/public_url" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#4CAF50]">Enterprise Design Thinking Practitioner</a>
                  </h3>
                  <p className="text-[#4CAF50] font-medium mb-2">IBM</p>
                  <p className="text-[#666666]">Credential for Enterprise Design Thinking skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#F8F9FA] scroll-mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-12 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Netflix Customer Churn Analysis */}
            <a href="https://github.com/omoke664/Data_Science-Analysis-Projects/tree/main/Netflix_Customer_churn_analysis" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-[#181818] flex items-center justify-center relative">
                <Image
                  src={getAssetPath('/images/netflix_dashboard.png')}
                  alt="Netflix Customer Churn Dashboard"
                  width={400}
                  height={225}
                  className="object-cover w-full h-full rounded"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Netflix Customer Churn Analysis</h3>
                <p className="text-[#666666] mb-4">This repository contains a comprehensive analysis of Netflix customer churn, identifying key drivers and providing data-driven recommendations to improve customer retention.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Data Analysis</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Churn</span>
                </div>
              </div>
            </a>
            {/* Superstore Analysis */}
            <a href="https://github.com/omoke664/Data_Science-Analysis-Projects/tree/main/Superstore_analysis" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <Image
                  src={getAssetPath('/images/sales_dashboard.png')}
                  alt="Superstore Analysis"
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Superstore Analysis</h3>
                <p className="text-[#666666] mb-4">This project provides a comprehensive analysis of the Superstore&#39;s sales data using Microsoft Excel. The goal is to uncover insights into sales performance, profitability, and customer behavior across various dimensions.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Excel</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Sales Analysis</span>
                </div>
              </div>
            </a>
            {/* Data Cleaning with Excel */}
            <a href="https://github.com/omoke664/Data_Science-Analysis-Projects/tree/main/Data_Cleaning_With%20Excel" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <Image
                  src={getAssetPath('/images/data_cleaning.png')}
                  alt="Data Cleaning with Excel"
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Data Cleaning with Excel</h3>
                <p className="text-[#666666] mb-4">Welcome to my Data Cleaning project! This repository demonstrates how a messy dataset can be cleaned and transformed into a well-structured, analysis-ready format using spreadsheet tools and logical functions.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Excel</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Data Cleaning</span>
                </div>
              </div>
            </a>
            {/* India Staff Data Analysis */}
            <a href="https://github.com/omoke664/Data_Science-Analysis-Projects/tree/main/India_Staff_Analysis" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <Image
                  src={getAssetPath('/images/company_dashboard.png')}
                  alt="India Staff Data Analysis"
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">India Staff Data Analysis</h3>
                <p className="text-[#666666] mb-4">This project performs an in-depth analysis of a staff dataset from a company in India. The primary goal is to derive insights into the company&#39;s workforce by examining key metrics related to demographics, compensation, and performance. The analysis is presented through two interactive dashboards: one for a company-wide overview and another for detailed departmental analysis.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Excel</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Dashboard</span>
                </div>
              </div>
            </a>
            {/* London Bikes */}
            <a href="https://github.com/omoke664/London_Bikes_Data_Cleaning-Analysis" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <Image
                  src={getAssetPath('/images/london_bike_sales_dashboard.png')}
                  alt="London Bikes Analysis"
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">London Bikes Analysis using Excel</h3>
                <p className="text-[#666666] mb-4">Analysis of London bike sharing data using Python and Pandas for insights into usage patterns and trends.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Pandas</span>
                </div>
              </div>
            </a>
            {/* Psychology Analysis */}
            <a href="https://github.com/omoke664/Data_Science-Analysis-Projects/tree/main/Psychology_Analysis" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <Image
                  src={getAssetPath('/images/psychology.jpeg')}
                  alt="Psychology Analysis"
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Psychology Analysis</h3>
                <p className="text-[#666666] mb-4">Data analysis of psychological patterns using Python and Pandas for statistical insights.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Pandas</span>
                </div>
              </div>
            </a>
            {/* Bike Store Analysis */}
            <a href="https://github.com/omoke664/Bike-Store-Analysis-SQL-" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <Image
                  src={getAssetPath('/images/bike_sales_sql.jpeg')}
                  alt="Bike Store Analysis SQL"
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Bike Store Analysis using SQL</h3>
                <p className="text-[#666666] mb-4">Comprehensive SQL analysis of bike sales data, including customer insights, sales performance, and inventory management.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">SQL</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Data Analysis</span>
                </div>
              </div>
            </a>

            {/* Danny's Diner */}
            <a href="https://github.com/omoke664/Danny-s-Diner-SQL-Case-Study" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <Image
                  src={getAssetPath('/images/danys_diner.png')}
                  alt="Danny's Diner Case Study"
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Danny&apos;s Diner SQL Case Study</h3>
                <p className="text-[#666666] mb-4">Interactive case study analyzing customer behavior, menu preferences, and loyalty program impact using SQL.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">SQL</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Business Analysis</span>
                </div>
              </div>
            </a>

            {/* British Airways */}
            <a href="https://github.com/omoke664/British_Airways_Review_Tableau_Visualization" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <Image
                  src={getAssetPath('/images/BritishAirways.jpeg')}
                  alt="British Airways Analysis"
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">British Airways Reviews - Tableau</h3>
                <p className="text-[#666666] mb-4">Comprehensive analysis of customer feedback and booking data to improve service quality and customer satisfaction.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Data Analysis</span>
                </div>
              </div>
            </a>

            {/* Linear Regression */}
            <a href="https://github.com/omoke664/Linear-Regression-W-Python-E-commerce-Dataset" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <Image
                  src={getAssetPath('/images/E-commeece.jpeg')}
                  alt="E-commerce Analysis"
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B] mb-2">Linear Regression on E-commerce Data</h3>
                <p className="text-[#666666] mb-4">Predictive modeling of e-commerce sales using linear regression to forecast future trends and customer behavior.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm">Machine Learning</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-light py-20 relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-white to-[#F1F8E9] opacity-50"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${getAssetPath('/grid.svg')})` }}></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-12 text-center">
            Get in Touch
          </h2>
          {/* Contact Cards */}
          <div className="grid grid-cols-5 gap-4 max-w-md mx-auto">
            {/* Email */}
            <a href="mailto:omokeleywes@gmail.com" className="bg-white rounded-lg shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 p-2 flex justify-center items-center">
              <Image
                src={getAssetPath('/svg/gmail-svgrepo-com.svg')}
                alt="Email"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/wesley-omoke-271954231/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 p-2 flex justify-center items-center">
              <Image
                src={getAssetPath('/svg/linkedin-icon-svgrepo-com.svg')}
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
            {/* GitHub */}
            <a href="https://github.com/omoke664" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 p-2 flex justify-center items-center">
              <Image
                src={getAssetPath('/svg/github-142-svgrepo-com.svg')}
                alt="GitHub"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/254797340467" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 p-2 flex justify-center items-center">
              <Image
                src={getAssetPath('/svg/whatsapp-svgrepo-com.svg')}
                alt="WhatsApp"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
            {/* Credly */}
            <a href="https://www.credly.com/users/wesley-omoke.ccffc8e6" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-sm border border-[#E8F5E9] hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 p-2 flex justify-center items-center">
              <Image
                src={getAssetPath('/svg/credly-svgrepo-com.svg')}
                alt="Credly"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
