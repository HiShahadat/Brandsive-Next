import React from 'react'
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
            <span className="home-logo">BRANDSIVE</span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <span className="home-nav4">Portfolio</span>
                <span className="home-nav3">Pricing</span>
                <span className="home-nav2">Contact Us</span>
              </nav>
              <button className="home-register button">Register</button>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <span className="home-logo1">BRANDSIVE</span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <span className="home-nav1">Home</span>
                  <span className="home-nav21">Contact Us</span>
                  <span className="home-nav31">Pricing</span>
                  <span className="home-nav41">Team</span>
                  <span className="home-nav5">Blog</span>
                </nav>
                <div className="home-buttons">
                  <button className="home-login button">Login</button>
                  <button className="home-register1 button">Register</button>
                </div>
              </div>
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
          <div className="home-hero1">
            <div className="home-container01">
              <h1 className="home-hero-heading heading1">Create Your Logo</h1>
              <span className="home-hero-sub-heading">
                Brandsive: Your Vision, Your Brand
              </span>
              <button className="home-hero-button1 button">Get Started</button>
            </div>
          </div>
        </div>
        <div className="home-features">
          <div className="home-features-container">
            <div className="home-features1">
              <div className="home-container02">
                <span className="home-text sectionTitle">
                  <span>features</span>
                  <br></br>
                </span>
                <h2 className="home-features-heading heading2">
                  Unlock the Power of Brandsive
                </h2>
                <span className="home-features-sub-heading">
                  Discover the key features that will help you create a
                  compelling brand and achieve your big vision.
                </span>
              </div>
              <div className="home-container03">
                <FeatureCard
                  Heading="Custom Logo Design"
                  SubHeading="Create a unique and professional logo that represents your brand identity."
                ></FeatureCard>
                <FeatureCard
                  Heading="Brand Development"
                  SubHeading="Build a strong and cohesive brand that resonates with your target audience."
                ></FeatureCard>
                <FeatureCard
                  Heading="Big Vision Planning"
                  SubHeading="Define and articulate your big vision for your business or project."
                ></FeatureCard>
                <FeatureCard
                  Heading="Collaborative Process"
                  SubHeading="Work closely with our team to bring your ideas to life and achieve your branding goals."
                ></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-pricing">
          <div className="home-pricing1">
            <div className="home-container04">
              <span className="home-text03 sectionTitle">
                <span>Pricing</span>
                <br></br>
              </span>
              <h2 className="home-pricing-heading heading2">
                Choose the Perfect Plan for Your Branding Needs
              </h2>
              <span className="home-pricing-sub-heading">
                Unlock the full potential of your brand with our flexible
                pricing options
              </span>
            </div>
            <div className="home-container05">
              <div className="home-pricing-card">
                <div className="home-container06">
                  <span className="home-text06 heading3">Free</span>
                  <span className="home-free-plan-description">
                    Create your logo and brand for free with our basic features
                  </span>
                </div>
                <div className="home-container07">
                  <span className="home-text07">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-free-plan-price">0</span>
                </div>
                <div className="home-container08">
                  <div className="home-container09">
                    <span className="home-text10">✔</span>
                    <span className="home-free-plan-features">
                      Access to our logo design tool
                    </span>
                  </div>
                  <div className="home-container10">
                    <span className="home-text11">✔</span>
                    <span className="home-free-plan-features1">
                      Choose from a library of fonts and icons
                    </span>
                  </div>
                  <div className="home-container11">
                    <span className="home-text12">✔</span>
                    <span className="home-free-plan-features2">
                      Customize colors and layouts
                    </span>
                  </div>
                  <div className="home-container12">
                    <span className="home-text13">✔</span>
                    <span className="home-free-plan-features3">
                      Download high-resolution logo files
                    </span>
                  </div>
                </div>
                <button className="home-button button">
                  Continue with Free
                </button>
              </div>
              <div className="home-pricing-card1">
                <div className="home-container13">
                  <span className="home-text14 heading3">BASIC</span>
                  <span className="home-basic-plan-description">
                    Upgrade to our Basic plan for more advanced features and
                    customization options
                  </span>
                </div>
                <div className="home-container14">
                  <span className="home-text15">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-basic-plan-pricing">7</span>
                  <span className="home-text18">/ month</span>
                </div>
                <div className="home-container15">
                  <div className="home-container16">
                    <span className="home-text19">✔</span>
                    <span className="home-text20">
                      All features of FREE plan
                    </span>
                  </div>
                  <div className="home-container17">
                    <span className="home-text21">✔</span>
                    <span className="home-basic-plan-features">
                      All features of the Free plan
                    </span>
                  </div>
                  <div className="home-container18">
                    <span className="home-text22">✔</span>
                    <span className="home-basic-plan-features1">
                      Additional font and icon options
                    </span>
                  </div>
                  <div className="home-container19">
                    <span className="home-text23">✔</span>
                    <span className="home-basic-plan-features2">
                      Advanced color customization
                    </span>
                  </div>
                  <div className="home-container20">
                    <span className="home-text24">✔</span>
                    <span className="home-basic-plan-features3">
                      Priority email support
                    </span>
                  </div>
                </div>
                <button className="home-button1 button">
                  Try the Basic plan
                </button>
              </div>
              <div className="home-pricing-card2">
                <div className="home-container21">
                  <span className="home-text25 heading3">
                    <span>PRO</span>
                    <br></br>
                  </span>
                  <span className="home-pro-plan-description">
                    Get the ultimate branding experience with our Pro plan,
                    including premium features and dedicated support
                  </span>
                </div>
                <div className="home-container22">
                  <span className="home-text28">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-pro-plan-pricing">20</span>
                  <span className="home-text31">/ month</span>
                </div>
                <div className="home-container23">
                  <div className="home-container24">
                    <span className="home-text32">✔</span>
                    <span className="home-text33">
                       All features of BASIC plan
                    </span>
                  </div>
                  <div className="home-container25">
                    <span className="home-text34">✔</span>
                    <span className="home-pro-plan-features">
                      All features of the Basic plan
                    </span>
                  </div>
                  <div className="home-container26">
                    <span className="home-text35">✔</span>
                    <span className="home-pro-plan-features1">
                      Exclusive access to premium fonts and icons
                    </span>
                  </div>
                  <div className="home-container27">
                    <span className="home-text36">✔</span>
                    <span className="home-pro-plan-features2">
                      Advanced layout customization
                    </span>
                  </div>
                </div>
                <button className="home-button2 button">
                  Try the PRO plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-gallery">
          <div className="home-gallery1">
            <h1 className="home-gallery-heading heading2">Our Logo Designs</h1>
            <span className="home-gallery-sub-heading">
              Take a look at some of our stunning logo designs
            </span>
            <div className="home-container28">
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTYxNTQwN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1594566641434-ae8e88662ed9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTYxNTQwN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName1"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1650951478133-27538c57a484?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTYxNTQwN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName3"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTYxNTQwN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName2"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1518841252147-00cc0a43dcaf?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTYxNTQwN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName4"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1610128980054-68d94619e243?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTYxNTQwN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName5"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1655437448675-f7684e62efe3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTYxNTQwN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName6"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1652156752342-c786f1e1d1ce?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTYxNTQwN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName7"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1658204212985-e0126040f88f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTYxNTQwN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName8"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1533012551678-bb8804b3d159?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTYxNTQwN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName9"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1658203897369-e465cf1c5758?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTYxNTQwN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName10"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1509765066291-6b5dd612da2b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTYxNTQwN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName11"
              ></GalleryCard3>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-banner1">
            <h1 className="home-banner-heading heading2">
              Design Your Brand Identity
            </h1>
            <span className="home-banner-sub-heading">
              Brandsive offers professional logo design services.
            </span>
            <button className="home-banner-button button">Read More</button>
          </div>
        </div>
        <div className="home-faq">
          <div className="home-faq-container">
            <div className="home-faq1">
              <div className="home-container29">
                <span className="home-text37 sectionTitle">
                  <span>FAQ</span>
                  <br></br>
                </span>
                <h2 className="home-text40 heading2">Common questions</h2>
                <span className="home-text41">
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
              <div className="home-container30">
                <Question
                  Answer="The time it takes to create a logo depends on the complexity of the design and the number of revisions required. Typically, our logo design process takes around 2-3 weeks."
                  Question="How long does it take to create a logo?"
                ></Question>
                <Question
                  Answer="Absolutely! We encourage our clients to share their design ideas and inspirations with us. Our team will work closely with you to bring your vision to life."
                  Question="Can I provide my own design ideas for the logo?"
                ></Question>
                <Question
                  Answer="Upon completion of your logo design, we will provide you with high-resolution files in various formats, including JPEG, PNG, and EPS. These files can be used for both print and digital purposes."
                  Question="What file formats will I receive for my logo?"
                ></Question>
                <Question
                  Answer="Yes, we offer up to three rounds of revisions for the logo design. We want to ensure that you are completely satisfied with the final result."
                  Question="Do you offer revisions for the logo design?"
                ></Question>
                <Question
                  Answer="The cost of creating a logo varies depending on the complexity of the design and the specific requirements. Please contact us for a personalized quote based on your needs."
                  Question="What is the cost of creating a logo?"
                ></Question>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-footer1">
            <div className="home-container31">
              <span className="home-logo2">BRANDSIVE</span>
              <nav className="home-links2">
                <span className="home-nav42">Portfolio</span>
                <span className="home-nav32">Pricing</span>
                <span className="home-nav22">Contact Us</span>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container32">
              <span className="home-text58">
                ©2023 - 2024 Brandsive, All Rights Reserved.
              </span>
              <div className="home-icon-group1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon10"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon12"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon14"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: var(--dl-color-primary1-blue80);
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            position: sticky;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .home-logo {
            font-size: 2em;
            font-family: 'Lato';
            font-weight: bold;
            text-transform: uppercase;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-nav4 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav4:hover {
            color: #3d6e70ff;
          }
          .home-nav3 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav3:hover {
            color: #3d6e70ff;
          }
          .home-nav2 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav2:hover {
            color: #3d6e70ff;
          }
          .home-register {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-weight: bold;
            border-color: var(--dl-color-primary1-blue100);
            padding-left: 1.5rem;
            border-radius: 45px;
            padding-right: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-register:hover {
            border-color: rgba(41, 20, 119, 0.9);
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            background-color: rgba(41, 20, 119, 0.9);
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
            padding: 32px;
            z-index: 100;
            position: absolute;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            font-size: 2em;
            font-weight: bold;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            fill: var(--dl-color-gray-900);
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-nav1 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav21 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav31 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav41 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav5 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            border-color: var(--dl-color-primary1-blue100);
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
          }
          .home-register1 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            border-color: var(--dl-color-primary1-blue100);
            border-width: 1px;
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-register1:hover {
            border-color: #849492ff;
            background-color: #849492ff;
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
            justify-content: center;
            background-color: var(--dl-color-primary1-blue80);
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container01 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero-heading {
            color: var(--dl-color-gray-white);
            max-width: 800px;
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-hero-sub-heading {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .home-hero-button1 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-primary1-blue100);
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-hero-button1:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
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
            background-color: var(--dl-color-secondary-grey400);
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
          .home-container02 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text {
            color: var(--dl-color-primary1-blue80);
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-features-heading {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-features-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .home-container03 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
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
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-container04 {
            gap: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text03 {
            color: var(--dl-color-primary1-blue80);
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-pricing-heading {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-pricing-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .home-container05 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
          }
          .home-pricing-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            align-self: stretch;
            min-height: 450px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-primary1-blue60);
          }
          .home-container06 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text06 {
            font-family: 'Raleway';
            font-weight: bold;
            text-transform: uppercase;
          }
          .home-free-plan-description {
            line-height: 1.6;
          }
          .home-container07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text07 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-free-plan-price {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container08 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container09 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text10 {
            color: var(--dl-color-gray-800);
          }
          .home-free-plan-features {
            color: var(--dl-color-gray-800);
          }
          .home-container10 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text11 {
            color: var(--dl-color-gray-800);
          }
          .home-free-plan-features1 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container11 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text12 {
            color: var(--dl-color-gray-800);
          }
          .home-free-plan-features2 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container12 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text13 {
            color: var(--dl-color-gray-800);
          }
          .home-free-plan-features3 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-button {
            color: var(--dl-color-gray-black);
            width: 100%;
            margin-top: auto;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1rem;
            border-color: var(--dl-color-primary1-blue100);
            border-radius: 45px;
            padding-bottom: 1rem;
            background-color: transparent;
          }
          .home-button:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(217, 217, 217, 0.1);
          }
          .home-pricing-card1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            align-self: stretch;
            min-height: 450px;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: var(--dl-color-primary1-blue60);
          }
          .home-container13 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text14 {
            font-family: 'Raleway';
            font-weight: bold;
            text-transform: uppercase;
          }
          .home-basic-plan-description {
            line-height: 1.6;
          }
          .home-container14 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text15 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-basic-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-text18 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-container15 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-container16 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text19 {
            color: var(--dl-color-gray-800);
          }
          .home-text20 {
            color: var(--dl-color-gray-800);
          }
          .home-container17 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text21 {
            color: var(--dl-color-gray-800);
          }
          .home-basic-plan-features {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container18 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text22 {
            color: var(--dl-color-gray-800);
          }
          .home-basic-plan-features1 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container19 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text23 {
            color: var(--dl-color-gray-800);
          }
          .home-basic-plan-features2 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container20 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text24 {
            color: var(--dl-color-gray-800);
          }
          .home-basic-plan-features3 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-button1 {
            color: var(--dl-color-gray-white);
            width: 100%;
            margin-top: auto;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1rem;
            border-color: rgba(41, 20, 119, 0.9);
            border-width: 0px;
            border-radius: 45px;
            padding-bottom: 1rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-button1:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-pricing-card2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            align-self: stretch;
            min-height: 450px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-primary1-blue60);
          }
          .home-container21 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text25 {
            font-family: 'Raleway';
            font-weight: bold;
            text-transform: uppercase;
          }
          .home-pro-plan-description {
            line-height: 1.6;
          }
          .home-container22 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text28 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-pro-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-text31 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-container23 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text32 {
            color: var(--dl-color-gray-800);
          }
          .home-text33 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container25 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text34 {
            color: var(--dl-color-gray-800);
          }
          .home-pro-plan-features {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container26 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text35 {
            color: var(--dl-color-gray-800);
          }
          .home-pro-plan-features1 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container27 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text36 {
            color: var(--dl-color-gray-800);
          }
          .home-pro-plan-features2 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-button2 {
            color: var(--dl-color-gray-white);
            width: 100%;
            margin-top: auto;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1rem;
            border-color: #3d6e70ff;
            border-width: 0px;
            border-radius: 45px;
            padding-bottom: 1rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-button2:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-gallery {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-gallery1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-gallery-heading {
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-gallery-sub-heading {
            color: rgb(153, 153, 153);
            text-align: center;
            line-height: 1.6;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .home-container28 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
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
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-banner-sub-heading {
            color: var(--dl-color-gray-white);
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            line-height: 1.6;
          }
          .home-banner-button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1.5rem;
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-banner-button:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-faq {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-faq-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-faq1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-container29 {
            display: flex;
            max-width: 35%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text37 {
            color: var(--dl-color-primary1-blue80);
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text40 {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text41 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
          }
          .home-container30 {
            gap: var(--dl-space-space-oneandhalfunits);
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
            background-color: var(--dl-color-gray-black);
          }
          .home-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .home-container31 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-logo2 {
            color: var(--dl-color-gray-white);
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
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav42:hover {
            color: #3d6e70ff;
          }
          .home-nav32 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav32:hover {
            color: #3d6e70ff;
          }
          .home-nav22 {
            color: var(--dl-color-gray-white);
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
            border-color: var(--dl-color-gray-800);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container32 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text58 {
            color: var(--dl-color-secondary-gray500);
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon10 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon12 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon14 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .home-hero1 {
              flex-direction: column;
            }
            .home-container01 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-heading {
              text-align: center;
            }
            .home-hero-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-features-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-pricing-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-container05 {
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
            .home-gallery-sub-heading {
              text-align: center;
            }
            .home-container28 {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-banner-sub-heading {
              max-width: 100%;
            }
            .home-text41 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
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
            .home-nav1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav21 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav31 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav41 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav5 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container03 {
              grid-template-columns: 1fr;
            }
            .home-pricing1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-pricing-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container05 {
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
            .home-gallery1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-gallery-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container28 {
              grid-template-columns: 1fr 1fr;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-faq1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-container29 {
              max-width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text41 {
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
            .home-container32 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text58 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              width: 90%;
              padding: var(--dl-space-space-unit);
            }
            .home-logo {
              font-size: 1.5em;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-logo1 {
              font-size: 1.5em;
            }
            .home-icon02 {
              fill: var(--dl-color-gray-900);
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card2 {
              margin-bottom: 0px;
            }
            .home-gallery1 {
              padding: var(--dl-space-space-unit);
            }
            .home-container28 {
              grid-template-columns: 1fr;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container32 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text58 {
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
