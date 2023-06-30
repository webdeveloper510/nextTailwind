import Image from "next/image";
import Password from "../../../../public/Email_Password.png";
import Makesure from "../../../../public/One-Time_Passcode.png";
import Anycard from "../../../../public/Cards.png";
import Goodpart from "../../../../public/Quick.png";
import Getpoint from "../../../../public/Rewards.png";

export default function Shopper_feature() {
  return (
    <>
      <section className="tapit py-8">
        <div className="container mx-auto">
          <div className="text-center loveskipify">
            <h1 className="lg:block md:block hidden lg:text-6xl font-semibold md:text-4xl">Why shoppers love Skipify</h1>
            <h1 className="block lg:hidden px-4 md:hidden text-4xl font-semibold">Why shoppers love Skipify</h1>
            <p className="mt-4 hidden lg:block ">
              Our direct integrations with the world&apos;s largest financial networks and <br/> credit card companies create a checkout experience that you will <br/> love as much as the products you buy.
            </p>
            <p className="hidden lg:hidden md:block">
              Our direct integrations with the world&apos;s largest <br/> financial networks and credit card companies <br/> create a checkout experience that you will <br/> love as much as the products you buy.
            </p>
            <p className="block md:hidden lg:hidden">
              Our direct integrations with the world&apos;s <br/> largest financial networks and credit <br/> card companies create a checkout <br/> experience that you will love as much <br/> as the products you buy.
            </p>
          </div>
          <div className="px-8">
            <div className="grid grid-cols-6 md:gap-4 md:my-8">
              <div className=" md:col-span-2 mb-5 col-span-6">
                <div className="noProblem">
                  <div className="offer">
                    <Image
                      src={Password}
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
                    <h3 className="text-4xl font-semibold md:text-xl lg:px-7	pb-4 px-5">
                      No password? No problem.
                    </h3>
                    <p className="px-0 md:px-2 l:px-5 text-base">
                      No need to remember passwords — your email address unlocks it all.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 mb-5 col-span-6">
                <div className="noProblem">
                  <div className="offer order-2">
                    <Image
                      src={Makesure}
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
                    <h3 className="text-4xl font-semibold md:text-xl lg:px-7	pb-4 px-5">
                      We make sure you’re you.
                    </h3>
                    <p className="px-0 md:px-2 l:px-5 text-base">
                      Enhanced security and easy authentication keep your info safe.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 mb-5 col-span-6">
                <div className="noProblem md:border-0">
                  <div className="offer">
                    <Image
                      src={Anycard}
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
                    <h3 className="text-4xl font-semibold md:text-xl lg:px-7	pb-4 px-5">
                      Pick a card, any card.
                    </h3>
                    <p className="px-0 md:px-2 l:px-5 text-base">
                      No typing, no forms — all your payment options are at your fingertips.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 md:gap-4 md:mt-8">
              <div className="md:col-span-1 mb-5 col-span-6">
              </div>
              <div className="md:col-span-2 mb-5 col-span-6">
                <div className="noProblem">
                  <div className="offer">
                    <Image
                      src={Goodpart}
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
                    <h3 className="text-4xl font-semibold md:text-xl lg:px-7	pb-4 px-5">
                      Skip to the good part.
                    </h3>
                    <p className="px-0 md:px-2 l:px-5 text-base">
                      Simply put, a faster, easier checkout, with none of the hassle.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 mb-5 col-span-6">
                <div className="noProblem border-0">
                  <div className="offer">
                    <Image
                      src={Getpoint}
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
                    <h3 className="text-4xl font-semibold md:text-xl lg:px-7	pb-4 px-5">
                      Get to the points.
                    </h3>
                    <p className="px-0 md:px-2 l:px-5 text-base">
                      Best deal, every time, with direct access to card points, rewards, and discounts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 mb-5 col-span-6">
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
