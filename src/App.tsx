import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedBeam from './components/AnimatedBeam';
import Skills from './components/Skills';
import ProjectShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';
import { projects } from './lib/data';
import TypedTitle from './components/TypedTitle';
import GithubIcon from './components/GithubIcon';
import PhotoGallery from './components/PhotoGallery';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Helmet>
        <title>Robin Allen - Full Stack Developer | Portfolio</title>
        <meta name="description" content="Freelance Web Developer specializing in React and TypeScript. Building modern, high-performance websites and web applications. Available for hire." />
        <meta name="keywords" content="Freelance Web Developer, React Developer, TypeScript, Web Development, Frontend Developer, UI/UX Implementation, Robin Allen" />
        <link rel="canonical" href="https://robinallenaz.github.io/RobinAllenDevPortfolio" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Robin Allen - Full Stack Developer | Portfolio" />
        <meta property="og:description" content="Full Stack Developer specializing in building tech for social good. Experienced in pet health platforms, nonprofit portals, and web development." />
        <meta property="og:url" content="https://robinallenaz.github.io/RobinAllenDevPortfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://robinallenaz.github.io/RobinAllenDevPortfolio/logo512.png" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Robin Allen - Full Stack Developer | Portfolio" />
        <meta name="twitter:description" content="Full Stack Developer specializing in building tech for social good. Experienced in pet health platforms, nonprofit portals, and web development." />
        <meta name="twitter:image" content="https://robinallenaz.github.io/RobinAllenDevPortfolio/logo512.png" />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Robin Allen",
            "jobTitle": "Web Developer & Audio Engineer",
            "description": "Web developer focused on building tech for social good, and professional audio engineer specializing in mixing and mastering",
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": [{
                "@type": "Service",
                "name": "Custom Web Development",
                "description": "Modern, responsive websites built with React and TypeScript"
              }, {
                "@type": "Service",
                "name": "UI/UX Implementation",
                "description": "Pixel-perfect implementation of designs with smooth animations"
              }, {
                "@type": "Service",
                "name": "Audio Engineering",
                "description": "Professional mixing, mastering, and music production services"
              }]
            },
            "knowsAbout": ["Web Development", "React", "TypeScript", "JavaScript", "Full Stack Development", "Audio Engineering", "Mixing", "Mastering", "Music Production"],
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Conservatory of Recording Arts and Sciences"
            },
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "certification",
                "name": "Waves Certification"
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "certification",
                "name": "Melodyne Certification"
              }
            ]
          })}
        </script>
      </Helmet>
      <AnimatedBeam>
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="sticky top-0 z-50 bg-github-dark/80 backdrop-blur-sm border-b border-github-border">
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <span className="text-xl font-bold text-github-text">Robin Allen</span>
                <div className="hidden sm:flex space-x-8">
                  <a href="#skills" className="text-github-text hover:text-pink-300 transition-colors">Skills</a>
                  <a href="#projects" className="text-github-text hover:text-pink-300 transition-colors">Projects</a>
                  <a href="#contact" className="text-github-text hover:text-pink-300 transition-colors">Contact</a>
                </div>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="sm:hidden text-github-text hover:text-pink-300 transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="sm:hidden bg-github-darker border-b border-github-border">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a
                    href="#skills"
                    className="block px-3 py-2 text-github-text hover:text-github-success transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    className="block px-3 py-2 text-github-text hover:text-github-success transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="block px-3 py-2 text-github-text hover:text-github-success transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </nav>

          {/* Main content */}
          <main className="max-w-5xl mx-auto px-4 py-4">
            {/* Hero Section */}
            <section id="home" className="min-h-[90vh] flex items-center justify-center">
              <div className="text-center max-w-3xl mx-auto px-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold pride-gradient pride-glow mb-6">Robin Allen</h1>
                <div className="mb-8">
                  <TypedTitle />
                </div>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Building tech for social good - from pet health platforms to nonprofit portals.
                  Creating modern, high-performance React applications that make a difference.
                </p>
                <div className="flex gap-6 justify-center">
                  <a href="#contact" className="btn-primary text-lg px-8 py-3">
                    Hire Me
                  </a>
                  <a href="#projects" className="btn-secondary text-lg px-8 py-3">
                    View My Work
                  </a>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-github-dark p-6 rounded-lg border border-github-text/10 hover:border-github-text/20 transition-all">
                  <h3 className="text-xl font-bold mb-4">Web Development for Social Good</h3>
                  <p className="text-github-text/80">
                    Building modern, high-performance platforms for nonprofits and socially conscious organizations.
                  </p>
                </div>
                <div className="bg-github-dark p-6 rounded-lg border border-github-text/10 hover:border-github-text/20 transition-all">
                  <h3 className="text-xl font-bold mb-4">UI/UX Implementation</h3>
                  <p className="text-github-text/80">
                    Pixel-perfect implementation of designs with smooth animations and intuitive user interactions.
                  </p>
                </div>
                <div className="bg-github-dark p-6 rounded-lg border border-github-text/10 hover:border-github-text/20 transition-all">
                  <h3 className="text-xl font-bold mb-4">Audio Engineering</h3>
                  <p className="text-github-text/80">
                    Professional mixing, mastering, and music production services by a CRAS graduate with Waves and Melodyne certifications. Elevating your sound to industry standards.
                  </p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <Skills />

            {/* Photo Gallery Section */}
            <PhotoGallery />

            {/* Projects Section */}
            <section id="projects" className="py-20">
              <h2 className="text-3xl font-bold text-github-text mb-8">
                Featured Projects
              </h2>
              <div className="space-y-6">
                {projects.map((project) => (
                  <ProjectShowcase key={project.title} project={project} />
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <Contact />
          </main>
          <GithubIcon />
        </div>
      </AnimatedBeam>
    </div>
  );
}

export default App;
