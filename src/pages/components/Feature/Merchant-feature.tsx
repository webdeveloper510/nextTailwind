import Image from "next/image";
import checkout from "../../../../public/Website_Checkout.png";
import link from "../../../../public/Payment_Link.png";
import follow from "../../../../public/Follow-up_Emails.png";

export default function Merchant_feature() {
  return (
    <>
      <section className="finally my-8 mx-auto lg:px-12 lg:py-4	p-4	">
        <div className="container mx-auto">
          <div className="text-center py-7">
            <h1 className="lg:block md:block hidden text-4xl font-semibold lg:text-6xl">
              Skipify lets you offer <br /> Connected Checkout across <br /> all
              your payment channels.
            </h1>
            <h1 className=" block lg:hidden md:hidden text-3xl font-semibold">
              Skipify lets you offer Connected Checkout across all your payment
              channels.
            </h1>
          </div>

          <div className="grid grid-cols-3 md:gap-4 mt-8">
            <div className=" lg:col-span-1 mb-5 col-span-3">
              <div className="text-center lg:border-r-2 pb-4 lg:border-b-0 md:border-b-2 border-b-2">
                <div className="offer">
                  <Image
                    src={checkout}
                    className="normalimg"
                    style={{
                      width: "240px",
                      height: "180px",
                      margin: "0px auto",
                    }}
                    alt="Marchant Image"
                  />
                </div>
                <div>
                  <h3 className="text-4xl	font-semibold">
                    Website <br /> checkout
                  </h3>
                  <p className="text-base mt-4">
                    Embedded into your checkout <br /> experience without
                    ripping, replacing, <br /> or rebranding.
                  </p>
                </div>
              </div>
            </div>
            <div className=" lg:col-span-1  mb-5 col-span-3">
              <div className="text-center lg:border-r-2 pb-4 lg:border-b-0 md:border-b-2 border-b-2">
                <div className="offer order-2">
                  <Image
                    src={link}
                    className="normalimg"
                    style={{
                      width: "240px",
                      height: "180px",
                      margin: "0px auto",
                    }}
                    alt="Marchant Image"
                  />
                </div>
                <div>
                  <h3 className="text-4xl	font-semibold">
                    Instant <br /> payment link
                  </h3>
                  <p className="text-base mt-4">
                    Empower your call center agents, <br /> in-store associates,
                    and online chat <br /> with Skipify PayLinks sent through{" "}
                    <br /> text, email, or QR codes.
                  </p>
                </div>
              </div>
            </div>
            <div className=" lg:col-span-1 mb-5 col-span-3">
              <div className=" text-center lg:border-r-0 pb-4 lg:border-b-0 ">
                <div className="offer">
                  <Image
                    src={follow}
                    className="normalimg"
                    style={{
                      width: "240px",
                      height: "180px",
                      margin: "0px auto",
                    }}
                    alt="Marchant Image"
                  />
                </div>
                <div>
                  <h3 className="text-4xl	font-semibold">
                    Follow-up <br /> emails
                  </h3>
                  <p className="text-base mt-4">
                    Through out partnership with Google, <br /> use Skipify to
                    make your post-
                    <br /> purchase and abandoned cart <br /> emails shoppable.
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
