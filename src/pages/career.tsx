import Link from "next/link";
import CareerS from "./slider/career-slider"
import Career1 from "./slider/career1-slider"
import Career_Hero from "./components/Hero/Career";
import Career_row from "./components/Row/Career_row";

export default function Home() {
  return (
    <>
      <Career_Hero/>

      <section className="finally sho md:my-8 mx-auto">
        <div className="container mx-auto">
          <div className="text-center py-7">
            <h1 className="lg:block md:block hidden lg:text-6xl text-4xl	 font-semibold">
              What Skippers value <br/> in each other
            </h1>
            <h1 className=" block lg:hidden md:hidden lg:text-6xl text-4xl	 font-semibold">
              What Skippers value in each other
            </h1>
          </div>
        </div>
      </section>
      
      <Career_row/>

      <section className="company">
        <div className="container mx-auto">
          <div className="culture">
            <h1 className="lg:text-6xl text-4xl	 font-semibold	">Company Culture</h1>
            <p className="lg:text-lg md:text-lg text-base font-normal">We&apos;re proud of the strong and positive team culture at Skipify — and we&apos;re always looking for ways to make it even better. Let&apos;s hear from the team about what it&apos;s like to work here.</p>
          </div>
          <CareerS/>
        </div>
      </section>

      <section className="career1">
        <div className="container mx-auto">
          <Career1/>
        </div>
      </section>
      
      <section className="letwork">
        <div className="container mx-auto">
          <div className="together lg:p-12	lg:m-12 m-8 text-center md:text-left lg:text-left md:p-8 p-5">
            <h1 className="text-4xl	lg:text-6xl	 font-semibold">Join us</h1>
            <div>
                <Link href="#" className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full text-white bg-black border-black  mt-5  learnmore">
                  See open roles
                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
