import Image from "next/image";
import Hero from "../../../../public/Merchants_Hero.png";

export default function Merchants_Hero() {
  return (
    <>
      <section className="better header-bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:gap-4 text-white">
            <div className="md:order-2 md:col-span-1 mb-5 col-span-2">
              <Image
                src={Hero}
                className="normalimg"
                loading="eager"
                priority={true}
                style={{ width: "100%", height: "100%", margin: "0px auto" }}
                alt="Marchant Hero"
              />
            </div>
            <div className="md:order-1 md:col-span-1 mb-5 col-span-2">
              <div className="banner-content lg:py-20 lg:pr-16 lg:pl-8	py-12 px-9">
                <h1 className="animate-text text-5xl lg:text-7xl 	font-semibold">
                  Better checkout. Happy customers.
                </h1>
                <p className="text-lg	hidden lg:block pt-3">
                  Our Connected Checkout is built to strengthen <br /> your
                  relationship with shoppers, delivering a <br /> seamless
                  digital wallet solution that makes it <br /> easy to complete
                  a purchase.
                </p>
                <p className="text-base block pt-3 lg:hidden">
                  Our Connected Checkout is built to strengthen your
                  relationship with shoppers, delivering a seamless digital
                  wallet solution that makes it easy to complete a purchase.
                </p>
                <div>
                  <a
                    href="#"
                    className="inline-block text-sm px-4 py-2 leading-none border-2 rounded text-white border-white  mt-8  learnmore"
                  >
                    Get in touch{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
