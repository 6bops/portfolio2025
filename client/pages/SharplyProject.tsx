import { Link } from "react-router-dom";

export default function SharplyProject() {
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
            <span className="text-lg text-portfolio-accent">Web App</span>
            <h1 className="text-4xl md:text-[74px] md:leading-[98.494px] font-semibold">
              Sharply Africa
            </h1>
            <p className="text-2xl md:text-[41px] md:leading-[66.871px] text-portfolio-muted">
              SaaS logistics infrastructure for businesses
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7cd5fbacb6e93b67b68f30a7b4584354295be588?width=94"
              alt="World icon"
              className="w-[47px] h-[47px]"
            />
            <span className="text-lg md:text-2xl text-portfolio-white">
              100+ small and large businesses
            </span>
          </div>
        </div>

        {/* Visit Website and Case Study Section */}
        <section>
          <div className="my-12 flex flex-col gap-4 sm:flex-row sm:gap-8">
            <a
              href="https://www.sharply.africa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-portfolio-accent text-portfolio-dark text-xl font-semibold rounded-lg shadow-lg hover:bg-portfolio-white hover:text-portfolio-accent transition-colors"
            >
              Visit Sharply Africa Website
            </a>
            <a
              href="https://www.notion.so/layor/Sharply-Delivery-Checkout-aea889ef00dc43aeb225d819f3180a3e?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-portfolio-accent text-portfolio-dark text-xl font-semibold rounded-lg shadow-lg hover:bg-portfolio-white hover:text-portfolio-accent transition-colors"
            >
              Read Case Study
            </a>
          </div>
        </section>

        {/* Project Image */}
        <div className="mb-16">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/cc3aa339eda8c18ee3c29e32dec6e84b9910182e?width=2412"
            alt="Sharply Africa project showcase"
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
                Sharply Africa is a comprehensive SaaS logistics infrastructure platform designed to streamline 
                operations for businesses across Africa. The platform provides end-to-end logistics solutions 
                that help businesses manage their supply chain, deliveries, and customer relationships more effectively.
              </p>
              <p className="text-portfolio-muted">
                As the lead designer on this project, I was responsible for creating an intuitive interface that 
                could handle complex logistics workflows while remaining accessible to businesses of all sizes.
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
                African businesses face unique logistics challenges including unreliable infrastructure, 
                complex regulatory environments, and limited access to modern logistics technology. 
                We needed to create a solution that could work reliably in these conditions while 
                providing enterprise-grade functionality.
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
                  Unified Dashboard
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  A comprehensive dashboard that provides real-time visibility into all logistics operations, 
                  from order management to delivery tracking.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-[32px] font-medium text-portfolio-accent">
                  Mobile-First Design
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Optimized for mobile devices to ensure accessibility in regions where mobile is 
                  the primary means of internet access.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-[32px] font-medium text-portfolio-accent">
                  Offline Capability
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Built-in offline functionality to handle connectivity issues common in 
                  developing markets.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-[32px] font-medium text-portfolio-accent">
                  Local Integration
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Seamless integration with local payment systems, regulatory requirements, 
                  and cultural business practices.
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
                <div className="text-4xl md:text-[64px] font-bold text-portfolio-accent">100+</div>
                <p className="text-lg md:text-xl text-portfolio-muted">Businesses onboarded</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-[64px] font-bold text-portfolio-accent">40%</div>
                <p className="text-lg md:text-xl text-portfolio-muted">Reduction in failed delivery</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-[64px] font-bold text-portfolio-accent">25%</div>
                <p className="text-lg md:text-xl text-portfolio-muted">Cost savings for users</p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-3xl md:text-[48px] md:leading-[78.288px] font-semibold mb-8">
              Technologies & Tools
            </h2>
            <div className="flex flex-wrap gap-4">
              {['Figma', 'React', 'Metabase', 'MongoDB', 'AWS', 'Trello', 'Google Maps API'].map((tech) => (
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
