import Image from "next/image";
import BayArea from "../../../../public/Bay_Area.png";
import Denver from "../../../../public/Denver.png";
import NewCity from "../../../../public/NYC.png";
import Link from "next/link";

export default function About_card() {

  return (
    <>
      <section className="skipifyOffices my-8 mx-auto">
        <div className="container mx-auto">
          <div className="text-center py-7">
            <h1 className="skipifyOffices-content lg:text-6xl	text-4xl	font-semibold">
              Skipify Offices
            </h1>
          </div>

           <div className="Offices">
            <div className="grid grid-cols-3 md:gap-4 mt-8">
              <div className=" md:col-span-1 mb-5 col-span-3">
                <div className="Denver lg:border-r-2 border-b-2 lg:border-b-0 border-r-0 pr-4	pb-11	pt-12	lg:pb-0 md:pb-0 lg:pt-0 md:pt-0">
                  <h1 className="font-semibold text-2xl pb-10	text-center">Bay Area</h1>
                  <Image src={BayArea} style={{ width: "100%", height: "100%", margin: "0px auto" }} alt="Bay Area"/>
                </div>
              </div>
              <div className=" md:col-span-1  mb-5 col-span-3">
                <div className="Denver lg:border-r-2 border-b-2 lg:border-b-0 border-r-0 pr-4	pb-11	pt-12	lg:pb-0 md:pb-0 lg:pt-0 md:pt-0">
                  <h1 className="font-semibold text-2xl pb-10	text-center">Denver</h1>
                  <Image src={Denver} style={{ width: "100%", height: "100%", margin: "0px auto" }} alt="Denver"/>
                </div>
              </div>
              <div className=" md:col-span-1 mb-5 col-span-3">
                <div className="Denver border-0 pr-4	pb-11	pt-12	lg:pb-0 md:pb-0 lg:pt-0 md:pt-0">
                  <h1 className="font-semibold text-2xl pb-10	text-center">New York City</h1>
                  <Image src={NewCity} style={{ width: "100%", height: "100%", margin: "0px auto" }} alt="New York City"/>
                </div>
              </div>
            </div>
           </div>
           <div className="text-center">
            <Link href="#" className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full text-white bg-black border-black  my-5  learnmore">
              See open roles
            </Link>
           </div>
        </div>
      </section>
    </>
  );
}
