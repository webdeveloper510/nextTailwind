import Image from 'next/image'
import merchant from '../../../../public/Merchants.png'
import partner from '../../../../public/Partners.png'
import partnergif from '../../../../public/Partners.gif'
import shoppergif from '../../../../public/Shoppers.gif'
import shopper from '../../../../public/Shoppers.png'
import merchantgif from '../../../../public/Merchants.gif'
import Link from 'next/link'

export default function HomeFeature() {
  return (
    <>
      <section className='finally my-8 px-3'>
        <div className='container mx-auto'>
          <div className='text-center py-4'>
            <h1 className='lg:block md:block hidden font-semibold text-7xl md:text-4xl'>Finally, a checkout <br /> experience thriving on <br /> win-win-win solutions.</h1>
            <h1 className='lg:hidden md:hidden block  text-3xl font-semibold'>Finally, a checkout experience thriving on win-win-win solutions.</h1>
          </div>
          <div className="grid grid-cols-3 md:gap-4 mt-8">
            <div className=" lg:col-span-1 mb-5 col-span-3">
              <div className=' lg:border-r-2 lg:border-b-0 text-center pb-5 md:border-b-2 border-b-2 lg:block md:flex'>
                <div className='partner  md:w-2/4 lg:w-full'>
                  <Image src={merchant} className="normalimg" style={{ width: '220px', height: '220px', margin: '0px auto' }} alt="Marchant Image" />
                  <Image src={merchantgif} className="gif" style={{ display: 'none', width: '220px', height: '220px', margin: '0px auto' }} alt="Marchant Image" />
                </div>
                <div className='md:w-2/4 md:text-left md:mt-5 lg:w-full lg:text-center'>
                  <h3 className='lg:text-4xl md:text-3xl text-4xl font-semibold mb-4'>Merchants</h3>
                  <p className='text-base'>Offer a world-class express checkout <br /> experience while preserving your <br /> customer data and relationship.</p>
                  <div>
                    <Link href="#" className=" mb-4 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black  mt-4 learnmore">Learn more {'>'} </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" lg:col-span-1  mb-5 col-span-3">
              <div className=' lg:border-r-2 lg:border-b-0 lg:block text-center md:border-b-2 pb-5 border-b-2 md:flex'>
                <div className='partner md:w-2/4 lg:w-full'>
                  <Image src={partner} className="normalimg" style={{ width: '220px', height: '220px', margin: '0px auto' }} alt="Marchant Image" />
                  <Image src={partnergif} className="gif" style={{ display: 'none', width: '220px', height: '220px', margin: '0px auto' }} alt="Marchant Image" />
                </div>
                <div className='md:w-2/4 md:text-left md:mt-5 lg:w-full lg:text-center'>
                  <h3 className='lg:text-4xl md:text-3xl text-4xl font-semibold mb-4'>Partners</h3>
                  <p className='text-base'>Shoppers get immediate access to <br /> payment options, perks, points,<br /> and rewards.</p>
                  <div>
                    <Link href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black  my-4  learnmore">Learn more {'>'} </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" lg:col-span-1 mb-5 col-span-3">
              <div className=' lg:border-r-0 text-center lg:block border-b-0 md:flex'>
                <div className=' partner md:w-2/4 lg:w-full'>
                  <Image src={shopper} className="normalimg" style={{ width: '220px', height: '220px', margin: '0px auto' }} alt="Marchant Image" />
                  <Image src={shoppergif} className="gif" style={{ display: 'none', width: '220px', height: '220px', margin: '0px auto' }} alt="Marchant Image" />
                </div>
                <div className='md:w-2/4 lg:w-full lg:text-center md:text-left md:mt-5'>
                  <h3 className='lg:text-4xl md:text-3xl text-4xl font-semibold mb-4'>Shoppers</h3>
                  <p className='text-base'>No more endless typing — a faster, <br /> simpler, and more enjoyable <br /> checkout experience.</p>
                  <div>
                    <Link href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black  my-4  learnmore">Learn more {'>'} </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
