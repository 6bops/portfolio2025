import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-portfolio-dark text-portfolio-white font-general">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-[123px] py-[30px] bg-portfolio-dark">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/a794cd23a87b6c5e5bb7fb2d446c3bccf6e8d1a2?width=356" 
          alt="HeyLayor brand identity"
          className="w-[178px] h-[64px]"
        />
        <a
          href="mailto:salamilayor@gmail.com"
          className="inline-block px-4 py-2.5 bg-portfolio-white text-portfolio-dark rounded-[90px] text-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Contact Me
        </a>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="px-6 md:px-[117px] pt-[110px] pb-[97px]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-[54px] md:leading-[71.874px] font-normal">
                Hey there,
              </h1>
              <h2 className="text-4xl md:text-[74px] md:leading-[98.494px] font-semibold">
                I am Layor Salami, a<br />Design Lead at IndigoEMR
              </h2>
            </div>
            <p className="text-2xl md:text-[41px] md:leading-[66.871px] text-portfolio-muted">
              Based in London
            </p>
          </div>
        </section>

        {/* Portfolio Projects Section */}
        <section className="px-6 md:px-[117px] space-y-[117px]">
          {/* IndigoEMR Project */}
          <Link to="/projects/indigo-emr" className="block group cursor-pointer">
            <div className="space-y-8 transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                src="/indigo-dashboard.png"
                alt="IndigoEMR project showcase"
                className="w-full h-auto rounded-lg"
                style={{ background: '#000' }}
                />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-16">
                <div className="flex-1 space-y-4">
                  <span className="text-lg text-portfolio-accent">Web app</span>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-[35px] md:leading-[57.085px] text-portfolio-white group-hover:text-portfolio-accent transition-colors">
                      IndigoEMR
                    </h3>
                    <p className="text-lg md:text-2xl text-portfolio-muted">
                      Electronic medical record and hospital management system
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7cd5fbacb6e93b67b68f30a7b4584354295be588?width=94"
                    alt="World icon"
                    className="w-[47px] h-[47px]"
                  />
                  <span className="text-lg md:text-2xl text-portfolio-white w-[171px]">
                    2+ million patient record
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Sharply Africa Project */}
          <Link to="/projects/sharply-africa" className="block group cursor-pointer">
            <div className="space-y-8 transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/cc3aa339eda8c18ee3c29e32dec6e84b9910182e?width=2412"
                alt="Sharply Africa project showcase"
                className="w-full h-auto rounded-lg"
              />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-16">
                <div className="flex-1 space-y-4">
                  <span className="text-lg text-portfolio-accent">Web app</span>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-[35px] md:leading-[57.085px] text-portfolio-white group-hover:text-portfolio-accent transition-colors">
                      Sharply Africa
                    </h3>
                    <p className="text-lg md:text-2xl text-portfolio-muted">
                      Saas logistics infrastructure for businesses
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7cd5fbacb6e93b67b68f30a7b4584354295be588?width=94"
                    alt="World icon"
                    className="w-[47px] h-[47px]"
                  />
                  <span className="text-lg md:text-2xl text-portfolio-white w-[187px]">
                    100+ small and large businesses
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Firstbank Project */}
          <Link to="/projects/firstbank" className="block group cursor-pointer">
            <div className="space-y-8 transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src="/firstbank-dashboard.png"
                alt="Firstbank project showcase"
                className="w-full h-auto rounded-lg"
              />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-16">
                <div className="flex-1 space-y-4">
                  <span className="text-lg text-portfolio-accent">Web & Mobile</span>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-[35px] md:leading-[57.085px] text-portfolio-white group-hover:text-portfolio-accent transition-colors">
                      Firstbank
                    </h3>
                    <p className="text-lg md:text-2xl text-portfolio-muted">
                      A 120 year old Nigerian bank
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7cd5fbacb6e93b67b68f30a7b4584354295be588?width=94"
                    alt="World icon"
                    className="w-[47px] h-[47px]"
                  />
                  <span className="text-lg md:text-2xl text-portfolio-white w-[260px]">
                    43 million+ active customer account base
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Flavor Queste Project */}
          <Link to="/projects/flavor-queste" className="block group cursor-pointer">
            <div className="space-y-8 transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/52b6d807fdf0ea4db6fd8ec2fafe07da612aaee7?width=2412"
                alt="Flavor Queste project showcase"
                className="w-full h-auto rounded-lg"
              />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-16">
                <div className="flex-1 space-y-4">
                  <span className="text-lg text-portfolio-accent">Web</span>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-[35px] md:leading-[57.085px] text-portfolio-white group-hover:text-portfolio-accent transition-colors">
                      Flavor Queste
                    </h3>
                    <p className="text-lg md:text-2xl text-portfolio-muted">
                      Dining exploration with platform
                    </p>
                  </div>
                </div>
                <div className="w-[323px] h-[64px]"></div>
              </div>
            </div>
          </Link>

          {/* Moniwave Project */}
          <Link to="/projects/moniwave" className="block group cursor-pointer">
            <div className="space-y-8 transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/50d7188931bd40cc8219a8aea23a72ce63b526c4?width=2412"
                alt="Moniwave project showcase"
                className="w-full h-auto rounded-lg"
              />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-16">
                <div className="flex-1 space-y-4">
                  <span className="text-lg text-portfolio-accent">Mobile</span>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-[35px] md:leading-[57.085px] text-portfolio-white group-hover:text-portfolio-accent transition-colors">
                      Moniwave
                    </h3>
                    <p className="text-lg md:text-2xl text-portfolio-muted">
                      Currency exchange app
                    </p>
                  </div>
                </div>
                <div className="w-[323px] h-[64px]"></div>
              </div>
            </div>
          </Link>

          {/* BEAM Health Project */}
          <Link to="/projects/beam-health" className="block group cursor-pointer">
            <div className="space-y-8 transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/fb45c13c938657a0c5a89e066ba3df2ea0e0e3ad?width=2412"
                alt="BEAM Health project showcase"
                className="w-full h-auto rounded-lg"
              />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-16">
                <div className="flex-1 space-y-4">
                  <span className="text-lg text-portfolio-accent">Mobile</span>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-[35px] md:leading-[57.085px] text-portfolio-white group-hover:text-portfolio-accent transition-colors">
                      BEAM Health
                    </h3>
                    <p className="text-lg md:text-2xl text-portfolio-muted">
                      Mental health journal app
                    </p>
                  </div>
                </div>
                <div className="w-[323px] h-[64px]"></div>
              </div>
            </div>
          </Link>
        </section>

        {/* About Section */}
        <section className="px-6 md:px-[117px] pt-[145px]">
          <p className="text-2xl md:text-[40px] md:leading-[64px] font-medium text-portfolio-white mb-8">
            I've spent the last 7 years working on a wide range of digital products for tech, health, e-commerce and finance companies. I strongly believe in simplicity and tackling problems from a holistic approach while also getting down to the nitty-gritty details.
          </p>
          <p className="text-2xl md:text-[40px] md:leading-[64px] font-medium text-portfolio-muted">
            I have also dabbled into startup ideas and joined some bright minds on some interesting ideas that got launched
          </p>
        </section>

        {/* Speaking & Achievements Section */}
        <section className="px-6 md:px-[117px] pt-[145px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Untitled Designers Card */}
            <div className="border border-portfolio-white p-6 space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/12cafcd83f59caf28c7326b9d44be333601b3f86?width=230"
                  alt="Untitled Designers logo"
                  className="w-[115px] h-[86px]"
                />
                <h4 className="text-lg md:text-[21px] md:leading-[33px] font-medium text-portfolio-white">
                  UNTITLED DESIGNERS
                </h4>
              </div>
              <h3 className="text-3xl md:text-[48px] md:leading-[78.288px] font-medium text-portfolio-white">
                Speaker at Untitled Design Conference
              </h3>
              <p className="text-lg md:text-xl md:leading-[32.62px] text-portfolio-white">
                200+ attendees & +3 hours of workshops
              </p>
            </div>

            {/* UX Collective Card */}
            <div className="border border-portfolio-white p-6 space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3682460adb602a3f1d45796a8739e836a8c0b862?width=172"
                  alt="UX Collective logo"
                  className="w-[86px] h-[86px]"
                />
              </div>
              <h3 className="text-3xl md:text-[48px] md:leading-[78.288px] font-medium text-portfolio-white">
                How to address grid, timelines, and mobile design
              </h3>
              <p className="text-lg md:text-xl md:leading-[32.62px] text-portfolio-white">
                Featured by UX collective
              </p>
            </div>

            {/* Channels TV Card */}
            <div className="border border-portfolio-white p-6 space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b29b406bc497e20fdef8c5d086e17e41ce9973d1?width=194"
                  alt="Channels TV logo"
                  className="w-[97px] h-[89px]"
                />
              </div>
              <h3 className="text-3xl md:text-[48px] md:leading-[78.288px] font-medium text-portfolio-white">
                Business Incorporation, Channels TV
              </h3>
              <p className="text-lg md:text-xl md:leading-[32.62px] text-portfolio-white">
                Sharing the insight on leapfrogging in health innovation in Nigeria
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="px-6 md:px-[109px] pt-[152px]">
          <h2 className="text-4xl md:text-[64px] md:leading-[85.184px] font-semibold text-portfolio-white mb-[92px]">
            Experience
          </h2>
          
          <div className="space-y-[60px]">
            {/* Indigo EMR */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                <div className="flex items-center gap-3 sm:gap-[21px]">
                  <div className="w-12 h-12 sm:w-[64px] sm:h-[64px] md:w-[84px] md:h-[84px] flex items-center justify-center">
                    <svg className="w-12 sm:w-16 md:w-[84px] h-8 sm:h-10 md:h-[56px] fill-white" viewBox="0 0 84 29" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 4.62121C0 1.16835 5.37949 1.16835 5.37949 4.59165V20.7636C5.37949 24.2165 0 24.1855 0 20.7636V4.62121V4.62121ZM19.823 23.2143C18.317 23.2143 17.1482 22.0024 17.1482 20.4892V12.4659H12.1074V20.5821C12.1074 22.0052 10.8771 23.2172 9.37117 23.2172C7.90185 23.196 6.71638 22.0268 6.69643 20.5793V9.76043C6.69643 8.24585 7.92664 7.03531 9.37117 7.03531C10.101 7.03865 10.7995 7.32779 11.3128 7.83897C11.8261 8.35016 12.1119 9.04143 12.1074 9.76043V10.6683C12.1074 10.8204 12.2002 10.8204 12.2617 10.6683C13.0604 8.24585 14.8435 7.09442 17.1496 7.09442C20.193 7.09442 22.5906 9.0327 22.5906 12.0914V20.4808C22.5959 21.2061 22.3063 21.9034 21.7863 22.417C21.2663 22.9306 20.5593 23.2178 19.823 23.2143V23.2143Z" fill="white"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-[36px] md:leading-[47.916px] text-portfolio-white">
                    Indigo EMR
                  </h3>
                </div>
                <span className="text-base sm:text-lg md:text-[36px] md:leading-[47.916px] text-portfolio-white ml-auto">
                  2022 - Current
                </span>
              </div>
              <div className="w-full h-[1px] bg-portfolio-divider"></div>
            </div>

            {/* Flavorquest */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                <div className="flex items-center gap-3 sm:gap-[21px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/da829c79dc49b1012f5419b6dc6511902228cca3?width=164"
                    alt="Flavorquest logo"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-[84px] md:h-[84px] object-contain"
                  />
                  <h3 className="text-lg sm:text-xl md:text-[36px] md:leading-[47.916px] text-portfolio-white">
                    Flavorquest (Personal Project)
                  </h3>
                </div>
                <span className="text-base sm:text-lg md:text-[36px] md:leading-[47.916px] text-portfolio-white ml-auto">
                  2024
                </span>
              </div>
              <div className="w-full h-[1px] bg-portfolio-divider"></div>
            </div>

            {/* Firstbank */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                <div className="flex items-center gap-3 sm:gap-[21px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/8e778f4f55a2658c224bd07956f118de4ad3cb7a?width=170"
                    alt="Firstbank logo"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-[84px] md:h-[84px] object-contain"
                  />
                  <h3 className="text-lg sm:text-xl md:text-[36px] md:leading-[47.916px] text-portfolio-white">
                    Firstbank (Independent Contractor)
                  </h3>
                </div>
                <span className="text-base sm:text-lg md:text-[36px] md:leading-[47.916px] text-portfolio-white ml-auto">
                  2023
                </span>
              </div>
              <div className="w-full h-[1px] bg-portfolio-divider"></div>
            </div>

            {/* Sharply Africa */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                <div className="flex items-center gap-3 sm:gap-[21px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4775ff0c09e943739b43545f46ea4d4f%2Ff5afc5b037c64a648fd41e84db13fb1a"
                    alt="Sharply Africa logo"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-[84px] md:h-[84px] object-contain max-w-[200px]"
                  />
                  <h3 className="text-lg sm:text-xl md:text-[36px] md:leading-[47.916px] text-portfolio-white">
                    Sharply Africa
                  </h3>
                </div>
                <span className="text-base sm:text-lg md:text-[36px] md:leading-[47.916px] text-portfolio-white ml-auto">
                  2021
                </span>
              </div>
              <div className="w-full h-[1px] bg-portfolio-divider"></div>
            </div>

            {/* Summitech Computing */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                <div className="flex items-center gap-3 sm:gap-[21px]">
                  <svg className="w-16 h-12 sm:w-20 sm:h-16 md:w-[82px] md:h-[82px] fill-white" viewBox="0 0 109 85" xmlns="http://www.w3.org/2000/svg">
                    <path d="M103.263 68.802C102.546 69.8854 100.753 70.2465 99.6776 69.1631C98.602 68.4408 98.2434 66.6351 99.3191 65.5517C99.6776 64.8294 100.395 64.4683 101.47 64.4683C102.188 64.4683 102.905 64.1072 103.263 63.746L108.283 57.2455C108.641 56.8844 108.641 56.5233 108.641 56.1621V53.273C108.641 52.1896 107.924 51.1062 106.849 51.1062C106.132 51.1062 105.414 51.4673 105.056 52.1896L103.98 53.273C103.622 53.6342 103.622 54.3564 103.622 55.0787C103.98 55.801 103.622 56.5233 103.263 57.2455C102.546 58.329 100.753 58.6901 99.6776 57.6067C98.602 56.8844 98.2434 55.0787 99.3191 53.9953V53.9953C99.6776 53.273 100.395 52.9119 101.47 52.9119C102.188 52.9119 102.905 52.5507 103.263 52.1896L108.641 45.328C109 44.9668 109 44.6057 109 44.2446V2.35256C109 1.26915 108.283 0.546875 107.207 0.546875V0.546875H18.6447C8.60526 0.546875 0.358553 8.85305 0.358553 19.3261V19.3261V42.8C0.358553 43.1612 0.358553 43.5223 0.717105 43.8834L10.398 56.5233C10.7566 56.8844 11.4737 57.2455 12.1908 57.2455C12.9079 57.2455 13.625 57.6067 14.3421 58.329C15.0592 59.4124 15.0592 61.2181 13.9836 61.9403C12.9079 62.6626 11.1151 62.6626 10.398 61.5792C9.32237 61.2181 9.32237 60.1346 9.32237 59.4124C9.68092 58.6901 9.32237 57.9678 8.96382 57.6067L3.58553 50.3839C2.86842 49.3005 1.79276 49.3005 1.07566 49.6616C0.358553 50.0228 0 50.7451 0 51.4673V58.6901C0 59.0512 0 59.4124 0.358553 59.7735L4.66118 65.5517C5.01974 65.9129 5.73684 66.274 6.45395 66.274C7.17105 66.274 7.88816 66.6351 8.60526 67.3574C9.32237 68.4408 9.32237 70.2465 8.24671 70.9688C7.17105 71.6911 5.37829 71.6911 4.66118 70.6076C4.30263 69.8854 3.94408 69.1631 4.30263 68.4408C4.66118 67.7185 4.30263 66.9963 3.94408 66.6351L3.58553 66.274C2.86842 65.1906 1.79276 65.1906 1.07566 65.5517C0.358553 65.9129 0 66.6351 0 67.3574V82.1641C0 83.2475 0.717105 84.3309 1.79276 84.3309C2.50987 84.3309 3.22697 83.9698 3.58553 83.2475L31.1941 47.856C31.9112 47.1337 32.9868 46.7725 34.0625 47.4948L34.4211 47.856L53.7829 72.7745C54.5 73.4968 55.5757 73.4968 56.6513 72.7745C57.3684 72.0522 57.3684 71.3299 57.0099 70.6076L46.2533 49.3005C45.8947 48.5782 45.8947 47.856 46.6118 47.1337L60.2368 29.4379C60.954 28.7156 62.0296 28.3545 63.1053 29.0768L63.4638 29.4379L105.414 83.6086C106.132 84.692 107.207 84.692 107.924 84.3309C108.641 83.9698 109 83.2475 109 82.5252V64.8294C109 63.746 108.283 62.6626 107.207 62.6626C106.49 62.6626 105.773 63.0237 105.414 63.746L104.697 64.8294C104.339 65.1906 104.339 65.9128 104.339 66.6351C103.98 67.3574 103.98 68.4408 103.263 68.802" fill="white"/>
                  </svg>
                  <h3 className="text-lg sm:text-xl md:text-[36px] md:leading-[47.916px] text-portfolio-white">
                    Summitech Computing
                  </h3>
                </div>
                <span className="text-base sm:text-lg md:text-[36px] md:leading-[47.916px] text-portfolio-white ml-auto">
                  2018 - 2021
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-[109px] pt-[105px] pb-[31px]">
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
      </main>
    </div>
  );
}
