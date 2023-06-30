import Image from "next/image";
import Hero from "../../public/Merchants_Hero.png";
import checkout from "../../public/Website_Checkout.png";
import link from "../../public/Payment_Link.png";
import follow from "../../public/Follow-up_Emails.png";
import Mslider from "./slider/merchants-slider";
import Link from "next/link";
import Merchants_Hero from "./components/Hero/Merchant";
import Merchant_feature from "./components/Feature/Merchant-feature";

export default function Merchant() {
  return (
    <>
      <Merchants_Hero/>

      <section className="tapit header-bg py-8">
        <div className="container mx-auto">
          <div className="text-center text-white">
            <h1 className="lg:text-6xl font-semibold md:text-4xl text-4xl px-8	">See Skipify in action.</h1>
            <p className="mt-4 hidden lg:block">
              See how easy it is for shoppers to checkout — <br /> driving
              conversion, repeat purchases, and loyalty.
            </p>
            <p className="block lg:hidden">
              See how easy it is for shoppers to <br /> checkout — driving
              conversion,
              <br /> repeat purchases, and loyalty.
            </p>
          </div>
          <div className="px-8">
            <Mslider />
          </div>
        </div>
      </section>

      <Merchant_feature/>

      <section className="mx-auto wantto">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-8">
            <div className="col-span-1 ">
              <div className="lg:p-24 md:py-12 md:px-8 p-8">
                <h1 className="md:text-3xl text-2xl lg:text-6xl	font-semibold">Integrate with Skipify.</h1>
                <p className="mt-5 lg:text-lg	text-base">
                  If you’re a developer and want to start your integration now,
                  get up and running quickly and leave the upkeep to us.
                </p>
                <Link
                  href="#"
                  className="inline-block text-sm px-4 py-2 leading-none border border-black rounded-full text-white mt-4 bg-black"
                >
                  See documentation
                </Link>
              </div>
            </div>
            <div className="col-span-1">
              <div className="lg:p-24 md:py-12 md:px-8 p-8">
                <h1 className="md:text-3xl text-2xl lg:text-6xl	font-semibold">Want to learn more?</h1>
                <p className="mt-5 lg:text-lg	text-base">
                  If you’re considering using Skipify, we would love to talk to
                  you. Connect with our sales team to learn more about how to
                  integrate with Skipify.
                </p>
                <Link
                  href="#"
                  className="inline-block text-sm px-4 py-2 leading-none border border-black rounded-full text-white mt-4 bg-black"
                >
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
