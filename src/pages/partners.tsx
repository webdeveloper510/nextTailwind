import Lottie from 'react-lottie';
import animationData from './../lotties/Product_Demo.json';
import Link from "next/link";
import Partner_Hero from "./components/Hero/Partner";
import Partner_feature from "./components/Feature/Partner_feature";

export default function partners() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <Partner_Hero/>

      <section className="Connectedcheck my-8 mx-auto">
        <div className="container mx-auto">
          <div className="text-center py-7">
            <h1 className="lg:block md:block hidden lg:text-6xl	font-semibold md:text-4xl	">
              Instantly surface your <br/> cards inside Skipify <br/> Connected Checkout.
            </h1>
            <h1 className="block lg:hidden md:hidden text-3xl	font-semibold">
              Instantly surface your cards inside Skipify Connected Checkout.
            </h1>
            <p className=" text-base lg:text-lg	md:text-lg px-7 mt-8 lg:px-72	md:px-48">Skipifys card provisioning solution brings financial partners into the checkout experience like never before. Payment methods and perks are now directly available to cardholders when they make a purchase.</p>
          </div>

          <div className="intantcard">
            <div className="grid grid-cols-2">
            <div className=" lg:col-span-1 md:col-span-1 col-span-2 md:order-2 ">
                <div className="Demo-ani">
                  <div className="offer">
                    <Lottie options={defaultOptions} height={"400px"} width={"240px"} />
                  </div>
                </div>
              </div>
              <div className=" lg:col-span-1 md:col-span-1 col-span-2">
                <div className="intant-card">
                  <div className="card-overlay">
                    <h3 className=" lg:text-6xl text-3xl font-semibold	">
                      Instant card access in checkout.
                    </h3>
                    <p className="mt-5">
                      Shoppers can instantly access and use your debit and credit card options — including available points, rewards, and discounts — without having to enter additional information.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

         <Partner_feature/>

        </div>
      </section>
      <section className="letwork">
        <div className="container mx-auto">
          <div className="together lg:p-12	m-12 text-center md:text-left lg:text-left md:p-8 p-8		">
            <h1 className="text-3xl	md:text-4xl	lg:text-6xl	font-semibold">Let’s work together.</h1>
            <div>
                <Link href="#" className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full text-white bg-black border-black mt-4 md:mt-0 lg:mt-5  learnmore">
                    Get in touch
                </Link>
                </div>
          </div>
        </div>
      </section>
    </>
  );
}
