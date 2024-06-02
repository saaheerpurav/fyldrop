import React, { useRef } from 'react'

import { Helmet } from 'react-helmet'

import { ref, set, increment } from "firebase/database";
import { db } from "../firebase";

import NavigationLinks from '../components/navigation-links'
import EmailForm from '../components/email-form'
import './home.css'


const Home = (props) => {
  const featureSectionRef = useRef(null);
  const pricingSectionRef = useRef(null);
  const downloadSectionRef = useRef(null);

  const downloadFile = async (platform) => {
    await set(ref(db, `downloads/${platform}`), increment(1));
  }

  return (
    <div className="home-container">
      <Helmet>
        <title>FylDrop</title>
        <meta property="og:title" content="FylDrop" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <div className="home-container01">
          <img
            alt="image"
            src="/logo.png"
            className="home-image"
          />
          <h3 className="home-text">
            <span>FylDrop</span>
            <br></br>
          </h3>
          <div className="home-nav">
            <nav className="navigation-links-nav">
              <span onClick={() => { featureSectionRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="navigation-links-text">Features</span>
              <span onClick={() => { pricingSectionRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="navigation-links-text">Pricing</span>
            </nav>
          </div>
        </div>
        <div className="home-btn-group">
          <button className="home-button button">
            <span>
              <span onClick={() => { downloadSectionRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="home-text004">Download Now</span>
              <br></br>
            </span>
          </button>
        </div>
        <div data-role="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <nav className="home-nav1">
            <div className="home-container02">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="home-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
          </nav>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-container03">
          <h1 className="home-text006">
            <span className="home-text007">Transfer files and photos </span>
            <span>to your devices</span>
            <br></br>
          </h1>
          <h2 className="home-text010">
            <span>Swiftly, Wirelessly, Hassle-free</span>
            <br></br>
          </h2>
          <span>
            <span>
              Download now for free. No credit card or signup required.
            </span>
            <br></br>
          </span>
        </div>
        <video
          src="showcase.mp4"
          loop
          muted
          autoPlay
          className="home-video"
        ></video>
      </div>
      <div ref={featureSectionRef} className="home-features">
        <h1 className="home-text016">
          <span>Why use FylDrop</span>
          <br></br>
        </h1>
        <div className="home-container04">
          <div className="home-feature-card">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M439.424 225.92c8.32-8.363 19.157-12.544 30.123-12.587s21.845 4.096 30.208 12.416 12.544 19.157 12.587 30.123-4.096 21.845-12.416 30.208c-8.192 8.277-18.859 12.459-29.739 12.587h-384.853c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h385.835c32.341-0.384 64.683-12.971 89.301-37.76 24.917-25.045 37.333-57.941 37.205-90.624s-12.715-65.493-37.76-90.411-57.899-37.291-90.581-37.205-65.493 12.715-90.411 37.76c-16.64 16.725-16.555 43.733 0.171 60.331s43.733 16.512 60.331-0.171zM506.923 858.24c24.917 25.045 57.685 37.675 90.411 37.76s65.579-12.331 90.624-37.205 37.675-57.685 37.76-90.411-12.331-65.579-37.205-90.624c-24.619-24.789-56.96-37.376-89.301-37.76h-513.877c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h512.853c10.88 0.128 21.547 4.309 29.781 12.587 8.32 8.363 12.459 19.243 12.416 30.208s-4.224 21.803-12.587 30.123-19.243 12.459-30.208 12.416-21.803-4.224-30.123-12.587c-16.597-16.725-43.648-16.811-60.331-0.171s-16.811 43.648-0.171 60.331zM786.603 360.021c12.544-12.501 28.843-18.688 45.269-18.688s32.725 6.272 45.227 18.816 18.688 28.843 18.688 45.269-6.272 32.725-18.816 45.227c-12.459 12.459-28.715 18.645-45.099 18.688l-746.539-0c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h746.752c38.016-0.085 76.117-14.592 105.216-43.605 29.184-29.099 43.819-67.371 43.861-105.557s-14.507-76.459-43.605-105.643-67.413-43.819-105.557-43.861-76.459 14.507-105.643 43.605c-16.683 16.64-16.725 43.648-0.085 60.331s43.648 16.725 60.331 0.085z"></path>
            </svg>
            <h2 className="home-text019">
              <span>Fast</span>
              <br></br>
            </h2>
            <span className="home-text022">
              <span>Files are instantly dropped to your devices.</span>
              <br></br>
            </span>
          </div>
          <div className="home-feature-card1">
            <svg viewBox="0 0 1024 1024" className="home-icon12">
              <path d="M170.667 42.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v170.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h682.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-170.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM170.667 128h682.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-682.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-170.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM170.667 554.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v170.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h682.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-170.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM170.667 640h682.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-682.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-170.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM298.667 256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667zM298.667 768c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
            </svg>
            <h2 className="home-text025">
              <span>Serverless</span>
              <br></br>
            </h2>
            <span className="home-text028">
              <span>
                Files are transferred over your own Wi-Fi network without any
                external interference.
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-feature-card2">
            <svg viewBox="0 0 1024 1024" className="home-icon14">
              <path d="M298.667 42.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v682.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h426.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-682.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM298.667 128h426.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v682.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-426.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-682.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM554.667 768c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
            </svg>
            <h2 className="home-text031">
              <span>Cross Platform</span>
              <br></br>
            </h2>
            <span className="home-text034">
              <span>
                Any device connected to your Wi-Fi can receive your files, no
                separate app required.
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-feature-card3">
            <svg viewBox="0 0 1024 1024" className="home-icon16">
              <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM307.2 622.933c0 0 5.589 7.381 14.123 16.341 6.187 6.528 14.421 14.549 24.619 23.040 14.379 11.989 32.939 25.173 55.339 36.395 30.080 15.019 67.371 26.624 110.72 26.624s80.64-11.605 110.72-26.624c22.4-11.221 40.96-24.405 55.339-36.395 10.197-8.491 18.432-16.512 24.619-23.040 8.533-8.96 14.123-16.341 14.123-16.341 14.123-18.859 10.325-45.611-8.533-59.733s-45.611-10.325-59.733 8.533l-7.723 8.789c-4.267 4.48-10.112 10.197-17.408 16.299-10.368 8.661-23.424 17.877-38.827 25.6-20.48 10.197-44.8 17.579-72.576 17.579s-52.096-7.381-72.576-17.621c-15.36-7.68-28.459-16.939-38.827-25.6-7.296-6.101-13.141-11.819-17.408-16.299l-7.723-8.747c-14.123-18.859-40.875-22.656-59.733-8.533s-22.656 40.875-8.533 59.733z"></path>
            </svg>
            <h2 className="home-text037">
              <span>Easy to Use</span>
              <br></br>
            </h2>
            <span className="home-text040">
              <span>
                Only 3 steps - select your files, scan a QR code, download your
                files.
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div ref={pricingSectionRef} className="home-pricing">
        <div className="home-card">
          <div className="home-container05">
            <span className="home-text043">Free</span>
            <span className="home-text044">$0</span>
            <span className="home-text045">Per month</span>
          </div>
          <span className="home-text046">
            <span>Transfer upto 10 files a day, no signup required.</span>
            <br></br>
          </span>
          <button className="home-button1 button">
            <span className="home-text049">
              <span onClick={() => { downloadSectionRef.current?.scrollIntoView({ behavior: 'smooth' }); }} className="home-text050">Download Now</span>
              <br></br>
            </span>
          </button>
        </div>
        <div className="home-card1">
          <div className="home-container06">
            <span className="home-text052">Pro</span>
            <span className="home-text053">
              <span className="home-text054">$4</span>
              <span className="home-text040" style={{ fontSize: "1.5rem" }}>.99</span>
              <br></br>
            </span>
            <span className="home-text056">Per month</span>
          </div>
          <span className="home-text057">
            <span>
              No daily file limit or file size limit, transfer unlimited files to all your devices. Coming Soon.
            </span>
            <br></br>
          </span>
          <a href="/newsletter" className="home-button1 button">
            <span>
              <span className="home-text061">Upgrade</span>
              <br></br>
            </span>
          </a>
        </div>
      </div>
      <div ref={downloadSectionRef} className="home-features1">
        <h1 className="home-text063">Download</h1>
        <div className="home-container07">
          <a href='https://github.com/saaheerpurav/fyldrop/releases/download/v1.0.0/FylDrop.Setup.1.0.0.exe' onClick={() => { downloadFile("windows") }} className="home-feature-card4">
            <svg viewBox="0 0 1024 1024" className="home-icon18">
              <path d="M0.35 512l-0.35-312.074 384-52.144v364.218zM448 138.482l511.872-74.482v448h-511.872zM959.998 576l-0.126 448-511.872-72.016v-375.984zM384 943.836l-383.688-52.594-0.020-315.242h383.708z"></path>
            </svg>
            <h2 className="home-text064">
              <span>Windows</span>
              <br></br>
            </h2>
            <span className="home-text067">
              <span>.exe</span>
              <br></br>
            </span>
          </a>
          <a href='https://github.com/saaheerpurav/fyldrop/releases/download/v1.0.0/FylDrop-1.0.0.dmg' onClick={() => { downloadFile("macos") }} className="home-feature-card5">
            <svg viewBox="0 0 1024 1024" className="home-icon20">
              <path d="M791.498 544.092c-1.294-129.682 105.758-191.876 110.542-194.966-60.152-88.020-153.85-100.078-187.242-101.472-79.742-8.074-155.596 46.948-196.066 46.948-40.368 0-102.818-45.754-168.952-44.552-86.916 1.292-167.058 50.538-211.812 128.38-90.304 156.698-23.126 388.84 64.89 515.926 43.008 62.204 94.292 132.076 161.626 129.58 64.842-2.588 89.362-41.958 167.756-41.958s100.428 41.958 169.050 40.67c69.774-1.296 113.982-63.398 156.692-125.796 49.39-72.168 69.726-142.038 70.924-145.626-1.548-0.706-136.060-52.236-137.408-207.134zM662.562 163.522c35.738-43.358 59.86-103.512 53.28-163.522-51.478 2.096-113.878 34.29-150.81 77.55-33.142 38.376-62.148 99.626-54.374 158.436 57.466 4.484 116.128-29.204 151.904-72.464z"></path>
            </svg>
            <h2 className="home-text070">
              <span>MacOS</span>
              <br></br>
            </h2>
            <span className="home-text073">
              <span>.dmg</span>
              <br></br>
            </span>
          </a>
          <a href='https://github.com/saaheerpurav/fyldrop/releases/download/v1.0.0/FylDrop-1.0.0.AppImage' onClick={() => { downloadFile("linux") }} className="home-feature-card6">
            <svg viewBox="0 0 1024 1024" className="home-icon22">
              <path d="M567.656 736.916c-81.944 38.118-158.158 37.716-209.34 34.020-61.052-4.41-110.158-21.124-131.742-35.732-13.3-9.006-31.384-5.522-40.39 7.782-9.004 13.302-5.52 31.386 7.782 40.39 34.698 23.486 96.068 40.954 160.162 45.58 10.866 0.784 22.798 1.278 35.646 1.278 55.782 0 126.626-5.316 202.42-40.57 14.564-6.778 20.878-24.074 14.104-38.64-6.776-14.566-24.076-20.872-38.642-14.108zM890.948 693.816c2.786-252.688 28.762-730.206-454.97-691.612-477.6 38.442-350.964 542.968-358.082 711.95-6.308 89.386-35.978 198.648-77.896 309.846h129.1c13.266-47.122 23.024-93.72 27.232-138.15 7.782 5.428 16.108 10.674 24.994 15.7 14.458 8.518 26.884 19.844 40.040 31.834 30.744 28.018 65.59 59.774 133.712 63.752 4.572 0.262 9.174 0.394 13.676 0.394 68.896 0 116.014-30.154 153.878-54.382 18.14-11.612 33.818-21.64 48.564-26.452 41.91-13.12 78.532-34.296 105.904-61.252 4.276-4.208 8.242-8.538 11.962-12.948 15.246 55.878 36.118 118.758 59.288 181.504h275.65c-66.174-102.224-134.436-202.374-133.052-330.184zM124.11 556.352c0-0.016 0-0.030-0.002-0.046-4.746-82.462 34.71-151.832 88.126-154.936 53.412-3.106 100.56 61.228 105.304 143.692 0 0.014 0.004 0.030 0.004 0.044 0.256 4.446 0.368 8.846 0.37 13.206-16.924 4.256-32.192 10.436-45.872 17.63-0.052-0.612-0.092-1.216-0.152-1.83 0-0.008 0-0.018 0-0.026-4.57-46.81-29.572-82.16-55.852-78.958-26.28 3.204-43.88 43.75-39.312 90.558 0 0.010 0.004 0.018 0.004 0.026 1.992 20.408 7.868 38.636 16.042 52.444-2.034 1.604-7.784 5.812-14.406 10.656-4.97 3.634-11.020 8.058-18.314 13.43-19.882-26.094-33.506-63.58-35.94-105.89zM665.26 760.178c-1.9 43.586-58.908 84.592-111.582 101.044l-0.296 0.096c-21.9 7.102-41.428 19.6-62.104 32.83-34.732 22.224-70.646 45.208-122.522 45.208-3.404 0-6.894-0.104-10.326-0.296-47.516-2.778-69.742-23.032-97.88-48.676-14.842-13.526-30.19-27.514-49.976-39.124l-0.424-0.244c-42.706-24.104-69.212-54.082-70.908-80.194-0.842-12.98 4.938-24.218 17.182-33.4 26.636-19.972 44.478-33.022 56.284-41.658 13.11-9.588 17.068-12.48 20-15.264 2.096-1.986 4.364-4.188 6.804-6.562 24.446-23.774 65.36-63.562 128.15-63.562 38.404 0 80.898 14.8 126.17 43.902 21.324 13.878 39.882 20.286 63.38 28.4 16.156 5.578 34.468 11.902 58.992 22.404l0.396 0.164c22.88 9.404 49.896 26.564 48.66 54.932zM652.646 657.806c-4.4-2.214-8.974-4.32-13.744-6.286-22.106-9.456-39.832-15.874-54.534-20.998 8.116-15.894 13.16-35.72 13.624-57.242 0-0.010 0-0.022 0-0.030 1.126-52.374-25.288-94.896-58.996-94.976-33.71-0.078-61.95 42.314-63.076 94.686 0 0.010 0 0.018 0 0.028-0.038 1.714-0.042 3.416-0.020 5.11-20.762-9.552-41.18-16.49-61.166-20.76-0.092-1.968-0.204-3.932-0.244-5.92 0-0.016 0-0.036 0-0.050-1.938-95.412 56.602-174.39 130.754-176.402 74.15-2.014 135.828 73.7 137.772 169.11 0 0.018 0 0.038 0 0.052 0.874 43.146-10.66 82.866-30.37 113.678z"></path>
            </svg>
            <h2 className="home-text076">
              <span>Linux</span>
              <br></br>
            </h2>
            <span className="home-text079">
              <span>.AppImage</span>
              <br></br>
            </span>
          </a>
        </div>
      </div>
      <div className="home-features2">
        <h1 className="home-text082">How to Use</h1>
        <div className="home-container08">
          <ul className="home-ul list">
            <li className="home-li list-item">
              <span>
                <span>Open FylDrop on your computer.</span>
                <br></br>
              </span>
            </li>
            <li className="list-item">
              <span>
                Drag and drop or select the files you want to transfer.
              </span>
            </li>
            <li className="list-item">
              <span>
                Scan the QR Code or enter the provided URL on your device.
              </span>
            </li>
            <li className="list-item">
              <span>
                Choose to download all files or download files individually.
              </span>
            </li>
          </ul>
          <span>
            Both the devices need to be connected to the same Wi-Fi network.
          </span>
        </div>
        <div className="home-container09">
          <h2 className="home-text090">
            <span>Why not just use Bluetooth?</span>
            <br></br>
            <br></br>
            <br></br>
          </h2>
          <span className="home-text095">
            Bluetooth is no longer viable due to its slow transfer speeds,
            limited range, potential connection issues, and security
            vulnerabilities.  Faster and more reliable options like Wi-Fi, which
            FylDrop takes advantage of, is better suited for transferring large
            files or sensitive data.
          </span>
        </div>
        <div className="home-container10">
          <h2 className="home-text096">
            <span>Why not Email files to yourself?</span>
            <br></br>
            <br></br>
            <br></br>
          </h2>
          <span className="home-text101">
            <span>
              Using FylDrop is preferable to emailing files to yourself because
              it offers faster and more efficient transfers, avoids clutter in
              your email inbox and allows you to share larger files, since
              Emails have an attachment file size limit of around 25 MB.
            </span>
            <br></br>
          </span>
        </div>
        <div className="home-container11">
          <h2 className="home-text104">
            <span>
              Why not message yourself photos and videos on a messaging app?
            </span>
            <br></br>
            <br></br>
          </h2>
          <span className="home-text108">
            Using FylDrop instead of a messaging app for transferring photos
            offers advantages like maintaining the original image quality,
            avoiding compression, preventing clutter in chat history, and
            enabling larger file transfers without any limitations, ensuring a
            better overall file management experience.
          </span>
        </div>
        <h2 className="home-text109">
          <span>Frequently Asked Questions</span>
          <br></br>
        </h2>
        <div className="home-container12">
          <div className="home-container13">
            <h4>What type of files can I send?</h4>
            <span className="home-text113">
              You can send any kind of files, such as photos, videos, PDFs, etc.
            </span>
          </div>
          <div className="home-container14">
            <h4>Do I need an internet connection to transfer files?</h4>
            <span className="home-text115">
              You do not need an active internet connection, the only
              requirement being the devices need to be connected to the same
              local area network or Wi-Fi network to be able to transfer files.
            </span>
          </div>
          <div className="home-container15">
            <h4>
              <span>Is there a size limit to the files I can transfer?</span>
              <br></br>
            </h4>
            <span className="home-text119">
              <span>
                Yes, the free edition offers to transfer files upto 10 MB.
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-container16">
            <h4>
              <span>Is there a limit to the number files I can transfer?</span>
              <br></br>
            </h4>
            <span className="home-text125">
              <span>
                Yes, the free edition offers to transfer upto 10 files a day.
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>

      <footer className="home-footer">
        <div className="home-container17">
          <img
            alt="image"
            src="/logo.png"
            className="home-image2"
          />
          <h3 className="home-text128">
            <span>FylDrop</span>
            <br></br>
          </h3>
        </div>

        <div>
          <a href='https://twitter.com/FylDrop' style={{ fontWeight: 600, color: "#0074f0" }}>Twitter</a>
          <span style={{ margin: "0px 10px 0px 10px", color: "lightgray" }}>|</span>
          <a href='/newsletter' style={{ fontWeight: 600, color: "#0074f0" }}>Newsletter</a>
          <span style={{ margin: "0px 10px 0px 10px", color: "lightgray" }}>|</span>
          <a href='mailto:info@fyldrop.com' style={{ fontWeight: 600, color: "#0074f0" }}>Contact Us</a>
        </div>

        <span className="home-text131">© 2024 FylDrop</span>
      </footer>
    </div>
  )
}

export default Home
