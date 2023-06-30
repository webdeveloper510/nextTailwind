import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import password from '../../../public/Passcode.png'
import card from '../../../public/card1.png'
import point from '../../../public/Points.png'
import oldfriend from '../../../public/oldfriend.png'

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
              <Image src={oldfriend} style={{ width: '300px', height: '360px', marginLeft: "auto" }} alt="Product Image" />
            </div>
            <div className='md:col-span-1 mb-5 col-span-2'>
              <div className='hellofriend1 text-center md:text-left text-white'>
                <h1 className="hidden lg:block md:block font-semibold ">Hello, old friend.</h1>
                <h1 className="block md:hidden lg:hidden font-semibold">Hello, <br/> old friend.</h1>
                <p className="hidden lg:block md:block">Shoppers begin their <br/> streamlined checkout by <br/> entering just their email.</p>
                <p className="block md:hidden lg:hidden">Automatically recognize new and<br/> returning shoppers by their email <br/> address alone.</p>
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className='grid grid-cols-2 md:gap-4 mt-8'>
            <div className='md:col-span-1 mb-5 pt-5 col-span-2'>
              <Image src={password} style={{ width: '300px', height: '360px', marginLeft: "auto" }} alt="Product Image" />
            </div>
            <div className='md:col-span-1 mb-5 col-span-2'>
              <div className='hellofriend1 text-center md:text-left  text-white'>
                <h1 className="hidden lg:block font-semibold">Make p@$<br/>$w0rds a thing <br/> of the past.</h1>
                <h1 className="block lg:hidden md:block font-semibold">Make p@$$w0rds <br/> a thing of the past.</h1>
                <p className="hidden lg:block md:block">Shoppers enter the secret <br/> passcode that was sent <br/> via text to authenticate <br/> their identity.</p>
                <p className="block md:hidden lg:hidden text-base">Shoppers enter the secret <br/> passcode that was sent via text <br/> to authenticate their identity.</p>
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className='grid grid-cols-2 md:gap-4 mt-8'>
            <div className='md:col-span-1 mb-5 pt-5 col-span-2'>
              <Image src={card} style={{ width: '300px', height: '360px', marginLeft: "auto" }} alt="Product Image" />
            </div>
            <div className='md:col-span-1 mb-5 col-span-2'>
              <div className='hellofriend1 text-center md:text-left text-white'>
                <h1 className="font-semibold">Pick a card,<br/> any card.</h1>
                <p className="text-base">With Card Linking, shoppers <br/> immediately see all of their <br/> available credit or debit card <br/> options without having to <br/> enter additional information.</p>
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className='grid grid-cols-2 md:gap-4 mt-8'>
            <div className='md:col-span-1 mb-5 pt-5 col-span-2'>
              <Image src={point} style={{ width: '300px', height: '360px', marginLeft: "auto" }} alt="Product Image" />
            </div>
            <div className='md:col-span-1 mb-5 col-span-2'>
              <div className='hellofriend1 text-center md:text-left text-white'>
                <h1 className="font-semibold">Hooray <br/> for points!</h1>
                <p className="text-base">Shoppers can easily apply <br/> points, rewards, and <br/> discounts to their purchase <br/> — all without leaving the <br/> checkout screen.</p>
              </div>
            </div>
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}