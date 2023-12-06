import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Brandsive</title>
          <meta property="og:title" content="Brandsive" />
        </Head>
        <div className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <Link href="/">
              <a className="home-link">
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-lot6.svg"
                  className="home-pasted-image"
                />
              </a>
            </Link>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <a href="#portfolio" className="home-nav4">
                  Portfolio
                </a>
                <a href="#pricing" className="home-nav3">
                  Pricing
                </a>
                <span className="home-nav2">
                  Contact
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </nav>
              <a
                href="mailto:hi@brandsive.com?subject=Hey, I need a logo!"
                className="home-contact P2B button"
              >
                Contact Us
              </a>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-top">
                <Link href="/">
                  <a className="home-link1">
                    <img
                      alt="pastedImage"
                      src="/external/pastedimage-lot6.svg"
                      className="home-pasted-image1"
                    />
                  </a>
                </Link>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <a href="#portfolio" className="home-nav41">
                  Portfolio
                </a>
                <a href="#pricing" className="home-nav31">
                  Pricing
                </a>
                <span className="home-nav21">
                  Contact
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </nav>
              <a
                href="mailto:hi@brandsive.com?subject=Hey, I need a logo!"
                className="home-contact1 P2B button"
              >
                Contact Us
              </a>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-hero">
          <div className="home-container01">
            <h1 className="home-hero-heading H1">
              The Vision You Have, Starts With A Logo. Let&apos;s Create!
            </h1>
            <div className="home-container02">
              <span className="home-hero-sub-heading Content">
                Get started with a memorable logo that will connect with your
                audience and stand out from your competitors.
              </span>
              <a
                href="mailto:hi@brandsive.com?subject=Hey, I need a logo!"
                className="home-hero-button1 button P2B"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="home-features">
          <div className="home-features-container">
            <div className="home-features1">
              <div className="home-container03">
                <p className="sectionTitle">
                  <span>features</span>
                  <br></br>
                </p>
                <h2 className="home-features-heading H2">
                  Unlock the Power of Brandsive
                </h2>
                <span className="home-features-sub-heading Content">
                  Discover the key features that will help you create a
                  compelling brand and achieve your big vision.
                </span>
              </div>
              <div className="home-container04">
                <FeatureCard
                  Heading="Get A Memorable Logo"
                  SubHeading="Create a unique and professional logo that represents your brand identity."
                ></FeatureCard>
                <FeatureCard
                  Heading="Establish A Brand Identity"
                  SubHeading="Get an attractive identity design kit to run your business professionally."
                ></FeatureCard>
                <FeatureCard
                  Heading="Responsive UI/UX Design"
                  SubHeading="Define and articulate your big vision for your business or project."
                ></FeatureCard>
                <FeatureCard
                  Heading="Veteran Creative People"
                  SubHeading="Work closely with our team to bring your ideas to life and achieve your branding goals."
                ></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        <div id="portfolio" className="home-portfolio">
          <div className="home-gallery">
            <h1 className="home-gallery-heading heading2 H2">
              Our Logo Designs
            </h1>
            <span className="home-gallery-sub-heading Content">
              Take a look at some of our stunning logo designs
            </span>
            <div className="home-container05">
              <GalleryCard3
                image_src="/logofolio/hexagon-cutout-logo.svg"
                rootClassName="rootClassName31"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/blue-red-geometric-logo.svg"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/natural-eco-logo.svg"
                rootClassName="rootClassName28"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/circle-corporate-logo-design.svg"
                rootClassName="rootClassName10"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/creative-triangle-logo-tech.svg"
                rootClassName="rootClassName7"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/purple-group-logo.svg"
                rootClassName="rootClassName26"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/elegant-square-logo-modern.svg"
                rootClassName="rootClassName5"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/red-circle-logo-minimal.svg"
                rootClassName="rootClassName25"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/security-style-star-logo.svg"
                rootClassName="rootClassName8"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/multi-dimentional-agency-logo.svg"
                rootClassName="rootClassName29"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/tech-hexagon-minimal-logo.svg"
                rootClassName="rootClassName3"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/visually-different-natural-logo.svg"
                rootClassName="rootClassName6"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/ultra-minimal-logo-symbol.svg"
                rootClassName="rootClassName2"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/tech-arrow-logo-design.svg"
                rootClassName="rootClassName4"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/bright-creative-logomark.svg"
                rootClassName="rootClassName9"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/s-lettermark-logo-symbol.svg"
                rootClassName="rootClassName24"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/government-logo-design.svg"
                rootClassName="rootClassName1"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/modern-tech-logo-design.svg"
                rootClassName="rootClassName30"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/eco-friendly-flower-logo.svg"
                rootClassName="rootClassName11"
              ></GalleryCard3>
              <GalleryCard3
                image_src="/logofolio/nature-eco-logo-symbol.svg"
                rootClassName="rootClassName27"
              ></GalleryCard3>
            </div>
          </div>
        </div>
        <div className="home-pricing">
          <div id="pricing" className="home-pricing1">
            <div className="home-container06">
              <span className="sectionTitle">
                <span>Pricing</span>
                <br></br>
              </span>
              <h2 className="home-pricing-heading heading2 H2">
                Choose the Perfect Plan for Your Branding Needs
              </h2>
              <span className="home-pricing-sub-heading">
                Unlock the full potential of your brand with our flexible
                pricing options
              </span>
            </div>
            <div className="home-container07">
              <div className="home-pricing-card">
                <span className="home-text06 H2">Starter</span>
                <span className="H4">$295</span>
                <div className="home-container08">
                  <div className="home-container09">
                    <svg viewBox="0 0 1024 1024" className="home-icon10">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features Content">
                      Get your logo
                    </span>
                  </div>
                  <div className="home-container10">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features01 Content">
                      7-day delivery
                    </span>
                  </div>
                  <div className="home-container11">
                    <svg viewBox="0 0 1024 1024" className="home-icon14">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features02">
                      All logo files (vector &amp; raster)
                    </span>
                  </div>
                  <div className="home-container12">
                    <svg viewBox="0 0 1024 1024" className="home-icon16">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features03 Content">
                      Unlimited revisions
                    </span>
                  </div>
                </div>
                <button className="home-button P2B button-tertiary">
                  Start With Your Logo
                </button>
              </div>
              <div className="home-pricing-card1">
                <span className="home-text07 H2">Pro</span>
                <span className="H4">$495</span>
                <div className="home-container13">
                  <div className="home-container14">
                    <svg viewBox="0 0 1024 1024" className="home-icon18">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features04">
                      <span className="Content">
                        Get your
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="P2B">responsive</span>
                      <span className="Content"> logo</span>
                    </span>
                  </div>
                  <div className="home-container15">
                    <svg viewBox="0 0 1024 1024" className="home-icon20">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features05 Content">
                      3-day super fast delivery
                    </span>
                  </div>
                  <div className="home-container16">
                    <svg viewBox="0 0 1024 1024" className="home-icon22">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features06">
                      All logo files (vector &amp; raster)
                    </span>
                  </div>
                  <div className="home-container17">
                    <svg viewBox="0 0 1024 1024" className="home-icon24">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features07 Content">
                      Unlimited revisions
                    </span>
                  </div>
                </div>
                <button className="home-button1 button P2B">
                  Get Your Logo Fast
                </button>
              </div>
              <div className="home-pricing-card2">
                <span className="home-text11 H2">
                  <span>Custom</span>
                  <br></br>
                </span>
                <span className="H4">Starts from $1995</span>
                <div className="home-container18">
                  <div className="home-container19">
                    <svg viewBox="0 0 1024 1024" className="home-icon26">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features08">
                      <span className="Content">
                        Get your
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="P2B">responsive</span>
                      <span className="Content"> logo</span>
                    </span>
                  </div>
                  <div className="home-container20">
                    <svg viewBox="0 0 1024 1024" className="home-icon28">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features09 Content">
                      Branding design
                    </span>
                  </div>
                  <div className="home-container21">
                    <svg viewBox="0 0 1024 1024" className="home-icon30">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features10 Content">
                      Website/mobile UI design
                    </span>
                  </div>
                  <div className="home-container22">
                    <svg viewBox="0 0 1024 1024" className="home-icon32">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features11 Content">
                      Prioritized design delivery
                    </span>
                  </div>
                  <div className="home-container23">
                    <svg viewBox="0 0 1024 1024" className="home-icon34">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features12">
                      All files and assets
                    </span>
                  </div>
                  <div className="home-container24">
                    <svg viewBox="0 0 1024 1024" className="home-icon36">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                    <span className="home-free-plan-features13 Content">
                      Unlimited revisions
                    </span>
                  </div>
                </div>
                <button className="home-button2 P2B button-tertiary">
                  Get Your Full Brand
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-banner1">
            <h1 className="home-banner-heading heading2 H2">
              Design Your Brand Identity
            </h1>
            <span className="home-banner-sub-heading">
              Brandsive offers professional logo design services.
            </span>
            <a
              href="mailto:hi@brandsive.com?subject=Hey, I need a logo!"
              className="P2B button-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="home-faq">
          <div className="home-faq1">
            <div className="home-container25">
              <span className="sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text20 heading2 H2">Common questions</h2>
              <span className="home-text21 Content">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container26">
              <Question
                Answer="The time it takes to create a logo depends on the complexity of the design and the number of revisions required. Typically, our logo design process takes around 3-7 days.."
                Question="How long does it take to create a logo?"
              ></Question>
              <Question
                Answer="Absolutely! We encourage our clients to share their design ideas and inspirations with us. Our team will work closely with you to bring your vision to life."
                Question="Can I provide my own design ideas for the logo?"
              ></Question>
              <Question
                Answer="Upon completion of your logo design, we will provide you with high-resolution files in various formats, including JPEG, PNG, SVG, and EPS. These files can be used for both print and digital purposes."
                Question="What file formats will I receive for my logo?"
              ></Question>
              <Question
                Answer="Yes, we offer unlimited revisions for the logo design. We want to ensure that you are completely satisfied with the final result."
                Question="Do you offer revisions for the logo design?"
              ></Question>
              <Question
                Answer="The cost of creating a logo varies depending on the complexity of the design and the specific requirements. Please check out the pricing section or contact us for a personalized quote based on your needs."
                Question="What is the cost of creating a logo?"
              ></Question>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-footer1">
            <div className="home-container27">
              <span className="home-logo">BRANDSIVE</span>
              <nav className="home-links2">
                <span className="home-nav42">Portfolio</span>
                <span className="home-nav32">Pricing</span>
                <span className="home-nav22">Contact Us</span>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container28">
              <span className="home-text38 Content">
                ©2023 - 2024 Brandsive, All Rights Reserved.
              </span>
              <div className="home-icon-group1">
                <a
                  href="https://twitter.com/brandsive"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon38"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/brandsive"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon40"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com/brandsive"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link4"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon42"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            color: var(--dl-color-ui-1000);
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-ui-100);
          }
          .home-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            position: sticky;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .home-link {
            display: contents;
          }
          .home-pasted-image {
            width: 156px;
            height: 32px;
            text-decoration: none;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-nav4 {
            transition: 0.3s;
            text-decoration: none;
          }
          .home-nav4:hover {
            color: #3d6e70ff;
          }
          .home-nav3 {
            transition: 0.3s;
            text-decoration: none;
          }
          .home-nav3:hover {
            color: #3d6e70ff;
          }
          .home-nav2 {
            transition: 0.3s;
          }
          .home-nav2:hover {
            color: #3d6e70ff;
          }
          .home-contact {
            border-color: var(--dl-color-primary1-blue100);
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            z-index: 100;
            position: absolute;
            border-radius: 12px;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-ui-0);
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-link1 {
            display: contents;
          }
          .home-pasted-image1 {
            width: 156px;
            height: 32px;
            text-decoration: none;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            fill: var(--dl-color-ui-900);
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-nav41 {
            transition: 0.3s;
            text-decoration: none;
          }
          .home-nav41:hover {
            color: #3d6e70ff;
          }
          .home-nav31 {
            transition: 0.3s;
            text-decoration: none;
          }
          .home-nav31:hover {
            color: #3d6e70ff;
          }
          .home-nav21 {
            transition: 0.3s;
          }
          .home-nav21:hover {
            color: #3d6e70ff;
          }
          .home-contact1 {
            width: 100%;
            border-color: var(--dl-color-primary1-blue100);
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container01 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-hero-heading {
            color: var(--dl-color-gray-white);
            width: 100%;
            max-width: var(--dl-size-size-maxwidth);
            text-align: left;
          }
          .home-container02 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 888px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero-sub-heading {
            color: var(--dl-color-gray-white);
            width: 100%;
            text-align: left;
          }
          .home-hero-button1 {
            transition: 0.3s;
          }
          .home-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-features1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
          }
          .home-container03 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-features-heading {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-features-sub-heading {
            color: var(--dl-color-ui-600);
            text-align: center;
          }
          .home-container04 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fourunits);
            grid-template-columns: 1fr 1fr;
          }
          .home-portfolio {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-gallery {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-gallery-heading {
            text-align: center;
          }
          .home-gallery-sub-heading {
            color: var(--dl-color-ui-600);
            text-align: center;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .home-container05 {
            gap: 60px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-twounits);
          }
          .home-pricing {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-pricing1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container06 {
            gap: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-pricing-heading {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-pricing-sub-heading {
            color: var(--dl-color-ui-800);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .home-container07 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
          }
          .home-pricing-card {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 384px;
            align-self: stretch;
            min-height: 450px;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-ui-0);
          }
          .home-text06 {
            text-align: center;
          }
          .home-container08 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container09 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon10 {
            fill: var(--dl-color-ui-500);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features {
            color: var(--dl-color-ui-1000);
            text-align: left;
          }
          .home-container10 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon12 {
            fill: var(--dl-color-ui-500);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features01 {
            color: var(--dl-color-ui-1000);
            text-align: left;
          }
          .home-container11 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon14 {
            fill: var(--dl-color-ui-500);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features02 {
            color: var(--dl-color-ui-1000);
            text-align: left;
          }
          .home-container12 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon16 {
            fill: var(--dl-color-ui-500);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features03 {
            color: var(--dl-color-ui-1000);
            text-align: left;
          }
          .home-button {
            width: 100%;
            border-color: var(--dl-color-ui-1000);
            border-width: 1px;
            background-color: transparent;
          }
          .home-pricing-card1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 384px;
            align-self: stretch;
            min-height: 450px;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-ui-0);
          }
          .home-text07 {
            color: var(--dl-color-primary-600);
            text-align: center;
          }
          .home-container13 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container14 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon18 {
            fill: var(--dl-color-primary-600);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features04 {
            color: var(--dl-color-ui-1000);
            font-size: 19px;
            text-align: left;
            font-family: 'Inter';
            line-height: 34px;
            letter-spacing: -0.25px;
            text-transform: none;
            text-decoration: none;
          }
          .home-container15 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon20 {
            fill: var(--dl-color-primary-600);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features05 {
            color: var(--dl-color-ui-1000);
            text-align: left;
          }
          .home-container16 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon22 {
            fill: var(--dl-color-primary-600);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features06 {
            color: var(--dl-color-ui-1000);
            text-align: left;
          }
          .home-container17 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon24 {
            fill: var(--dl-color-primary-600);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features07 {
            color: var(--dl-color-ui-1000);
            text-align: left;
          }
          .home-button1 {
            width: 100%;
          }
          .home-pricing-card2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 384px;
            align-self: stretch;
            min-height: 450px;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            background-color: var(--dl-color-ui-0);
          }
          .home-text11 {
            text-align: center;
          }
          .home-container18 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container19 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon26 {
            fill: var(--dl-color-ui-500);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features08 {
            color: var(--dl-color-ui-1000);
            font-size: 19px;
            text-align: left;
            font-family: 'Inter';
            line-height: 34px;
            letter-spacing: -0.25px;
            text-transform: none;
            text-decoration: none;
          }
          .home-container20 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon28 {
            fill: var(--dl-color-ui-500);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features09 {
            color: var(--dl-color-ui-1000);
            font-size: 19px;
            text-align: left;
            font-family: 'Inter';
            line-height: 34px;
            letter-spacing: -0.25px;
            text-transform: none;
            text-decoration: none;
          }
          .home-container21 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon30 {
            fill: var(--dl-color-ui-500);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features10 {
            color: var(--dl-color-ui-1000);
            font-size: 19px;
            text-align: left;
            font-family: 'Inter';
            line-height: 34px;
            letter-spacing: -0.25px;
            text-transform: none;
            text-decoration: none;
          }
          .home-container22 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon32 {
            fill: var(--dl-color-ui-500);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features11 {
            color: var(--dl-color-ui-1000);
            text-align: left;
          }
          .home-container23 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon34 {
            fill: var(--dl-color-ui-500);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features12 {
            color: var(--dl-color-ui-1000);
            text-align: left;
          }
          .home-container24 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon36 {
            fill: var(--dl-color-ui-500);
            width: 24px;
            height: 24px;
          }
          .home-free-plan-features13 {
            color: var(--dl-color-ui-1000);
            text-align: left;
          }
          .home-button2 {
            width: 100%;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-primary-700);
          }
          .home-banner1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-maxwidth);
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .home-banner-heading {
            color: var(--dl-color-ui-0);
            text-align: center;
          }
          .home-banner-sub-heading {
            color: var(--dl-color-ui-0);
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            line-height: 1.6;
          }
          .home-faq {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-faq1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-container25 {
            display: flex;
            max-width: 35%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text20 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text21 {
            color: var(--dl-color-ui-800);
            text-align: left;
          }
          .home-container26 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 650px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-ui-1000);
          }
          .home-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: space-between;
          }
          .home-container27 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-logo {
            color: var(--dl-color-ui-0);
            font-size: 2em;
            font-weight: bold;
          }
          .home-links2 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-nav42 {
            color: var(--dl-color-ui-0);
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav42:hover {
            color: #3d6e70ff;
          }
          .home-nav32 {
            color: var(--dl-color-ui-0);
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav32:hover {
            color: #3d6e70ff;
          }
          .home-nav22 {
            color: var(--dl-color-ui-0);
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav22:hover {
            color: #3d6e70ff;
          }
          .home-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-ui-800);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container28 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text38 {
            color: var(--dl-color-ui-0);
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link2 {
            display: contents;
          }
          .home-icon38 {
            fill: var(--dl-color-ui-0);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link3 {
            display: contents;
          }
          .home-icon40 {
            fill: var(--dl-color-ui-0);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link4 {
            display: contents;
          }
          .home-icon42 {
            fill: var(--dl-color-ui-0);
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-container01 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-heading {
              text-align: center;
            }
            .home-gallery-sub-heading {
              text-align: center;
            }
            .home-container07 {
              align-items: center;
              flex-direction: column;
            }
            .home-pricing-card {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 450px;
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
            }
            .home-banner-sub-heading {
              max-width: 100%;
            }
            .home-text21 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container04 {
              grid-template-columns: 1fr;
            }
            .home-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-gallery-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-pricing1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container07 {
              align-items: center;
              flex-direction: column;
            }
            .home-pricing-card {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container25 {
              max-width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text21 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container28 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text38 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-header {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-icon {
              width: 1.5rem;
              height: 1.5rem;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-icon02 {
              fill: var(--dl-color-ui-900);
              width: 1.5rem;
              height: 1.5rem;
            }
            .home-links1 {
              flex: 0 0 auto;
            }
            .home-hero {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container01 {
              flex-wrap: wrap;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero-heading {
              font-size: 40px;
              text-align: left;
              letter-spacing: -1.5px;
            }
            .home-features1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-features-heading {
              font-size: 32px;
              letter-spacing: -1px;
            }
            .home-features-sub-heading {
              text-align: left;
            }
            .home-gallery {
              padding: var(--dl-space-space-unit);
            }
            .home-pricing1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-container06 {
              align-items: flex-start;
            }
            .home-pricing-heading {
              font-size: 32px;
              letter-spacing: -1px;
            }
            .home-pricing-sub-heading {
              text-align: left;
            }
            .home-pricing-card {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .home-pricing-card2 {
              margin-bottom: 0px;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-faq {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container28 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text38 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
