import { Link } from "react-router-dom";

export default function FirstbankProject() {
  return (
    <div className="min-h-screen bg-portfolio-dark text-portfolio-white font-general">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-[123px] py-[30px] bg-portfolio-dark">
        <Link to="/">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/a794cd23a87b6c5e5bb7fb2d446c3bccf6e8d1a2?width=356" 
            alt="HeyLayor brand identity"
            className="w-[178px] h-[64px]"
          />
        </Link>
        <a 
          href="mailto:salamilayor@gmail.com" 
          className="inline-block px-4 py-2.5 bg-portfolio-white text-portfolio-dark rounded-[90px] text-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Contact Me
        </a>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-[117px] py-[110px]">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-portfolio-accent hover:text-portfolio-white transition-colors mb-12"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <div className="space-y-8 mb-16">
          <div className="space-y-4">
            <span className="text-lg text-portfolio-accent">Web & Mobile</span>
            <h1 className="text-4xl md:text-[74px] md:leading-[98.494px] font-semibold">
              Firstbank
            </h1>
            <p className="text-2xl md:text-[41px] md:leading-[66.871px] text-portfolio-muted">
              A 120 year old Nigerian bank
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7cd5fbacb6e93b67b68f30a7b4584354295be588?width=94"
              alt="World icon"
              className="w-[47px] h-[47px]"
            />
            <span className="text-lg md:text-2xl text-portfolio-white">
              43 million+ active customer account base
            </span>
          </div>
        </div>

        {/* Open Account Button Section */}
        <section>
          <div className="my-12">
            <a
              href="https://openaccounts2.firstbanknigeria.com/onboarding/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-portfolio-accent text-portfolio-dark text-xl font-semibold rounded-lg shadow-lg hover:bg-portfolio-white hover:text-portfolio-accent transition-colors"
            >
              Open Account
            </a>
          </div>
        </section>

        {/* Project Image */}
        <div className="mb-16">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/177c3fba1a6359a1962f5b654629c8eb2a9774ab?width=2514"
            alt="Firstbank project showcase"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Project Details */}
        <div className="space-y-16">
          {/* Overview */}
          <section>
            <h2 className="text-3xl md:text-[48px] md:leading-[78.288px] font-semibold mb-8">
              Project Overview
            </h2>
            <div className="space-y-6 text-lg md:text-2xl md:leading-[40px]">
              <p className="text-portfolio-white">
                Firstbank, Nigeria's premier financial institution with over 120 years of legacy, 
                needed to modernize their digital banking experience. I led the design transformation 
                for both web and mobile platforms, serving over 43 million active customers.
              </p>
              <p className="text-portfolio-muted">
                The project involved reimagining the entire customer journey, from account management 
                to complex financial transactions, while maintaining the trust and reliability 
                associated with the Firstbank brand.
              </p>
            </div>
          </section>

          {/* Challenge */}
          <section>
            <h2 className="text-3xl md:text-[48px] md:leading-[78.288px] font-semibold mb-8">
              The Challenge
            </h2>
            <div className="space-y-6 text-lg md:text-2xl md:leading-[40px] text-portfolio-muted">
              <p>
                Modernizing a century-old banking institution while serving 43+ million customers 
                presented unique challenges. We needed to balance traditional banking values with 
                contemporary digital experiences, ensure accessibility across diverse user groups, 
                and maintain the highest security standards in financial services.
              </p>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-3xl md:text-[48px] md:leading-[78.288px] font-semibold mb-8">
              Our Solution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl md:text-[32px] font-medium text-portfolio-accent">
                  Unified Experience
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Seamless experience across web and mobile platforms with consistent 
                  design language and functionality.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-[32px] font-medium text-portfolio-accent">
                  Simplified Navigation
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Intuitive navigation and user flows that reduce complexity while 
                  maintaining access to comprehensive banking features.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-[32px] font-medium text-portfolio-accent">
                  Enhanced Security
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Advanced security features with biometric authentication and 
                  multi-factor verification built seamlessly into the user experience.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-[32px] font-medium text-portfolio-accent">
                  Accessibility First
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Designed with accessibility in mind to serve users across different 
                  age groups and technical literacy levels.
                </p>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-3xl md:text-[48px] md:leading-[78.288px] font-semibold mb-8">
              Impact & Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-[64px] font-bold text-portfolio-accent">43M+</div>
                <p className="text-lg md:text-xl text-portfolio-muted">Active customers served</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-[64px] font-bold text-portfolio-accent">60%</div>
                <p className="text-lg md:text-xl text-portfolio-muted">Increase in mobile usage</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-[64px] font-bold text-portfolio-accent">45%</div>
                <p className="text-lg md:text-xl text-portfolio-muted">Reduction in support calls</p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-3xl md:text-[48px] md:leading-[78.288px] font-semibold mb-8">
              Technologies & Tools
            </h2>
            <div className="flex flex-wrap gap-4">
              {['Figma', 'React Native', 'React', 'Node.js', 'MySQL', 'IBM WebSphere', 'Biometric SDK', 'SSL/TLS'].map((tech) => (
                <span 
                  key={tech}
                  className="px-6 py-3 border border-portfolio-accent text-portfolio-accent rounded-lg text-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Next Project */}
        <div className="mt-24 pt-16 border-t border-portfolio-divider">
          <Link 
            to="/" 
            className="inline-flex items-center gap-4 text-portfolio-accent hover:text-portfolio-white transition-colors group"
          >
            <span className="text-lg md:text-2xl">View More Projects</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-[109px] pt-[105px] pb-[31px] border-t border-portfolio-divider">
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="text-base text-portfolio-muted font-medium">Instagram</div>
            <div className="text-base text-portfolio-muted font-medium">Linkedin</div>
            <div className="text-base text-portfolio-muted font-medium">Twitter</div>
          </div>
          <div className="text-base text-portfolio-white font-medium">
            © 2025 Layor Salami . All rights reserved<br />
            Designed with Figma.
          </div>
        </div>
      </footer>
    </div>
  );
}
