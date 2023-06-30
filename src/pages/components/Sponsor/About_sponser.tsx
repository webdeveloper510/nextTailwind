import Image from "next/image";
import American from "./../../../../public/sponser/American.png"
import Paypal from "./../../../../public/sponser/paypal.png"
import synchrony from "./../../../../public/sponser/synchrony.png"
import okta from "./../../../../public/sponser/Expanded Type.png"
import point72 from "./../../../../public/sponser/WbI7Z1.png"
import flourish from "./../../../../public/sponser/flourish.png"
import Msd from "./../../../../public/sponser/MSD.png"
import Infinity from "./../../../../public/sponser/Infinity Ventures.png"

export default function aboutUs() {

  return (
    <>      
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
    </>
  );
}
