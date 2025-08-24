import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-gradient-to-br from-slate-900 via-AAprimary to-slate-900 w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 pt-0 px-4 bg-[url('/Bg-Grid.png')] relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
      <div className="relative z-10">
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-300 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1 - AI-Powered Analytics Platform*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <div className="absolute w-full h-full rounded bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center">
                <div className="text-white text-6xl font-bold opacity-20">AI</div>
              </div>
              <div
                className="absolute w-full h-full rounded bg-AAprimary 
         transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
              ></div>
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Featured Project</span>
                <span className=" md:text-gray-300 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  IntelliChat AI Platform
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10 border border-gray-700 backdrop-blur-sm">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                A cutting-edge conversational AI platform built with <span className="text-AAsecondary">Next.js</span> and <span className="text-AAsecondary">OpenAI GPT-4</span>. Features include intelligent document processing, real-time chat with memory, sentiment analysis, and custom AI model fine-tuning. Integrated <span className="text-AAsecondary">vector databases</span> for semantic search and <span className="text-AAsecondary">RAG implementation</span> for contextual responses.

                The platform supports multi-modal AI capabilities including text, image, and voice processing, with advanced features like AI-powered code generation and automated testing.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js 14</span>
                <span className="pr-4 z-10">OpenAI GPT-4</span>
                <span className="pr-4 z-10">Python</span>
                <span className="pr-4 z-10">TensorFlow</span>
                <span className="pr-4 z-10">Vector DB</span>
                <span className="pr-4 z-10">TypeScript</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <div className="text-gray-400 text-sm">🚀 In Development</div>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project  2 - Formee Marketplace (Updated)*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href="https://formee.com" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/formee.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Enterprise Project</span>
                <a href="https://formee.com" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-300 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Formee Marketplace
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10 border border-gray-700 backdrop-blur-sm">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                As <span className="text-AAsecondary">Technical Lead</span>, I architected and developed a comprehensive marketplace platform using modern <span className="text-AAsecondary">microservices architecture</span>. Implemented <span className="text-AAsecondary">AI-powered recommendations</span>, real-time analytics, and automated testing pipelines.

                The platform features advanced search with <span className="text-AAsecondary">Elasticsearch</span>, integrated payment processing, and a scalable <span className="text-AAsecondary">Docker-based deployment</span> on <span className="text-AAsecondary">AWS ECS</span>. Successfully scaled to handle 10k+ concurrent users with 99.9% uptime.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">Docker</span>
                <span className="pr-4 z-10">AWS</span>
                <span className="pr-4 z-10">Redis</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://www.formee.com" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={"https://www.formee.com"} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://purpositdev.com/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/purposite.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            {/* <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/purposite.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div> */}

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://purpositdev.com/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-300 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Purposite
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  I was privileged to serve as the team lead for the Purosite project. Our objective was to develop a user-friendly website using <span className="text-AAsecondary">React.js, Node.js, and MySQL</span>. My role involved overseeing the project’s <span className="text-AAsecondary">planning</span> and development stages, which included <span className="text-AAsecondary">designing</span> and <span className="text-AAsecondary">implementing APIs.</span>

                  Purosite is a versatile platform that offers users the ability to organize various events such as birthdays, Christmas, baby showers, and more. It provides a unique feature where users can invite others to join the event and contribute towards a common gift if they wish. This makes Purosite a convenient and interactive tool for event planning and gift-giving. 
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">MySQL</span>
                <span className="pr-4 z-10">AWS</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://purpositdev.com/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={"https://purpositdev.com/"} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"https://advisionary.io/"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img src={"/advisionary.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            {/* <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/advisionary.png"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div> */}

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"https://advisionary.io/"}>
                  <span className=" md:text-gray-300 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Advisionry
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                Advisionry is a comprehensive information portal for a company, meticulously crafted using <span className="text-AAsecondary">React.js</span>. This platform serves as a digital representation of the company, providing general information to its visitors. The use of <span className="text-AAsecondary">React.js</span> ensures a seamless and interactive user experience, making Advisionry a reliable and efficient resource.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">React.js</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <ExternalLink url={"https://advisionary.io/"} router={router} />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 4 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={"https://adi.artemishq.com/"}>
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img src={"/artemishq.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            {/* <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/artemishq.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div> */}

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"https://adi.artemishq.com/"}>
                  <span className=" md:text-gray-300 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Artemish
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  Artemish is a platform dedicated to providing comprehensive gun use training and certification. As the project lead, I had the privilege of spearheading the development of a custom class schedule feature tailored to meet the client’s specific requirements. I take immense pride in my team’s ability to successfully fulfill this custom schedule feature.

                  The platform is built using <span className="text-AAsecondary">WordPress</span> and <span className="text-AAsecondary">WooCommerce</span>, with <span className="text-AAsecondary">Subscription</span> and <span className="text-AAsecondary">Authorize.net</span> integrated as the payment gateway. To accommodate the custom schedule feature, we developed bespoke plugins, further enhancing the platform’s functionality and user experience. This blend of technologies and custom solutions makes Artemish a reliable and efficient resource for gun use training and certification.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">WordPress</span>
                <span className="pr-4 z-10">WooCommerce</span>
                <span className="pr-4 z-10">Authorize.net</span>
                <span className="pr-4 z-10">Subscription</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <ExternalLink url={"https://adi.artemishq.com/"} router={router} />
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 5 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href="https://gunillaofsweden.com/" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/gunilaofsweden.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            {/* <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/gunilaofsweden.png"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div> */}
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://gunillaofsweden.com/" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-300 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Gunila Of Sweden
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Gunila of Sweden is an e-commerce platform built using <span className="text-AAsecondary">WordPress</span> and <span className="text-AAsecondary">WooCommerce</span>. It offers a unique subscription feature, allowing customers to receive products at specific time intervals. To ensure a seamless shopping experience, we have integrated multiple payment gateways, including <span className="text-AAsecondary">Stripe</span>, <span className="text-AAsecondary">Google Pay</span>, <span className="text-AAsecondary">Apple Pay</span>, and <span className="text-AAsecondary">PayPal</span>. This diverse range of payment options provides convenience and flexibility to our customers, enhancing their overall shopping experience on Gunila of Sweden.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">WordPress</span>
                <span className="pr-4 z-10">WooCommerce</span>
                <span className="pr-4 z-10">Stripe</span>
                <span className="pr-4 z-10">PayPal</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <a href="https://gunillaofsweden.com/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={"https://gunillaofsweden.com/"} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 6 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href="https://psychicelements.com/" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/psychicelements.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            {/* <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/psychicelements.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div> */}

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://psychicelements.com/" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-300 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Psychic Elements
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  Psychic Element is a unique platform that allows users to review and interact with available Psychics for personal guidance. The website is bifurcated into two platforms - one developed using <span className="text-AAsecondary">WordPress</span> and the other built on a <span className="text-AAsecondary">PHP framework</span>.

                  We have integrated <span className="text-AAsecondary">Twilio</span>, <span className="text-AAsecondary">Alower</span> and <span className="text-AAsecondary">Plivo</span>, which serve as the communication bridge between users and psychics. These integrations also facilitate the management of schedules with psychics, ensuring a seamless and personalized user experience on Psychic Element.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">WordPress</span>
                <span className="pr-4 z-10">Twilio</span>
                <span className="pr-4 z-10">Alower</span>
                <span className="pr-4 z-10">Plivo</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <a href="https://psychicelements.com/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={"https://psychicelements.com/"} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
