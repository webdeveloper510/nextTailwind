import Image from 'next/image'
import network from '../../public/Homepage-Network.png'
import Slider from './slider/slider'
import Oldfriend from './slider/oldfriend';
import Home_hero from './components/Hero/Home'
import Feature from './components/Feature/Home-feature'

export default function Home() {
  return (
    <>
       <Home_hero/>

      <section className="partner border-b-2 pb-3">
        <div className='container mx-auto'>
          <div className="grid grid-cols-2 md:gap-4">
            <div className=" md:col-span-1 mb-5 col-span-2 p-3">
              <Image src={network} style={{ width: '100%', height: 'auto' }} alt="network Image" />
            </div>
            <div className=" md:col-span-1 mb-5 col-span-2">
              <div className="partner-content md:mt-4">
                <p className='text-lg md:text-base'>Skipify partners with the largest financial institutions, all into  one embedded wallet. Now, shoppers can instantly and securely check out without filling in passwords or forms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="partner border-0">
        <div className='container mx-auto'>
          <div className="grid grid-cols-2 md:gap-4">
            <div className=" md:col-span-1 mb-5 col-span-2">
              <div className='start'>
                <h1 className='animate-text'>1 in 3</h1>
              </div>
            </div>
            <div className=" md:col-span-1 mb-5 col-span-2">
              <div className="partner-content md:mt-4">
                <p className='text-lg md:text-base'>With Skipify Card Linking enabled, the <b> Skipify network is accessible by 1 in 3 people in the U.S. </b> making Skipify one of the fastest growing payment platforms in the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='tapit header-bg py-8'>
        <div className='container mx-auto'>
          <div className='text-center title-tapit text-white'>
            <h1 className='hidden lg:block lg:text-6xl text-4xl	 font-semibold'>Tap it. Link it. Love it.</h1>
            <h1 className='block lg:hidden lg:text-6xl text-4xl font-semibold'>Tap it.<br/> Link it. Love it.</h1>
          </div>
          <div className='oldfriend lg:block md:hidden hidden'>
            <Oldfriend/>
          </div>
          <div className='lg:hidden md:block block text-center p-8'>
            <Slider/>
          </div>
        </div>
      </section>

      <Feature/>
    </>
  )
}
