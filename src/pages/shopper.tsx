import Link from "next/link";
import ShopperS from "./slider/shopper-slider"
import Shopper_hero from "./components/Hero/Shopper";
import Shopper_feature from "./components/Feature/Shopper_feature";
import Shopper_card from "./components/Card/Shopper_card";

export default function shopper() {
  return (
    <>
      <Shopper_hero/>

      <Shopper_feature/>

      <Shopper_card/>
      
      <section className="letwork">
        <div className="container mx-auto">
          <div className="together lg:p-12	m-12 text-center md:text-left lg:text-left md:p-8 p-8	">
            <h1 className="hidden lg:block text-3xl	md:text-4xl	lg:text-6xl	font-semibold">Get started</h1>
            <h1 className="block lg:hidden mt-3 text-3xl	md:text-4xl	lg:text-6xl	font-semibold">Questions?</h1>
            <div className="hidden lg:block">
                <Link href="#" className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full text-white bg-black border-black w-full flex justify-center  learnmore">
                  Log in
                </Link>
                <Link href="#" className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full text-white bg-black border-black  mt-3  learnmore">
                  Create account
                </Link>
            </div>
            <div className="block lg:hidden">
                <Link href="#" className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full text-white bg-black border-black  mt-3  learnmore">
                  Chat with us
                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
