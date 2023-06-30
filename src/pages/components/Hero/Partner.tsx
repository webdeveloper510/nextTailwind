import Link from "next/link";

export default function Partner_Hero() {
  return (
    <>
      <section className="better header-bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:gap-4 text-white">
            <div className="mb-5 col-span-2">
              <div className="financial">
                <div className="partners-content text-center">
                  <h1 className="animate-text text-3xl lg:text-6xl font-semibold md:text-4xl ">
                    The largest platforms and financial institutions in the industry — all within one network.
                  </h1>
                  <div>
                    <Link
                      href="#"
                      className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full text-white border-white  mt-8 partnerwithus"
                    >
                      Partner with us
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
