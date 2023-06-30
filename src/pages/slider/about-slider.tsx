import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Founder from "../../../public/Ryth Martin.png";
import Founder2 from "../../../public/Jeremy Anderson.png";
import Cpo from "../../../public/Steve Almeida.png";
import Svp from "../../../public/Ashleigh_DePopas.png";
import Link1 from "../../../public/LinkedIn.png"
import Link from "next/link";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 375,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="aboutslider">
              <Image
                src={Founder}
                style={{ width: "310px", height: "260px", margin: "auto" }}
                alt="CEO & Founder"
              />
              <div className="Martin text-white">
                <h1 className=" text-4xl	font-semibold">
                  Ryth <br /> Martin
                </h1>
                <div className="tittle-border"></div>
                <p className="text-base pb-5">CEO & Founder</p>
                <Link href="" >
                  <Image src={Link1} style={{height: '20px', width: '20px'}} alt="Linkedln"/>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="aboutslider">
              <Image
                src={Founder2}
                style={{ width: "310px", height: "260px", margin: "auto" }}
                alt="Product Image"
              />
              <div className="Martin text-white">
                <h1 className=" text-4xl	font-semibold ">
                  Jeremy <br /> Anderson
                </h1>
                <div className="tittle-border"></div>
                <p className="text-base pb-5">CEO & Founder</p>
                <Link href="" >
                  <Image src={Link1} style={{height: '20px', width: '20px'}} alt="Linkedln"/>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="aboutslider">
              <Image
                src={Cpo}
                style={{ width: "310px", height: "260px", margin: "auto" }}
                alt="CPO"
              />
              <div className="Martin text-white">
                <h1 className=" text-4xl	font-semibold ">
                  Steve <br /> Almeida
                </h1>
                <div className="tittle-border"></div>
                <p className="text-base pb-5">CPO</p>
                <Link href="" >
                  <Image src={Link1} style={{height: '20px', width: '20px'}} alt="Linkedln"/>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="aboutslider">
              <Image
                src={Svp}
                style={{ width: "310px", height: "260px", margin: "auto" }}
                alt="SVP, Strategy"
              />
              <div className="Martin text-white">
                <h1 className=" text-4xl	font-semibold ">
                  Ashleigh <br /> DePopas
                </h1>
                <div className="tittle-border"></div>
                <p className="text-base pb-5">SVP, Strategy</p>
                <Link href="" >
                  <Image src={Link1} style={{height: '20px', width: '20px'}} alt="Linkedln"/>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="aboutslider">
              <Image
                src={Founder}
                style={{ width: "310px", height: "260px", margin: "auto" }}
                alt="CEO & Founder"
              />
              <div className="Martin text-white">
                <h1 className=" text-4xl	font-semibold ">
                  Ryth <br /> Martin
                </h1>
                <div className="tittle-border"></div>
                <p className="text-base pb-5">CEO & Founder</p>
                <Link href="" >
                  <Image src={Link1} style={{height: '20px', width: '20px'}} alt="Linkedln"/>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
