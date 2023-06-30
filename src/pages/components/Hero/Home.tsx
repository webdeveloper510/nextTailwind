import Lottie from 'react-lottie';
import animationData from '../../../lotties/Hero_Animation.json';

export default function Home_hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <section className="connected header-bg">
        <div className='container mx-auto'>
          <div className="grid grid-cols-2 md:gap-4 text-white">
            <div className="md:order-2 md:col-span-1 mb-5 col-span-2">
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </div>
            <div className="md:order-1 md:col-span-1 mb-5 col-span-2">
              <div className="banner-content lg:py-20 lg:pr-16 lg:pl-8	py-12 px-9	">
                <h1 className='animate-text md:text-5xl lg:text-7xl text-4xl	font-semibold'>Get to know Connected Checkout.</h1>
                <p className=' text-lg	hidden lg:block pt-3'>Skipify streamlines the entire checkout process by <br />  instantly connecting shoppers with their payment <br /> options, rewards, and points. That means fewer <br /> abandoned carts and a better experience for everyone.</p>
                <p className=' text-base block pt-3 lg:hidden'>Skipify streamlines the entire checkout process by instantly connecting shoppers with their payment options, rewards, and points. That means fewer <br /> abandoned carts and a better experience for everyone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
