import { Link } from "react-router-dom";

export default function IndigoProject() {
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
              IndigoEMR
            </h1>
            <p className="text-2xl md:text-[41px] md:leading-[66.871px] text-portfolio-muted">
              Electronic medical record and hospital management system
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7cd5fbacb6e93b67b68f30a7b4584354295be588?width=94"
              alt="World icon"
              className="w-[47px] h-[47px]"
            />
            <span className="text-lg md:text-2xl text-portfolio-white">
              2+ million patient records
            </span>
          </div>
        </div>

        {/* Open Casestudy Section */}
        <section>
          <div className="my-12">
            <a
              href="https://www.figma.com/deck/hijNz3lVFpI9LAu93yyEMb/IndigoEMR-case-study?node-id=115-1739&viewport=-1881%2C-68%2C0.87&t=ujc95kBWOQsmPu70-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-portfolio-accent text-portfolio-dark text-xl font-semibold rounded-lg shadow-lg hover:bg-portfolio-white hover:text-portfolio-accent transition-colors"
            >
              Open Casestudy
            </a>
          </div>
        </section>

        {/* Project Image */}
        <div className="mb-16">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/ccab0beca8c54d72d27edad0407f0981ac00d811?width=2412"
            alt="IndigoEMR project showcase"
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
                IndigoEMR is a comprehensive electronic medical record system designed specifically for 
                healthcare providers in emerging markets. As Design Lead, I spearheaded the creation of 
                an intuitive platform that digitizes patient records and streamlines hospital operations.
              </p>
              <p className="text-portfolio-muted">
                The platform serves over 2+ million patient records and has been implemented across 
                multiple healthcare facilities, transforming how medical professionals manage patient care.
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
                Healthcare systems in emerging markets often rely on paper-based records, leading to 
                inefficiencies, data loss, and compromised patient care. We needed to create a digital 
                solution that could work reliably in environments with limited technical infrastructure 
                while meeting strict healthcare compliance requirements.
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
                  Patient Management
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Comprehensive patient profiles with medical history, appointments, prescriptions, 
                  and treatment plans all in one place.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-[32px] font-medium text-portfolio-accent">
                  Clinical Workflows
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Streamlined workflows for doctors, nurses, and administrative staff with 
                  role-based access and permissions.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-[32px] font-medium text-portfolio-accent">
                  Analytics Dashboard
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Real-time insights into hospital operations, patient outcomes, and 
                  resource utilization.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl md:text-[32px] font-medium text-portfolio-accent">
                  Compliance & Security
                </h3>
                <p className="text-lg md:text-xl text-portfolio-muted">
                  Built-in HIPAA compliance and robust security measures to protect 
                  sensitive patient data.
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
                <div className="text-4xl md:text-[64px] font-bold text-portfolio-accent">2M+</div>
                <p className="text-lg md:text-xl text-portfolio-muted">Patient records managed</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-[64px] font-bold text-portfolio-accent">50%</div>
                <p className="text-lg md:text-xl text-portfolio-muted">Reduction in paperwork</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-[64px] font-bold text-portfolio-accent">30%</div>
                <p className="text-lg md:text-xl text-portfolio-muted">Faster patient processing</p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-3xl md:text-[48px] md:leading-[78.288px] font-semibold mb-8">
              Technologies & Tools
            </h2>
            <div className="flex flex-wrap gap-4">
              {['Figma', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'HL7 FHIR'].map((tech) => (
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
