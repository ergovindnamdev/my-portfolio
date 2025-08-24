import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!context) return;
    
    // remove the interval Cookie timer setter when
    if (context.sharedState.userdata.timerCookieRef.current) {
      clearInterval(context.sharedState.userdata.timerCookieRef.current);
    }
    
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      if (context.sharedState.userdata.windowSizeTracker.current) {
        window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      }
      if (context.sharedState.userdata.mousePositionTracker.current) {
        window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
      }
      // remove Typing project EventListeners
      if (context.sharedState.typing.eventInputLostFocus) {
        window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      }
      if (context.sharedState.typing.keyboardEvent) {
        document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
      }
    }
    setTimeout(() => {
      setShowElement(true);
    }, 0);

    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 2000);
    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      if (context) {
        context.sharedState.finishedLoading = true;
        context.setSharedState(context.sharedState);
      }
    }, 2500);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const meta = {
    title: "Govind Namdev - Full Stack Engineer & AI Specialist | 15+ Years Experience",
    description: `Full Stack Engineer with 15+ years experience building scalable SaaS platforms, eCommerce systems, and AI-powered applications. Expert in React.js, Node.js, Python, AWS, and modern web technologies.`,
    image: "/img/My-Pic.JPG",
    type: "website",
    keywords: "Full Stack Developer, Software Engineer, React Developer, Node.js Developer, AI Specialist, SaaS Development, Web Development, Govind Namdev",
    author: "Govind Namdev",
    canonical: "https://govindnam.dev",
  };
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={meta.canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`${meta.canonical}${meta.image}`} />
        <meta property="og:image:alt" content="Govind Namdev - Full Stack Engineer" />
        <meta property="og:site_name" content="Govind Namdev Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={meta.canonical} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`${meta.canonical}${meta.image}`} />
        <meta name="twitter:creator" content="@govindnamdev" />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#0891b2" />
        <meta name="msapplication-TileColor" content="#0891b2" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Govind Namdev",
              "jobTitle": "Full Stack Engineer & AI Specialist",
              "description": meta.description,
              "url": meta.canonical,
              "image": `${meta.canonical}${meta.image}`,
              "sameAs": [
                "https://www.linkedin.com/in/govind-namdev-42945137/",
                "https://github.com/ergovindnamdev"
              ],
              "knowsAbout": [
                "Full Stack Development",
                "React.js",
                "Node.js",
                "Python",
                "Artificial Intelligence",
                "Machine Learning",
                "AWS",
                "TypeScript",
                "SaaS Development",
                "Web Development"
              ],
              "workLocation": {
                "@type": "Place",
                "name": "Remote"
              },
              "email": "ergovindnamdev@gmail.com",
              "telephone": "+919993583578"
            })
          }}
        />
      </Head>

      
        <div className="relative snap-mandatory min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black w-full">
          {/* {context?.sharedState.finishedLoading ? <></> : ShowThisCantBeReached ? <ThisCantBeReached /> : <></>} */}
          {context?.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>}
          <Header finishedLoading={context?.sharedState.finishedLoading || false} sectionsRef={homeRef} />
          <MyName finishedLoading={context?.sharedState.finishedLoading || false} />
          <SocialMediaArround finishedLoading={context?.sharedState.finishedLoading || false} />
          {context?.sharedState.finishedLoading ? <AboutMe /> : <></>}
          {context?.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
          {context?.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
          {context?.sharedState.finishedLoading ? <GetInTouch /> : <></>}
          {context?.sharedState.finishedLoading ? (
            <Footer githubUrl={"https://github.com/ergovindnamdev"} hideSocialsInDesktop={true} />
          ) : (
            <></>
          )}
          {!isProd && <ScreenSizeDetector />}
        </div>
      
    </>
  );
}
