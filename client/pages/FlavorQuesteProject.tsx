import { Link } from "react-router-dom";

export default function FlavorQuesteProject() {
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
            <span className="text-lg text-portfolio-accent">Web</span>
            <h1 className="text-4xl md:text-[74px] md:leading-[98.494px] font-semibold">
              Flavor Queste
            </h1>
            <p className="text-2xl md:text-[41px] md:leading-[66.871px] text-portfolio-muted">
              Dining exploration with platform
            </p>
          </div>
        </div>

        {/* Visit Website Section */}
        <section>
          <div className="my-12">
            <a
              href="https://flavorqueste.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-portfolio-accent text-portfolio-dark text-xl font-semibold rounded-lg shadow-lg hover:bg-portfolio-white hover:text-portfolio-accent transition-colors"
            >
              Visit Flavor Queste Website
            </a>
          </div>
        </section>

        {/* Project Image */}
        <div className="mb-16">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/52b6d807fdf0ea4db6fd8ec2fafe07da612aaee7?width=2412"
            alt="Flavor Queste project showcase"
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
                Flavor Queste is an innovative dining exploration platform that connects food enthusiasts 
                with unique culinary experiences. I designed the complete web experience that helps users 
                discover, book, and share their dining adventures.
              </p>
              <p className="text-portfolio-muted">
                The platform focuses on curating authentic local dining experiences, from hidden gems 
                to signature restaurants, creating a community of food explorers who value quality 
                and authentic culinary experiences.
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
                The dining discovery market is crowded with generic review platforms that lack 
                personalization and authentic curation. We needed to create a platform that goes 
                beyond basic reviews to offer curated experiences and build a community of passionate 
                food explorers.
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
                  Curated Discovery
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Hand-picked dining experiences curated by local food experts and 
                  passionate community members.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-[32px] font-medium text-portfolio-accent">
                  Personalized Recommendations
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  AI-powered recommendations based on user preferences, dietary restrictions, 
                  and past dining experiences.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-[32px] font-medium text-portfolio-accent">
                  Community Driven
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Social features that allow users to share experiences, create dining 
                  groups, and follow favorite food explorers.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-[32px] font-medium text-portfolio-accent">
                  Seamless Booking
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Integrated reservation system with real-time availability and 
                  special experience bookings.
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
                <div className="text-4xl md:text-[64px] font-bold text-portfolio-accent">300+</div>
                <p className="text-lg md:text-xl text-portfolio-muted">Curated restaurants</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-[64px] font-bold text-portfolio-accent">2K+</div>
                <p className="text-lg md:text-xl text-portfolio-muted">Active food explorers</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-[64px] font-bold text-portfolio-accent">85%</div>
                <p className="text-lg md:text-xl text-portfolio-muted">User satisfaction rate</p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-3xl md:text-[48px] md:leading-[78.288px] font-semibold mb-8">
              Technologies & Tools
            </h2>
            <div className="flex flex-wrap gap-4">
              {['Figma', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Google Maps API', 'Algolia'].map((tech) => (
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
