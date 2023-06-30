import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import Memail from '../../../public/Email.png'
import Mcard from '../../../public/card.png'
import Mpoint from '../../../public/Point.png'
import Mpassword from '../../../public/Passcode1.png'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <div className='grid grid-cols-2 md:gap-4 mt-8'>
            <div className='md:col-span-1 mb-5 pt-5 col-span-2'>
              <Image src={Memail} style={{ width: '265px', height: '552px', margin: "auto" }} className="msliderimg" alt="Product Image" />
            </div>
            <div className='md:col-span-1 mb-5 col-span-2'>
              <div className='skipify text-white'>
                <h1 className="hidden lg:block md:hidden font-semibold text-2xl">Shoppers begin their streamlined <br/> checkout by entering just their email.</h1>
                <h1 className="hidden md:block lg:hidden font-semibold text-2xl">Shoppers begin their <br/> streamlined  checkout by <br/> entering just their email.</h1>
                <h1 className="block lg:hidden md:hidden text-center font-semibold text-2xl">Shoppers begin their streamlined <br/> checkout by entering just their email.</h1>
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className='grid grid-cols-2 md:gap-4 mt-8'>
            <div className='md:col-span-1 mb-5 pt-5 col-span-2'>
              <Image src={Mpassword} style={{ width: '265px', height: '552px', margin: "auto" }} className="msliderimg" alt="Product Image" />
            </div>
            <div className='md:col-span-1 mb-5 col-span-2'>
              <div className='skipify text-white'>
                <h1 className="hidden lg:block md:hidden font-semibold text-2xl">Shoppers enter the secret passcode <br/> that was sent via text to authenticate <br/> their identity.</h1>
                <h1 className="hidden md:block lg:hidden font-semibold text-2xl">Shoppers enter the secret passcode <br/> that was sent via text to authenticate <br/> their identity.</h1>
                <h1 className="block lg:hidden md:hidden text-center font-semibold text-2xl">Shoppers enter the <br/> secret passcode that <br/> was sent via text to <br/>authenticate their <br/> identity.</h1>
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className='grid grid-cols-2 md:gap-4 mt-8'>
            <div className='md:col-span-1 mb-5 pt-5 col-span-2'>
              <Image src={Mcard} style={{ width: '265px', height: '552px', margin: "auto" }} className="msliderimg" alt="Product Image" />
            </div>
            <div className='md:col-span-1 mb-5 col-span-2'>
              <div className='skipify text-white'>
                <h1 className="hidden lg:block md:hidden font-semibold text-2xl">With Card Linking, shoppers <br/> immediately see all of their available <br/> credit or debit card options without <br/> having to enter additional information.</h1>
                <h1 className="hidden md:block lg:hidden font-semibold text-2xl">With Card Linking, shoppers <br/> immediately see all of their available <br/> credit or debit card options without <br/> having to enter additional information.</h1>
                <h1 className="block lg:hidden md:hidden text-center font-semibold text-2xl">With Card Linking,<br/> shoppers  immediately<br/> see all of their available <br/> credit or debit card<br/> options without having <br/> to enter additional <br/> information.</h1>
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className='grid grid-cols-2 md:gap-4 mt-8'>
            <div className='md:col-span-1 mb-5 pt-5 col-span-2'>
              <Image src={Mpoint} style={{ width: '265px', height: '552px', margin: "auto" }} className="msliderimg" alt="Product Image" />
            </div>
            <div className='md:col-span-1 mb-5 col-span-2'>
              <div className='skipify text-white'>
                <h1 className="hidden lg:block md:hidden font-semibold text-2xl">Shoppers can easily apply points, <br/> rewards, and discounts to their <br/> purchase — all without leaving the <br/> checkout screen.</h1>
                <h1 className="hidden md:block lg:hidden font-semibold text-2xl">Shoppers can easily apply points, <br/> rewards, and discounts to their <br/> purchase — all without leaving the <br/> checkout screen.</h1>
                <h1 className="block lg:hidden md:hidden text-center font-semibold text-2xl">Shoppers can easily <br/> apply points, rewards,<br/> and discounts to their <br/> purchase — all without<br/> leaving the checkout <br/> screen.</h1>
              </div>
            </div>
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}