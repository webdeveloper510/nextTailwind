import Image from "next/image";
import BayArea from "../../public/Bay_Area.png";
import Denver from "../../public/Denver.png";
import NewCity from "../../public/NYC.png";
import Link from "next/link";
import AboutSlide from "./slider/about-slider";
import American from "./../../public/sponser/American.png"
import Paypal from "./../../public/sponser/paypal.png"
import synchrony from "./../../public/sponser/synchrony.png"
import okta from "./../../public/sponser/Expanded Type.png"
import point72 from "./../../public/sponser/WbI7Z1.png"
import flourish from "./../../public/sponser/flourish.png"
import Msd from "./../../public/sponser/MSD.png"
import Infinity from "./../../public/sponser/Infinity Ventures.png"
import About_hero from "./components/Hero/About";
import About_feature from "./components/Feature/About_feature";
import About_row from "./components/Row/About_row";
import About_card from "./components/Card/About_card";

export default function aboutUs() {

  return (
    <>
      <About_hero/>
      
      <About_feature/>

      <About_row/>

      <section className="Team my-8 mx-auto">
        <div className="container mx-auto">
          <div className="text-center py-7">
            <h1 className="Team-content text-4xl	lg:text-6xl font-semibold mb:pb-5	">
              Meet Our Leadership Team
            </h1>
            <p className="Team-text expert-desktop hidden lg:block md:block text-lg mt-5">Skipify is led by a team with deep roots in the tech and fintech industry. <br/> They come from companies like Stripe, Adyen, Bolt, FIS, Salesforce, and <br/> Google, and are united in the effort to build an incredible company <br/> culture and improve the future of digital payments.</p>
            <p className="Team-text expert-mobile block lg:hidden md:hidden text-base">Skipify is led by a team of experts with deep roots in the FinTech industry. They are united in the effort to build a positive company culture and improve the future of digital payments.</p>
          </div>
          <AboutSlide/>
        </div>
      </section>

      <About_card />
      
      <section className="backed header-bg">
        <div className="container mx-auto">
          <div className="world-best text-center">
            <h1 className="text-white team-desktop text-6xl	hidden lg:block	font-semibold">Skipify is backed by <br/> the world&apos;s best.</h1>
            <h1 className="text-white team-phone text-4xl hidden md:block font-semibold lg:hidden">Skipify is backed <br/> by the world&apos;s best.</h1>
            <h1 className="text-white team-phone text-4xl block md:hidden font-semibold lg:hidden">Skipify is backed by the world&apos;s best.</h1>
          </div>
          <div className="grid grid-cols-4 md:gap-4 mt-8">
            <div className="lg:col-span-1 md:col-span-1 mb-5 col-span-2 p-6">
              <Image src={American} style={{ width: "140px", height: "50px", margin: "0px auto", objectFit: "contain" }} alt="New York City"/>
            </div>
            <div className="lg:col-span-1 md:col-span-1 mb-5 col-span-2 p-6">
              <Image src={Paypal} style={{ width: "140px", height: "50px", margin: "0px auto", objectFit: "contain" }} alt="New York City"/>
            </div>
            <div className="lg:col-span-1 md:col-span-1 mb-5 col-span-2 p-6">
              <Image src={synchrony} style={{ width: "140px", height: "50px", margin: "0px auto", objectFit: "contain" }} alt="New York City"/>
            </div>
            <div className="lg:col-span-1 md:col-span-1 mb-5 col-span-2 p-6">
              <Image src={okta} style={{ width: "140px", height: "50px", margin: "0px auto", objectFit: "contain" }} alt="New York City"/>
            </div>
            <div className="lg:col-span-1 md:col-span-1 mb-5 col-span-2 p-6">
              <Image src={point72} style={{ width: "140px", height: "50px", margin: "0px auto", objectFit: "contain" }} alt="New York City"/>
            </div>
            <div className="lg:col-span-1 md:col-span-1 mb-5 col-span-2 p-6">
              <Image src={flourish} style={{ width: "140px", height: "50px", margin: "0px auto", objectFit: "contain" }} alt="New York City"/>
            </div>
            <div className="lg:col-span-1 md:col-span-1 mb-5 col-span-2 p-6">
              <Image src={Msd} style={{ width: "140px", height: "50px", margin: "0px auto", objectFit: "contain" }} alt="New York City"/>
            </div>
            <div className="lg:col-span-1 md:col-span-1 mb-5 col-span-2 p-6">
              <Image src={Infinity} style={{ width: "140px", height: "50px", margin: "0px auto", objectFit: "contain" }} alt="New York City"/>
            </div>
          </div>
        </div>
      </section>

      <section className="header-bg p-3 textes">
        <div className="letwork">
          <div className="container mx-auto">
            <div className="together  lg:p-12	lg:m-12 m-8 text-center md:text-left lg:text-left md:p-8 p-5	">
              <h1 className="text-4xl	lg:text-6xl	 font-semibold">Want to learn more?</h1>
              <div>
                  <Link href="#" className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full text-white bg-black border-black  my-5  learnmore">
                      Get in touch
                  </Link>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
