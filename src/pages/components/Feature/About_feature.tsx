import Image from "next/image";
import Lottie from 'react-lottie';
import Innovation from "../../../../public/Innovation.png";
import Security from "../../../../public/Security.png";
import Candor from "../../../../public/Candor.png";
import Rigor from "../../../../public/Rigor.png";
import Innovationgif from "./../../../lotties/Innovation.json";
import Securitygif from "./../../../lotties/Security.json";
import Candorgif from "./../../../lotties/Candor.json";
import Rigorgif from "./../../../lotties/Rigor.json";

export default function About_feature() {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: Innovationgif,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: Securitygif,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: Candorgif,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: Rigorgif,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>      
      <section className="Connectedcheck my-8 mx-auto">
        <div className="container mx-auto">
          <div className="text-center py-7">
            <h1 className="lg:block md:block hidden lg:text-6xl	font-semibold md:text-4xl">
              What We Value
            </h1>
            <h1 className="block lg:hidden md:hidden text-3xl	font-semibold">
              What We Value
            </h1>
            <p className="text-base lg:text-lg	md:text-lg px-7 mt-8 lg:px-72	md:px-48">Our Skipify team is unified by a focus on four top priorities, all intended to deliver the absolute best experience for merchants, financial partners, and shoppers.</p>
          </div>

           <div className="wevalue">
            <div className="grid grid-cols-4 mt-8">
              <div className="md:col-span-2 col-span-4">
                <div className='wevalue-content left bottom'>
                  <div className='normal'>
                    <Image src={Innovation} className="normalimg" style={{ width: '220px', height: '220px', margin: '0px auto' }} alt="Marchant Image" />
                    <Lottie options={defaultOptions1} style={{ display: 'none' }} height={"220px"} width={"220px"} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl">Innovation</h3>
                    <p className="text-base font-normal pt-5	">Reinventing the checkout experience requires challenging the status quo, removing new barriers, and pursuing continuous improvement.</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 col-span-4">
                <div className='wevalue-content bottom'>
                  <div className='normal'>
                    <Image src={Security} className="normalimg" style={{ width: '220px', height: '220px', margin: '0px auto' }} alt="Marchant Image" />
                    <Lottie options={defaultOptions2} style={{ display: 'none' }} height={"220px"} width={"220px"} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl">Security</h3>
                    <p className="text-base font-normal pt-5">We ensure all of our products pass rigorous safety checks to protect customers, merchants, and partners from unwanted activity.</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 col-span-4">
                <div className='wevalue-content left'>
                  <div className='normal'>
                    <Image src={Candor} className="normalimg" style={{ width: '220px', height: '220px', margin: '0px auto' }} alt="Marchant Image" />
                    <Lottie options={defaultOptions3} style={{ display: 'none' }} height={"220px"} width={"220px"} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl">Candor</h3>
                    <p className="text-base font-normal pt-5">Honesty and transparency are central to all of our relationships — with shoppers, merchants, and our partners.</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 col-span-4">
                <div className='wevalue-content'>
                  <div className='normal'>
                    <Image src={Rigor} className="normalimg" style={{ width: '220px', height: '220px', margin: '0px auto' }} alt="Marchant Image" />
                    <Lottie options={defaultOptions4} style={{ display: 'none' }} height={"220px"} width={"220px"} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl">Rigor</h3>
                    <p className="text-base font-normal pt-5">Building better solutions takes smart people working together as hard as they can.</p>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </div>
      </section>
    </>
  );
}
