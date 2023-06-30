import Image from "next/image";
import Reward from "../../../../public/Rewards.png";
import Offer from "../../../../public/Offers.png";
import Passcode from "../../../../public/One-Time_Passcode.png";
import Rates from "../../../../public/Authorization_Rates.png";

export default function Partner_feature() {
  return (
    <>
      <div className="rewardpoint">
        <div className="grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-1 mt-8 border-b-2 pb-8">
          <div className="col-span-1">
            <Image
              src={Reward}
              className="normalimg"
              style={{
                width: "100%",
                height: "100%",
                margin: "0px auto",
              }}
              alt="Marchant Image"
            />
          </div>
          <div className="col-span-1 lg:col-span-1 md:col-span-2">
            <div className="points-rewards">
              <div className="card-overlay">
                <h3 className="lg:text-4xl	font-semibold text-3xl">
                  Rewards and points
                </h3>
                <p className="text-base">
                  Enable points usage wherever cardholders shop and present
                  rewards in real time at checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-1 mt-8 border-b-2 pb-8">
          <div className="col-span-1 md:order-2">
            <Image
              src={Offer}
              className="normalimg"
              style={{
                width: "100%",
                height: "100%",
                margin: "0px auto",
              }}
              alt="Marchant Image"
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="points-rewards">
              <div className="card-overlay">
                <h3 className="lg:text-4xl	font-semibold text-3xl">
                  Merchant offers
                </h3>
                <p className="text-base">
                  Present merchant offers at time of purchase, adding value for
                  both cardholders and merchant partners.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-1 mt-8 border-b-2 pb-8">
          <div className="col-span-1">
            <Image
              src={Passcode}
              className="normalimg"
              style={{
                width: "100%",
                height: "100%",
                margin: "0px auto",
              }}
              alt="Marchant Image"
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="points-rewards">
              <div className="card-overlay">
                <h3 className="lg:text-4xl	font-semibold text-3xl">
                  Fraud protection
                </h3>
                <p className="text-base">
                  Skipify provides an added layer of fast, frictionless identity
                  verification before every purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-1 mt-8 pb-8">
          <div className="col-span-1 md:order-2">
            <Image
              src={Rates}
              className="normalimg"
              style={{
                width: "100%",
                height: "100%",
                margin: "0px auto",
              }}
              alt="Marchant Image"
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="points-rewards">
              <div className="card-overlay">
                <h3 className="lg:text-4xl	font-semibold text-3xl">
                  Higher authorization rates
                </h3>
                <p className="text-base">
                  Secure authentication process, direct links to card issuers,
                  and use of tokenized credentials boost overall authorizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
