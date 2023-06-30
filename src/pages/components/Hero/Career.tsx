import Image from "next/image";
import Link from "next/link";
import hero from "../../../../public/employee.png"

export default function Career_Hero() {
  return (
    <>
      <section className="better shopper-banner header-bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:gap-4 text-white">
            <div className="md:order-2 md:col-span-1 col-span-2">
              <Image
                src={hero}
                className="normalimg"
                loading="eager"
                priority={true}
                style={{ width: "100%", height: "100%", margin: "0px auto" }}
                alt="Marchant Hero"
              />
            </div>
            <div className="md:order-1 md:col-span-1 col-span-2">
              <div className="banner-content lg:pt-0 lg:px-5 py-8 px-5">
                <div className="shopper-content">
                  <h1 className="animate-text  lg:text-8xl text-5xl font-semibold pb-5 ">
                    You&apos;re brilliant. We&apos;re hiring.
                  </h1>
                  <p className="desktop text-lg	">
                    Be a part of the team that is helping millions of merchants, shoppers and financial institutions across the world create the future of checkout.
                  </p>
                  <p className="mobile">
                    Be a part of the team that is helping millions of merchants, shoppers and financial institutions across the world create the future of checkout.
                  </p>
                  <div>
                    <Link
                      href="#"
                      className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full text-white border-white  mt-8 partnerwithus"
                    >
                      See open roles
                    </Link>
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
