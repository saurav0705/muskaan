import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>happy-birthday-shubham</title>
        <meta property="og:title" content="happy-birthday-shubham" />
      </Helmet>
      <section className="home-hero">
        <video
          src="https://i.pinimg.com/originals/36/97/84/36978443fd3cdf55d4895b78755cedce.jpg"
          poster="/playground_assets/whatsapp%20image%202023-05-06%20at%2014.21.36-1500h.jpeg"
          className="home-video"
        ></video>
        <header data-thq="thq-navbar" className="home-navbar">
          <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <img
                  alt="image"
                  src="/playground_assets/logo.svg"
                  className="home-image"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
              </nav>
              <div className="home-container2">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon02">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon04">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon06">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header"></div>
          </div>
          <h1 className="home-heading">
            <span>Happy Birthday Saurav!!</span>
            <br></br>
          </h1>
        </div>
      </section>
      <section className="home-slider">
        <div className="home-header1">
          <h2 className="home-heading1">My wish for you.</h2>
        </div>
        <div className="home-selector">
          <p className="home-caption">
            <span>May you start prioritising yourself.</span>
            <br></br>
            <span>May you sleep better at night.</span>
            <br></br>
            <span>May you find people who loves you unconditionally.</span>
            <br></br>
            <span>May you start feeling the same like before at home.</span>
            <br></br>
          </p>
          <div className="home-slide-titles">
            <div className="home-slide-title slide-title"></div>
            <div className="home-slide-title1 slide-title slide-title-active"></div>
            <div className="home-slide-title2 slide-title"></div>
          </div>
        </div>
      </section>
      <section className="home-objectives"></section>
      <section className="home-experience">
        <div className="home-images">
          <div className="home-square"></div>
          <img
            alt="image"
            src="/playground_assets/whatsapp%20image%202023-05-06%20at%2014.21.08-1400w.jpeg"
            className="home-image1"
          />
        </div>
        <div className="home-content">
          <div className="home-header2">
            <div className="home-header-container1">
              <div className="home-header3">
                <h2 className="home-heading2">Things I l(ik/ov)e about you:</h2>
              </div>
              <p className="home-caption1">
                Please note: this is not an exhaustive list
              </p>
            </div>
            <div className="home-checkmarks">
              <div className="home-check">
                <div className="home-mark">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M768 384q52 0 90 38t38 90v66q0 34-25 59t-59 25-58-24l-92-92-92 92q-24 24-59 24t-59-24l-90-92-92 92q-24 24-58 24t-59-25-25-59v-66q0-52 38-90t90-38h214v-86h84v86h214zM708 682q44 44 104 44 44 0 84-26v196q0 18-12 30t-30 12h-684q-18 0-30-12t-12-30v-196q38 26 84 26 60 0 104-44l46-46 46 46q42 42 104 42t104-42l46-46zM512 256q-34 0-60-26t-26-60q0-22 14-44l72-126 72 126q14 22 14 44 0 36-25 61t-61 25z"></path>
                  </svg>
                </div>
                <span className="home-text15">
                  you are disciplined and you go to gymmmmm (this makes you
                  super attractive to me.
                </span>
              </div>
              <div className="home-check1">
                <div className="home-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M768 384q52 0 90 38t38 90v66q0 34-25 59t-59 25-58-24l-92-92-92 92q-24 24-59 24t-59-24l-90-92-92 92q-24 24-58 24t-59-25-25-59v-66q0-52 38-90t90-38h214v-86h84v86h214zM708 682q44 44 104 44 44 0 84-26v196q0 18-12 30t-30 12h-684q-18 0-30-12t-12-30v-196q38 26 84 26 60 0 104-44l46-46 46 46q42 42 104 42t104-42l46-46zM512 256q-34 0-60-26t-26-60q0-22 14-44l72-126 72 126q14 22 14 44 0 36-25 61t-61 25z"></path>
                  </svg>
                </div>
                <span className="home-text16">
                  you are man of principles and rules, but broke a few for me.
                </span>
              </div>
              <div className="home-check2">
                <div className="home-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M768 384q52 0 90 38t38 90v66q0 34-25 59t-59 25-58-24l-92-92-92 92q-24 24-59 24t-59-24l-90-92-92 92q-24 24-58 24t-59-25-25-59v-66q0-52 38-90t90-38h214v-86h84v86h214zM708 682q44 44 104 44 44 0 84-26v196q0 18-12 30t-30 12h-684q-18 0-30-12t-12-30v-196q38 26 84 26 60 0 104-44l46-46 46 46q42 42 104 42t104-42l46-46zM512 256q-34 0-60-26t-26-60q0-22 14-44l72-126 72 126q14 22 14 44 0 36-25 61t-61 25z"></path>
                  </svg>
                </div>
                <span className="home-text17">you give me your t-shirts.</span>
              </div>
              <div className="home-check3">
                <div className="home-mark3">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M768 384q52 0 90 38t38 90v66q0 34-25 59t-59 25-58-24l-92-92-92 92q-24 24-59 24t-59-24l-90-92-92 92q-24 24-58 24t-59-25-25-59v-66q0-52 38-90t90-38h214v-86h84v86h214zM708 682q44 44 104 44 44 0 84-26v196q0 18-12 30t-30 12h-684q-18 0-30-12t-12-30v-196q38 26 84 26 60 0 104-44l46-46 46 46q42 42 104 42t104-42l46-46zM512 256q-34 0-60-26t-26-60q0-22 14-44l72-126 72 126q14 22 14 44 0 36-25 61t-61 25z"></path>
                  </svg>
                </div>
                <span className="home-text18">
                  somethings are better left unsaid :P
                </span>
              </div>
            </div>
          </div>
          <div className="home-testimonial">
            <div className="home-content1">
              <p className="home-text19">
                its okay if you are not excited for your birthday, be excited
                for mine.
              </p>
            </div>
            <div className="home-information">
              <div className="home-author">
                <img
                  alt="image"
                  src="/playground_assets/whatsapp%20image%202023-05-06%20at%2014.21.20-200w.jpeg"
                  className="home-icon16"
                />
                <span className="home-name">Muskaan Rathi</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-create">
        <div className="home-content2">
          <div className="home-header4">
            <h2 className="home-heading3">
              <span>See you soon &lt;3</span>
              <br></br>
            </h2>
          </div>
        </div>
      </section>
      <div>
        <DangerousHTML
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home
