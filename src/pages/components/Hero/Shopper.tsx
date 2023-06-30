import Image from "next/image";
import Hero from "../../../../public/Shopper-Image.png";

export default function Shopper_hero() {
  return (
    <>
      <section className="better shopper-banner header-bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:gap-4 text-white">
            <div className="md:order-2 md:col-span-1 col-span-2">
              <Image
                src={Hero}
                className="normalimg"
                loading="eager"
                priority={true}
                style={{ width: "100%", height: "100%", margin: "0px auto" }}
                alt="Marchant Hero"
              />
            </div>
            <div className="md:order-1 md:col-span-1 col-span-2">
              <div className="banner-content">
                <div className="shopper-content p-4">
                  <h1 className="animate-text lg:text-8xl text-6xl font-semibold	">
                    Best.  Checkout. Ever.
                  </h1>
                  <p className="block text-base">
                    Ready to spend less time checking out? Skipify instantly and securely connects you to all your payment information — including available rewards, points, and discounts!
                  </p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
