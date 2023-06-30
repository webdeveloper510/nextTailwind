import ShopperS from "./../../slider/shopper-slider"

export default function Shopper_card() {
  return (
    <>
      <section className="finally sho md:my-8 mx-auto">
        <div className="container mx-auto">
          <div className="text-center py-7">
            <h1 className="lg:block md:block hidden lg:text-6xl font-semibold md:text-4xl">
              Your data is safe <br/> and sound.
            </h1>
            <h1 className="block lg:hidden md:hidden text-4xl font-semibold ">
              Your data is safe and sound.
            </h1>
          </div>
          <div className="expert-desktop hidden lg:block md:block px-5">
            <div className="grid grid-cols-3 md:gap-4 mt-8">
              <div className="md:col-span-1 mb-5 col-span-3">
                <div className="keeper">
                  <div>
                    <h3 className="lg:text-4xl	font-semibold text-xl">
                      Expert-level secret keeper
                    </h3>
                    <div className="keeper-border"></div>
                    <p className="lg:text-lg	font-normal text-base" >
                      Skipify only uses your data to process transactions with merchants and to streamline your purchases in the future. Our own friends and families use Skipify, so we protect your data the same way we protect theirs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1  mb-5 col-span-3">
                <div className="keeper">
                  <div>
                    <h3 className="lg:text-4xl	font-semibold text-xl">
                      No funny business
                    </h3>
                    <div className="keeper-border"></div>
                    <p className="lg:text-lg	font-normal text-base">
                      Skipify is not an ad network and is not in the business of cashing in on customer data. We&apos;re in the business of creating a secure purchase, with data security and privacy at the forefront.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 mb-5 col-span-3">
                <div className="keeper">
                  <div>
                    <h3 className="lg:text-4xl	font-semibold text-xl">
                      Seriously safe encryption
                    </h3>
                    <div className="keeper-border"></div>
                    <p className="lg:text-lg	font-normal text-base">
                      We protect your data in a secure environment using AES-256 encryption, which is certified for use by the U.S. government to protect classified information. In other words, it&apos;s secret agent-level safe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="expert-mobile block lg:hidden md:hidden px-8">
            <ShopperS/>
          </div>
        </div>
      </section>
    </>
  );
}
